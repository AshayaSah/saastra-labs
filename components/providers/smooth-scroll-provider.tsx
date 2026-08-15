"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"
import type { LenisOptions } from "lenis"

/**
 * Central Lenis configuration.
 *
 * Conservative, premium-agency tuning:
 * - lerp ≈ 0.09 — subtle inertia, never floaty
 * - wheelMultiplier 1 — keeps wheel speed close to native scrolling
 * - touch scrolling stays native (Lenis only smooths wheel events by default)
 * - autoRaf/autoToggle — single built-in rAF loop, pauses when the tab is hidden
 * - respectReducedMotion (default true) — Lenis auto-disables smoothing and
 *   makes programmatic scrolls instant when `prefers-reduced-motion: reduce`
 * - stopInertiaOnNavigate — resets inertia on browser navigation (back/forward)
 */
const LENIS_OPTIONS: LenisOptions = {
  lerp: 0.09,
  wheelMultiplier: 1,
  smoothWheel: true,
  autoRaf: true,
  autoToggle: true,
  anchors: false,
  stopInertiaOnNavigate: true,
}

type ScrollTarget = number | string | HTMLElement
type ScrollToOptions = Parameters<Lenis["scrollTo"]>[1]

interface SmoothScrollContextValue {
  /** Smoothly scroll to a position, selector or element. Falls back to native scrolling. */
  scrollTo: (target: ScrollTarget, options?: ScrollToOptions) => void
  /** The live Lenis instance (read via getter so it is always current). */
  readonly lenis: Lenis | null
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollTo: () => {},
  lenis: null,
})

export function useSmoothScroll() {
  return useContext(SmoothScrollContext)
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const lenisRef = useRef<Lenis | null>(null)
  const firstPathname = useRef(pathname)

  // Instantiate Lenis once on mount (client only). `respectReducedMotion`
  // degrades to native scrolling for users who prefer reduced motion.
  useEffect(() => {
    const lenis = new Lenis(LENIS_OPTIONS)
    lenisRef.current = lenis

    // Deep link on first load — jump straight to the anchor without animating.
    const hash = window.location.hash
    if (hash && hash !== "#") {
      const target = document.querySelector(hash)
      if (target) lenis.scrollTo(hash, { immediate: true })
    }

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollTo = useCallback((target: ScrollTarget, options?: ScrollToOptions) => {
    const lenis = lenisRef.current
    if (lenis) {
      lenis.scrollTo(target, options)
      return
    }
    // Native fallback (e.g. reduced motion or if Lenis failed to initialise).
    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" })
    } else {
      const el = typeof target === "string" ? document.querySelector(target) : target
      el?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  // Smooth in-page anchor links and keep the URL hash in sync so the browser
  // back/forward buttons restore the right position.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.composedPath?.() ?? []).find(
        (node): node is HTMLAnchorElement => node instanceof HTMLAnchorElement,
      )
      if (!anchor) return
      if (event.defaultPrevented) return
      if (event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (anchor.target && anchor.target !== "_self") return

      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#") || href === "#") return

      const target = document.querySelector(href)
      if (!target) return

      event.preventDefault()
      scrollTo(href)
      if (window.location.hash !== href) {
        window.history.pushState(null, "", href)
      }
    }

    const onPopState = () => {
      const hash = window.location.hash
      if (!hash || hash === "#") return
      if (document.querySelector(hash)) scrollTo(hash)
    }

    document.addEventListener("click", onClick, true)
    window.addEventListener("popstate", onPopState)
    return () => {
      document.removeEventListener("click", onClick, true)
      window.removeEventListener("popstate", onPopState)
    }
  }, [scrollTo])

  // After client-side navigation, restore a deep-link anchor on the new page
  // (content may still be streaming in, so wait one frame for it to mount).
  useEffect(() => {
    if (firstPathname.current === pathname) return
    firstPathname.current = pathname

    const hash = window.location.hash
    if (!hash || hash === "#") return
    requestAnimationFrame(() => {
      if (document.querySelector(hash)) scrollTo(hash)
    })
  }, [pathname, scrollTo])

  const value = useMemo<SmoothScrollContextValue>(
    () => ({
      scrollTo,
      get lenis() {
        return lenisRef.current
      },
    }),
    [scrollTo],
  )

  return <SmoothScrollContext.Provider value={value}>{children}</SmoothScrollContext.Provider>
}