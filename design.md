---
version: 1
name: SAASTRA Labs
description: SAASTRA Labs design system. A warm-neutral, high-contrast marketing aesthetic with a single yellow accent and a crimson brand mark. All tokens are defined in `app/globals.css` under `@theme` and consumed as Tailwind v4 utilities.
source-of-truth: app/globals.css (@theme block)
colors:
  # Surfaces
  sl-bg: "#e9e7e2"              # page background (light)
  sl-dark: "#060606"           # page background (dark) — hero, footer
  sl-surface: "#ffffff"        # card on light
  sl-surface-2: "#f3f1ec"      # subtle fill / tags / icon wells
  sl-surface-dark: "#0b0b0b"   # card on dark
  sl-surface-dark-2: "#101010" # nested fill on dark
  # Text — light surfaces
  sl-text: "#0c0c0c"           # primary
  sl-body: "#3a382f"           # long-form body copy
  sl-muted: "#6b6862"          # secondary
  sl-subtle: "#8a877f"         # tertiary / meta
  # Text — dark surfaces
  sl-text-inv: "#f0eeea"       # primary
  sl-muted-inv: "#cfcfcf"      # secondary
  sl-subtle-inv: "#8a8a8a"     # tertiary / meta
  # Borders
  sl-border: "#e6e4df"         # default on light
  sl-border-strong: "#d9d6cf"  # emphasized on light
  sl-border-dark: "#1c1c1c"    # on dark
  # Brand & state
  sl-accent: "#f5c518"         # primary accent (yellow)
  sl-accent-ink: "#0a0a0a"     # text/icon on accent
  sl-brand: "#710014"          # crimson (logo mark)
  sl-green: "#1f9d57"          # success
  sl-green-light: "#eafaef"    # success surface
typography:
  display: { size: "clamp(76px,19vw,280px)", lineHeight: 0.76, letterSpacing: -0.035em, weight: 800 }
  hero:    { size: "clamp(40px,6vw,62px)",    lineHeight: 1.02, letterSpacing: -0.035em, weight: 600 }
  h1:      { size: "clamp(28px,3.8vw,44px)",  lineHeight: 1.1,  letterSpacing: -0.03em,  weight: 700 }
  h2:      { size: "clamp(30px,2.5vw,36px)",  lineHeight: 1.15, letterSpacing: -0.025em, weight: 600 }
  h3:      { size: "clamp(19px,1.6vw,22px)",  lineHeight: 1.3,  letterSpacing: -0.01em,  weight: 600 }
  h4:      { size: "clamp(16px,1.3vw,18px)",  lineHeight: 1.4,  weight: 600 }
  body:    { size: "clamp(15px,1.25vw,17px)", lineHeight: 1.6 }
  copy:    { size: "clamp(13.5px,1.15vw,15.5px)", lineHeight: 1.55 }
  meta:    { size: "clamp(13px,1.1vw,14.5px)", lineHeight: 1.5 }
  eyebrow: { size: 10px, lineHeight: 1.2, letterSpacing: 0.12em }
spacing:
  gutter: "clamp(20px,2vw,24px)"  # container side padding (fluid, mobile 20px → desktop 24px)
  page-top: 150px    # first block offset below the fixed navbar
  section: 144px     # opens a section (top)
  section-sm: 88px   # tighter section gap (top)
  section-end: 96px  # section bottom padding
rounded:
  control: 10px      # buttons & inputs
  card: 18px         # cards & media
  pill: 9999px
shadow:
  card: "0 2px 2px rgba(0,0,0,.04)"
  pop: "0 1px 1px rgba(0,0,0,.02), 0 4px 8px -4px rgba(0,0,0,.04), 0 16px 24px -8px rgba(0,0,0,.06)"
fonts:
  sans: Geist (var --font-sans)
  mono: Geist Mono (var --font-mono)
---

# SAASTRA Labs design system

## How this works

Every token lives once, in the `@theme` block of `app/globals.css`. Tailwind v4 turns each token into a utility, so you **never hardcode a value in a component** — you reference the token:

| Token group | Defined as | Used as |
| --- | --- | --- |
| Color | `--color-sl-muted` | `text-sl-muted`, `bg-sl-surface`, `border-sl-border` |
| Spacing | `--spacing-section` | `pt-section`, `py-section`, `gap-section` |
| Radius | `--radius-card` | `rounded-card`, `rounded-control`, `rounded-pill` |
| Shadow | `--shadow-card` | `shadow-card`, `shadow-pop` |
| Type | `--text-h3` | `text-h3`, `text-body`, `text-eyebrow` |

**To restyle the whole site, edit `globals.css` — not the components.** Change `--color-sl-accent` and every button, badge, and CTA updates. Change `--spacing-section` and every section gap re-flows together.

