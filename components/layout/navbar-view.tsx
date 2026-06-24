"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChatButton } from "@/components/chat-button"
import type { NavLinkRow } from "@/lib/db/queries"

export function NavbarView({
  links,
  activePath,
}: {
  links: NavLinkRow[]
  activePath?: string
}) {
  // At the very top the bar is full-width and flush; once the page scrolls it
  // contracts into the floating capsule.
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`pointer-events-none fixed top-0 right-0 left-0 z-50 transition-[padding] duration-300 ease-out motion-reduce:transition-none ${
        scrolled ? "px-5 pt-[10px]" : "px-0 pt-0"
      }`}
    >
      <nav
        className={`pointer-events-auto mx-auto flex items-center justify-between border transition-all duration-300 ease-out motion-reduce:transition-none ${
          scrolled
            ? "max-w-[880px] rounded-2xl border-black/[0.07]"
            : "max-w-full rounded-none border-x-0 border-t-0 border-b-black/[0.06]"
        }`}
        style={{
          // Concentric with the chat button: 10px button radius + 9px inset
          // ≈ the navbar's rounded-2xl (18px) corner when capsuled.
          paddingTop: 9,
          paddingBottom: 9,
          paddingRight: 9,
          background: scrolled ? "rgba(242,241,237,0.70)" : "rgba(242,241,237,0.92)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          boxShadow: scrolled
            ? "0 2px 24px rgba(0,0,0,0.07), inset 0 0 0 0.5px rgba(255,255,255,0.55)"
            : "none",
        }}
      >
        {/* Inner content stays aligned to the page column when full-width, then
            fills the capsule once scrolled. */}
        <div
          className={`flex w-full items-center justify-between gap-7 transition-all duration-300 ease-out motion-reduce:transition-none ${
            scrolled ? "max-w-none pl-5" : "mx-auto max-w-[1100px] pl-6"
          }`}
        >
          <Link href="/" className="flex items-center gap-[9px] no-underline">
            <Image
              src="/logo.png"
              alt="Saastra Labs"
              width={28}
              height={28}
              priority
              className="rounded-full"
            />
            <span className="text-[16px] font-semibold tracking-[-0.01em] text-sl-text">
              Saastra Labs
            </span>
          </Link>

          <div className="flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[14px] no-underline transition-colors"
                style={{
                  color: activePath === l.href ? "#0c0c0c" : "#5a5752",
                  fontWeight: activePath === l.href ? 600 : 450,
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <ChatButton href="#" />
        </div>
      </nav>
    </header>
  )
}
