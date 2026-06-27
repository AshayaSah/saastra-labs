import { BentoCard } from "@/components/ui/bento-card"

export function ServicesBento() {
  return (
    <section>
      <div className="sl-container sl-section">
        <h2 className="sl-reveal sl-section-heading">Replace your Engineering Team</h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 gap-[14px] mb-[14px] sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr]">
          {/* Design & Dev */}
          <BentoCard className="sl-reveal sl-d1 min-h-[240px]">
            <div
              className="flex-1 rounded-[12px] flex items-center justify-center mb-4"
              style={{
                background: "repeating-linear-gradient(135deg,#f1efea,#f1efea 11px,#e9e7e1 11px,#e9e7e1 22px)",
              }}
            >
              <span className="font-mono text-[11px] text-[#9a978f]">design ↔ dev preview</span>
            </div>
            <div>
              <h3 className="m-0 mb-[6px] text-[16px] font-semibold">Design and Development</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted">
                Designers and builders by your side. We take your dream and ship it — from first concept to production.
              </p>
            </div>
          </BentoCard>

          {/* Progress */}
          <BentoCard className="sl-reveal sl-d2 min-h-[240px]">
            <div className="flex-1 flex items-center justify-center mb-[14px]">
              <div
                className="w-[120px] h-[120px] rounded-full flex items-center justify-center"
                style={{ background: "conic-gradient(#0c0c0c 0deg 264deg,#eceae4 264deg 360deg)" }}
              >
                <div className="w-[88px] h-[88px] rounded-full bg-white flex flex-col items-center justify-center">
                  <span className="text-[22px] font-bold">73%</span>
                  <span className="text-[10px] text-sl-subtle">Sprint 4</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="m-0 mb-[6px] text-[16px] font-semibold">Regular updates &amp; progress tracking</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted">Always know where things stand.</p>
            </div>
          </BentoCard>

          {/* Hosting dark */}
          <BentoCard dark className="sl-reveal sl-d3 min-h-[240px] text-white overflow-hidden">
            <div
              className="flex-1 rounded-[12px] relative mb-4 overflow-hidden"
              style={{ background: "radial-gradient(120% 120% at 30% 20%, #1e1e1e, #0b0b0b)" }}
            >
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(40% 60% at 70% 60%, rgba(255,150,60,.35), transparent 70%)" }}
              />
              <span className="absolute left-[14px] top-[12px] font-mono text-[10px] text-[#7a7a7a]">
                ▲ deployed · 12 regions
              </span>
            </div>
            <div>
              <h3 className="m-0 mb-[6px] text-[16px] font-semibold">Hosting, Deployment &amp; Maintenance</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted-inv">We keep it fast, secure and online.</p>
            </div>
          </BentoCard>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 gap-[14px] md:grid-cols-[1.1fr_1.4fr]">
          {/* SEO */}
          <BentoCard className="sl-reveal sl-d1 min-h-[200px]">
            <div className="border border-[#ececec] rounded-[12px] p-[14px] mb-4">
              <div className="flex items-center gap-2 border border-[#e6e6e6] rounded-full px-3 py-2 mb-3">
                <span className="text-[#888]">⌕</span>
                <span className="text-[12px] text-[#888]">saastra labs engineering studio</span>
              </div>
              <div className="text-[11px] text-[#1a7e1a] mb-[2px]">saastralabs.io</div>
              <div className="text-[13px] text-[#1a3dbf] font-medium">Saastra Labs — Design &amp; Engineering Studio</div>
            </div>
            <div>
              <h3 className="m-0 mb-[6px] text-[16px] font-semibold">Get found on Google</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted">SEO-ready, fast, accessible builds.</p>
            </div>
          </BentoCard>

          {/* Components */}
          <BentoCard className="sl-reveal sl-d2 min-h-[200px]">
            <div className="flex-1 flex gap-[10px] mb-4">
              <div className="flex-1 rounded-[12px]" style={{ background: "linear-gradient(160deg,#ffb45a,#ff7a1a)" }} />
              <div className="flex-1 rounded-[12px]" style={{ background: "linear-gradient(160deg,#dfe7f5,#aebfe0)" }} />
              <div className="flex-1 rounded-[12px]" style={{ background: "linear-gradient(160deg,#1a1a1a,#3a3a3a)" }} />
              <div className="flex-1 rounded-[12px]" style={{ background: "linear-gradient(160deg,#cfeede,#7fd0a8)" }} />
            </div>
            <div>
              <h3 className="m-0 mb-[6px] text-[16px] font-semibold">Components, dashboards and everything else</h3>
              <p className="m-0 text-[13px] leading-[1.5] text-sl-muted">A full library of building blocks, ready to ship.</p>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
