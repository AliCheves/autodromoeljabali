# Autódromo Internacional El Jabalí — Portal Oficial

> Portal web institucional del Autódromo Internacional El Jabalí, construido con Next.js 14, Tailwind CSS y arquitectura modular escalable.

---

## Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| Next.js | 14+ | Framework React con App Router |
| Tailwind CSS | 3.4+ | Utilidades de estilo |
| TypeScript | 5+ | Tipado estático |
| clsx + tailwind-merge | latest | Gestión segura de clases |

**Fase 2 (planificado):**
- Supabase — Auth + Base de datos + Storage + RLS
- Supabase SSR — Sesiones server-side
- React Hook Form + Zod — Validación de formularios

---

## Estructura del Proyecto

```
src/
├── app/                          # App Router (Next.js 14)
│   ├── layout.tsx                # Root layout con Navbar + Footer
│   ├── page.tsx                  # Home institucional
│   ├── not-found.tsx             # Página 404
│   ├── karting/
│   │   └── page.tsx              # Sección Karting (prioridad MVP)
│   ├── pilotos/
│   │   ├── page.tsx              # Listado de pilotos
│   │   └── [slug]/page.tsx       # Perfil individual de piloto
│   ├── estructura/
│   │   └── page.tsx              # Institución + organigrama + FIA
│   ├── eventos/
│   │   └── page.tsx              # Calendario de eventos
│   ├── contacto/
│   │   └── page.tsx              # Formulario de contacto
│   ├── (auth)/                   # FASE 2 — Login / Registro
│   │   └── layout.tsx
│   └── (dashboard)/              # FASE 2 — Panel privado pilotos
│       └── layout.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Navbar responsiva con scroll behavior
│   │   └── Footer.tsx            # Footer institucional
│   ├── ui/
│   │   ├── Section.tsx           # Section, SectionHeader, Card, Badge, Divider
│   │   ├── Sponsors.tsx          # SponsorsBand (marquee) + SponsorGrid
│   │   └── Stats.tsx             # StatGrid + BigStat
│   └── sections/
│       ├── HeroHome.tsx          # Hero homepage
│       ├── InstitutionSection.tsx
│       ├── CalendarSection.tsx
│       └── FeaturedDriversSection.tsx
│
├── data/
│   └── index.ts                  # Datos estáticos MVP (reemplazar con Supabase)
│
├── lib/
│   └── utils.ts                  # cn() helper + utilidades
│
├── types/
│   └── index.ts                  # Tipos compartidos TypeScript
│
├── styles/
│   └── globals.css               # CSS global + variables + utilidades
│
└── middleware.ts                 # FASE 2 — Protección de rutas (comentado)
```

---

## Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar en producción
npm start
```

Abrir [http://localhost:3000](http://localhost:3000)

---

## Identidad Visual

| Token | Valor | Uso |
|---|---|---|
| `brand-red` | `#C8102E` | Acento principal, CTAs, highlights |
| `brand-black` | `#0A0A0A` | Fondos oscuros, textos principales |
| `brand-gray-bg` | `#F5F5F5` | Fondos de sección alternos |
| `brand-gray-border` | `#E0E0E0` | Bordes, separadores |
| Fuente display | Barlow Condensed | Títulos, cifras, etiquetas |
| Fuente body | Barlow | Texto de párrafo |
| Fuente mono | DM Mono | Labels, metadata, tablas |

---

## Fases de Desarrollo

### ✅ Fase 1 — MVP (Actual)
- [x] Home institucional
- [x] Sección Karting completa (clases, clasificación, inscripción, reglamento)
- [x] Perfil de piloto público
- [x] Listado de pilotos
- [x] Estructura organizacional + FIA
- [x] Calendario de eventos
- [x] Sponsors Band + Grid
- [x] Contacto
- [x] Navbar + Footer institucional
- [x] Layout responsive
- [x] Arquitectura escalable preparada para Fase 2

### 🔲 Fase 2 — Auth + Dashboard
- [ ] Supabase setup (Auth, DB, Storage, RLS)
- [ ] Login / Registro de pilotos
- [ ] Dashboard privado (inscripciones, resultados, documentos)
- [ ] Inscripción a eventos con pago
- [ ] Sistema de puntuación en tiempo real
- [ ] Panel administrativo

### 🔲 Fase 3 — Avanzado
- [ ] Noticias CMS (Sanity / Contentful / Supabase Storage)
- [ ] Streaming en vivo de cronometraje
- [ ] App móvil (Expo / React Native)
- [ ] Internacionalización (es / en)

---

## Notas de Arquitectura

**Datos estáticos (Fase 1):** Todo el contenido vive en `src/data/index.ts`. En Fase 2, cada función de data se reemplaza por una query a Supabase, sin cambiar los componentes.

**Formularios:** Los formularios HTML actuales son estáticos. En Fase 2 se integran con `react-hook-form` + `zod` + Supabase Server Actions de Next.js.

**Protección de rutas:** `src/middleware.ts` está preparado con los comentarios para integrar Supabase SSR en Fase 2.

**Route Groups:** `(auth)` y `(dashboard)` tienen sus propios layouts independientes del layout principal, permitiendo UI completamente diferente sin el Navbar/Footer institucional.
