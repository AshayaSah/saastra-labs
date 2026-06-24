"use client"

import { useState, useCallback } from "react"
import { INSIGHTS } from "@/lib/constants"

export function InsightsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const i = Math.round(e.currentTarget.scrollLeft / 334)
    if (i !== activeIndex) setActiveIndex(i)
  }, [activeIndex])

  return (
    <section className="pt-[140px] pb-8 overflow-hidden">
      <h2 className="sl-reveal sl-section-heading max-w-[1100px] mx-auto px-7">
        See insights straight from our clients
      </h2>

      {/* Scroll container */}
      <div
        id="insights-scroll"
        onScroll={onScroll}
        className="sl-no-sb flex gap-6 overflow-x-auto pb-2 pr-7"
        style={{
          paddingLeft: "max(28px,calc(50vw - 522px))",
          scrollSnapType: "x mandatory",
        }}
      >
        {INSIGHTS.map((t, i) => (
          <div
            key={i}
            className="flex-[0_0_320px] bg-white border border-[#efedea] rounded-[18px] p-[22px] flex flex-col justify-between min-h-[185px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div>
              <span className="sl-mono-label">{t.tag}</span>
              <p className="mt-3 mb-0 text-[14px] leading-[1.55] text-[#27251f]">{t.text}</p>
            </div>
            <div className="flex items-center gap-[10px] mt-[18px]">
              <div
                className="w-[34px] h-[34px] rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(140deg,#c9c6bf,#a8a59d)" }}
              />
              <div className="leading-[1.25]">
                <div className="text-[13px] font-semibold">{t.name}</div>
                <div className="text-[11.5px] text-sl-subtle">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-[2px]">
        <div className="inline-flex gap-2 items-center bg-white rounded-full px-[13px] py-[9px]">
          {INSIGHTS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                document.getElementById("insights-scroll")?.scrollTo({ left: i * 334, behavior: "smooth" })
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
