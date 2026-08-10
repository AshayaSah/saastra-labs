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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile menu when the viewport grows past the breakpoint.
  useEffect(() => {
    if (!menuOpen) return
    const mq = window.matchMedia("(min-width: 768px)")
    const close = () => setMenuOpen(false)
    mq.addEventListener("change", close)
    return () => mq.removeEventListener("change", close)
  }, [menuOpen])

  return (
    <header
      className={`pointer-events-none fixed top-0 right-0 left-0 z-50 transition-[padding] duration-300 ease-out motion-reduce:transition-none ${
        scrolled ? "px-3 pt-[10px] sm:px-5" : "px-0 pt-0"
      }`}
    >
      <nav
        className={`pointer-events-auto mx-auto flex items-center justify-between border pt-[9px] pr-[9px] pb-[9px] backdrop-blur-[22px] transition-all duration-300 ease-out motion-reduce:transition-none ${
          scrolled
            ? "max-w-[880px] rounded-2xl border-sl-text/[0.07] shadow-[var(--shadow-nav)]"
            : "max-w-full rounded-none border-x-0 border-t-0 border-b-sl-text/[0.06] shadow-none"
        }`}
        style={{
          background: scrolled
            ? "rgb(var(--sl-surface-2-rgb) / 0.70)"
            : "rgb(var(--sl-surface-2-rgb) / 0.92)",
        }}
      >
        <div
          className={`flex w-full items-center justify-between gap-4 transition-all duration-300 ease-out motion-reduce:transition-none sm:gap-7 ${
            scrolled ? "max-w-none pl-4 sm:pl-5" : "mx-auto max-w-[var(--sl-container-content)] pl-5 sm:pl-6"
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

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`sl-focus-ring rounded-control text-[14px] no-underline transition-colors ${
                  activePath === l.href ? "font-semibold text-sl-text" : "font-[450] text-sl-nav-link"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ChatButton href="/contact" />
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((v) => !v)}
              className="sl-focus-ring flex h-11 w-11 items-center justify-center rounded-xl text-sl-text transition-colors hover:bg-sl-text/[0.05] md:hidden"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                {menuOpen ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="pointer-events-auto mx-3 mt-2 overflow-hidden rounded-2xl border border-sl-text/[0.07] p-2 shadow-[0_8px_30px_rgb(var(--sl-dark-rgb)/0.12)] backdrop-blur-[22px] md:hidden"
          style={{ background: "rgb(var(--sl-surface-2-rgb) / 0.96)" }}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`sl-focus-ring flex min-h-11 items-center rounded-xl px-4 text-[15px] no-underline transition-colors hover:bg-sl-text/[0.04] ${
                activePath === l.href ? "font-semibold text-sl-text" : "font-[450] text-sl-body"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-2 pt-2 pb-1">
            <ChatButton href="/contact" />
          </div>
        </div>
      )}
    </header>
  )
}
