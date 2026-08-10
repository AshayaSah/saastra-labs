import { getPricingPlans, getMarquee } from "@/lib/db/queries"
import { BentoCard } from "@/components/ui/bento-card"

export async function PricingCards() {
  const [plans, TECH_LOGOS] = await Promise.all([
    getPricingPlans(),
    getMarquee("tech"),
  ])
  const [composable, scale, multiPage] = plans

  if (!composable || !scale || !multiPage) return null

  return (
    <>
      {/* Row 1: Composable + Scale */}
      <div className="mt-3.5 mb-3.5 grid grid-cols-1 gap-3.5 md:grid-cols-2">
        {/* Composable — light */}
        <BentoCard className="sl-reveal sl-d1 p-6.5">
          <div>
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="text-[13px] font-semibold">
                {composable.name}
              </span>
              <span className="sl-badge-green">{composable.badge}</span>
            </div>
            <h3 className="m-0 mb-0.5 text-[19px] font-semibold tracking-[-0.01em]">
              {composable.tagline}
            </h3>
            <p className="mt-0 mb-5 text-[13px] text-sl-subtle">
              {composable.description}
            </p>
            <div className="mb-5 flex items-baseline gap-1">
              <span className="text-[36px] font-bold tracking-[-0.03em]">
                Rs. {composable.monthlyPrice.toLocaleString()}
              </span>
              {/* <span className="text-[13px] text-sl-subtle">/mo</span> */}
            </div>
          </div>
          <div>
            <a
              href="#"
              className="sl-focus-ring sl-btn mb-4.5 block text-center"
            >
              Start plan
            </a>
            {composable.features.map((f, i) => (
              <div key={i} className="sl-feature-row text-sl-body">
                <span className="flex-shrink-0 text-sl-green">✓</span>
                {f}
              </div>
            ))}
          </div>
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
                "radial-gradient(50% 50% at 50% 50%, rgb(var(--sl-glow-rgb) / 0.28), transparent 70%)",
            }}
          />
          <div>
            <div className="relative mb-3.5 flex items-center gap-2.5">
              <span className="text-[13px] font-semibold">{scale.name}</span>
              <span className="sl-badge-yellow">{scale.badge}</span>
            </div>
            <h3 className="relative m-0 mb-0.5 text-[19px] font-semibold tracking-[-0.01em]">
              {scale.tagline}
            </h3>
            <p className="relative mt-0 mb-5 text-[13px] text-sl-subtle-inv">
              {scale.description}
            </p>
            <div className="relative mb-5 flex items-baseline gap-1">
              <span className="text-[36px] font-bold tracking-[-0.03em]">
                Rs. {scale.monthlyPrice.toLocaleString()}
              </span>
              {/* <span className="text-[13px] text-sl-subtle-inv">/mo</span> */}
            </div>
          </div>
          <div>
            <a
              href="#"
              className="sl-focus-ring sl-btn relative mb-4.5 block text-center"
            >
              Start plan
            </a>
            {scale.features.map((f, i) => (
              <div
                key={i}
                className="sl-feature-row-dark relative text-sl-muted-inv"
              >
                <span className="flex-shrink-0 text-sl-accent">✓</span>
                {f}
              </div>
            ))}
          </div>
        </BentoCard>
      </div>

      {/* Row 2: Multi Page — wide */}
      <BentoCard className="sl-reveal mb-3.5 grid grid-cols-1 items-center gap-8 p-6.5 md:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="mb-3.5 flex items-center gap-2.5">
            <span className="text-[13px] font-semibold">{multiPage.name}</span>
            <span className="sl-badge-green">{multiPage.badge}</span>
          </div>
          <h3 className="m-0 mb-0.5 text-[19px] font-semibold tracking-[-0.01em]">
            {multiPage.tagline}
          </h3>
          <p className="mt-0 mb-5 text-[13px] text-sl-subtle">
            {multiPage.description}
          </p>
          <div className="mb-5 flex items-baseline gap-1">
            <span className="text-[36px] font-bold tracking-[-0.03em]">
              Rs. {multiPage.monthlyPrice.toLocaleString()}
            </span>
            {/* <span className="text-[13px] text-sl-subtle">/mo</span> */}
          </div>
          <a href="#" className="sl-focus-ring sl-btn-wide">
            Start plan
          </a>
        </div>
        <div className="grid grid-cols-2 gap-x-4.5 gap-y-2">
          {multiPage.features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 py-2 text-[13px] text-sl-body"
            >
              <span className="flex-shrink-0 text-sl-green">✓</span>
              {f}
            </div>
          ))}
        </div>
      </BentoCard>

      {/* Tech logos strip */}
      <div className="mb-24 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 rounded-tile-lg border border-sl-border bg-sl-surface px-6 py-3.5">
        <span className="sl-mono-label">Works with</span>
        <div className="h-3.5 w-px flex-shrink-0 bg-sl-border" />
        {TECH_LOGOS.map((t, i) => (
          <span
            key={i}
            className="text-[12.5px] font-semibold tracking-[-0.01em] whitespace-nowrap text-sl-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </>
  )
}
