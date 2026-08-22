import { HeroHorizon } from "@/components/home/hero-horizon"
import { HeroLogo } from "@/components/home/hero-logo"

export function SiteHero({
  title,
  description,
  eyebrow,
}: {
  title: React.ReactNode
  description: React.ReactNode
  eyebrow?: React.ReactNode
}) {
  return (
    <section className="relative h-[50dvh] flex flex-col bg-sl-dark overflow-hidden">
      <HeroHorizon />
      <HeroLogo />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 30%, transparent 50%, rgb(var(--sl-dark-rgb) / 0.06) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <div
          data-hero-maroon
          className="relative flex h-full flex-col items-center justify-center px-6 py-12 text-center sm:px-8 lg:px-12"
        >
          {eyebrow ? (
            <div className="hero-rise hero-rise-1 relative z-10 text-sm font-medium uppercase tracking-[0.22em] text-sl-beige/65 sm:text-[13px]">
              {eyebrow}
            </div>
          ) : null}

          <h1 className="hero-rise hero-rise-2 relative z-10 mt-4 max-w-[12ch] text-3xl font-medium tracking-[-0.02em] text-balance text-sl-beige sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <div className="relative z-10 mt-6 flex justify-center">
            <h2 className="hero-rise hero-rise-3 max-w-[38rem] text-sm font-normal text-balance text-sl-beige/80 sm:text-base lg:text-lg">
              {description}
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
