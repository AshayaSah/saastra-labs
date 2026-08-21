"use client"

import { useEffect, useRef, useState } from "react"
import { ProjectCard } from "@/components/projects/project-card"
import type { ProjectRow } from "@/lib/db/queries"

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}

export function ProjectDeck({ projects }: { projects: ProjectRow[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [revealProgress, setRevealProgress] = useState(0)

  const groups: ProjectRow[][] = []
  for (let i = 0; i < projects.length; i += 2) {
    groups.push(projects.slice(i, i + 2))
  }
  const maxStep = Math.max(groups.length - 1, 0)
  const revealHeight = Math.max(maxStep, 1) * 240

  const targetRef = useRef(0)
  const progressRef = useRef(0)
  const activeRef = useRef(false)
  const usedWheelRef = useRef(false)
  const wheelDirRef = useRef(0)
  const wheelBurstRef = useRef(0)
  const wheelTimerRef = useRef(0)
  const rafRef = useRef(0)
  const tweenRef = useRef<{ from: number; to: number; start: number } | null>(null)

  /* Tween the displayed progress toward a target step. Always settles exactly
     on a full step, so the deck never rests mid-transition. */
  const animateTo = (to: number) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      progressRef.current = to
      setRevealProgress(to)
      return
    }
    const from = progressRef.current
    tweenRef.current = { from, to, start: performance.now() }
    if (!rafRef.current) {
      const tick = (now: number) => {
        const t = tweenRef.current
        if (!t) {
          rafRef.current = 0
          return
        }
        const k = Math.min((now - t.start) / 700, 1)
        const eased = 1 - Math.pow(1 - k, 3)
        const value = t.from + (t.to - t.from) * eased
        progressRef.current = value
        setRevealProgress(value)
        if (k < 1) {
          rafRef.current = requestAnimationFrame(tick)
        } else {
          rafRef.current = 0
          tweenRef.current = null
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }
  }

  useEffect(() => {
    const track = trackRef.current
    const updateActive = () => {
      if (!track) return
      const top = track.getBoundingClientRect().top
      activeRef.current = top <= 0 && top > -revealHeight
    }

    /* Wheel (desktop): two discrete scrolls advance exactly one step — the
       cards animate to the front. Debounced so a single wheel burst counts as
       one scroll; a direction change resets the accumulation. */
    const onWheel = (e: WheelEvent) => {
      if (!track) return
      const top = track.getBoundingClientRect().top
      if (top > 0 || top <= -revealHeight) return
      const delta = e.deltaY
      if (Math.abs(delta) < 1) return
      usedWheelRef.current = true
      const dir = Math.sign(delta)
      if (wheelDirRef.current !== 0 && wheelDirRef.current !== dir) {
        wheelBurstRef.current = 0
      }
      wheelDirRef.current = dir
      clearTimeout(wheelTimerRef.current)
      wheelTimerRef.current = window.setTimeout(() => {
        wheelBurstRef.current += 1
        if (wheelBurstRef.current >= 2) {
          wheelBurstRef.current = 0
          targetRef.current = clamp(targetRef.current + dir, 0, maxStep)
          animateTo(maxStep === 0 ? 0 : targetRef.current / maxStep)
        }
        wheelDirRef.current = 0
      }, 90)
    }

    /* Scroll fallback (touch / scrollbar): snap to the nearest full step so
       non-wheel input also never rests mid-way. */
    const onScroll = () => {
      if (!track) return
      updateActive()
      if (!activeRef.current || usedWheelRef.current) return
      const progress = clamp(-track.getBoundingClientRect().top / revealHeight, 0, 1)
      const snapped = Math.round(progress * maxStep)
      if (snapped !== targetRef.current) {
        targetRef.current = snapped
        animateTo(maxStep === 0 ? 0 : snapped / maxStep)
      }
    }

    updateActive()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("wheel", onWheel, { passive: true })
    window.addEventListener("resize", updateActive, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("resize", updateActive)
      clearTimeout(wheelTimerRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [maxStep, revealHeight])

  const position = revealProgress * maxStep

  return (
    <div ref={trackRef} className="relative">
      <div className="sticky top-0 px-4 pt-10 pb-16 sm:px-6 lg:px-10">
        <div className="relative h-[1200px] sm:h-[600px] lg:h-[640px]">
          {groups.map((group, i) => {
            const inProgress = clamp(position - (i - 1), 0, 1)
            const outProgress = clamp(position - i, 0, 1)
            const translateX = (1 - inProgress - outProgress) * 100
            const scale = 0.8 + 0.2 * inProgress - 0.1 * outProgress
            return (
              <div
                key={i}
                className="absolute inset-0 grid grid-cols-1 gap-6 sm:grid-cols-2"
                style={{
                  transform: `translateX(${translateX}%) scale(${scale})`,
                  opacity: inProgress > 0 ? 1 : 0,
                  zIndex: i,
                }}
              >
                {group.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            )
          })}
        </div>
      </div>
      <div style={{ height: `${revealHeight}px` }} aria-hidden />
    </div>
  )
}