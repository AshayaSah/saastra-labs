"use client"

import { useCallback, useEffect, useRef, useState } from "react"

/**
 * Drives a horizontal card strip that pages in "bunches" (default 3 cards).
 * Provides autoplay (paused on hover / reduced-motion), manual scroll sync,
 * and one dot per bunch. Steps are measured from the DOM so it stays correct
 * regardless of card width, gap or the strip's left gutter.
 */
export function useBunchCarousel(
  itemCount: number,
  perPage = 3,
  intervalMs = 5000,
) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)
  const pageRef = useRef(0)
  const pageCount = Math.max(1, Math.ceil(itemCount / perPage))

  useEffect(() => {
    pageRef.current = page
  }, [page])

  // Distance between two adjacent cards (card width + gap).
  const cardStep = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return 0
    const cards = el.children
    const first = cards[0] as HTMLElement | undefined
    if (!first) return 0
    const second = cards[1] as HTMLElement | undefined
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth
  }, [])

  const goTo = useCallback(
    (p: number) => {
      const el = scrollerRef.current
      if (!el) return
      const target = Math.max(0, Math.min(pageCount - 1, p))
      const cards = el.children
      const first = cards[0] as HTMLElement | undefined
      const card = cards[target * perPage] as HTMLElement | undefined
      if (first && card) {
        el.scrollTo({ left: card.offsetLeft - first.offsetLeft, behavior: "smooth" })
      }
      pageRef.current = target
      setPage(target)
    },
    [pageCount, perPage],
  )

  const onScroll = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    // Snap the active dot to the last page once scrolled to the very end.
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
      setPage(pageCount - 1)
      return
    }
    const step = cardStep()
    if (!step) return
    const p = Math.round(el.scrollLeft / (step * perPage))
    setPage(Math.max(0, Math.min(pageCount - 1, p)))
  }, [cardStep, pageCount, perPage])

  // Autoplay through the bunches.
  useEffect(() => {
    if (pageCount <= 1) return
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }
    const el = scrollerRef.current
    let paused = false
    const pause = () => {
      paused = true
    }
    const resume = () => {
      paused = false
    }
    el?.addEventListener("pointerenter", pause)
    el?.addEventListener("pointerleave", resume)
    el?.addEventListener("focusin", pause)
    el?.addEventListener("focusout", resume)

    const id = setInterval(() => {
      if (!paused) goTo((pageRef.current + 1) % pageCount)
    }, intervalMs)

    return () => {
      clearInterval(id)
      el?.removeEventListener("pointerenter", pause)
      el?.removeEventListener("pointerleave", resume)
      el?.removeEventListener("focusin", pause)
      el?.removeEventListener("focusout", resume)
    }
  }, [pageCount, intervalMs, goTo])

  return { scrollerRef, page, pageCount, goTo, onScroll }
}
