"use client"

import { useEffect, useRef, useState } from "react"
import { ProjectCard } from "@/components/projects/project-card"
import type { ProjectRow } from "@/lib/db/queries"

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}

export function ProjectDeck({ projects }: { projects: ProjectRow[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const revealRef = useRef<HTMLDivElement>(null)
  const [revealProgress, setRevealProgress] = useState(0)

  const pairs: ProjectRow[][] = []
  for (let i = 0; i < projects.length; i += 2) {
    pairs.push(projects.slice(i, i + 2))
  }

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const track = trackRef.current
      const reveal = revealRef.current
      if (!track || !reveal) return
      const trackTop = track.getBoundingClientRect().top
      const revealHeight = reveal.offsetHeight
      const revealTop = trackTop + reveal.offsetTop
      setRevealProgress(clamp(-revealTop / revealHeight, 0, 1))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const position = revealProgress * Math.max(pairs.length - 1, 0)

  return (
    <div ref={trackRef} className="relative">
      <div className="sticky top-0 px-4 py-16 sm:px-6 lg:px-10">
        <div className="relative h-[860px] sm:h-[600px] lg:h-[640px]">
          {pairs.map((pair, i) => {
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
                {pair.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            )
          })}
        </div>
      </div>
      <div ref={revealRef} style={{ height: `${Math.max(pairs.length - 1, 1) * 480}px` }} aria-hidden />
      {/* Hold: keep the section frozen for a few more scrolls after all cards are shown */}
      <div style={{ height: "1200px" }} aria-hidden />
    </div>
  )
}