import { getComparisonRows, getBenefitCards } from "@/lib/db/queries"

export async function ComparisonTable() {
  const [COMP_ROWS, BENEFIT_CARDS] = await Promise.all([
    getComparisonRows(),
    getBenefitCards(),
  ])

  return (
    <section>
      <div className="sl-container sl-section">
        <h2 className="sl-reveal sl-section-heading">
          Saastra Labs vs traditional service providers
        </h2>

        {/* Table — scrolls horizontally on small screens to keep columns aligned */}
        <div className="-mx-gutter overflow-x-auto px-gutter sm:mx-0 sm:px-0">
        <div className="min-w-[600px] bg-sl-surface border border-sl-border rounded-panel overflow-hidden">
          {/* Header */}
          <div
            className="grid bg-sl-surface-2 border-b border-sl-border text-[12.5px] font-semibold text-sl-muted"
            style={{ gridTemplateColumns: "1fr 1.2fr 1.2fr" }}
          >
            <div className="px-5.5 py-3.5" />
            <div className="px-4.5 py-3.5 flex items-center gap-2 text-sl-text">
              <span className="w-4.5 h-4.5 rounded-badge bg-sl-text text-sl-text-inv inline-flex items-center justify-center text-[11px]">
                S
              </span>
              Saastra Labs
            </div>
            <div className="px-4.5 py-3.5">Traditional providers</div>
          </div>

          {/* Rows */}
          {COMP_ROWS.map((row, i) => (
            <div
              key={i}
              className="grid border-b border-sl-border text-[13px]"
              style={{ gridTemplateColumns: "1fr 1.2fr 1.2fr" }}
            >
              <div className="px-5.5 py-3.5 text-sl-muted flex items-center">{row.label}</div>
              <div className="px-4.5 py-3.5 flex items-center gap-2.5 text-sl-text">
                <span className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-sl-green-light text-sl-green inline-flex items-center justify-center text-[11px]">
                  ✓
                </span>
                {row.saastra}
              </div>
              <div className="px-4.5 py-3.5 flex items-center gap-2.5 text-sl-subtle">
                <span className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-sl-surface-2 text-sl-subtle inline-flex items-center justify-center text-[11px]">
                  ✕
                </span>
                {row.traditional}
              </div>
            </div>
          ))}

          {/* CTA row */}
          <div className="grid" style={{ gridTemplateColumns: "1fr 1.2fr 1.2fr" }}>
            <div />
            <div className="px-4.5 py-4">
              <a href="#" className="sl-focus-ring sl-btn">Book a free call</a>
            </div>
            <div className="px-4.5 py-4">
              <span className="inline-block bg-sl-surface-2 text-sl-subtle text-[13px] font-medium px-4 py-2.5 rounded-control">
                Slow to respond
              </span>
            </div>
          </div>
        </div>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 gap-3.5 mt-3.5 sm:grid-cols-3">
          {BENEFIT_CARDS.map((card, i) => (
            <div
              key={i}
              className={`sl-reveal sl-d${i + 1} sl-card p-5`}
            >
              <div className="w-8.5 h-8.5 rounded-control bg-sl-surface-2 flex items-center justify-center text-[15px] mb-3">
                {card.icon}
              </div>
              <h3 className="m-0 mb-1.5 text-[15px] font-semibold">{card.title}</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
