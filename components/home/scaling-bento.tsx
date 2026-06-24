import { BentoCard } from "@/components/ui/bento-card"

export function ScalingBento() {
  return (
    <section>
      <div className="sl-container sl-section">
        <h2 className="sl-reveal sl-section-heading">Scaling successful companies</h2>

        <div className="grid gap-[14px]" style={{ gridTemplateColumns: "1fr 1fr 1.1fr" }}>
          {/* Team */}
          <BentoCard className="sl-reveal sl-d1 min-h-[250px]">
            <div className="relative flex-1 mb-[14px]">
              <div
                className="absolute w-[54px] h-[54px] rounded-[14px]"
                style={{ left: 18, top: 6, background: "linear-gradient(140deg,#cfccc4,#a9a69e)" }}
              />
              <div
                className="absolute w-[54px] h-[54px] rounded-[14px]"
                style={{ left: 78, top: 34, background: "linear-gradient(140deg,#bcc6c2,#929c97)" }}
              />
              <div
                className="absolute w-[54px] h-[54px] rounded-[14px]"
                style={{ left: 40, top: 74, background: "linear-gradient(140deg,#d2c6b6,#a99c87)" }}
              />
              <div
                className="absolute w-[54px] h-[54px] rounded-[14px]"
                style={{ left: 118, top: 84, background: "linear-gradient(140deg,#c4c1cc,#9794a2)" }}
              />
            </div>
            <div>
              <h3 className="m-0 mb-[6px] text-[16px] font-semibold">A senior team on demand</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted">Designers, engineers and PMs, embedded.</p>
            </div>
          </BentoCard>

          {/* Stat */}
          <BentoCard className="sl-reveal sl-d2 min-h-[250px] justify-center">
            <div className="text-[64px] font-bold tracking-[-0.04em] leading-none">100+</div>
            <div className="text-[13px] text-sl-subtle mt-[6px] mb-[18px]">Projects delivered</div>
            <p className="m-0 text-[13px] leading-[1.55] text-sl-muted">
              From seed-stage startups to scaling companies, teams trust Saastra Labs to ship the work that matters.
            </p>
          </BentoCard>

          {/* Testimonial dark */}
          <BentoCard dark className="sl-reveal sl-d3 min-h-[250px] text-white">
            <div>
              <span className="sl-mono-label">CARET</span>
              <p className="mt-[14px] mb-0 text-[14px] leading-[1.6] text-[#e6e6e6]">
                &ldquo;Saastra Labs feels like an extension of our own team. They moved fast, communicated clearly, and the quality was exceptional.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-[10px] mt-[18px]">
              <div
                className="w-[34px] h-[34px] rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(140deg,#444,#222)" }}
              />
              <div className="leading-[1.25]">
                <div className="text-[13px] font-semibold">Jordan Vale</div>
                <div className="text-[11.5px] text-[#888]">Founder, Caret</div>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
