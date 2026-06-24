import Image from "next/image"
import { ChatButton } from "@/components/chat-button"
import { FOOTER_COLUMNS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-sl-dark text-white relative overflow-hidden">
      {/* Orange glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -160,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 600,
          background: "radial-gradient(50% 50% at 50% 50%, rgba(255,150,60,.22), transparent 65%)",
        }}
      />

      <div className="sl-container relative text-center pt-28">
        {/* CTA heading */}
        <h2 className="text-[clamp(34px,5.5vw,46px)] font-semibold tracking-[-0.03em] leading-[1.05] mx-auto mb-[26px] max-w-[560px]">
          Make your website a sales machine
        </h2>

        <div className="mb-16">
          <ChatButton href="#" />
        </div>

        {/* Footer columns */}
        <div
          className="text-left grid gap-8 pb-10 border-b border-[#1a1a1a]"
          style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-[9px] mb-3">
              <Image
                src="/logo.png"
                alt="Saastra Labs"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="text-white font-semibold text-[16px]">Saastra Labs</span>
            </div>
            <p className="text-[13px] leading-[1.6] text-sl-subtle-inv m-0 max-w-[240px]">
              Design and engineering studio from Kathmandu, Nepal — building for the world.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="sl-mono-label mb-3">{col.title}</div>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[13.5px] text-sl-muted-inv no-underline py-[5px] transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between py-5">
          <span className="text-[12px] text-sl-subtle-inv">
            © 2025 Saastra Labs Pvt. Ltd., Kathmandu, Nepal. All rights reserved.
          </span>
          <div className="flex gap-[14px]">
            {["X", "in", "GH"].map((s) => (
              <span key={s} className="text-[12px] text-sl-subtle-inv cursor-pointer">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* SAASTRA watermark */}
        <div className="overflow-hidden leading-[0.72] mt-[6px]">
          <span
            className="text-[210px] font-extrabold tracking-[-0.045em] inline-block translate-y-[30%] select-none"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,0))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            SAASTRA
          </span>
        </div>
      </div>
    </footer>
  )
}
