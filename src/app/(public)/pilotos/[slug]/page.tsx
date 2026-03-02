import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import { getDriverBySlug, DRIVERS } from "@/data";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export function generateStaticParams() {
  return DRIVERS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const driver = getDriverBySlug(params.slug);
  if (!driver) return { title: "Piloto no encontrado" };
  return {
    title: `${driver.name} — Piloto`,
    description: driver.bio.slice(0, 155),
  };
}

export default function PilotoPerfilPage({ params }: { params: { slug: string } }) {
  const driver = getDriverBySlug(params.slug);
  if (!driver) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('${PLACEHOLDER}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
        <div className="relative z-10 container-xl pt-24 pb-16 flex flex-col lg:flex-row items-end gap-12">
          <div className="flex-1">
            <p className="font-mono text-2xs uppercase tracking-widest text-brand-red mb-3">
              {driver.team}
            </p>
            <h1 className="font-display font-black text-white leading-none">
              <span className="block text-heading-xl">{driver.firstName}</span>
              <span className="block text-heading-xl text-brand-red">{driver.lastName}</span>
            </h1>
            <div className="flex items-center gap-4 mt-4 text-brand-gray-light text-sm">
              <span>#{String(driver.number).padStart(2, "0")}</span>
              <span className="w-px h-4 bg-brand-gray-border" />
              <span>{driver.nationality}</span>
              <span className="w-px h-4 bg-brand-gray-border" />
              <span>Desde {driver.careerStart}</span>
            </div>
            <p className="mt-4 text-brand-gray-light text-sm max-w-xl leading-relaxed">
              {driver.birthPlace} — {driver.birthDate}
            </p>
          </div>
          <div className="font-display font-black text-[12rem] leading-none text-white/10 select-none hidden lg:block">
            {String(driver.number).padStart(2, "0")}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-brand-gray-border">
        <div className="container-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-brand-gray-border">
            {[
              { icon: "🏆", label: "Posición", value: `P${driver.position}` },
              { icon: "⚡", label: "Puntos", value: driver.points },
              { icon: "🏁", label: "Victorias", value: driver.wins },
              { icon: "🥇", label: "Podios", value: driver.podiums },
              { icon: "📊", label: "Carreras", value: driver.races },
              { icon: "⏱", label: "Poles", value: driver.polePositions },
            ].map((stat) => (
              <div key={stat.label} className="py-6 px-4 text-center">
                <div className="text-lg mb-1">{stat.icon}</div>
                <div className="font-display font-black text-2xl text-brand-black">
                  {stat.value}
                </div>
                <div className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio + Achievements */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-brand-red" />
                <h2 className="font-display font-black text-heading-md uppercase text-brand-black">
                  Sobre el Piloto
                </h2>
              </div>
              <p className="text-brand-gray-mid leading-relaxed mb-8">
                {driver.bio}
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-brand-gray-mid">
                <div>
                  <span className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1">
                    Nacimiento
                  </span>
                  {driver.birthDate}
                </div>
                <div>
                  <span className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1">
                    Origen
                  </span>
                  {driver.birthPlace}
                </div>
                <div>
                  <span className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1">
                    Inicio de carrera
                  </span>
                  {driver.careerStart}
                </div>
              </div>

              {/* Placeholder image */}
              <div className="mt-8 relative h-64 bg-brand-gray-bg border border-brand-gray-border flex items-center justify-center overflow-hidden">
                <span className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light">
                  Imagen — {driver.name}
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-brand-red" />
                <h2 className="font-display font-black text-heading-md uppercase text-brand-black">
                  Logros Destacados
                </h2>
              </div>
              <ul className="space-y-3">
                {driver.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-3 text-sm text-brand-gray-mid"
                  >
                    <span className="text-brand-red flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sponsors */}
      <Section gray>
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-brand-red" />
            <h2 className="font-display font-black text-heading-md uppercase text-brand-black">
              Patrocinadores
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-4">
                Patrocinadores principales
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-brand-gray-border">
                {driver.sponsors.main.map((sponsor) => (
                  <div key={sponsor} className="bg-white p-6 flex items-center justify-center text-sm font-display font-bold text-brand-black uppercase">
                    {sponsor}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-4">
                Patrocinadores oficiales
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-px bg-brand-gray-border">
                {driver.sponsors.official.map((sponsor) => (
                  <div key={sponsor} className="bg-white p-4 flex items-center justify-center text-xs font-display font-bold text-brand-gray-mid uppercase">
                    {sponsor}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-4">
                Socios técnicos
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-px bg-brand-gray-border">
                {driver.sponsors.technical.map((sponsor) => (
                  <div key={sponsor} className="bg-white p-4 flex items-center justify-center text-xs text-brand-gray-light">
                    {sponsor}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Recent Results */}
      {driver.recentResults.length > 0 && (
        <Section>
          <Container>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-brand-red" />
              <h2 className="font-display font-black text-heading-md uppercase text-brand-black">
                Actuaciones Recientes
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-brand-black">
                    <th className="py-3 px-4 text-left font-mono text-2xs uppercase tracking-widest text-brand-gray-light">Ronda</th>
                    <th className="py-3 px-4 text-left font-mono text-2xs uppercase tracking-widest text-brand-gray-light">Fecha</th>
                    <th className="py-3 px-4 text-left font-mono text-2xs uppercase tracking-widest text-brand-gray-light">Circuito</th>
                    <th className="py-3 px-4 text-center font-mono text-2xs uppercase tracking-widest text-brand-gray-light">Posición</th>
                    <th className="py-3 px-4 text-center font-mono text-2xs uppercase tracking-widest text-brand-gray-light">Puntos</th>
                  </tr>
                </thead>
                <tbody>
                  {driver.recentResults.map((result) => (
                    <tr key={result.round} className="border-b border-brand-gray-border hover:bg-brand-gray-bg transition-colors">
                      <td className="py-4 px-4 font-display font-bold text-brand-black">{result.round}</td>
                      <td className="py-4 px-4 text-brand-gray-mid">{result.date}</td>
                      <td className="py-4 px-4 text-brand-gray-mid">{result.circuit}</td>
                      <td className="py-4 px-4 text-center">
                        <span className={`font-display font-black text-lg ${result.victory ? "text-brand-red" : "text-brand-black"}`}>
                          {result.position}
                        </span>
                        {result.fastestLap && (
                          <span className="ml-1 text-brand-red text-xs">⚡</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center font-display font-bold text-brand-black">
                        {result.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex justify-end">
              <Link
                href="/pilotos"
                className="btn-primary text-xs"
              >
                VER TODOS LOS PILOTOS →
              </Link>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
