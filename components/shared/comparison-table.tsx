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
        <div className="min-w-[600px] bg-white border border-sl-border rounded-[20px] overflow-hidden">
          {/* Header */}
          <div
            className="grid bg-[#f6f5f2] border-b border-[#ececea] text-[12.5px] font-semibold text-[#5a574f]"
            style={{ gridTemplateColumns: "1fr 1.2fr 1.2fr" }}
          >
            <div className="px-[22px] py-[15px]" />
            <div className="px-[18px] py-[15px] flex items-center gap-2 text-sl-text">
              <span className="w-[18px] h-[18px] rounded-[6px] bg-sl-text text-white inline-flex items-center justify-center text-[11px]">
                S
              </span>
              Saastra Labs
            </div>
            <div className="px-[18px] py-[15px]">Traditional providers</div>
          </div>

          {/* Rows */}
          {COMP_ROWS.map((row, i) => (
            <div
              key={i}
              className="grid border-b border-[#f0efec] text-[13px]"
              style={{ gridTemplateColumns: "1fr 1.2fr 1.2fr" }}
            >
              <div className="px-[22px] py-[14px] text-sl-muted flex items-center">{row.label}</div>
              <div className="px-[18px] py-[14px] flex items-center gap-[9px] text-[#1a1a1a]">
                <span className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-sl-green-light text-sl-green inline-flex items-center justify-center text-[11px]">
                  ✓
                </span>
                {row.saastra}
              </div>
              <div className="px-[18px] py-[14px] flex items-center gap-[9px] text-[#9a978f]">
                <span className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-[#f1efeb] text-[#b3b0a7] inline-flex items-center justify-center text-[11px]">
                  ✕
                </span>
                {row.traditional}
              </div>
            </div>
          ))}

          {/* CTA row */}
          <div className="grid" style={{ gridTemplateColumns: "1fr 1.2fr 1.2fr" }}>
            <div />
            <div className="px-[18px] py-4">
              <a href="#" className="sl-btn">Book a free call</a>
            </div>
            <div className="px-[18px] py-4">
              <span className="inline-block bg-[#f1efeb] text-[#9a978f] text-[13px] font-medium px-4 py-[9px] rounded-[9px]">
                Slow to respond
              </span>
            </div>
          </div>
        </div>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 gap-[14px] mt-[14px] sm:grid-cols-3">
          {BENEFIT_CARDS.map((card, i) => (
            <div
              key={i}
              className={`sl-reveal sl-d${i + 1} sl-card p-5`}
            >
              <div className="w-[34px] h-[34px] rounded-[9px] bg-sl-surface-2 flex items-center justify-center text-[15px] mb-3">
                {card.icon}
              </div>
              <h3 className="m-0 mb-[6px] text-[15px] font-semibold">{card.title}</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
