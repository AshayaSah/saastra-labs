import type { CSSProperties } from "react"
import { getProjects } from "@/lib/db/queries"

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v || min))

export async function ProjectsGrid() {
  const PROJECTS = await getProjects()

  return (
    <section className="relative sl-container sl-section">
      {/* Watermark heading */}
      <div className="sl-display">
        <span className="sl-display-title">Projects</span>
      </div>

      <div className="sl-projects-grid">
        {PROJECTS.map((p, i) => {
          const media = p.image
            ? { backgroundImage: `url(${p.image})` }
            : { background: p.preview }
          const span = {
            "--col-span": clamp(p.colSpan, 1, 6),
            "--row-span": clamp(p.rowSpan, 1, 3),
          } as CSSProperties

          return (
            <article
              key={p.id}
              style={span}
              className={`sl-project sl-reveal sl-d${(i % 4) + 1} ${
                p.dark ? "sl-project--strong" : ""
              }`}
            >
              <a
                href={p.href || "#"}
                className="sl-project-link"
                aria-label={`View project: ${p.title}`}
              >
                <span className="sl-project-media" style={media} aria-hidden />

                <div className="sl-project-overlay">
                  <div className="sl-project-top">
                    {p.tag && <span className="sl-project-tag">{p.tag}</span>}
                    <h3 className="sl-project-title">{p.title}</h3>
                    {p.description && (
                      <p className="sl-project-desc">{p.description}</p>
                    )}
                  </div>

                  <div className="sl-project-foot">
                    <span className="sl-project-cta">
                      View project
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M3 7h8M7 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {p.meta && <span className="sl-project-meta">{p.meta}</span>}
                  </div>
                </div>
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
