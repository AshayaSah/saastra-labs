export function HeroSection() {
  return (
    <section className="relative bg-sl-dark overflow-hidden min-h-screen flex flex-col">
      {/* Glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -360, left: "50%", transform: "translateX(-50%)",
          width: 1100, height: 760,
          background: "radial-gradient(50% 50% at 50% 50%, rgba(255,150,50,.55) 0%, rgba(255,110,30,.18) 38%, rgba(255,110,30,0) 68%)",
          filter: "blur(8px)",
          animation: "glowpulse 7s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: 80, left: "50%", transform: "translateX(-50%)",
          width: 560, height: 360,
          background: "radial-gradient(50% 50% at 50% 50%, rgba(255,190,120,.45) 0%, rgba(255,140,60,0) 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(120% 80% at 50% -10%, transparent 55%, rgba(0,0,0,.6) 100%)",
        }}
      />

      {/* Hero content */}
      <div className="relative z-[4] sl-container pt-10 flex-1 flex flex-col justify-center">
        {/* NEW badge */}
        <div
          className="inline-flex items-center gap-[9px] mb-[30px] rounded-full px-[13px] py-[6px] pl-[7px]"
          style={{
            background: "rgba(255,255,255,.06)",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        >
          <span className="bg-sl-accent text-[#0a0a0a] text-[10px] font-bold px-2 py-[2px] rounded-full tracking-[0.02em]">
            NEW
          </span>
          <span className="text-[#cfcfcf] text-[12.5px]">
            Now booking Q3 engineering pods
          </span>
        </div>

        {/* Headline + subtext grid */}
        <div className="grid gap-10 items-end" style={{ gridTemplateColumns: "1.35fr 1fr" }}>
          <h1 className="m-0 text-[#f4f2ee] text-[62px] leading-[1.02] font-semibold tracking-[-0.035em] max-w-[640px]">
            The best design and development studio in South Asia.
          </h1>

          <div className="pb-2">
            <p className="text-[#a9a9a9] text-[15px] leading-[1.6] mt-0 mb-[18px] max-w-[300px]">
              We design and build solutions that drive results and help your business grow. No fluff. No BS. Just results.
            </p>

            {/* CTA card */}
            <div
              className="inline-flex items-center gap-[11px] rounded-[13px] px-[14px] py-[11px]"
              style={{ background: "#f5c518" }}
            >
              <div
                className="w-[30px] h-[30px] rounded-[8px] flex items-center justify-center text-sl-accent text-[15px]"
                style={{ background: "#0a0a0a" }}
              >
                ✦
              </div>
              <div className="leading-[1.2]">
                <div className="text-[12.5px] font-bold text-[#1a1400]">Book an intro call</div>
                <div className="text-[11px] text-[#7a6a10]">Reply within 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SAASTRA watermark */}
      <div className="relative z-[3] text-center mt-[38px] overflow-hidden leading-[0.8]">
        <span
          className="text-[200px] font-extrabold tracking-[-0.04em] inline-block translate-y-[34%] select-none"
          style={{
            background: "linear-gradient(180deg,rgba(255,255,255,.13),rgba(255,255,255,0))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          SAASTRA
        </span>
      </div>
    </section>
  )
}
