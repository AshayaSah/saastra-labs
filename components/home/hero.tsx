import { ChatButton } from "@/components/chat-button"
import { HeroHorizon } from "@/components/home/hero-horizon"

export function HeroSection() {
  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-sl-dark">
      {/* Sunrise-over-horizon backdrop with starfield */}
      <HeroHorizon />

      {/* Vignette to keep edges grounded and content legible */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 30%, transparent 50%, rgba(0,0,0,.65) 100%)",
        }}
      />

      {/* Content column */}
      <div className="sl-container relative z-10 flex flex-1 flex-col justify-between">
        <div className="flex flex-1 flex-col justify-center pt-32 md:pt-42 lg:pt-56">
          {/* Badge pill */}
          <a
            href="#"
            className="hero-rise hero-rise-1 flex w-fit rounded-full bg-neutral-900 p-1 shadow-lg shadow-black/40"
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="rounded-full bg-sl-accent px-2 py-1 text-[10px] font-semibold text-sl-accent-ink sm:text-xs">
                New
              </div>
              <div className="rounded-full pr-2 text-[10px] text-sl-text-inv sm:text-xs">
                Now booking Q3 engineering pods
              </div>
            </div>
          </a>

          {/* Headline + subtext */}
          <div className="mt-6 flex flex-col items-start gap-6 md:mt-10 lg:flex-row lg:gap-10">
            <h1 className="hero-rise hero-rise-2 text-3xl font-semibold tracking-[-0.04em] text-balance text-sl-text-inv sm:text-4xl md:text-5xl lg:text-7xl">
              The best design and development studio in South Asia.
            </h1>
            <div className="lg:max-w-md">
              <h2 className="hero-rise hero-rise-3 text-sm font-medium text-balance text-sl-muted-inv sm:text-base lg:text-lg">
                We design and build solutions that drive results and help your
                business grow. No fluff. No BS.&nbsp;Just results.
              </h2>

              {/* Animated chat button */}
              <ChatButton className="hero-rise hero-rise-4 mt-6 md:mt-8" />
            </div>
          </div>
        </div>

        {/* Brand watermark */}
        <div className="relative h-18 sm:h-48 md:h-72">
          <p className="absolute -top-10 left-1/2 -translate-x-1/2 bg-linear-to-r from-white/10 to-transparent bg-clip-text text-center text-[100px] font-semibold tracking-[-0.04em] text-transparent select-none sm:text-[6rem] md:-top-6 md:mt-10 md:text-[160px] lg:-top-18 lg:text-[300px]">
            Saastra
          </p>
        </div>
      </div>
    </section>
  )
}
