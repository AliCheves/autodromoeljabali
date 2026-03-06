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
              <div className="font-black text-4xl sm:text-5xl md:text-6xl text-brand-black leading-none tracking-tight">
                {LEGADO_SECTION.title}
                <span className="block text-brand-red">{LEGADO_SECTION.titleAccent}</span>
              </div>
              <div className="space-y-6 text-brand-gray-mid text-lg leading-relaxed mt-6">
                {LEGADO_SECTION.paragraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              <Link
                href="/institucion/legado"
                className="btn-cta mt-8"
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
                  >
                    <span className={`font-black text-5xl ${colors.text} mb-2`}>
                      {stat.value}
                    </span>
                    <span className="text-base mt-2 text-center uppercase">
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

