import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { DRIVERS, STANDINGS } from "@/data";

export const metadata: Metadata = {
  title: "Pilotos",
  description: "Conoce a los pilotos del Autódromo Internacional El Jabalí.",
};

export default function PilotosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="container-xl">
          <p className="section-label text-brand-red">Temporada 2026</p>
          <h1 className="font-display font-black text-white text-heading-xl leading-none">
            NUESTROS
            <br />
            <span className="text-brand-red">PILOTOS</span>
          </h1>
        </div>
      </section>

      {/* Grid */}
      <Section>
        <div className="container-xl">
          <p className="section-label mb-8">Élite Competitiva</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-gray-border">
            {DRIVERS.map((driver) => (
              <Link
                key={driver.id}
                href={`/pilotos/${driver.slug}`}
                className="group bg-white hover:bg-brand-gray-bg transition-colors duration-200 p-8 flex flex-col gap-5"
              >
                <div className="font-display font-black text-8xl leading-none text-brand-gray-border group-hover:text-brand-red/20 transition-colors">
                  {String(driver.number).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-1">
                    {driver.team}
                  </div>
                  <h2 className="font-display font-black text-3xl uppercase text-brand-black group-hover:text-brand-red transition-colors leading-tight">
                    {driver.firstName}
                    <br />
                    {driver.lastName}
                  </h2>
                </div>
                <div className="flex items-center gap-2 font-mono text-2xs uppercase tracking-widest text-brand-gray-light group-hover:text-brand-red transition-colors">
                  Ver Perfil
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
