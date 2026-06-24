"use client"

import { useState, useTransition } from "react"
import type { Field, ResourceMeta } from "@/lib/admin/fields"
import { emptyRow } from "@/lib/admin/fields"
import { saveResource, type SaveState } from "@/app/admin/actions"

type Row = Record<string, unknown>

export function ResourceEditor({
  meta,
  initialRows,
}: {
  meta: ResourceMeta
  initialRows: Row[]
}) {
  const [rows, setRows] = useState<Row[]>(initialRows)
  const [pending, startTransition] = useTransition()
  const [state, setState] = useState<SaveState>({ ok: true })
  const [dirty, setDirty] = useState(false)

  function update(index: number, name: string, value: unknown) {
    setRows((prev) => prev.map((r, i) => (i === index ? { ...r, [name]: value } : r)))
    setDirty(true)
  }

  function addRow() {
    setRows((prev) => [...prev, emptyRow(meta)])
    setDirty(true)
  }

  function removeRow(index: number) {
    setRows((prev) => prev.filter((_, i) => i !== index))
    setDirty(true)
  }

  function move(index: number, dir: -1 | 1) {
    const target = index + dir
    if (target < 0 || target >= rows.length) return
    setRows((prev) => {
      const next = [...prev]
      ;[next[index], next[target]] = [next[target], next[index]]
      return next
    })
    setDirty(true)
  }

  function save() {
    startTransition(async () => {
      const result = await saveResource(meta.key, rows)
      setState(result)
      if (result.ok) setDirty(false)
    })
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="m-0 text-[22px] font-semibold tracking-[-0.01em] text-sl-text">
            {meta.label}
          </h1>
          <p className="mt-1 mb-0 text-[13.5px] text-sl-muted">{meta.description}</p>
        </div>
        <div className="flex items-center gap-3">
          {state.error && (
            <span className="text-[13px] text-red-600">{state.error}</span>
          )}
          {!state.error && state.savedAt && !dirty && (
            <span className="text-[13px] text-green-700">Saved</span>
          )}
          {dirty && !pending && (
            <span className="text-[13px] text-sl-subtle">Unsaved changes</span>
          )}
          <button
            type="button"
            onClick={save}
            disabled={pending}
            className="h-10 rounded-control bg-sl-text px-5 text-[13.5px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {pending ? "Saving…" : "Save changes"}
          </button>
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-4">
        {rows.length === 0 && (
          <p className="rounded-card border border-dashed border-sl-border bg-sl-surface px-5 py-8 text-center text-[13.5px] text-sl-muted">
            No {meta.label.toLowerCase()} yet. Add the first {meta.singular}.
          </p>
        )}

        {rows.map((row, i) => (
          <div
            key={i}
            className="rounded-card border border-sl-border bg-white p-5 shadow-card"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="text-[12px] font-medium tracking-wide text-sl-subtle uppercase">
                {String(row[meta.titleField] || `${meta.singular} ${i + 1}`)}
              </span>
              <div className="flex items-center gap-1.5">
                <IconBtn label="Move up" onClick={() => move(i, -1)} disabled={i === 0}>
                  ↑
                </IconBtn>
                <IconBtn
                  label="Move down"
                  onClick={() => move(i, 1)}
                  disabled={i === rows.length - 1}
                >
                  ↓
                </IconBtn>
                <IconBtn label="Delete" onClick={() => removeRow(i)} danger>
                  ✕
                </IconBtn>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {meta.fields.map((f) => (
                <FieldInput
                  key={f.name}
                  field={f}
                  value={row[f.name]}
                  onChange={(v) => update(i, f.name, v)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <button
          type="button"
          onClick={addRow}
          className="h-10 rounded-control border border-sl-border bg-sl-surface px-5 text-[13.5px] font-medium text-sl-body transition-colors hover:border-sl-text"
        >
          + Add {meta.singular}
        </button>
      </div>
    </div>
  )
}

function IconBtn({
  children,
  onClick,
  label,
  disabled,
  danger,
}: {
  children: React.ReactNode
  onClick: () => void
  label: string
  disabled?: boolean
  danger?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={`flex h-7 w-7 items-center justify-center rounded-control border border-sl-border text-[13px] transition-colors disabled:opacity-30 ${
        danger
          ? "text-red-600 hover:border-red-300 hover:bg-red-50"
          : "text-sl-muted hover:border-sl-text"
      }`}
    >
      {children}
    </button>
  )
}

const labelCls = "mb-1.5 block text-[12px] font-medium text-sl-body"
const inputCls =
  "h-10 w-full rounded-control border border-sl-border bg-white px-3 text-[13.5px] text-sl-text outline-none transition-colors focus:border-sl-text"

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: Field
  value: unknown
  onChange: (v: unknown) => void
}) {
  const full = field.full || field.type === "textarea" || field.type === "json"
  const wrap = full ? "col-span-2" : ""

  if (field.type === "boolean") {
    return (
      <label className={`${wrap} flex items-center gap-2.5`}>
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 accent-sl-text"
        />
        <span className="text-[13px] font-medium text-sl-body">{field.label}</span>
      </label>
    )
  }

  return (
    <div className={wrap}>
      <label className={labelCls}>{field.label}</label>
      {field.type === "textarea" || field.type === "json" ? (
        <textarea
          value={String(value ?? "")}
          onChange={(e) => onChange(e.target.value)}
          rows={field.type === "json" ? 7 : 3}
          spellCheck={field.type !== "json"}
          className={`${inputCls} h-auto resize-y py-2.5 ${
            field.type === "json" ? "font-mono text-[12px] leading-[1.5]" : ""
          }`}
        />
      ) : field.type === "select" ? (
        <select
          value={String(value ?? "")}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls}
        >
          {field.options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : field.type === "tags" ? (
        <input
          type="text"
          value={(Array.isArray(value) ? value : []).join(", ")}
          onChange={(e) =>
            onChange(
              e.target.value
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean),
            )
          }
          placeholder="Comma-separated"
          className={inputCls}
        />
      ) : field.type === "number" ? (
        <input
          type="number"
          value={value === "" || value == null ? "" : Number(value)}
          onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
          className={inputCls}
        />
      ) : (
        <input
          type="text"
          value={String(value ?? "")}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className={inputCls}
        />
      )}
    </div>
  )
}
