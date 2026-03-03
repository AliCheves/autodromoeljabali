# LLM Architecture Guidelines
Project: Autódromo Internacional El Jabalí Portal

---

## Stack (Mandatory)

- Next.js 14+ (App Router only)
- TypeScript
- Tailwind CSS
- Server Components by default
- Supabase-ready structure
- Vercel deployment
- No Vite
- No Pages Router
- No React Router
- No CSS frameworks outside Tailwind

---

## Folder Structure (Mandatory)

src/
  app/
    (public)/
    (dashboard)/
    (admin)/
  components/
    layout/
    sections/
    ui/
  config/
    content/
  lib/
    server/
      supabase/
      actions/
  types/

No folder restructuring unless architecturally justified.

---

## Core Architectural Rules

- No business logic inside components.
- No static data inside JSX.
- All static data must live in `config/content/`.
- All shared types must live in `types/`.
- No deep relative imports.
- Use absolute imports only.
- No layout duplication.
- No mixing dashboard and public UI logic.
- No CSS files outside Tailwind.
- No inline style attributes.
- No fixed pixel widths.
- No fixed pixel heights.
- No arbitrary Tailwind values unless added to theme.

If a change violates separation of concerns, refactor before implementing.

---

## Routing Rules

Each navbar item must have its own page:

/
 /institucion
 /estructura
 /estructura/deportiva
 /karting
 /eventos
 /eventos/noches-de-aceleracion
 /eventos/campeonato-4t
 /eventos/automovilismo-2025
 /eventos/kart-rental-2026
 /pilotos
 /pilotos/[slug]
 /contacto
 /noticias
 /disciplinas
 /calendario

No anchor-only navigation.
All routes must be true App Router pages.

---

## Server / Client Rules

- All pages are Server Components by default.
- Use "use client" only when interaction is required.
- Never wrap entire layouts in Client Components.
- No data fetching inside UI components.
- Section components must remain pure.

Pages must follow async-ready pattern:

```ts
const content = PAGE_CONTENT
// Future: const content = await getContent()
````

---

## Content Architecture Rules (Strict)

* All page content must originate from `config/content/`.
* No static arrays inside JSX.
* No hardcoded text inside section components.
* Config files must export pure serializable objects only.
* No formatting or transformation logic inside config files.
* No JSX inside config files.
* All content must be CMS-ready and backend-replaceable.

---

## Event Architecture Rules

* All event pages must use typed interfaces defined in `types/content.ts`.
* No hardcoded dates inside JSX.
* Flyer images cannot be used as primary content.
* All event images must live in:

public/images/eventos/{slug}/

* Each event page must implement `generateMetadata()`.
* Event data must be structured (rounds, schedule, pricing, etc.).
* Event pages must remain fully replaceable with dynamic backend data.
* No duplication of event layout logic across pages.

---

## Responsive Layout Contract (Mandatory)

All public sections must follow this container pattern:

```tsx
<section className="w-full">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    ...
  </div>
</section>
```

Strict rules:

* No element may exceed `100vw`.
* No horizontal scroll allowed at 375px viewport.
* No fixed pixel widths (e.g., `w-[1195px]`).
* No fixed pixel heights.
* All grids must define progressive breakpoints:

  * `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
* CTA buttons must stack vertically on mobile.
* Typography must scale responsively (`text-xl sm:text-2xl lg:text-3xl`).
* No layout may rely on absolute positioning that causes overflow.
* No manual centering patterns outside the container contract.

Mobile-first design is mandatory.

---

## Tailwind Governance (Strict Mode)

* Arbitrary pixel utilities (e.g., `text-[64px]`, `min-w-[70px]`) are forbidden.
* Inline style attributes are strictly prohibited.
* Aspect ratios must use Tailwind utilities.
* Reusable spacing values must be added via Tailwind theme extension.
* No magic numbers.
* No duplicated utility chains across components.

If a value is reused → define it in theme.

---

## Component Purity Rules

* UI components must not contain business text.
* Section components must not contain static content.
* Components must accept typed props.
* No data fetching inside section components.
* No routing logic inside UI components.
* Components must remain reusable and isolated.

---

## Supabase Preparation

* All backend logic must live in `lib/server/`.
* No direct fetch logic in UI components.
* Pages must remain convertible to async.
* No coupling UI to backend structure.
* Supabase logic must remain isolated.

---

## Performance Rules

* Always use Next `<Image />`.
* Avoid unnecessary client bundles.
* Avoid hydration mismatches.
* Preserve Core Web Vitals stability.
* No layout shifts.
* No heavy runtime animations on mobile.

---

## Regression Prevention

No change may:

* Introduce layout duplication.
* Introduce fixed-width containers.
* Introduce inline styles.
* Convert Server Components unnecessarily.
* Add CSS files.
* Introduce deep relative imports.
* Break container pattern.
* Introduce horizontal overflow.
* Hardcode content into page files.
* Mix public and dashboard concerns.

If any violation occurs → refactor before merging.

---

## Deployment Governance

* Production deploys must originate from `main`.
* Feature work must use branches.
* Preview deployment required before merge.
* No direct structural changes committed to `main`.
* Rollback must remain possible at all times.

---

## Quality Standard

The portal must remain:

* Institutional
* Motorsport European aesthetic
* Clean
* Structured
* Balanced
* Fully responsive
* Scalable
* CMS-ready
* Supabase-ready
* Dashboard-ready
* Admin-ready

No improvisation.
No hacks.
No temporary layout patches.
No regressions.

If unsure: redesign before implementing.