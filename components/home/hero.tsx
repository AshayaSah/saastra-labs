import Image from "next/image"

// Dot-matrix glyph shown inside the chat button (morphs to the avatar on hover)
const CHAT_DOTS = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0],
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-sl-dark">
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: -360,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1100,
          height: 760,
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,150,50,.55) 0%, rgba(255,110,30,.18) 38%, rgba(255,110,30,0) 68%)",
          filter: "blur(8px)",
          animation: "glowpulse 7s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          top: 80,
          left: "50%",
          transform: "translateX(-50%)",
          width: 560,
          height: 360,
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,190,120,.45) 0%, rgba(255,140,60,0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, transparent 55%, rgba(0,0,0,.6) 100%)",
        }}
      />

      {/* Content column */}
      <div className="sl-container relative z-10 flex flex-1 flex-col justify-between">
        <div className="flex flex-1 flex-col justify-center pt-32 md:pt-42 lg:pt-56">
          {/* Badge pill */}
          <a
            href="#"
            className="flex w-fit rounded-full bg-neutral-900 p-1 shadow-lg shadow-black/40"
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
            <h1 className="text-3xl font-semibold tracking-[-0.04em] text-balance text-sl-text-inv sm:text-4xl md:text-5xl lg:text-7xl">
              The best design and development studio in South Asia.
            </h1>
            <div className="lg:max-w-md">
              <h2 className="text-sm font-medium text-balance text-sl-muted-inv sm:text-base lg:text-lg">
                We design and build solutions that drive results and help your
                business grow. No fluff. No BS.&nbsp;Just results.
              </h2>

              {/* Animated chat button */}
              <button className="group relative mt-6 flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-black py-2 pr-4 pl-11 tracking-tight md:mt-8">
                {/* Morphing box: dot-matrix that slides + flips into the avatar */}
                <div className="absolute inset-y-0 left-1 z-40 my-auto flex size-8 flex-col items-center justify-center gap-px rounded-[5px] bg-sl-accent transition-all duration-[400ms] ease-out group-hover:left-[calc(100%-2.3rem)] group-hover:rotate-180 group-hover:bg-white">
                  <div className="flex flex-col gap-px group-hover:hidden">
                    {CHAT_DOTS.map((row, r) => (
                      <div key={r} className="flex gap-px">
                        {row.map((on, c) => (
                          <span
                            key={c}
                            className={`inline-block size-0.75 shrink-0 rounded-full ${on ? "bg-sl-accent-ink" : "bg-sl-accent-ink/25"}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                  <Image
                    src="/logo.png"
                    alt="SAASTRA Logo"
                    width={32}
                    height={32}
                    className="hidden size-8 rotate-180 rounded-[5px] object-cover blur-sm transition-all duration-[400ms] ease-out group-hover:block group-hover:blur-none"
                  />
                </div>

                {/* Clip-path reveal bar */}
                <div className="absolute -inset-px rounded-lg bg-white/20 transition-[clip-path] duration-[400ms] ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)]" />

                <span className="inline-block text-white transition-transform duration-[400ms] group-hover:-translate-x-8">
                  Chat with SAASTRA
                </span>
              </button>
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
