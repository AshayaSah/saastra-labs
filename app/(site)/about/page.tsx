import { BentoCard } from "@/components/ui/bento-card"
import { CtaBand } from "@/components/company/cta-band"
import { FAQAccordion } from "@/components/shared/faq-accordion"
import {
  getPageSections,
  getCompanyStats,
  getCompanyValues,
} from "@/lib/db/queries"

export const metadata = {
  title: "About",
  description:
    "Saastra Labs is a design and engineering studio building digital products that earn their place on the screen.",
}

export default async function AboutPage() {
  const [sections, stats, values] = await Promise.all([
    getPageSections("about"),
    getCompanyStats(),
    getCompanyValues(),
  ])

  return (
    <div className="overflow-x-hidden bg-sl-bg font-sans antialiased">
      <div className="sl-container sl-page-top pb-section-end">
        <div className="sl-display">
          <h1 className="sl-display-title">About</h1>
        </div>
        {/* Stats */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.id} className={`sl-reveal sl-d${(i % 4) + 1}`}>
                <div className="font-display text-[clamp(36px,5vw,48px)] leading-none font-medium tracking-[-0.025em] text-sl-text">
                  {s.value}
                </div>
                <div className="mt-2.5 text-meta text-sl-muted">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Story blocks */}
        {sections.map((s) => (
          <section key={s.id} className="sl-container sl-section-sm">
            <div className="grid gap-6 sm:grid-cols-[200px_1fr] sm:gap-10">
              <div className="sl-reveal">
                <span className="sl-mono-label">{s.eyebrow}</span>
              </div>
              <div className="sl-reveal sl-d1">
                <h2 className="mb-3.5 text-h2 text-sl-text">{s.heading}</h2>
                <p className="max-w-[640px] whitespace-pre-line sl-section-lead">
                  {s.body}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* Values */}
        {values.length > 0 && (
          <section className="sl-container sl-section-sm">
            <h2 className="sl-reveal sl-section-heading">What we <em>value</em></h2>
            <div className="grid gap-[14px] sm:grid-cols-3 2xl:grid-cols-4">
              {values.map((v, i) => (
                <BentoCard
                  key={v.id}
                  className={`sl-reveal sl-d${(i % 3) + 1} min-h-[180px]`}
                >
                  <div className="text-[22px] leading-none text-sl-text">
                    {v.icon}
                  </div>
                  <h3 className="mt-3.5 mb-1.5 text-[16px] font-medium text-sl-text">
                    {v.title}
                  </h3>
                  <p className="m-0 text-[13.5px] leading-[1.55] text-sl-muted">
                    {v.description}
                  </p>
                </BentoCard>
              ))}
            </div>
          </section>
        )}

        <CtaBand />
        <FAQAccordion />
      </div>
    </div>
  )
}
