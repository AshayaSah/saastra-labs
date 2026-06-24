import Link from "next/link"
import { sql } from "drizzle-orm"
import { db } from "@/lib/db"
import { RESOURCES } from "@/lib/admin/fields"
import { RESOURCE_TABLES } from "@/lib/admin/resources"

export const dynamic = "force-dynamic"

async function countRows(key: string): Promise<number> {
  const table = RESOURCE_TABLES[key]
  if (!table) return 0
  const [row] = await db.select({ c: sql<number>`count(*)::int` }).from(table)
  return row?.c ?? 0
}

export default async function AdminDashboard() {
  const counts = await Promise.all(
    RESOURCES.map(async (r) => [r.key, await countRows(r.key)] as const),
  )
  const countMap = new Map(counts)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="m-0 text-[22px] font-semibold tracking-[-0.01em] text-sl-text">
          Content
        </h1>
        <p className="mt-1 mb-0 text-[13.5px] text-sl-muted">
          Edit the data behind every page. Changes go live as soon as you save.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {RESOURCES.map((r) => (
          <Link
            key={r.key}
            href={`/admin/${r.key}`}
            className="rounded-card border border-sl-border bg-white p-5 shadow-card transition-colors hover:border-sl-text"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[15px] font-semibold text-sl-text">{r.label}</span>
              <span className="text-[13px] tabular-nums text-sl-subtle">
                {countMap.get(r.key) ?? 0}
              </span>
            </div>
            <p className="mt-1.5 mb-0 text-[12.5px] leading-[1.5] text-sl-muted">
              {r.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
