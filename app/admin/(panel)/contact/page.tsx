import { desc } from "drizzle-orm"
import { db } from "@/lib/db"
import { contactSubmissions } from "@/lib/db/schema"

export const dynamic = "force-dynamic"

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(d)
}

export default async function ContactInboxPage() {
  const rows = await db
    .select()
    .from(contactSubmissions)
    .orderBy(desc(contactSubmissions.createdAt))

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="m-0 text-[22px] font-semibold tracking-[-0.01em] text-sl-text">
          Messages
        </h1>
        <p className="mt-1 mb-0 text-[13.5px] text-sl-muted">
          {rows.length} submission{rows.length === 1 ? "" : "s"} from the contact form.
        </p>
      </div>

      {rows.length === 0 ? (
        <p className="rounded-card border border-dashed border-sl-border bg-sl-surface px-5 py-8 text-center text-[13.5px] text-sl-muted">
          No messages yet.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {rows.map((r) => (
            <div
              key={r.id}
              className="rounded-card border border-sl-border bg-white p-5 shadow-card"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="text-[15px] font-semibold text-sl-text">{r.name}</span>
                <span className="text-[12.5px] text-sl-subtle">
                  {formatDate(r.createdAt)}
                </span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-sl-muted">
                <a
                  href={`mailto:${r.email}`}
                  className="underline underline-offset-2 hover:text-sl-text"
                >
                  {r.email}
                </a>
                {r.company && <span>· {r.company}</span>}
                {r.phone && <span>· {r.phone}</span>}
                {r.topic && (
                  <span className="rounded-pill bg-sl-surface-2 px-2 py-[2px] text-[11px] font-medium text-sl-body">
                    {r.topic}
                  </span>
                )}
              </div>

              <p className="mt-3 mb-0 text-[13.5px] leading-[1.6] whitespace-pre-wrap text-sl-body">
                {r.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
