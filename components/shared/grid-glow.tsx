/**
 * Reusable hero-style backdrop for dark sections: a faint cream box grid
 * over a soft gradient wash. Pure CSS, ambient only — aria-hidden, inert.
 */
export function GridGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid-lines" />
      <div className="hero-glow hero-glow--top" />
      <div className="hero-glow hero-glow--wine" />
    </div>
  )
}