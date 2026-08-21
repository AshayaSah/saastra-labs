import Image from "next/image"
import { HeroHorizon } from "@/components/home/hero-horizon"
import { HeroLogo } from "@/components/home/hero-logo"

export function HeroSection() {
  return (
    <section className="relative flex min-h-dvh flex-col bg-sl-dark">
      {/* Sunrise-over-horizon backdrop with starfield */}
      <HeroHorizon />

      {/* Standalone logo at the top-left, fades out when the navbar appears */}
      <HeroLogo />

      {/* Vignette to keep edges grounded and content legible */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 30%, transparent 50%, rgb(var(--sl-dark-rgb) / 0.06) 100%)",
        }}
      />

      {/* Top/bottom split: copy on top, light field at the bottom */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* Top: all the copy */}
        <div
          data-hero-maroon
          className="relative flex flex-1 flex-col px-6 pt-16 pb-8 sm:px-8 lg:px-12"
        >
          {/* Headline */}
          <h1 className="hero-rise hero-rise-2 relative z-10 pt-20 text-3xl font-medium tracking-[-0.02em] text-balance text-sl-beige sm:text-4xl md:text-5xl lg:text-6xl">
            The best
            <br />
            <em>design and development</em> studio
            <br />
            in South Asia.
          </h1>

          {/* Subtext at the bottom right */}
          <div className="relative z-10 mt-auto flex justify-end">
            <div className="relative z-10 flex max-w-md flex-col items-end text-right">
              <h2 className="hero-rise hero-rise-3 text-sm font-normal text-balance text-sl-beige/80 sm:text-base lg:text-lg">
                We design and build solutions that drive results and help your
                business grow. No fluff. No BS.&nbsp;Just results.
              </h2>
            </div>
          </div>
        </div>

        {/* Bottom: light field — one full viewport tall */}
        <div className="relative h-dvh overflow-hidden bg-sl-surface">
          <Image
            src="/image.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
