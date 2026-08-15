import { BentoCard } from "@/components/ui/bento-card"

export function ScalingBento() {
  return (
    <section>
      <div className="sl-container sl-section">
        <h2 className="sl-reveal sl-section-heading">Scaling successful companies</h2>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.1fr]">
          {/* Team */}
          <BentoCard className="sl-reveal sl-d1 min-h-[250px]">
            <div className="relative flex-1 mb-3.5">
              <div
                className="absolute w-[54px] h-[54px] rounded-tile-lg"
                style={{ left: 18, top: 6, background: "linear-gradient(140deg,#4D0C12,#30050E)" }}
              />
              <div
                className="absolute w-[54px] h-[54px] rounded-tile-lg"
                style={{ left: 78, top: 34, background: "linear-gradient(140deg,#4D0C12,#30050E)" }}
              />
              <div
                className="absolute w-[54px] h-[54px] rounded-tile-lg"
                style={{ left: 40, top: 74, background: "linear-gradient(140deg,#4D0C12,#30050E)" }}
              />
              <div
                className="absolute w-[54px] h-[54px] rounded-tile-lg"
                style={{ left: 118, top: 84, background: "linear-gradient(140deg,#EAE5D4,#F6F3E4)" }}
              />
            </div>
            <div>
              <h3 className="m-0 mb-1.5 text-[16px] font-medium">A senior team on demand</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted">Designers, engineers and PMs, embedded.</p>
            </div>
          </BentoCard>

          {/* Stat */}
          <BentoCard className="sl-reveal sl-d2 min-h-[250px] justify-center">
            <div className="text-[64px] font-bold tracking-[-0.04em] leading-none">100+</div>
            <div className="text-[13px] text-sl-subtle mt-1.5 mb-4.5">Projects delivered</div>
            <p className="m-0 text-[13px] leading-[1.55] text-sl-muted">
              From seed-stage startups to scaling companies, teams trust Saastra Labs to ship the work that matters.
            </p>
          </BentoCard>

          {/* Testimonial dark */}
          <BentoCard dark className="sl-reveal sl-d3 min-h-[250px] text-sl-text-inv">
            <div>
              <span className="sl-mono-label">CARET</span>
              <p className="mt-3.5 mb-0 text-[14px] leading-[1.6] text-sl-muted-inv">
                &ldquo;Saastra Labs feels like an extension of our own team. They moved fast, communicated clearly, and the quality was exceptional.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-2.5 mt-4.5">
              <div
                className="w-[34px] h-[34px] rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(140deg,#30050E,#1E100F)" }}
              />
              <div className="leading-[1.25]">
                <div className="text-[13px] font-semibold">Jordan Vale</div>
                <div className="text-[11.5px] text-sl-subtle-inv">Founder, Caret</div>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
