import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { RACE_EVENTS } from "@/data";
import { clsx } from "clsx";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Calendario oficial de eventos del Autódromo Internacional El Jabalí.",
};

export default function EventosPage() {
  return (
    <>
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="container-xl">
          <p className="section-label text-brand-red">Temporada 2026</p>
          <h1 className="font-display font-black text-white text-heading-xl leading-none">
            CALENDARIO DE
            <br />
            <span className="text-brand-red">EVENTOS</span>
          </h1>
        </div>
      </section>

      <Section>
        <div className="container-xl">
          <div className="space-y-4">
            {RACE_EVENTS.map((event) => (
              <div
                key={event.id}
                className="border border-brand-gray-border bg-white p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-brand-red transition-colors duration-200 group"
              >
                <div className="flex-shrink-0 text-center w-20">
                  <div className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light">
                    {event.date.split(" ").slice(1).join(" ")}
                  </div>
                  <div className="font-display font-black text-4xl text-brand-black leading-none">
                    {event.date.split(" ")[0]}
                  </div>
                </div>
                <div className="w-px h-12 bg-brand-gray-border hidden sm:block" />
                <div className="flex-1">
                  <h2 className="font-display font-bold text-xl uppercase text-brand-black group-hover:text-brand-red transition-colors mb-1">
                    {event.name}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-brand-gray-mid">
                    <span>{event.circuit}</span>
                    <span>{event.time}</span>
                    <span>{event.category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={clsx(
                    "font-mono text-2xs uppercase tracking-widest px-3 py-1",
                    event.status === "open" && "bg-green-50 text-green-700 border border-green-200",
                    event.status === "upcoming" && "bg-brand-gray-bg text-brand-gray-mid border border-brand-gray-border",
                  )}>
                    {event.status === "open" ? "Abierto" : "Próximamente"}
                  </span>
                  {event.status === "open" && (
                    <Link href="/karting#inscripcion" className="btn-primary text-xs">
                      Inscribirse
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
