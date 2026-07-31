"use client"

import type { TestimonialRow } from "@/lib/db/queries"
import { coverStyle } from "@/lib/utils"
import { useBunchCarousel } from "@/components/shared/use-bunch-carousel"

export function TestimonialsCarouselView({ items }: { items: TestimonialRow[] }) {
  const { scrollerRef, page, pageCount, goTo, onScroll } = useBunchCarousel(
    items.length,
  )

  return (
    <section className="overflow-hidden pt-section pb-8">
      <h2 className="sl-reveal sl-section-heading sl-container">
        What people have been saying
      </h2>

      {/* Scroll container — manual scroll + autoplay in bunches of three */}
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="sl-no-sb flex gap-6 overflow-x-auto pb-2 pr-7"
        style={{
          paddingLeft: "max(var(--spacing-gutter),calc(50vw - 522px))",
          scrollSnapType: "x mandatory",
        }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="flex min-h-[220px] flex-[0_0_min(360px,86vw)] flex-col justify-between rounded-card border border-sl-border-dark bg-sl-surface-dark p-6 text-sl-text-inv"
            style={{ scrollSnapAlign: "start" }}
          >
            <div>
              <div className="mb-4 text-[16px] font-bold text-sl-text-inv">
                {t.company}
              </div>
              <p className="m-0 text-[14px] leading-[1.6] text-sl-muted-inv">
                {t.quote}
              </p>
            </div>
            <div className="mt-5 flex items-center gap-2.5">
              <div
                className="h-8.5 w-8.5 flex-shrink-0 rounded-full"
                style={coverStyle(t.avatar, "linear-gradient(140deg,#444,#222)")}
              />
              <div className="leading-[1.25]">
                <div className="text-[13px] font-semibold">{t.name}</div>
                <div className="text-[11.5px] text-sl-subtle-inv">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots — one per bunch */}
      {pageCount > 1 && (
        <div className="mt-0.5 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sl-surface px-3.5 py-2.5">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonials ${i + 1}`}
                aria-current={i === page}
                className="sl-focus-ring h-[7px] cursor-pointer rounded-full border-none p-0 transition-all duration-300"
                style={{
                  width: i === page ? "22px" : "7px",
                  background: i === page ? "var(--color-sl-text)" : "var(--color-sl-border-strong)",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
