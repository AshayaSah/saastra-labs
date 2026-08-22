/**
 * Decorative hero backdrop: a plain bordeaux field lit by ultra-subtle radial
 * lighting — a soft cream wash near the top and a deep wine bloom in the lower
 * right. Pure CSS (no JS). This layer is purely ambient, so it is aria-hidden
 * and pointer-events-none.
 */
export function HeroHorizon() {
  return (
    <div aria-hidden className="hero-horizon pointer-events-none absolute inset-0 overflow-hidden">
      {/* Faint cream lattice, fading out toward the mid-field */}
      <div className="hero-grid-lines" />

      {/* Soft cream top-light */}
      <div className="hero-glow hero-glow--top" />

      {/* Deep wine bloom along the lower right */}
      <div className="hero-glow hero-glow--wine" />
    </div>
  )
}
