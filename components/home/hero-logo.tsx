"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChatButton } from "@/components/chat-button"

export function HeroLogo() {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    let lastY = window.scrollY
    const update = () => {
      const maroon = document.querySelector<HTMLElement>("[data-hero-maroon]")
      const y = window.scrollY
      const maroonBottom = maroon
        ? maroon.getBoundingClientRect().top + y + maroon.offsetHeight
        : window.innerHeight
      const inMaroon = y < maroonBottom
      const navbarHidden = y <= 8 || y <= lastY
      setHidden(!(inMaroon && navbarHidden))
      lastY = y
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update, { passive: true })
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between px-3 pt-[14px] transition-opacity duration-300 ease-out motion-reduce:transition-none sm:px-5 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/logonewbg.png"
        alt="Saastra Labs"
        width={72}
        height={72}
        priority
      />
      <div className="pointer-events-auto">
        <ChatButton variant="cream" />
      </div>
    </div>
  )
}
