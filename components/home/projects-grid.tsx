export function ProjectsGrid() {
  return (
    <section className="relative sl-container sl-section">
      {/* Watermark heading */}
      <div className="sl-display">
        <span className="sl-display-title">Projects</span>
      </div>

      {/* Row 1 */}
      <div className="grid gap-[14px] mb-[14px]" style={{ gridTemplateColumns: "1.55fr 1fr" }}>
        <div
          className="sl-reveal sl-d1 h-[300px] rounded-[18px] flex items-center justify-center"
          style={{ background: "repeating-linear-gradient(45deg,#cdcbc5,#cdcbc5 12px,#d6d4ce 12px,#d6d4ce 24px)" }}
        >
          <span className="font-mono text-[12px] text-[#7c7a73]">[ web app · product UI ]</span>
        </div>
        <div className="sl-reveal sl-d2 h-[300px] rounded-[18px] bg-[#101010] flex items-center justify-center">
          <span className="font-mono text-[12px] text-[#666]">[ mobile app ]</span>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid gap-[14px] mb-[14px]" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
        <div
          className="sl-reveal sl-d1 h-[220px] rounded-[18px] flex items-center justify-center"
          style={{ background: "linear-gradient(160deg,#1d3a30,#0c1c17)" }}
        >
          <span className="font-mono text-[12px] text-[#6f8a80]">[ dashboard ]</span>
        </div>
        <div
          className="sl-reveal sl-d2 h-[220px] rounded-[18px] flex items-center justify-center"
          style={{ background: "repeating-linear-gradient(45deg,#d8cbb8,#d8cbb8 12px,#e0d4c2 12px,#e0d4c2 24px)" }}
        >
          <span className="font-mono text-[12px] text-[#8a7f6c]">[ brand site ]</span>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid gap-[14px]" style={{ gridTemplateColumns: "1fr 1.55fr" }}>
        <div
          className="sl-reveal sl-d1 h-[230px] rounded-[18px] flex items-center justify-center"
          style={{ background: "linear-gradient(160deg,#3a2a1a,#120c06)" }}
        >
          <span className="font-mono text-[12px] text-[#8a7a66]">[ campaign ]</span>
        </div>
        <div
          className="sl-reveal sl-d2 h-[230px] rounded-[18px] flex items-center justify-center"
          style={{ background: "linear-gradient(160deg,#e6ecf6,#cdd9ee)" }}
        >
          <span className="font-mono text-[12px] text-[#7d8aa6]">[ e-commerce platform ]</span>
        </div>
      </div>
    </section>
  )
}
