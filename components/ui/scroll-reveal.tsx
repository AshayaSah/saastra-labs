"use client"
import { useEffect } from "react"

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("sl-visible") }),
      { threshold: 0.12 }
    )
    document.querySelectorAll(".sl-reveal").forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  return <>{children}</>
}
