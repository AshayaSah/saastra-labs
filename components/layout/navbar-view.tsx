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
  // Hidden at the very top. It slides in as a floating capsule once the user
  // starts scrolling down, and slides back out when scrolling up.
  const [hidden, setHidden] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      if (y <= 8) {
        setHidden(true)
      } else if (y > lastY) {
        setHidden(false)
      } else {
        setHidden(true)
      }
      lastY = y
      setMenuOpen(false)
    }
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
      className={`pointer-events-none fixed top-0 right-0 left-0 z-50 px-3 pt-[10px] transition-transform duration-300 ease-out motion-reduce:transition-none sm:px-5 ${
        hidden ? "-translate-y-[130%]" : "translate-y-0"
      }`}
    >
      <nav
        className="pointer-events-auto mx-auto flex max-w-[880px] items-center justify-between rounded-full border border-sl-border-dark pt-[9px] pr-[9px] pb-[9px] shadow-[0_24px_48px_-24px_rgb(var(--sl-dark-rgb)/0.45)] backdrop-blur-[22px]"
        style={{ background: "rgb(77 12 18 / 1)" }}
      >
        <div className="flex w-full items-center justify-between gap-4 pl-4 transition-all duration-300 ease-out motion-reduce:transition-none sm:gap-7 sm:pl-5">
          <Link href="/" className="flex items-center gap-[9px] no-underline">
            <Image
              src="/logo_new.png"
              alt="Saastra Labs"
              width={28}
              height={28}
              priority
              className="rounded-full"
            />
            <span className="font-display text-[17px] font-medium tracking-[-0.01em] text-sl-text-inv">
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
                  activePath === l.href
                    ? "font-semibold text-sl-text-inv"
                    : "font-normal text-sl-text-inv/70 hover:text-sl-text-inv"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ChatButton href="/contact" variant="cream" />
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((v) => !v)}
              className="sl-focus-ring flex h-11 w-11 items-center justify-center rounded-xl text-sl-text-inv transition-colors hover:bg-sl-text-inv/[0.08] md:hidden"
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
          className="pointer-events-auto mx-3 mt-2 overflow-hidden rounded-2xl border border-sl-border-dark p-2 shadow-[0_24px_48px_-24px_rgb(var(--sl-dark-rgb)/0.45)] backdrop-blur-[22px] md:hidden"
          style={{ background: "rgb(77 12 18 / 0.5)" }}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`sl-focus-ring flex min-h-11 items-center rounded-xl px-4 text-[15px] no-underline transition-colors hover:bg-sl-text-inv/[0.06] ${
                activePath === l.href ? "font-semibold text-sl-text-inv" : "font-normal text-sl-muted-inv"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-2 pt-2 pb-1">
            <ChatButton href="/contact" variant="cream" />
          </div>
        </div>
      )}
    </header>
  )
}
