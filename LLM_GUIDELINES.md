# LLM Architecture Guidelines
Project: Autódromo Internacional El Jabalí Portal

## Stack (Mandatory)

- Next.js 14+ (App Router only)
- TypeScript
- Tailwind CSS
- Server Components by default
- Supabase-ready structure
- No Vite
- No Pages Router
- No React Router

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
  lib/
    server/
      supabase/
      actions/
  types/

---

## Architectural Rules

- No business logic inside components.
- No static data inside JSX.
- All static data must live in `config/`.
- All shared types must live in `types/`.
- No deep relative imports.
- Use absolute imports only.
- No layout duplication.
- No mixing dashboard and public UI logic.
- No CSS files outside Tailwind.
- No arbitrary Tailwind values unless justified.

---

## Routing Rules

Each navbar item must have its own page:

/  
/institucion  
/estructura  
/karting  
/eventos  
/pilotos  
/contacto  
/noticias  
/disciplinas  
/calendario  
/pilotos/[slug]

No anchor-only navigation.

---

## Server / Client Rules

- All pages are Server Components by default.
- Use "use client" only when interaction is required.
- No client components wrapping entire layouts.

---

## Tailwind Rules

- Use theme extension in tailwind.config.ts.
- Primary red: #DC0000.
- No inline styles.
- No duplicated utility patterns.
- Create reusable UI primitives.

---

## Supabase Preparation

- All backend logic must live in lib/server/.
- Pages must be convertible to async server components.
- No direct fetch logic in UI components.

---

## Performance Rules

- Always use Next <Image />.
- Avoid unnecessary client bundles.
- Avoid hydration mismatches.

---

If any proposed change violates:
- Single Responsibility Principle
- Separation of Concerns
- Future dashboard isolation
- Admin isolation
- Backend scalability

Redesign before implementing.