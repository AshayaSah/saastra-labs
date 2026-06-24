"use client"

import { useState, useCallback } from "react"
import { TESTIMONIALS } from "@/lib/constants"

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const i = Math.round(e.currentTarget.scrollLeft / 374)
    if (i !== activeIndex) setActiveIndex(i)
  }, [activeIndex])

  return (
    <section className="pt-section pb-8 overflow-hidden">
      <h2 className="sl-reveal sl-section-heading sl-container">
        What people have been saying
      </h2>

      {/* Scroll container */}
      <div
        id="people-scroll"
        onScroll={onScroll}
        className="sl-no-sb flex gap-6 overflow-x-auto pb-2 pr-7"
        style={{
          paddingLeft: "max(28px,calc(50vw - 522px))",
          scrollSnapType: "x mandatory",
        }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="flex-[0_0_360px] bg-sl-surface-dark border border-sl-border-dark rounded-card p-6 text-white min-h-[220px] flex flex-col justify-between"
            style={{ scrollSnapAlign: "start" }}
          >
            <div>
              <div className="text-[16px] font-bold mb-4 text-white">{t.company}</div>
              <p className="m-0 text-[14px] leading-[1.6] text-sl-muted-inv">{t.quote}</p>
            </div>
            <div className="flex items-center gap-[10px] mt-5">
              <div
                className="w-[34px] h-[34px] rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(140deg,#444,#222)" }}
              />
              <div className="leading-[1.25]">
                <div className="text-[13px] font-semibold">{t.name}</div>
                <div className="text-[11.5px] text-sl-subtle-inv">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-[2px]">
        <div className="inline-flex gap-2 items-center bg-white rounded-full px-[13px] py-[9px]">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                document.getElementById("people-scroll")?.scrollTo({ left: i * 374, behavior: "smooth" })
                setActiveIndex(i)
              }}
              className="h-[7px] rounded-full border-none p-0 cursor-pointer transition-all duration-300"
              style={{
                width: i === activeIndex ? "22px" : "7px",
                background: i === activeIndex ? "#0c0c0c" : "#cdcac2",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
