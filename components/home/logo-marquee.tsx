import { getMarquee } from "@/lib/db/queries"

export async function LogoMarquee() {
  const logos = await getMarquee("logo")
  const marqueeLogos = [...logos, ...logos]

  return (
    <section className="pt-16 pb-4">
      <p className="text-center font-mono text-[11px] tracking-[0.18em] text-[#8a8780] uppercase m-0 mb-[26px]">
        Trusted by fast-moving teams at
      </p>
      <div
        className="relative max-w-[1100px] mx-auto overflow-hidden"
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
              className="text-[22px] font-bold tracking-[-0.02em] text-[#3f3d39] opacity-[0.62] whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
