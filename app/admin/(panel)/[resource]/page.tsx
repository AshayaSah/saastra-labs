import { notFound } from "next/navigation"
import { asc } from "drizzle-orm"
import { db } from "@/lib/db"
import { getResourceMeta, toEditableRow } from "@/lib/admin/fields"
import { RESOURCE_TABLES } from "@/lib/admin/resources"
import { ResourceEditor } from "@/components/admin/resource-editor"

export const dynamic = "force-dynamic"

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ resource: string }>
}) {
  const { resource } = await params
  const meta = getResourceMeta(resource)
  const table = RESOURCE_TABLES[resource]
  if (!meta || !table) notFound()

  // `sortOrder` exists on every content table; the registry is loosely typed.
  const sortOrder = (table as unknown as { sortOrder: Parameters<typeof asc>[0] })
    .sortOrder
  const rows = (await db
    .select()
    .from(table)
    .orderBy(asc(sortOrder))) as Record<string, unknown>[]

  const initialRows = rows.map((r) => toEditableRow(meta, r))

  return <ResourceEditor meta={meta} initialRows={initialRows} />
}
