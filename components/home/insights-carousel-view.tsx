import type { InsightRow } from "@/lib/db/queries"
import { coverStyle } from "@/lib/utils"

export function InsightsCarouselView({ items }: { items: InsightRow[] }) {
  const track = [...items, ...items]

  return (
    <section className="overflow-hidden pt-section pb-8">
      <h2 className="sl-reveal sl-section-heading sl-container">
        See insights straight from <em>our clients</em>
      </h2>

      {/* Single looping row of maroon cards */}
      <div
        className="flex w-max gap-6 pt-1 hover:[animation-play-state:paused]"
        style={{ animation: "marquee 45s linear infinite reverse" }}
      >
        {track.map((t, i) => (
          <div
            key={i}
            className="group relative z-0 flex w-[min(340px,86vw)] flex-none flex-col justify-between rounded-card border border-sl-border-dark bg-sl-accent p-5.5 shadow-card transition duration-300 ease-out hover:z-20 hover:scale-[1.1] hover:shadow-pop"
          >
            <div>
              <span className="sl-mono-label text-sl-text-inv/60">{t.tag}</span>
              <p className="mt-3 mb-0 text-copy leading-relaxed text-sl-text-inv">
                {t.text}
              </p>
            </div>
            <div className="mt-4.5 flex items-center gap-2.5">
              <div
                className="h-8.5 w-8.5 flex-shrink-0 rounded-full"
                style={coverStyle(t.avatar, "linear-gradient(140deg,#F6F3E4,#EAE5D4)")}
              />
              <div className="leading-[1.25]">
                <div className="text-[13px] font-semibold text-sl-text-inv">{t.name}</div>
                <div className="text-[11.5px] text-sl-text-inv/60">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}