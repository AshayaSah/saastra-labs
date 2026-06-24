"use client"
import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  // True only for the very first mount of the app (initial SSR hydration).
  const firstLoad = useRef(true)

  useEffect(() => {
    const reveal = (el: Element) => el.classList.add("sl-visible")
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // No animation: just make sure everything is visible, including content
    // that streams in later behind a loading boundary.
    if (prefersReduced || !("IntersectionObserver" in window)) {
      const revealAll = () => document.querySelectorAll(".sl-reveal").forEach(reveal)
      revealAll()
      const timers = [120, 400, 900, 1600, 2600].map((d) =>
        window.setTimeout(revealAll, d),
      )
      const mo = new MutationObserver(revealAll)
      mo.observe(document.body, { childList: true, subtree: true })
      return () => {
        timers.forEach(clearTimeout)
        mo.disconnect()
      }
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target)
            io.unobserve(e.target)
          }
        }),
      // Low threshold + a small bottom margin so sections taller than the
      // viewport (e.g. long blog bodies) still reliably trigger.
      { threshold: 0.01, rootMargin: "0px 0px -5% 0px" },
    )

    let active = true
    const scan = () => {
      if (!active) return
      document
        .querySelectorAll(".sl-reveal:not(.sl-visible)")
        .forEach((el) => io.observe(el))
    }

    // Routes are async and stream in behind a Suspense/`loading.tsx` skeleton,
    // so reveal targets often mount *after* this effect runs. Re-scan across the
    // streaming window to catch them. These run after the streamed chunks have
    // hydrated, so they don't disturb hydration.
    scan()
    const timers = [80, 200, 450, 800, 1300, 2000].map((d) =>
      window.setTimeout(scan, d),
    )

    // Long-tail safety net for content slower than the timer window. A
    // MutationObserver reacts the instant nodes are inserted — during the
    // initial SSR hydration that could mutate a node mid-hydration and trip a
    // hydration warning, so on the first load we delay it until hydration is
    // certainly finished. Client navigations have no hydration, so connect now.
    let rafId = 0
    const scheduleScan = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = 0
        scan()
      })
    }
    const mo = new MutationObserver(scheduleScan)
    const connectMO = () =>
      active && mo.observe(document.body, { childList: true, subtree: true })

    let moTimer = 0
    if (firstLoad.current) moTimer = window.setTimeout(connectMO, 2500)
    else connectMO()
    firstLoad.current = false

    return () => {
      active = false
      io.disconnect()
      mo.disconnect()
      timers.forEach(clearTimeout)
      if (moTimer) clearTimeout(moTimer)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [pathname])

  return <>{children}</>
}
