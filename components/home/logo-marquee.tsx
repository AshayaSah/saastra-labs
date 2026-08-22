import { getMarquee } from "@/lib/db/queries"
import { GridGlow } from "@/components/shared/grid-glow"

export async function LogoMarquee() {
  const logos = await getMarquee("logo")
  const marqueeLogos = [...logos, ...logos]

  return (
    <section className="relative overflow-hidden bg-sl-accent pt-16 pb-[49px]">
      <GridGlow />
      <p className="relative text-center font-mono text-[10px] tracking-[0.25em] text-sl-text-inv/60 uppercase m-0 mb-6.5">
        Trusted by fast-moving teams at
      </p>
      <div
        className="relative max-w-[var(--sl-container-content)] mx-auto overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
          maskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
        }}
      >
        <div
          className="flex gap-14 w-max"
          style={{ animation: "marquee 34s linear infinite" }}
        >
          {marqueeLogos.map((logo, i) => (
            <span
              key={i}
              className="text-[22px] font-semibold tracking-[-0.02em] text-sl-text-inv opacity-50 whitespace-nowrap transition-opacity duration-300 hover:opacity-100"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}