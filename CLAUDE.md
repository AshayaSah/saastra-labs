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

Custom Tailwind tokens (all prefixed `sl-`) are declared in `globals.css` under `@theme`:

| Token | Value | Use |
|---|---|---|
| `sl-bg` | `#e9e7e2` | Page background |
| `sl-dark` | `#060606` | Dark cards/navbar |
| `sl-accent` | `#f5c518` | Yellow CTA colour |
| `sl-text` | `#0c0c0c` | Primary text |
| `sl-muted` | `#6b6862` | Secondary text |
| `sl-border` | `#e6e4df` | Light card borders |
| `sl-border-dark` | `#1c1c1c` | Dark card borders |

Utility classes also defined in `globals.css` (under `@layer components`):

- `.sl-container` — max-width 1100 px, centred, padded
- `.sl-card` / `.sl-card-dark` — standard light/dark card styles
- `.sl-section-heading` — section title typography
- `.sl-btn` / `.sl-btn-wide` — yellow CTA button
- `.sl-badge-green` / `.sl-badge-yellow` — status badges
- `.sl-mono-label` — monospace uppercase label (10 px, tracked)
- `.sl-cta-btn` / `.sl-chat-btn` — animated hero buttons (CSS-only shimmer/glow)

### Scroll reveal

Add `.sl-reveal` to any element for a fade-up-on-scroll animation. Optional delay modifiers: `.sl-d1`–`.sl-d5` (increments of 60 ms). The `ScrollRevealProvider` in `app/layout.tsx` uses `IntersectionObserver` to add `.sl-visible` when elements enter the viewport.

### BentoCard

`components/ui/bento-card.tsx` — `<BentoCard dark?>` renders `sl-card` or `sl-card-dark`. Use it as the base for any grid/bento layout cell.

## Next.js notes

Per `AGENTS.md`: this version of Next.js may have breaking changes from training data. Check `node_modules/next/dist/docs/` for authoritative API docs if behaviour is unexpected.
