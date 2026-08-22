import { getProducts } from "@/lib/db/queries"
import { coverStyle } from "@/lib/utils"

export async function ProductsGrid() {
  const PRODUCTS = await getProducts()

  return (
    <section className="relative sl-container sl-section-sm">
      <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 xl:grid-cols-3">
        {PRODUCTS.map((p, i) => (
          <div key={p.id} className={`sl-reveal sl-d${(i % 4) + 1}`}>
            <article className={`sl-prod ${p.dark ? "sl-prod--strong" : ""}`}>
              <a
                href={p.href || "#"}
                className="sl-prod-link"
                aria-label={`${p.ctaLabel || "Visit"} ${p.name}`}
              >
                <span
                  className="sl-prod-media"
                  style={coverStyle(p.image, p.preview)}
                  aria-hidden
                />
                <span className="sl-prod-scrim" aria-hidden />
                <span className="sl-prod-overlay" aria-hidden />

                <div className="sl-prod-body">
                  {p.badge && <span className="sl-prod-eyebrow">{p.badge}</span>}
                  <h3 className="sl-prod-title">{p.name}</h3>

                  <div className="sl-prod-reveal">
                    {p.description && (
                      <p className="sl-prod-desc">{p.description}</p>
                    )}
                    <span className="sl-prod-visit">
                      {p.ctaLabel || "Visit"}
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
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
