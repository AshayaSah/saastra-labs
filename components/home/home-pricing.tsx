import { getPricingPlans } from "@/lib/db/queries"
import { BentoCard } from "@/components/ui/bento-card"

export async function HomePricing() {
  const plans = await getPricingPlans()
  const [composable, scale, multiPage] = plans

  if (!composable || !scale || !multiPage) return null

  return (
    <section>
      <div className="sl-container sl-section">
        <h2 className="sl-reveal sl-section-heading">
          Extensive pricing plans
        </h2>

        {/* Row 1: Composable + Scale */}
        <div className="mb-3.5 grid grid-cols-1 gap-3.5 md:grid-cols-2">
          {/* Composable — light */}
          <BentoCard className="sl-reveal sl-d1 p-6.5">
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="text-[13px] font-semibold">
                {composable.name}
              </span>
              <span className="sl-badge-green">{composable.badge}</span>
            </div>
            <h3 className="m-0 mb-0.5 text-[19px] font-semibold tracking-[-0.01em]">
              {composable.tagline}
            </h3>
            <p className="mt-0 mb-4.5 text-[13px] text-sl-subtle">
              {composable.description}
            </p>
            <div className="mb-4.5 flex items-baseline gap-1">
              <span className="text-[34px] font-bold tracking-[-0.03em]">
                Rs. {composable.monthlyPrice.toLocaleString()}
              </span>
              {/* <span className="text-[13px] text-sl-subtle">/mo</span> */}
            </div>
            <a
              href="#"
              className="sl-focus-ring sl-btn mb-4.5 block text-center"
            >
              Select plan
            </a>
            {composable.features.map((f, i) => (
              <div key={i} className="sl-feature-row text-sl-body">
                <span className="text-sl-green">✓</span>
                {f}
              </div>
            ))}
          </BentoCard>

          {/* Scale — dark */}
          <BentoCard
            dark
            className="sl-reveal sl-d2 relative overflow-hidden p-6.5 text-sl-text-inv"
          >
            <div
              className="pointer-events-none absolute top-[-80px] right-[-40px] h-[240px] w-[240px]"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgb(var(--sl-glow-rgb) / 0.3), transparent 70%)",
              }}
            />
            <div className="relative mb-3.5 flex items-center gap-2.5">
              <span className="text-[13px] font-semibold">{scale.name}</span>
              <span className="sl-badge-yellow">{scale.badge}</span>
            </div>
            <h3 className="relative m-0 mb-0.5 text-[19px] font-semibold tracking-[-0.01em]">
              {scale.tagline}
            </h3>
            <p className="relative mt-0 mb-4.5 text-[13px] text-sl-muted-inv">
              {scale.description}
            </p>
            <div className="relative mb-4.5 flex items-baseline gap-1">
              <span className="text-[34px] font-bold tracking-[-0.03em]">
                Rs. {scale.monthlyPrice.toLocaleString()}
              </span>
              {/* <span className="text-[13px] text-sl-muted-inv">/mo</span> */}
            </div>
            <a
              href="#"
              className="sl-focus-ring sl-btn relative mb-4.5 block text-center"
            >
              Select plan
            </a>
            {scale.features.map((f, i) => (
              <div
                key={i}
                className="sl-feature-row-dark relative text-sl-muted-inv"
              >
                <span className="text-sl-accent">✓</span>
                {f}
              </div>
            ))}
          </BentoCard>
        </div>

        {/* Wide row: Multi Page */}
        <BentoCard className="sl-reveal grid grid-cols-1 items-center gap-[30px] p-6.5 md:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="text-[13px] font-semibold">
                {multiPage.name}
              </span>
              <span className="sl-badge-green">{multiPage.badge}</span>
            </div>
            <h3 className="m-0 mb-0.5 text-[19px] font-semibold tracking-[-0.01em]">
              {multiPage.tagline}
            </h3>
            <p className="mt-0 mb-4.5 text-[13px] text-sl-subtle">
              {multiPage.description}
            </p>
            <div className="mb-4.5 flex items-baseline gap-1">
              <span className="text-[34px] font-bold tracking-[-0.03em]">
                Rs. {multiPage.monthlyPrice.toLocaleString()}
              </span>
              {/* <span className="text-[13px] text-sl-subtle">/mo</span> */}
            </div>
            <a href="#" className="sl-focus-ring sl-btn-wide">
              Select plan
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-4.5 gap-y-2">
            {multiPage.features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 py-1.5 text-[13px] text-sl-body"
              >
                <span className="text-sl-green">✓</span>
                {f}
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  )
}
