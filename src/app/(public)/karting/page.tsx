import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { KARTING_CLASSES, STANDINGS, RACE_EVENTS } from "@/data";
import { clsx } from "clsx";

export const metadata: Metadata = {
  title: "Karting",
  description: "Únete al campeonato de karting más competitivo de la región. Categorías profesionales, competición de élite y formación hacia la gloria del automovilismo.",
};

function KartingHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-brand-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-red/15 to-transparent" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 60px)`,
          backgroundSize: "60px 60px",
        }} />
      </div>
      <div className="relative z-10 container-xl py-20 lg:py-32">
        <p className="section-label text-brand-red mb-6">Autódromo Internacional — Competición</p>
        <h1 className="font-display font-black text-white leading-none mb-6">
          <span className="block text-[clamp(3.5rem,9vw,8rem)]">CORRE.</span>
          <span className="block text-[clamp(3.5rem,9vw,8rem)]">COMPITE.</span>
          <span className="block text-[clamp(3.5rem,9vw,8rem)] text-brand-red">GANA.</span>
        </h1>
        <p className="text-brand-gray-light text-lg max-w-lg leading-relaxed mb-10">
          Únete al campeonato de karting más competitivo de la región. Circuitos profesionales, competición de élite y trayectoria hacia la gloria del automovilismo.
        </p>
        <Link href="#inscripcion" className="btn-primary text-sm">
          Inscríbete Ahora
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}

