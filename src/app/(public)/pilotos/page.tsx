import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { EventHero } from "@/components/sections/EventHero";
import { PILOTS } from "@/data";
import { DisciplineChips } from "@/components/ui/DisciplineChips";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const metadata: Metadata = {
  title: "Pilotos",
  description:
    "Conoce a los pilotos del Autódromo Internacional El Jabalí.",
};

export default function PilotosPage() {
  return (
    <>
      <EventHero
        label="Temporada 2026"
        title="NUESTROS"
        titleAccent="PILOTOS"
        description="Conoce a los pilotos de élite que compiten en el Autódromo Internacional El Jabalí. La máxima expresión del automovilismo centroamericano."
        image="/images/galeria/gala-campeones.jpeg"
      />

      {/* Grid */}
      <Section>
        <div className="container-xl">
          <p className="section-label mb-8">Élite Competitiva</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILOTS.map((pilot) => (
              <Link
                key={pilot.slug}
                href={`/pilotos/${pilot.slug}`}
                className="group bg-white border border-brand-gray-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 motion-reduce:transform-none motion-reduce:transition-none p-8 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-brand-gray-bg border-2 border-brand-gray-border group-hover:border-brand-red transition-colors flex-shrink-0">
                    <Image
                      src={pilot.image || PLACEHOLDER}
                      alt={pilot.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-display font-black text-xl uppercase text-brand-black group-hover:text-brand-red transition-colors leading-tight">
                      {pilot.firstName}
                      <br />
                      {pilot.lastName}
                    </h2>
                  </div>
                </div>

                <DisciplineChips disciplines={pilot.disciplines} />

                {pilot.highlights.length > 0 && (
                  <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light">
                    {pilot.highlights[0]}
                  </p>
                )}

                <div className="flex items-center gap-2 font-mono text-2xs uppercase tracking-widest text-brand-gray-light group-hover:text-brand-red transition-colors mt-auto">
                  Ver Perfil
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
