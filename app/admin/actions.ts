"use server"

import { revalidateTag, revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { db } from "@/lib/db"
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth"
import { getResourceMeta, type Field } from "@/lib/admin/fields"
import { RESOURCE_TABLES, RESOURCE_TAGS } from "@/lib/admin/resources"

async function assertAuthed() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value
  if (!(await verifySessionToken(token))) {
    throw new Error("Unauthorized")
  }
}

function coerce(field: Field, value: unknown): unknown {
  switch (field.type) {
    case "number": {
      const n = Number(value)
      return Number.isFinite(n) ? n : 0
    }
    case "boolean":
      return Boolean(value)
    case "tags":
      return Array.isArray(value) ? value.filter((t) => String(t).trim() !== "") : []
    case "json": {
      if (typeof value !== "string") return value ?? []
      try {
        return JSON.parse(value)
      } catch {
        throw new Error(`"${field.label}" is not valid JSON.`)
      }
    }
    default:
      return value == null ? "" : String(value)
  }
}

export type SaveState = { ok: boolean; error?: string; savedAt?: number }

export async function saveResource(
  key: string,
  rows: Record<string, unknown>[],
): Promise<SaveState> {
  try {
    await assertAuthed()

    const meta = getResourceMeta(key)
    const table = RESOURCE_TABLES[key]
    const tag = RESOURCE_TAGS[key]
    if (!meta || !table || !tag) {
      return { ok: false, error: "Unknown content type." }
    }

    const values = rows.map((row, i) => {
      const v: Record<string, unknown> = { sortOrder: i }
      for (const f of meta.fields) v[f.name] = coerce(f, row[f.name])
      return v
    })

    // Idempotent replace — mirrors the seed strategy. No cross-table FKs.
    await db.delete(table)
    if (values.length) {
      await db.insert(table).values(values as never)
    }

    // Expire immediately so the admin sees their own writes on the next view.
    revalidateTag(tag, { expire: 0 })
    // Content is consumed across many routes; refresh the whole tree.
    revalidatePath("/", "layout")

    return { ok: true, savedAt: Date.now() }
  } catch (err) {
    const error = err instanceof Error ? err.message : "Failed to save."
    return { ok: false, error }
  }
}
