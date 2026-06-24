import Image from "next/image"
import { ChatButton } from "@/components/chat-button"
import { NAV_LINKS } from "@/lib/constants"

export function Navbar({ activePath }: { activePath?: string }) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-5 pt-[10px] pointer-events-none"
    >
      <nav
        className="max-w-[880px] mx-auto flex items-center justify-between rounded-full border border-black/[0.07] pointer-events-auto"
        style={{
          padding: "9px 9px 9px 20px",
          background: "rgba(242,241,237,0.70)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          boxShadow: "0 2px 24px rgba(0,0,0,0.07), inset 0 0 0 0.5px rgba(255,255,255,0.55)",
        }}
      >
        <a href="/" className="flex items-center gap-[9px] no-underline">
          <Image
            src="/logo.png"
            alt="Saastra Labs"
            width={28}
            height={28}
            priority
            className="rounded-full"
          />
          <span className="text-sl-text font-semibold text-[16px] tracking-[-0.01em]">
            Saastra Labs
          </span>
        </a>

        <div className="flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[14px] no-underline transition-colors"
              style={{
                color: activePath === l.href ? "#0c0c0c" : "#5a5752",
                fontWeight: activePath === l.href ? 600 : 450,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <ChatButton label="Get in touch" href="#" />
      </nav>
    </header>
  )
}
