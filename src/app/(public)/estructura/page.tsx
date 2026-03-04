import type { Metadata } from "next";
import { ESTRUCTURA_PAGE_CONTENT } from "@/config/content/estructura";
import { ESTRUCTURA_DEPORTIVA } from "@/config/content/estructura/deportiva";
import { EventHero } from "@/components/sections/EventHero";
import { LeadershipGrid } from "@/components/sections/LeadershipGrid";
import { Section, SectionHeader } from "@/components/ui/Section";

export function generateMetadata(): Metadata {
  const { meta } = ESTRUCTURA_PAGE_CONTENT;
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function EstructuraPage() {
  const { hero, narrative, fiaSection, integrityHighlights } =
    ESTRUCTURA_PAGE_CONTENT;
  const deportiva = ESTRUCTURA_DEPORTIVA;

  return (
    <>
      <EventHero
        label={hero.label}
        title={hero.title}
        titleAccent={hero.titleAccent}
        description={hero.description}
        image={hero.image}
      />

      {/* Institutional Narrative */}
      <Section>
        <div className="container-xl">
          <div className="max-w-3xl">
            {narrative.map((block, i) => (
              <div key={i} className={i > 0 ? "mt-12" : ""}>
                <h2 className="font-display font-black text-heading-md text-brand-black mb-4">
                  {block.title}
                </h2>
                {block.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-brand-gray-mid leading-relaxed mb-4 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FIA Video + Text */}
      <Section dark>
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <video
                controls
                className="w-full aspect-video rounded-lg bg-brand-black"
                preload="metadata"
                poster={fiaSection.video.poster}
              >
                <source
                  src={fiaSection.video.src}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-display font-black text-heading-md text-white mb-6">
                {fiaSection.title}
              </h2>
              {fiaSection.description.map((p, i) => (
                <p
                  key={i}
                  className="text-brand-gray-light leading-relaxed mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Leadership Showcase */}
      <Section>
        <div className="container-xl">
          <SectionHeader
            label="Liderazgo"
            title="ESTRUCTURA"
            titleAccent="DEPORTIVA"
            subtitle={deportiva.hero.description}
          />
          <LeadershipGrid members={deportiva.members} />
        </div>
      </Section>

      {/* Integrity Highlights */}
      <Section gray>
        <div className="container-xl">
          <SectionHeader
            label="Compromiso Institucional"
            title="PILARES"
            titleAccent="INSTITUCIONALES"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-gray-border">
            {integrityHighlights.items.map((item, i) => (
              <div
                key={i}
                className="bg-brand-gray-bg p-8 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-brand-red flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <h3 className="font-display font-bold text-lg uppercase text-brand-black">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-brand-gray-mid leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
