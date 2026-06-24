"use client"
import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  // True only for the app's very first mount (the initial SSR hydration pass).
  const firstLoad = useRef(true)

  useEffect(() => {
    const reveal = (el: Element) => el.classList.add("sl-visible")
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let active = true
    let started = false
    let io: IntersectionObserver | null = null
    let mo: MutationObserver | null = null
    let rafId = 0

    const scan = () => {
      if (!active) return
      const targets = document.querySelectorAll(".sl-reveal:not(.sl-visible)")
      // With an observer, reveal on scroll; otherwise show immediately.
      if (io) targets.forEach((el) => io!.observe(el))
      else targets.forEach(reveal)
    }

    const scheduleScan = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = 0
        scan()
      })
    }

    const start = () => {
      if (started || !active) return
      started = true

      if (!prefersReduced && "IntersectionObserver" in window) {
        io = new IntersectionObserver(
          (entries) =>
            entries.forEach((e) => {
              if (e.isIntersecting) {
                reveal(e.target)
                io!.unobserve(e.target)
              }
            }),
          // Low threshold + small bottom margin so sections taller than the
          // viewport (long blog bodies) still reliably trigger.
          { threshold: 0.01, rootMargin: "0px 0px -5% 0px" },
        )
      }

      scan()

      // Routes are async and stream in behind a `loading.tsx` boundary, so
      // reveal targets often mount after this runs (especially on client
      // navigation). Watch for them. By the time `start()` runs, hydration is
      // already complete, so these mutations can't disturb it.
      mo = new MutationObserver(scheduleScan)
      mo.observe(document.body, { childList: true, subtree: true })
    }

    // The critical part: on the first load the document is still hydrating, and
    // mutating reveal elements mid-hydration trips a hydration mismatch. Wait
    // until the page is fully loaded — with streaming SSR that means every
    // Suspense chunk has arrived and hydrated — before revealing anything.
    // Client navigations don't hydrate server HTML, so they start right away.
    let onLoad: (() => void) | null = null
    let backstop = 0
    if (firstLoad.current && document.readyState !== "complete") {
      onLoad = () => requestAnimationFrame(start)
      window.addEventListener("load", onLoad, { once: true })
      // Failsafe so content can never stay hidden if `load` is slow.
      backstop = window.setTimeout(start, 6000)
    } else {
      start()
    }
    firstLoad.current = false

    return () => {
      active = false
      io?.disconnect()
      mo?.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
      if (onLoad) window.removeEventListener("load", onLoad)
      if (backstop) clearTimeout(backstop)
    }
  }, [pathname])

  return <>{children}</>
}
