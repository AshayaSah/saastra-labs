export function FounderSection() {
  return (
    <section className="bg-sl-dark text-white relative overflow-hidden">
      <div
        className="absolute pointer-events-none"
        style={{
          top: -200, right: -100, width: 600, height: 500,
          background: "radial-gradient(50% 50% at 50% 50%, rgba(255,140,50,.18), transparent 70%)",
        }}
      />
      <div className="sl-container py-[140px] relative">
        <h2 className="text-[28px] font-semibold tracking-[-0.02em] m-0 mb-[30px]">
          The founder&apos;s desk
        </h2>
        <div className="grid gap-10 items-start" style={{ gridTemplateColumns: "300px 1fr" }}>
          {/* Founder photo placeholder */}
          <div
            className="h-[300px] rounded-[18px] flex items-center justify-center"
            style={{
              background: "repeating-linear-gradient(45deg,#1a1a1a,#1a1a1a 12px,#161616 12px,#161616 24px)",
            }}
          >
            <span className="font-mono text-[11px] text-[#555]">[ founder photo ]</span>
          </div>

          <div>
            <p className="text-[15px] leading-[1.7] text-[#cfcfcf] mt-0 mb-4">
              For the last few years, we&apos;ve been helping web applications turn ideas into shipped products. We&apos;ve worked with startups, small businesses, and growing enterprises to design and build their digital presence from Kathmandu, Nepal.
            </p>
            <p className="text-[15px] leading-[1.7] text-[#cfcfcf] mt-0 mb-4">
              At Saastra Labs, we treat every project as if it were our own. We obsess over the details, sweat the edge cases, and deliver work we&apos;re genuinely proud of — fast, and without the usual agency drama.
            </p>
            <p className="text-[15px] leading-[1.7] text-[#cfcfcf] mt-0 mb-[22px]">
              If you&apos;re looking for a team that moves quickly and cares deeply, we&apos;d love to build with you.
            </p>
            <div className="font-mono text-[18px] text-white mb-1 italic">Ashaya Sah</div>
            <div className="text-[12.5px] text-[#8a8a8a]">Founder &amp; CEO, Saastra Labs, Nepal</div>
          </div>
        </div>
      </div>
    </section>
  )
}
