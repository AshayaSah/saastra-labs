import type { PageSectionRow } from "@/lib/db/queries"

export function CompanyHero({
  title,
  intro,
}: {
  /** Watermark display word (About / Team / Careers). */
  title: string
  intro?: PageSectionRow
}) {
  return (
    <div className="sl-container sl-page-top">
      <div className="sl-display">
        <span className="sl-display-title">{title}</span>
      </div>

      {intro && (
        <div className="sl-reveal mt-[14px] max-w-[780px]">
          {intro.eyebrow && (
            <span className="sl-mono-label">{intro.eyebrow}</span>
          )}
          {intro.heading && (
            <h1 className="mt-3.5 mb-5 text-h1 text-sl-text">{intro.heading}</h1>
          )}
          {intro.body && (
            <p className="max-w-[640px] text-body text-sl-muted">{intro.body}</p>
          )}
        </div>
      )}
    </div>
  )
}
