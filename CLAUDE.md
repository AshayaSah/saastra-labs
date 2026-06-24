# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server (Next.js, port 3000)
npm run build      # production build
npm run typecheck  # tsc --noEmit (run before committing)
npm run lint       # ESLint
npm run format     # Prettier (formats ts/tsx)
```

There are no tests. Type-check with `typecheck` to catch errors before pushing.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (config via `@theme` in `globals.css`, not `tailwind.config`)
- **shadcn/ui** components added with `npx shadcn@latest add <component>`
- **Base UI** (`@base-ui/react`) for accessible primitives

## Architecture

### Pages

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Landing page — composes all home sections |
| `/pricing` | `app/pricing/page.tsx` | Pricing page |
| `/blog` | `app/blog/page.tsx` | Blog listing |

### Component layout

```
components/
  layout/      navbar, footer (rendered in app/layout.tsx)
  home/        sections used only on the homepage
  pricing/     sections used only on /pricing
  shared/      sections reused across pages (ComparisonTable, TestimonialsCarousel, FAQAccordion)
  ui/          primitive UI components (BentoCard, ScrollRevealProvider, shadcn components)
```

### Data & types

All static content lives in `lib/constants.ts` (typed by `lib/types.ts`). When adding new sections, add new constants and types there — keep component files free of inline data arrays.

## Design system

**`design.md` (repo root) is the master spec — read it before touching styles.** Every design token (color, spacing, radius, shadow, type scale) is declared once in `globals.css` under `@theme` and consumed as a Tailwind v4 utility. **Never hardcode color/spacing/radius values in a component** — reference the token, and change the token in `globals.css` to restyle globally.

Token → utility mapping:

| Group | Token (in `@theme`) | Utility |
|---|---|---|
| Color | `--color-sl-*` | `text-sl-muted`, `bg-sl-surface`, `border-sl-border` |
| Spacing | `--spacing-section`, `--spacing-page-top` | `pt-section`, `py-section`, `pt-page-top` |
| Radius | `--radius-card`, `--radius-control`, `--radius-pill` | `rounded-card`, `rounded-control`, `rounded-pill` |
| Shadow | `--shadow-card`, `--shadow-pop` | `shadow-card`, `shadow-pop` |
| Type | `--text-h2`, `--text-body`, `--text-eyebrow` … | `text-h2`, `text-body`, `text-eyebrow` |

Color roles: text uses a 4-step ramp per surface — light: `sl-text` → `sl-body` → `sl-muted` → `sl-subtle`; dark: `sl-text-inv` → `sl-muted-inv` → `sl-subtle-inv`. Surfaces (`sl-surface*`) are a separate scale from page backgrounds (`sl-bg`/`sl-dark`). Accent is `sl-accent` (yellow) with `sl-accent-ink` on top.

Semantic classes (in `globals.css` `@layer components`) wrap repeated compound patterns — reuse these instead of re-typing utilities:

- `.sl-container` — max-width 1100 px column, centred, gutter padding
- `.sl-section` / `.sl-section-sm` — standard section vertical rhythm (one place controls every section gap)
- `.sl-page-top` — first-block offset that clears the fixed navbar on inner pages
- `.sl-display` / `.sl-display-title` — the oversized watermark page title (Projects / Pricing / Blog)
- `.sl-card` / `.sl-card-dark` — light/dark card surfaces
- `.sl-section-heading` — section title (= `text-h2`)
- `.sl-btn` / `.sl-btn-wide` — yellow CTA button
- `.sl-badge-green` / `.sl-badge-yellow` — status badges
- `.sl-mono-label` — monospace uppercase eyebrow
- `.sl-cta-btn` / `.sl-chat-btn` — animated hero buttons (CSS-only shimmer/glow)

### Scroll reveal

Add `.sl-reveal` to any element for a fade-up-on-scroll animation. Optional delay modifiers: `.sl-d1`–`.sl-d5` (increments of 60 ms). The `ScrollRevealProvider` in `app/layout.tsx` uses `IntersectionObserver` to add `.sl-visible` when elements enter the viewport.

### BentoCard

`components/ui/bento-card.tsx` — `<BentoCard dark?>` renders `sl-card` or `sl-card-dark`. Use it as the base for any grid/bento layout cell.

## Next.js notes

Per `AGENTS.md`: this version of Next.js may have breaking changes from training data. Check `node_modules/next/dist/docs/` for authoritative API docs if behaviour is unexpected.
