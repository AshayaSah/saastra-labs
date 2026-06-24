/**
 * Decorative hero backdrop: a faint starfield over a dark planet whose top rim
 * glows like a sunrise. Pure CSS (no JS) — the glow pulse and star twinkle are
 * keyframe animations that disable themselves under prefers-reduced-motion.
 * This layer is purely ambient, so it is aria-hidden and pointer-events-none.
 */
export function HeroHorizon() {
  return (
    <div aria-hidden className="hero-horizon pointer-events-none absolute inset-0 overflow-hidden">
      {/* Faint blueprint grid, fading out toward the horizon */}
      <div className="hero-grid-lines" />

      {/* Starfield (two parallax depths) */}
      <div className="hero-stars hero-stars-far" />
      <div className="hero-stars hero-stars-near" />

      {/* Sunrise glow rising from the horizon */}
      <div className="hero-sunrise" />

      {/* Dark planet — its crisp top edge becomes the horizon line */}
      <div className="hero-planet" />

      {/* Concentrated hot spot at the centre of the rim */}
      <div className="hero-sunrise-core" />
    </div>
  )
}
