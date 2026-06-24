import { BentoCard } from "@/components/ui/bento-card"
import { getProducts } from "@/lib/db/queries"

export async function ProductsGrid() {
  const PRODUCTS = await getProducts()

  return (
    <section className="relative sl-container sl-section">
      {/* Watermark heading — shared .sl-display primitive */}
      <div className="sl-display">
        <span className="sl-display-title">Products</span>
      </div>

      {/* Product list */}
      <div className="grid gap-[14px]" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {PRODUCTS.map((p, i) => (
          <BentoCard
            key={p.id}
            dark={p.dark}
            className={`sl-reveal sl-d${(i % 4) + 1} min-h-[300px] p-5 ${p.dark ? "text-white" : ""}`}
          >
            {/* Preview area */}
            <div
              className="relative flex-1 min-h-[180px] rounded-[12px] overflow-hidden mb-[18px]"
              style={{ background: p.preview }}
            >
              <span
                className={`absolute left-[14px] top-[12px] text-[10px] font-semibold px-2 py-[3px] rounded-full ${
                  p.dark
                    ? "bg-white/10 text-[#e6e6e6]"
                    : "bg-black/[0.06] text-[#5a5752]"
                }`}
              >
                {p.badge}
              </span>
              <span
                className={`absolute left-[14px] bottom-[12px] font-mono text-[11px] ${
                  p.dark ? "text-[#7a7a7a]" : "text-[#9a978f]"
                }`}
              >
                {p.previewLabel}
              </span>
            </div>

            {/* Title + description */}
            <div>
              <h3 className="m-0 mb-[6px] text-[16px] font-semibold">{p.name}</h3>
              <p
                className={`m-0 text-[13px] leading-[1.5] ${
                  p.dark ? "text-[#9a9a9a]" : "text-sl-muted"
                }`}
              >
                {p.description}
              </p>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  )
}
