import Image from "next/image"
import { ChatButton } from "@/components/chat-button"
import { getFooterColumns } from "@/lib/db/queries"

export async function Footer() {
  const FOOTER_COLUMNS = await getFooterColumns()

  return (
    <footer className="relative overflow-hidden border-t border-sl-border-dark bg-sl-surface-dark text-sl-text-inv">
      {/* Wine bloom — the CTA banner area reads as deep bordeaux light */}
      <div
        className="absolute pointer-events-none top-[-160px] left-1/2 h-[600px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgb(var(--sl-dark-rgb) / 0.6), transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none top-[-120px] left-1/2 h-[420px] w-[760px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgb(var(--sl-glow-rgb) / 0.05), transparent 70%)",
        }}
      />
      <div aria-hidden className="hero-grid-lines pointer-events-none" />

      <div className="sl-container relative text-center pt-20 sm:pt-28">
        {/* CTA heading */}
        <h2 className="font-display mx-auto mb-[26px] max-w-[560px] text-[clamp(34px,5.5vw,46px)] font-medium tracking-[-0.02em] leading-[1.05]">
          Make your website a <em>sales machine</em>
        </h2>

        <div className="mb-16">
          <ChatButton href="/contact" />
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 gap-8 border-b border-sl-border-dark pb-10 text-left md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-[9px] mb-3">
              <Image
                src="/logonewbg.png"
                alt="Saastra Labs"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="font-display text-sl-text-inv font-medium text-[17px]">Saastra Labs</span>
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
                  className="sl-focus-ring block rounded-control text-[13.5px] text-sl-muted-inv no-underline py-[5px] transition-colors hover:text-sl-text-inv"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-3 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="text-[12px] text-sl-subtle-inv">
            © 2025 Saastra Labs Pvt. Ltd., Kathmandu, Nepal. All rights reserved.
          </span>
          <div className="flex gap-[14px]">
            <a
              href="https://twitter.com/saastralabs"
              className="sl-focus-ring text-[12px] text-sl-subtle-inv hover:text-sl-text-inv transition-colors rounded-control"
              aria-label="X (Twitter)"
            >
              X
            </a>
            <a
              href="https://linkedin.com/company/saastra-labs"
              className="sl-focus-ring text-[12px] text-sl-subtle-inv hover:text-sl-text-inv transition-colors rounded-control"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://github.com/saastralabs"
              className="sl-focus-ring text-[12px] text-sl-subtle-inv hover:text-sl-text-inv transition-colors rounded-control"
              aria-label="GitHub"
            >
              GH
            </a>
          </div>
        </div>

        {/* SAASTRA watermark */}
        <div className="overflow-hidden leading-[0.72] mt-[6px]">
          <span
            className="font-display inline-block translate-y-[30%] text-[clamp(64px,22vw,210px)] font-medium tracking-[-0.04em] select-none"
            style={{
              background: "linear-gradient(180deg,rgba(246,243,228,.12),rgba(246,243,228,0))",
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
