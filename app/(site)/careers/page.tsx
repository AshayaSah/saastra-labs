import { BentoCard } from "@/components/ui/bento-card"
import { getCompanyValues, getJobOpenings } from "@/lib/db/queries"

export const metadata = {
  title: "Careers",
  description:
    "Open roles at Saastra Labs — do the best work of your career with a small, deliberate team.",
}

export default async function CareersPage() {
  const [values, jobs] = await Promise.all([
    getCompanyValues(),
    getJobOpenings(),
  ])

  return (
    <div className="overflow-x-hidden bg-sl-bg font-sans antialiased">
      <div className="sl-container sl-page-top pb-section-end">
        <div className="sl-display">
          <span className="sl-display-title">Careers</span>
        </div>
        {/* How we work */}
        {values.length > 0 && (
          <div>
            <div className="grid gap-[14px] sm:grid-cols-3">
              {values.map((v, i) => (
                <BentoCard
                  key={v.id}
                  className={`sl-reveal sl-d${(i % 3) + 1} min-h-[180px]`}
                >
                  <div className="text-[22px] leading-none text-sl-text">
                    {v.icon}
                  </div>
                  <h3 className="mt-3.5 mb-1.5 text-[16px] font-semibold text-sl-text">
                    {v.title}
                  </h3>
                  <p className="m-0 text-[13.5px] leading-[1.55] text-sl-muted">
                    {v.description}
                  </p>
                </BentoCard>
              ))}
            </div>
          </div>
        )}

        {/* Open roles */}
        <section className="sl-container sl-section-sm">
          <h2 className="sl-reveal sl-section-heading">Open roles</h2>

          {jobs.length === 0 ? (
            <div className="sl-reveal sl-card items-start">
              <p className="m-0 text-body text-sl-muted">
                No open roles right now — but we&apos;re always glad to meet
                good people.{" "}
                <a
                  href="/contact"
                  className="font-semibold text-sl-text underline"
                >
                  Say hello
                </a>{" "}
                and tell us what you do.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-[14px]">
              {jobs.map((j, i) => (
                <a
                  key={j.id}
                  href={j.applyHref || "/contact"}
                  className={`sl-reveal sl-d${(i % 4) + 1} sl-card gap-5 transition-colors hover:border-sl-text sm:flex-row sm:items-center sm:justify-between`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="m-0 text-[17px] font-semibold text-sl-text">
                        {j.title}
                      </h3>
                      {j.type && (
                        <span className="sl-badge-green">{j.type}</span>
                      )}
                    </div>
                    <div className="mt-1.5 text-meta text-sl-subtle">
                      {[j.department, j.location].filter(Boolean).join(" · ")}
                    </div>
                    {j.description && (
                      <p className="mt-2.5 mb-0 max-w-[640px] text-[13.5px] leading-[1.55] text-sl-muted">
                        {j.description}
                      </p>
                    )}
                  </div>
                  <span className="sl-btn shrink-0 whitespace-nowrap">
                    Apply
                  </span>
                </a>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
