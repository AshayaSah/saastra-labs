import { PRICING_PLANS } from "@/lib/constants"
import { BentoCard } from "@/components/ui/bento-card"

export function HomePricing() {
  const composable = PRICING_PLANS.find((p) => p.id === "composable")!
  const scale = PRICING_PLANS.find((p) => p.id === "scale")!
  const multiPage = PRICING_PLANS.find((p) => p.id === "multi-pages")!

  return (
    <section>
      <div className="sl-container pt-[148px] pb-[104px]">
        <h2 className="sl-reveal sl-section-heading">Extensive pricing plans</h2>

        {/* Row 1: Composable + Scale */}
        <div className="grid grid-cols-2 gap-[14px] mb-[14px]">
          {/* Composable — light */}
          <BentoCard className="sl-reveal sl-d1 p-[26px]">
            <div className="flex items-center gap-[10px] mb-[14px]">
              <span className="text-[13px] font-semibold">{composable.name}</span>
              <span className="sl-badge-green">{composable.badge}</span>
            </div>
            <h3 className="m-0 mb-[2px] text-[19px] font-semibold tracking-[-0.01em]">{composable.tagline}</h3>
            <p className="mt-0 mb-[18px] text-[13px] text-sl-subtle">{composable.description}</p>
            <div className="flex items-baseline gap-1 mb-[18px]">
              <span className="text-[34px] font-bold tracking-[-0.03em]">${composable.monthlyPrice.toLocaleString()}</span>
              <span className="text-[13px] text-sl-subtle">/mo</span>
            </div>
            <a href="#" className="block text-center sl-btn mb-[18px]">Select plan</a>
            {composable.features.map((f, i) => (
              <div key={i} className="sl-feature-row text-[#3a382f]">
                <span className="text-sl-green">✓</span>{f}
              </div>
            ))}
          </BentoCard>

          {/* Scale — dark */}
          <BentoCard dark className="sl-reveal sl-d2 p-[26px] relative overflow-hidden text-white">
            <div
              className="absolute pointer-events-none"
              style={{
                top: -80, right: -40, width: 240, height: 240,
                background: "radial-gradient(50% 50% at 50% 50%, rgba(255,150,60,.3), transparent 70%)",
              }}
            />
            <div className="relative flex items-center gap-[10px] mb-[14px]">
              <span className="text-[13px] font-semibold">{scale.name}</span>
              <span className="sl-badge-yellow">{scale.badge}</span>
            </div>
            <h3 className="relative m-0 mb-[2px] text-[19px] font-semibold tracking-[-0.01em]">{scale.tagline}</h3>
            <p className="relative mt-0 mb-[18px] text-[13px] text-[#9a9a9a]">{scale.description}</p>
            <div className="relative flex items-baseline gap-1 mb-[18px]">
              <span className="text-[34px] font-bold tracking-[-0.03em]">${scale.monthlyPrice.toLocaleString()}</span>
              <span className="text-[13px] text-[#9a9a9a]">/mo</span>
            </div>
            <a href="#" className="relative block text-center sl-btn mb-[18px]">Select plan</a>
            {scale.features.map((f, i) => (
              <div key={i} className="sl-feature-row-dark relative text-[#cfcfcf]">
                <span className="text-sl-accent">✓</span>{f}
              </div>
            ))}
          </BentoCard>
        </div>

        {/* Wide row: Multi Page */}
        <BentoCard
          className="sl-reveal p-[26px]"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 30, alignItems: "center" }}
        >
          <div>
            <div className="flex items-center gap-[10px] mb-[14px]">
              <span className="text-[13px] font-semibold">{multiPage.name}</span>
              <span className="sl-badge-green">{multiPage.badge}</span>
            </div>
            <h3 className="m-0 mb-[2px] text-[19px] font-semibold tracking-[-0.01em]">{multiPage.tagline}</h3>
            <p className="mt-0 mb-[18px] text-[13px] text-sl-subtle">{multiPage.description}</p>
            <div className="flex items-baseline gap-1 mb-[18px]">
              <span className="text-[34px] font-bold tracking-[-0.03em]">${multiPage.monthlyPrice.toLocaleString()}</span>
              <span className="text-[13px] text-sl-subtle">/mo</span>
            </div>
            <a href="#" className="sl-btn-wide">Select plan</a>
          </div>
          <div className="grid grid-cols-2 gap-x-[18px] gap-y-2">
            {multiPage.features.map((f, i) => (
              <div key={i} className="flex items-center gap-[9px] text-[13px] text-[#3a382f] py-[6px]">
                <span className="text-sl-green">✓</span>{f}
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  )
}
