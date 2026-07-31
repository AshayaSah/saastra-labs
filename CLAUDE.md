# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start dev server (Next.js, Turbopack, port 3000)
npm run build        # production build
npm run typecheck    # tsc --noEmit (run before committing)
npm run lint         # ESLint
npm run format       # Prettier (formats ts/tsx)

npm run db:generate  # generate a drizzle migration from schema.ts changes
npm run db:migrate   # apply migrations (scripts/migrate.ts)
npm run db:push      # push schema directly to the DB without a migration file
npm run db:studio    # drizzle-kit studio
npm run db:seed      # seed content tables (scripts/seed.ts)
```

There are no tests. Type-check with `typecheck` to catch errors before pushing.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (config via `@theme` in `app/globals.css`, not `tailwind.config`)
- **shadcn/ui** components added with `npx shadcn@latest add <component>`
- **Base UI** (`@base-ui/react`) for accessible primitives
- **Drizzle ORM** over **Neon** (serverless Postgres) for all CMS-editable content
- Custom cookie-session admin panel (no third-party auth library)

## Architecture

### Route groups

The app has two independent route trees under `app/`:

| Group | Layout | Purpose |
|---|---|---|
| `app/(site)/*` | `app/(site)/layout.tsx` | Public marketing site — navbar, scroll-reveal provider, footer |
| `app/admin/*` | `app/admin/(panel)/layout.tsx` | Password-protected CMS panel |

`app/layout.tsx` is the shared root: fonts, `<ThemeProvider>`, and metadata. It does **not** render the navbar/footer — those live in `(site)/layout.tsx` so the admin panel can skip them.

Public pages: `/`, `/pricing`, `/blog`, `/blog/[slug]`, `/products`, `/work`, `/about`, `/team`, `/careers`, `/contact`. Each has a `loading.tsx` sibling for streaming.

### Content model: DB-backed CMS

Almost every piece of site copy (blog posts, products, projects, pricing plans, testimonials, FAQs, insights, benefit cards, comparison rows, nav/footer links, marquee items, about/team/careers page sections, company stats/values, team members, job openings) is a Postgres table defined in `lib/db/schema.ts` and edited through a **generic admin resource editor**, not hardcoded per-page forms.

This generic-CMS pattern is the main thing to understand before touching content or the admin panel:

- **`lib/db/schema.ts`** — one `pgTable` per content type. Every table has a `sortOrder` column used for display order.
- **`lib/admin/resources.ts`** — maps a URL resource key (e.g. `"blog"`, `"products"`) to its Drizzle table and its `unstable_cache` tag. This is the server-only registry.
- **`lib/admin/fields.ts`** — client-safe metadata (no Drizzle imports) describing each resource's editable fields: label, `FieldType` (`text` | `textarea` | `number` | `boolean` | `select` | `tags` | `json` | `image`), and layout hints. Drives the generic form in `components/admin/resource-editor.tsx`.
- **`app/admin/(panel)/[resource]/page.tsx`** — single dynamic route that renders the editor for any resource key by looking it up in the two registries above. Adding a new content type means: add the table to `schema.ts`, add it to `RESOURCE_TABLES`/`RESOURCE_TAGS` in `resources.ts`, add its field list to `RESOURCES` in `fields.ts` — no new route or page needed.
- **`lib/db/queries.ts`** — cached reads (`unstable_cache`) keyed by the `TAGS` map; admin server actions (`app/admin/actions.ts`) revalidate the relevant tag after a save.
- Public pages read content via `lib/db/queries.ts` (or `lib/blog.ts` for blog-specific helpers), not directly from `lib/constants.ts`.

`lib/constants.ts` (typed by `lib/types.ts`) still holds truly static, non-CMS data (e.g. structural copy that isn't content-managed). Check whether a given piece of data is DB-backed (`schema.ts`/`queries.ts`) or a static constant before assuming which one to edit.

### Admin auth

Stateless, cookie-based sessions — no session table:

- **`lib/auth.ts`** — edge-safe signed tokens via Web Crypto HMAC-SHA256 (`SESSION_SECRET` env var). Token is `"<expiryEpoch>.<signature>"`, verified without a DB round-trip so it works in `middleware.ts` (edge runtime).
- **`middleware.ts`** — gates all of `/admin/*` except `/admin/login`; redirects to login with a `from` query param if the session cookie is missing/invalid.
- **`app/admin/login/actions.ts`** — sets the `sl_admin_session` cookie on successful login.

### Component layout

```
components/
  layout/      navbar, footer (rendered in app/(site)/layout.tsx)
  home/        sections used only on the homepage
  pricing/     /pricing sections
  products/    /products sections
  company/     shared hero/CTA sections for about/team/careers
  contact/     contact form
  admin/       generic CMS editor (resource-editor, image-uploader)
  shared/      sections reused across pages (ComparisonTable, TestimonialsCarousel, FAQAccordion)
  ui/          primitive UI components (BentoCard, ScrollRevealProvider, shadcn components)
```

Several components are split into a data-fetching wrapper + a `*-view.tsx` presentational component (e.g. `navbar.tsx`/`navbar-view.tsx`, `insights-carousel.tsx`/`insights-carousel-view.tsx`, `testimonials-carousel.tsx`/`testimonials-carousel-view.tsx`, `faq-accordion.tsx`/`faq-accordion-view.tsx`) — the wrapper is a server component that queries the DB, the `-view` is client-side and takes plain props. Follow this split when a section needs both DB data and client interactivity.

## Design system

**`design.md` (repo root) is the master spec — read it before touching styles.** Every design token (color, spacing, radius, shadow, type scale) is declared once in `app/globals.css` under `@theme` and consumed as a Tailwind v4 utility. **Never hardcode color/spacing/radius values in a component** — reference the token, and change the token in `globals.css` to restyle globally.

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

Add `.sl-reveal` to any element for a fade-up-on-scroll animation. Optional delay modifiers: `.sl-d1`–`.sl-d5` (increments of 60 ms). The `ScrollRevealProvider` in `app/(site)/layout.tsx` uses `IntersectionObserver` to add `.sl-visible` when elements enter the viewport.

### BentoCard

`components/ui/bento-card.tsx` — `<BentoCard dark?>` renders `sl-card` or `sl-card-dark`. Use it as the base for any grid/bento layout cell.

## Next.js notes

Per `AGENTS.md`: this version of Next.js may have breaking changes from training data. Check `node_modules/next/dist/docs/` for authoritative API docs if behaviour is unexpected.