function KartingClasses() {
  return (
    <Section id="clases">
      <div className="container-xl">
        <p className="section-label">Campeonato de Competición</p>
        <h2 className="font-display font-black text-heading-lg text-brand-black mb-12">
          ELIGE TU <span className="text-brand-red">CLASE</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-gray-border">
          {KARTING_CLASSES.map((cls, i) => (
            <div
              key={cls.id}
              className="bg-white p-8 flex flex-col gap-4 hover:bg-brand-gray-bg transition-colors duration-200 group cursor-default"
            >
              {/* Icon placeholder */}
              <div className="w-10 h-10 rounded-full border-2 border-brand-red flex items-center justify-center text-brand-red font-display font-black text-lg">
                {i === 0 ? "C" : i === 1 ? "J" : i === 2 ? "S" : "M"}
              </div>

              <div>
                <h3 className="font-display font-black text-2xl uppercase text-brand-black group-hover:text-brand-red transition-colors mb-1">
                  {cls.name}
                </h3>
                <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light">
                  {cls.ageMin} – {cls.ageMax ?? "+"} Años · {cls.engine}
                </p>
              </div>

              <p className="text-sm text-brand-gray-mid leading-relaxed">
                {cls.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function StandingsTable() {
  return (
    <Section id="clasificacion" gray>
      <div className="container-xl">
        <p className="section-label">Campeonato de Competición</p>
        <h2 className="font-display font-black text-heading-lg text-brand-black mb-10">
          TABLA DE <span className="text-brand-red">POSICIONES</span>
        </h2>

        <div className="border border-brand-gray-border bg-white overflow-hidden">
          <table className="results-table w-full">
            <thead>
              <tr className="bg-brand-gray-bg">
                <th className="w-12">Pos</th>
                <th>Piloto / Equipo</th>
                <th className="hidden sm:table-cell">Puntos</th>
                <th className="hidden md:table-cell">Victorias</th>
                <th className="hidden md:table-cell">Podios</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {STANDINGS.map((entry) => (
                <tr key={entry.position} className="hover:bg-brand-gray-bg/50 transition-colors">
                  <td>
                    <span className="font-display font-black text-lg text-brand-black">
                      {entry.position}
                    </span>
                  </td>
                  <td>
                    <div>
                      <div className="font-display font-bold text-base text-brand-black uppercase leading-tight">
                        {entry.driver}
                      </div>
                      <div className="font-mono text-2xs text-brand-gray-light uppercase tracking-widest">
                        {entry.team}
                      </div>
                    </div>
                  </td>
                  <td className="hidden sm:table-cell">
                    <div>
                      <span className="font-display font-bold text-xl text-brand-black">
                        {entry.points}
                      </span>
                      <span className="font-mono text-2xs text-brand-gray-light ml-1">pts</span>
                    </div>
                  </td>
                  <td className="hidden md:table-cell font-body text-sm text-brand-gray-mid">
                    {entry.wins}
                  </td>
                  <td className="hidden md:table-cell font-body text-sm text-brand-gray-mid">
                    {entry.podiums}
                  </td>
                  <td>
                    {entry.trend === "up" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    )}
                    {entry.trend === "down" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="btn-outline text-xs">
            Ver Clasificación Completa
          </button>
        </div>
      </div>
    </Section>
  );
}

function UpcomingRaces() {
  return (
    <Section id="proximas">
      <div className="container-xl">
        <p className="section-label">Calendario</p>
        <h2 className="font-display font-black text-heading-lg text-brand-black mb-10">
          PRÓXIMAS <span className="text-brand-red">CARRERAS</span>
        </h2>

        <div className="space-y-4">
          {RACE_EVENTS.map((event) => (
            <div
              key={event.id}
              className="border border-brand-gray-border bg-white p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-brand-red transition-colors duration-200 group"
            >
              {/* Date block */}
              <div className="flex-shrink-0 w-24 text-center">
                <div className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light">
                  {event.date.split(" ")[1]} {event.date.split(" ")[2]}
                </div>
                <div className="font-display font-black text-4xl text-brand-black leading-none">
                  {event.date.split(" ")[0]}
                </div>
              </div>

              <div className="w-px h-12 bg-brand-gray-border hidden sm:block" />

              {/* Event info */}
              <div className="flex-1">
                <h3 className="font-display font-bold text-xl uppercase text-brand-black group-hover:text-brand-red transition-colors mb-1">
                  {event.name}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-brand-gray-mid">
                  <span className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {event.circuit}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    {event.distance}
                  </span>
                </div>
              </div>

              {/* Status + CTA */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <span
                  className={clsx(
                    "font-mono text-2xs uppercase tracking-widest px-3 py-1",
                    event.status === "open" && "bg-green-50 text-green-700 border border-green-200",
                    event.status === "upcoming" && "bg-brand-gray-bg text-brand-gray-mid border border-brand-gray-border",
                    event.status === "closed" && "bg-red-50 text-red-700 border border-red-200"
                  )}
                >
                  {event.status === "open" ? "Inscripción Abierta" : event.status === "upcoming" ? "Próximamente" : "Cerrado"}
                </span>
                {event.status === "open" && (
                  <Link
                    href="#inscripcion"
                    className="btn-primary text-xs"
                  >
                    Inscribirse
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function EnrollmentSection() {
  return (
    <Section id="inscripcion" dark>
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div>
            <p className="section-label text-brand-red">Comienza Tu Trayectoria</p>
            <h2 className="font-display font-black text-heading-lg text-white mb-6">
              COMIENZA TU
              <br />
              <span className="text-brand-red">TRAYECTORIA</span>
            </h2>
            <p className="text-brand-gray-light leading-relaxed mb-8">
              Inscríbete para la próxima temporada de karting y compite contra los mejores pilotos de la región. Plazas limitadas en cada categoría.
            </p>
            <ul className="space-y-3">
              {[
                "Gestión profesional de carrera y sistema de cronometraje",
                "Circuitos certificados FIA con normativas avanzadas de seguridad",
                "Acceso de campeonato y ceremonias de premiación",
                "Fotografía profesional y cobertura en vivo",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand-gray-light">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8">
            <h3 className="font-display font-bold text-xl uppercase text-brand-black mb-6">
              Formulario de Inscripción
            </h3>
            <p className="text-sm text-brand-gray-mid mb-6">
              Complete el formulario y nos pondremos en contacto en 24 horas.
            </p>

            {/* NOTE: Phase 2 — connect to Supabase + server action */}
            <div className="space-y-4">
              <div>
                <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  placeholder="tu@ejemplo.com"
                  className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  placeholder="+1 000 000 000"
                  className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                  Fecha de Nacimiento *
                </label>
                <input
                  type="date"
                  className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors text-brand-gray-mid"
                />
              </div>
              <div>
                <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                  Categoría *
                </label>
                <select className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors bg-white text-brand-gray-mid appearance-none">
                  <option value="">Selecciona una categoría</option>
                  {KARTING_CLASSES.map((cls) => (
                    <option key={cls.id} value={cls.id}>
                      {cls.name} ({cls.ageMin}–{cls.ageMax ?? "+"} años)
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                  Experiencia Previa
                </label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos sobre tu experiencia en karting..."
                  className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center mt-2">
                Enviar Inscripción →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function RulesSection() {
  const rules = [
    {
      icon: "🛡",
      title: "Requisitos de Seguridad",
      items: [
        "Los pilotos deben usar un casco FIA 8860-10 o superior obligatorio para todos.",
        "Motor de competición completo con certificación ignifuga requerido.",
        "Chaleco antibalas obligatorio de karting de seguridad de cada persona.",
        "Asistencia obligatoria a briefing de seguridad antes de cada evento.",
      ],
    },
    {
      icon: "⚙",
      title: "Especificaciones Técnicas",
      items: [
        "Los karts deben cumplir con las regulaciones técnicas CIK-FIA.",
        "Todos los karts serán inspeccionados antes de las sesiones de práctica.",
        "Está permitido modificar el chasis de acuerdo a las normas técnicas del campeonato.",
        "Cualquier modificación técnica debe declararse antes de cualquier evento.",
      ],
    },
    {
      icon: "⚑",
      title: "Reglas de Competición",
      items: [
        "Los pilotos deben asistir a todas las sesiones de práctica, clasificación y carrera.",
        "Puntos otorgados según posición final: Q1 25-18-15-12-10-8-6-4-2-1.",
        "Infracciones bajo las reglas del reglamento sujetas a penalización.",
        "La mejor actuación deportiva en todas las modalidades — se aplica penalizaciones por comportamiento antideportivo.",
      ],
    },
    {
      icon: "⚠",
      title: "Penalizaciones e Infracciones",
      items: [
        "Salida anticipada: Penalización de tiempo a través de drive-through.",
        "Contacto deliberado: Penalización de tiempo o posición en parrilla.",
        "Ignorar banderas: Descalificación del evento.",
        "Infracciones técnicas: Descalificación del evento.",
      ],
    },
  ];

  return (
    <Section id="reglamento" gray>
      <div className="container-xl">
        <p className="section-label">Reglamento</p>
        <h2 className="font-display font-black text-heading-lg text-brand-black mb-4">
          NORMAS Y <span className="text-brand-red">DIRECTRICES</span>
        </h2>
        <p className="text-brand-gray-mid mb-12 max-w-2xl">
          Familiarícese con las regulaciones oficiales del campeonato. Todos los participantes deben adherirse a estas reglas para garantizar competición segura y justa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-gray-border mb-10">
          {rules.map((rule, i) => (
            <div key={i} className="bg-white p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand-black text-white flex items-center justify-center text-lg">
                  {rule.icon}
                </div>
                <h3 className="font-display font-bold text-base uppercase text-brand-black">
                  {rule.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {rule.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-brand-gray-mid">
                    <span className="text-brand-red flex-shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="btn-outline flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Descargar Reglamento Completo
          </button>
        </div>
      </div>
    </Section>
  );
}

export default function KartingPage() {
  return (
    <>
      <KartingHero />
      <KartingClasses />
      <StandingsTable />
      <UpcomingRaces />
      <EnrollmentSection />

      <Section gray>
        <div className="container-xl text-center">
          <p className="section-label justify-center">Formación</p>
          <h2 className="font-display font-black text-heading-lg text-brand-black mb-4">
            ¿QUIERES <span className="text-brand-red">APRENDER</span>?
          </h2>
          <p className="text-brand-gray-mid max-w-2xl mx-auto mb-8 leading-relaxed">
            Conoce nuestras escuelas de formación: desde la Escuela Gratuita de Karting hasta la preparación para Licencia Deportiva.
          </p>
          <Link href="/institucion/escuelas" className="btn-primary text-sm">
            Conocer Nuestras Escuelas →
          </Link>
        </div>
      </Section>

      <RulesSection />
    </>
  );
}
