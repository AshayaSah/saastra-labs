import { BentoCard } from "@/components/ui/bento-card"
import { PRODUCTS } from "@/lib/constants"

export function ProductsGrid() {
  return (
    <section className="relative max-w-[1100px] mx-auto px-7 py-[88px]">
      {/* Watermark heading — same style as /work */}
      <div className="leading-[0.76] mb-[-4px] overflow-hidden">
        <span
          className="block whitespace-nowrap font-extrabold tracking-[-0.035em] select-none"
          style={{
            fontSize: "clamp(120px,19vw,232px)",
            background: "linear-gradient(180deg,#dad7d0 32%,rgba(218,215,208,0) 92%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Products
        </span>
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
