import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { EventHero } from "@/components/sections/EventHero";
import { RACE_EVENTS } from "@/config/events";
import { GlobalCalendar } from "./GlobalCalendar";
import { EVENTOS_HUB_CONTENT } from "@/config/content/eventosHub";

export function generateMetadata(): Metadata {
  return {
    title: EVENTOS_HUB_CONTENT.meta.title,
    description: EVENTOS_HUB_CONTENT.meta.description,
  };
}

export default function EventosHubPage() {
  const { hero } = EVENTOS_HUB_CONTENT;

  return (
    <>
      <EventHero
        label={hero.label}
        title={hero.title}
        titleAccent={hero.titleAccent}
        description={hero.description}
        image={hero.image || "/images/placeholders/placeholder.svg"}
      />

      {/* Sub-sections Summary */}
      <Section className="bg-brand-gray-bg border-b border-brand-gray-border">
        <div className="container-xl">
          <p className="section-label mb-8">Nuestras Categorías</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/eventos/noches-de-aceleracion" className="group flex flex-col bg-white border border-brand-gray-border hover:border-brand-red transition-all duration-200">
              <div className="aspect-video relative overflow-hidden">
                <Image src="/images/temporarychangelater/galeria/night race.png" alt="Noches de Aceleración" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-black text-xl uppercase text-brand-black group-hover:text-brand-red transition-colors">Noches de Aceleración</h3>
                <p className="mt-2 text-sm text-brand-gray-mid line-clamp-2">La adrenalina del automovilismo bajo las luces amateur y formato accesible.</p>
              </div>
            </Link>

            <Link href="/karting/kartingrentalexperience" className="group flex flex-col bg-white border border-brand-gray-border hover:border-brand-red transition-all duration-200">
              <div className="aspect-video relative overflow-hidden">
                <Image src="/images/karting/karting-rental-experience/first-karting-rental-experience.jpeg" alt="Karting Rental Experience" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-black text-xl uppercase text-brand-black group-hover:text-brand-red transition-colors">Karting Rental Experience</h3>
                <p className="mt-2 text-sm text-brand-gray-mid line-clamp-2">Experiencia de karting completamente gratuita abierta al público todos los fines de semana.</p>
              </div>
            </Link>

            <Link href="/eventos/campeonato-4t" className="group flex flex-col bg-white border border-brand-gray-border hover:border-brand-red transition-all duration-200">
              <div className="aspect-video relative overflow-hidden">
                <Image src="/images/temporarychangelater/heros/hero campeonato 4t.jpg" alt="Campeonato 4T" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-black text-xl uppercase text-brand-black group-hover:text-brand-red transition-colors">Campeonato 4T</h3>
                <p className="mt-2 text-sm text-brand-gray-mid line-clamp-2">Campeonato oficial anual de karting 4 tiempos organizado por ACES con premios en efectivo.</p>
              </div>
            </Link>
          </div>
        </div>
      </Section>

      {/* Global Calendar */}
      <Section id="calendario">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <p className="section-label text-brand-red">Temporada 2026</p>
              <h2 className="font-display font-black text-heading-md leading-none text-brand-black mt-2">
                CALENDARIO <span className="text-brand-red">GLOBAL</span>
              </h2>
              <p className="mt-4 text-brand-gray-dark text-lg md:text-xl font-light">
                Descubre los eventos confirmados, sincroniza tu agenda, y no te pierdas ninguna carrera del año.
              </p>
            </div>
          </div>
          <GlobalCalendar events={RACE_EVENTS} />
        </div>
      </Section>
    </>
  );
}
