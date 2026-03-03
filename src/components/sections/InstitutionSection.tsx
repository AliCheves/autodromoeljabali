import { Section, SectionHeader } from "@/components/ui/Section";
import { INSTITUTION_STATS } from "@/data";
import { OrganizationalStructureSection } from "./OrganizationalStructureSection";
import { KartingChampionsSection } from "./KartingChampionsSection";
import { RaceCalendarSection } from "./RaceCalendarSection";

export function InstitutionSection() {
  return (
    <>
      <Section id="institucion">
        <div className="container-xl py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: text */}
            <div>
              <h1
                className="font-black text-5xl sm:text-6xl lg:text-7xl leading-none mb-2 text-brand-black"
                style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
              >
                LEGADO
                <span className="block text-brand-red" style={{ fontFamily: "inherit" }}>COMPETITIVO</span>
              </h1>
              <div className="space-y-6 text-brand-gray-mid text-lg leading-relaxed mt-6" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <p>
                  Autódromo Internacional, El Jabalí se sitúa a la vanguardia de la excelencia en automovilismo deportivo, combinando décadas de tradición en competición con tecnología de última generación y un compromiso inquebrantable con el rendimiento.
                </p>
                <p>
                  Nuestra institución se dedica a formar talento, avanzar en tecnología de competición y proporcionar instalaciones de clase mundial para pilotos en todas las etapas de su carrera. Desde karting hasta circuitos de competición profesional, forjamos campeones.
                </p>
                <p>
                  Con programas de formación de última generación, estándares de seguridad líderes en la industria y una pasión por el automovilismo que está profundamente arraigada en nuestro ADN, continuamos superando límites y redefiniendo lo que es posible en la pista.
                </p>
              </div>
            </div>

            {/* Right: stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              {/* Primer stat */}
              <div className="bg-black text-white p-6 sm:p-10 flex flex-col items-center justify-center" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <span className="font-black text-5xl text-brand-red mb-2" style={{ fontFamily: "inherit" }}>25+</span>
                <span className="text-base mt-2" style={{ fontFamily: "inherit" }}>AÑOS DE EXPERIENCIA</span>
              </div>
              {/* Segundo stat */}
              <div className="bg-brand-red text-white p-6 sm:p-10 flex flex-col items-center justify-center" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <span className="font-black text-5xl mb-2" style={{ fontFamily: "inherit" }}>150+</span>
                <span className="text-base mt-2" style={{ fontFamily: "inherit" }}>PILOTOS PROFESIONALES</span>
              </div>
              {/* Tercer stat */}
              <div className="bg-brand-red text-white p-6 sm:p-10 flex flex-col items-center justify-center" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <span className="font-black text-5xl mb-2" style={{ fontFamily: "inherit" }}>12</span>
                <span className="text-base mt-2" style={{ fontFamily: "inherit" }}>CIRCUITOS DE COMPETICIÓN</span>
              </div>
              {/* Cuarto stat */}
              <div className="bg-black text-white p-6 sm:p-10 flex flex-col items-center justify-center" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <span className="font-black text-5xl text-brand-red mb-2" style={{ fontFamily: "inherit" }}>500+</span>
                <span className="text-base mt-2" style={{ fontFamily: "inherit" }}>EVENTOS ANUALES</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <OrganizationalStructureSection />
      <KartingChampionsSection />
      <RaceCalendarSection />
    </>
  );
}
