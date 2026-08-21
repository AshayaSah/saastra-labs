import { BentoCard } from "@/components/ui/bento-card"

export function ServicesBento() {
  return (
    <section>
      <div className="sl-container sl-section">
        <h2 className="sl-reveal sl-section-heading">Replace your Engineering Team</h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 gap-3.5 mb-3.5 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr]">
          {/* Design & Dev */}
          <BentoCard className="sl-reveal sl-d1 min-h-[240px]">
            <div
              className="flex-1 rounded-tile flex items-center justify-center mb-4"
              style={{
                background: "repeating-linear-gradient(135deg,#f1eee5,#f1eee5 11px,#e7e3d7 11px,#e7e3d7 22px)",
              }}
            >
              <span className="font-mono text-[11px] text-[#323733]">design ↔ dev preview</span>
            </div>
            <div>
              <h3 className="m-0 mb-1.5 text-[16px] font-medium">Design and Development</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted">
                Designers and builders by your side. We take your dream and ship it — from first concept to production.
              </p>
            </div>
          </BentoCard>

          {/* Progress */}
          <BentoCard className="sl-reveal sl-d2 min-h-[240px]">
            <div className="flex-1 flex items-center justify-center mb-3.5">
              <div
                className="w-[120px] h-[120px] rounded-full flex items-center justify-center"
                style={{ background: "conic-gradient(#1c2021 0deg 264deg,#e7e3d7 264deg 360deg)" }}
              >
                <div className="w-[88px] h-[88px] rounded-full bg-sl-surface flex flex-col items-center justify-center">
                  <span className="text-[22px] font-bold">73%</span>
                  <span className="text-[10px] text-sl-subtle">Sprint 4</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="m-0 mb-1.5 text-[16px] font-medium">Regular updates &amp; progress tracking</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted">Always know where things stand.</p>
            </div>
          </BentoCard>

          {/* Hosting dark */}
          <BentoCard dark className="sl-reveal sl-d3 min-h-[240px] text-sl-text-inv overflow-hidden">
            <div
              className="flex-1 rounded-tile relative mb-4 overflow-hidden"
              style={{
                background: `radial-gradient(120% 120% at 30% 20%, #1c2021, var(--color-sl-surface-dark))`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(40% 60% at 70% 60%, rgb(var(--sl-glow-rgb) / 0.35), transparent 70%)",
                }}
              />
              <span className="absolute left-3.5 top-3 font-mono text-[10px] text-sl-muted-inv">
                ▲ deployed · 12 regions
              </span>
            </div>
            <div>
              <h3 className="m-0 mb-1.5 text-[16px] font-medium">Hosting, Deployment &amp; Maintenance</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted-inv">We keep it fast, secure and online.</p>
            </div>
          </BentoCard>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-[1.1fr_1.4fr]">
          {/* SEO */}
          <BentoCard className="sl-reveal sl-d1 min-h-[200px]">
            <div className="border border-[#e0ddd2] rounded-tile p-3.5 mb-4">
              <div className="flex items-center gap-2 border border-sl-border rounded-full px-3 py-2 mb-3">
                <span className="text-sl-subtle">⌕</span>
                <span className="text-[12px] text-sl-subtle">saastra labs engineering studio</span>
              </div>
              <div className="text-[11px] text-sl-accent mb-0.5">saastralabs.io</div>
              <div className="text-[13px] text-sl-text font-medium">Saastra Labs — Design &amp; Engineering Studio</div>
            </div>
            <div>
              <h3 className="m-0 mb-1.5 text-[16px] font-medium">Get found on Google</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted">SEO-ready, fast, accessible builds.</p>
            </div>
          </BentoCard>

          {/* Components */}
          <BentoCard className="sl-reveal sl-d2 min-h-[200px]">
            <div className="flex-1 flex gap-2.5 mb-4">
              <div className="flex-1 rounded-tile" style={{ background: "linear-gradient(160deg,#1c2021,#323733)" }} />
              <div className="flex-1 rounded-tile" style={{ background: "linear-gradient(160deg,#e7e3d7,#f1eee5)" }} />
              <div className="flex-1 rounded-tile" style={{ background: "linear-gradient(160deg,#323733,#1c2021)" }} />
              <div className="flex-1 rounded-tile" style={{ background: "linear-gradient(160deg,#323733,#1c2021)" }} />
            </div>
            <div>
              <h3 className="m-0 mb-1.5 text-[16px] font-medium">Components, dashboards and everything else</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted">A full library of building blocks, ready to ship.</p>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