Repeated compound patterns are wrapped in semantic classes (also in `globals.css`, `@layer components`) so markup stays declarative: `.sl-container`, `.sl-section`, `.sl-page-top`, `.sl-card`, `.sl-card-dark`, `.sl-section-heading`, `.sl-display` / `.sl-display-title`, `.sl-btn`, `.sl-badge-*`, `.sl-mono-label`.

## Colors

The palette is warm-neutral, not gray. Surfaces sit on a parchment `sl-bg`; the dark sections use near-black `sl-dark`. Color is used for **state and the single most important action**, never decoration.

- **Surfaces.** `sl-bg` is the page; `sl-surface` (white) is a card on light; `sl-surface-2` is a subtle fill (tags, icon wells). On dark sections, `sl-dark` is the page and `sl-surface-dark` is a card.
- **Text has a 4-step ramp per background.** On light: `sl-text` (primary) → `sl-body` (body copy) → `sl-muted` (secondary) → `sl-subtle` (meta). On dark: `sl-text-inv` → `sl-muted-inv` → `sl-subtle-inv`. Pick by role, not by eyeballing a hex.
- **Borders** are their own scale: `sl-border` default, `sl-border-strong` on hover/emphasis, `sl-border-dark` on dark.
- **Accent is yellow** (`sl-accent`) with `sl-accent-ink` for text on top of it. Reserve it for the primary CTA and key highlights. `sl-brand` (crimson) is the logo mark color, available but used sparingly.
- **State** uses `sl-green` on `sl-green-light`. Don't signal state with color alone — pair it with the ✓/✕ glyph as the comparison table does.

## Typography

Geist Sans for UI and prose, Geist Mono for labels, data, and code-like metadata. Use the type tokens instead of setting `text-[..px]`, `leading-[..]`, `tracking-[..]` by hand — each token already carries size, line-height, tracking, and weight.

- **`display`** — the oversized watermark page title (Projects / Pricing / Blog). Always via `.sl-display-title`.
- **`hero`** — the homepage headline only.
- **`h1`–`h4`** — page and section headings. Section headings use `.sl-section-heading` (which is `text-h2`).
- **`body` / `copy` / `meta`** — running text, descriptions, and small print, in descending size.
- **`eyebrow`** — the mono uppercase kicker (`.sl-mono-label`).

## Layout & spacing

Spacing is a 4px-based scale. Three values carry the page rhythm and they are the **only** place vertical spacing should come from:

- **`page-top` (150px)** — first block on an inner page; clears the fixed navbar. Apply `.sl-page-top`.
- **`section` (144px) / `section-sm` (88px)** top, **`section-end` (96px)** bottom — between-section rhythm. Apply `.sl-section` (or `.sl-section-sm`).
- **`gutter` (clamp 20→24px)** — fluid container side padding, baked into `.sl-container` (max-width 1560px, centered). Grows with the viewport from the mobile 20px floor to a 24px desktop cap.

A standard page is therefore: `.sl-container` for width, `.sl-page-top` on the first block, `.sl-section` on each following section. Don't reintroduce one-off `pt-[148px]`-style values — change the token if the rhythm needs to move.

## Shapes & elevation

One radius family per surface type: `rounded-control` (10px) for buttons/inputs, `rounded-card` (18px) for cards and media, `rounded-pill` for badges, avatars, and the navbar. Hierarchy comes from surface tone and borders first; shadows stay subtle — `shadow-card` for raised cards, `shadow-pop` for popovers/menus.

## Motion

Motion is sparing and physical. The scroll-reveal (`.sl-reveal`, staggered with `.sl-d1`–`.sl-d5`) fades content up as it enters the viewport. Decorative loops (marquee, button shimmer/glow) are ambient and slow. Keep new motion short; honor `prefers-reduced-motion`.

## Do's and don'ts

- **Do** reference tokens (`text-sl-muted`, `pt-section`, `rounded-card`) — never raw hex or arbitrary px for color, section spacing, or radius.
- **Do** rank text with the role ramp (`sl-text` → `sl-body` → `sl-muted` → `sl-subtle`), mirrored on dark.
- **Do** reuse the semantic classes for repeated patterns instead of re-typing the utility soup.
- **Don't** add a new section spacing value in a component; adjust `--spacing-section` instead.
- **Don't** mix radius families in one view, or use the accent yellow for more than the primary action and highlights.
- **Don't** swap `sl-surface-*` for `sl-bg`/`sl-dark`; surfaces and page backgrounds are separate scales.

## Inline styles

Components are token-driven via Tailwind utilities. The only remaining inline `style` objects are **dynamic or decorative gradients** that can't be expressed as utilities — per-post cover gradients (`post.gradient`), avatar fills, and overlay washes. Everything else (color, spacing, radius, type) goes through the tokens above. If you find a literal hex or arbitrary px for one of those, replace it with the matching token.
