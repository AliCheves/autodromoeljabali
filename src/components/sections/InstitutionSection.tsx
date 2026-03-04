import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { INSTITUTION_STATS, LEGADO_SECTION } from "@/data";
import { OrganizationalStructureSection } from "./OrganizationalStructureSection";
import { KartingChampionsSection } from "./KartingChampionsSection";
import { RaceCalendarSection } from "./RaceCalendarSection";

const STAT_COLORS = [
  { bg: "bg-black", text: "text-brand-red" },
  { bg: "bg-brand-red", text: "text-white" },
  { bg: "bg-brand-red", text: "text-white" },
  { bg: "bg-black", text: "text-brand-red" },
];

interface InstitutionSectionProps {
  kartingImage: string;
}

export function InstitutionSection({ kartingImage }: InstitutionSectionProps) {
  return (
    <>
      <Section id="institucion">
        <div className="container-xl py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h1
                className="font-black text-5xl sm:text-6xl lg:text-7xl leading-none mb-2 text-brand-black"
                style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
              >
                {LEGADO_SECTION.title}
                <span className="block text-brand-red" style={{ fontFamily: "inherit" }}>{LEGADO_SECTION.titleAccent}</span>
              </h1>
              <div className="space-y-6 text-brand-gray-mid text-lg leading-relaxed mt-6" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                {LEGADO_SECTION.paragraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              <Link
                href={LEGADO_SECTION.ctaHref}
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-brand-red text-white font-bold text-base sm:text-lg hover:bg-brand-red/80 transition-all"
                style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
              >
                {LEGADO_SECTION.ctaLabel}
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              {INSTITUTION_STATS.map((stat, i) => {
                const colors = STAT_COLORS[i % STAT_COLORS.length];
                return (
                  <div
                    key={i}
                    className={`${colors.bg} text-white p-6 sm:p-10 flex flex-col items-center justify-center`}
                    style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                  >
                    <span className={`font-black text-5xl ${colors.text} mb-2`} style={{ fontFamily: "inherit" }}>
                      {stat.value}
                    </span>
                    <span className="text-base mt-2 text-center uppercase" style={{ fontFamily: "inherit" }}>
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
      <OrganizationalStructureSection />
      <KartingChampionsSection image={kartingImage} />
      <RaceCalendarSection />
    </>
  );
}

