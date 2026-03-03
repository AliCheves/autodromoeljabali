import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { PILOTS, getPilotBySlug } from "@/data";
import { DisciplineChips } from "@/components/ui/DisciplineChips";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export function generateStaticParams() {
  return PILOTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const pilot = getPilotBySlug(params.slug);
  if (!pilot) return { title: "Piloto no encontrado" };
  return {
    title: pilot.meta.title,
    description: pilot.meta.description,
    openGraph: {
      title: pilot.meta.title,
      description: pilot.meta.description,
    },
  };
}

export default function PilotoPerfilPage({
  params,
}: {
  params: { slug: string };
}) {
  const pilot = getPilotBySlug(params.slug);
  if (!pilot) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('${pilot.image || PLACEHOLDER}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
        <div className="relative z-10 container-xl pt-24 pb-16 flex flex-col lg:flex-row items-end gap-12">
          <div className="flex-1">
            <DisciplineChips disciplines={pilot.disciplines} size="md" />
            <h1 className="font-display font-black text-white leading-none mt-4">
              <span className="block text-heading-xl">
                {pilot.firstName}
              </span>
              <span className="block text-heading-xl text-brand-red">
                {pilot.lastName}
              </span>
            </h1>
            {pilot.highlights.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-4">
                {pilot.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-widest"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 flex-shrink-0 hidden sm:block">
            <Image
              src={pilot.image || PLACEHOLDER}
              alt={pilot.name}
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      {pilot.stats.length > 0 && (
        <section className="bg-white border-b border-brand-gray-border">
          <div className="container-xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-gray-border">
              {pilot.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white py-6 px-4 text-center"
                >
                  <div className="font-display font-black text-xl sm:text-2xl text-brand-black">
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
      )}

      {/* Bio */}
      <Section>
        <div className="container-xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-brand-red" />
              <h2 className="font-display font-black text-heading-md uppercase text-brand-black">
                Sobre el Piloto
              </h2>
            </div>
            <div className="space-y-5">
              {pilot.bio.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-brand-gray-mid leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Action image placeholder */}
            {pilot.actionImage && (
              <div className="mt-8 relative aspect-video overflow-hidden rounded-lg bg-brand-gray-bg">
                <Image
                  src={pilot.actionImage}
                  alt={`${pilot.name} en acción`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            )}
          </div>

          <div className="mt-12 flex justify-end">
            <Link href="/pilotos" className="btn-primary text-xs">
              VER TODOS LOS PILOTOS →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
