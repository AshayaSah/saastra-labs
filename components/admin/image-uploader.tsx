"use client"

import { useRef, useState } from "react"
import { signUpload } from "@/app/admin/actions"

export function ImageUploader({
  value,
  onChange,
}: {
  value: string
  onChange: (url: string) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleFile(file: File) {
    setError(null)
    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file.")
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("Image is larger than 10 MB.")
      return
    }

    setUploading(true)
    try {
      const sig = await signUpload()
      if (!sig.ok) throw new Error(sig.error)

      const form = new FormData()
      form.append("file", file)
      form.append("api_key", sig.apiKey)
      form.append("timestamp", String(sig.timestamp))
      form.append("signature", sig.signature)
      form.append("folder", sig.folder)

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${sig.cloudName}/image/upload`,
        { method: "POST", body: form },
      )
      const data = await res.json()
      if (!res.ok || !data.secure_url) {
        throw new Error(data?.error?.message ?? "Upload failed. Try again.")
      }
      onChange(data.secure_url as string)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed. Try again.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col gap-2.5">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0]
          if (f) handleFile(f)
          e.target.value = ""
        }}
      />

      {value ? (
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt="Selected"
            className="h-16 w-24 flex-shrink-0 rounded-control border border-sl-border object-cover"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              className="sl-focus-ring h-9 rounded-control border border-sl-border bg-sl-surface px-3.5 text-[13px] font-medium text-sl-body transition-colors hover:border-sl-text disabled:opacity-60"
            >
              {uploading ? "Uploading…" : "Replace"}
            </button>
            <button
              type="button"
              onClick={() => onChange("")}
              disabled={uploading}
              className="sl-focus-ring h-9 rounded-control border border-sl-border px-3.5 text-[13px] font-medium text-sl-danger transition-colors hover:border-sl-danger-border hover:bg-sl-danger-light disabled:opacity-60"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="sl-focus-ring flex h-24 w-full flex-col items-center justify-center gap-1 rounded-control border border-dashed border-sl-border bg-sl-surface text-[13px] text-sl-muted transition-colors hover:border-sl-text disabled:opacity-60"
        >
          {uploading ? (
            <span>Uploading…</span>
          ) : (
            <>
              <span className="text-sl-body">Upload image</span>
              <span className="text-[12px] text-sl-subtle">PNG, JPG or WebP · up to 10 MB</span>
            </>
          )}
        </button>
      )}

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="…or paste an image URL"
        className="sl-focus-ring h-10 w-full rounded-control border border-sl-border bg-sl-surface px-3 text-[13.5px] text-sl-text outline-none transition-colors focus:border-sl-text"
      />

      {error && <p className="m-0 text-[12px] text-sl-danger">{error}</p>}
    </div>
  )
}
