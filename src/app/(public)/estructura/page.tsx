import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { INSTITUTION_STATS } from "@/data";

export const metadata: Metadata = {
  title: "Institución y Estructura",
  description: "Conozca la historia, estructura organizacional y respaldo FIA del Autódromo Internacional El Jabalí.",
};

const DEPARTMENTS = [
  {
    name: "Junta Directiva",
    description: "Liderazgo estratégico y supervisión del gobierno corporativo para todas las operaciones y desarrollo institucional.",
    icon: "◆",
  },
  {
    name: "División de Competición",
    description: "Gestión y control de eventos de competición, campeonatos y categorías en todas las categorías.",
    icon: "◆",
  },
  {
    name: "Departamento Técnico",
    description: "Excelencia en ingeniería, desarrollo de vehículos y optimización del rendimiento de competición.",
    icon: "◆",
  },
  {
    name: "Academia de Pilotos",
    description: "Programas de formación integral, desarrollo de talento y programas profesional para pilotos en formación.",
    icon: "◆",
  },
];

export default function EstructuraPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black py-20 lg:py-32">
        <div className="container-xl">
          <p className="section-label text-brand-red">La Institución</p>
          <h1 className="font-display font-black text-white text-heading-xl leading-none mb-6">
            LEGADO
            <br />
            <span className="text-brand-red">COMPETITIVO</span>
          </h1>
          <p className="text-brand-gray-light max-w-xl leading-relaxed">
            Autódromo Internacional El Jabalí se sitúa a la vanguardia de la excelencia en el automovilismo deportivo, combinando décadas de tradición con tecnología de última generación.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="border-b border-brand-gray-border">
        <div className="container-xl">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {INSTITUTION_STATS.map((stat, i) => (
              <div
                key={i}
                className={`py-10 px-8 flex flex-col gap-2 border-brand-gray-border ${i > 0 ? "border-l" : ""}`}
              >
                <div className="font-display font-black text-5xl text-brand-black">{stat.value}</div>
                <div className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FIA / Champions */}
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-3">
                WHERE
              </h2>
              <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-brand-red leading-none mb-3">
                CHAMPIONS
              </h2>
              <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-8">
                BEGIN
              </h2>
              <p className="text-brand-gray-light leading-relaxed mb-8">
                Our world-class karting facilities provide the perfect foundation for aspiring racers. With professional-grade track equipment, cutting-edge equipment, and expert instruction, we develop the skills that define championship winners.
              </p>
              <ul className="space-y-3 mb-8">
                {["Professional Track — FIA certified circuit with state of the art timing system", "Safety First — Advanced safety equipment all equipment at standard", "Expert Training — Programs led by experienced professional racing instructors"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-gray-light">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-gray-dark p-12 text-center">
              <div className="font-display font-black text-8xl text-white/10 select-none mb-4">FIA</div>
              <p className="font-mono text-2xs uppercase tracking-widest text-brand-red mb-2">Respaldo Oficial</p>
              <p className="text-brand-gray-light text-sm">Circuito certificado y homologado bajo estándares internacionales de la Federación Internacional de Automovilismo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <Section id="estructura">
        <div className="container-xl">
          <p className="section-label">Estructura Organizacional</p>
          <h2 className="font-display font-black text-heading-lg text-brand-black mb-4">
            DISEÑADOS PARA LA
          </h2>
          <h2 className="font-display font-black text-heading-lg text-brand-red mb-12">
            EXCELENCIA
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-gray-border">
            {DEPARTMENTS.map((dept, i) => (
              <div
                key={i}
                className="bg-white p-8 flex flex-col gap-4 hover:bg-brand-gray-bg transition-colors"
              >
                <div className="text-brand-red text-2xl">{dept.icon}</div>
                <h3 className="font-display font-bold text-xl uppercase text-brand-black">
                  {dept.name}
                </h3>
                <p className="text-sm text-brand-gray-mid leading-relaxed">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
