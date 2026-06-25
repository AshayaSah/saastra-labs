"use client"

import type { InsightRow } from "@/lib/db/queries"
import { coverStyle } from "@/lib/utils"
import { useBunchCarousel } from "@/components/shared/use-bunch-carousel"

export function InsightsCarouselView({ items }: { items: InsightRow[] }) {
  const { scrollerRef, page, pageCount, goTo, onScroll } = useBunchCarousel(
    items.length,
  )

  return (
    <section className="overflow-hidden pt-section pb-8">
      <h2 className="sl-reveal sl-section-heading sl-container">
        See insights straight from our clients
      </h2>

      {/* Scroll container — manual scroll + autoplay in bunches of three */}
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="sl-no-sb flex gap-6 overflow-x-auto pb-2 pr-7"
        style={{
          paddingLeft: "max(28px,calc(50vw - 522px))",
          scrollSnapType: "x mandatory",
        }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="flex min-h-[185px] flex-[0_0_320px] flex-col justify-between rounded-[18px] border border-[#efedea] bg-white p-[22px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div>
              <span className="sl-mono-label">{t.tag}</span>
              <p className="mt-3 mb-0 text-[14px] leading-[1.55] text-[#27251f]">
                {t.text}
              </p>
            </div>
            <div className="mt-[18px] flex items-center gap-[10px]">
              <div
                className="h-[34px] w-[34px] flex-shrink-0 rounded-full"
                style={coverStyle(t.avatar, "linear-gradient(140deg,#c9c6bf,#a8a59d)")}
              />
              <div className="leading-[1.25]">
                <div className="text-[13px] font-semibold">{t.name}</div>
                <div className="text-[11.5px] text-sl-subtle">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots — one per bunch */}
      {pageCount > 1 && (
        <div className="mt-[2px] flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-[13px] py-[9px]">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to insights ${i + 1}`}
                aria-current={i === page}
                className="h-[7px] cursor-pointer rounded-full border-none p-0 transition-all duration-300"
                style={{
                  width: i === page ? "22px" : "7px",
                  background: i === page ? "#0c0c0c" : "#cdcac2",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
