import type { Metadata } from "next";
import { HeroHome } from "@/components/sections/HeroHome";
import { InstitutionSection } from "@/components/sections/InstitutionSection";
import { FeaturedDriversSection } from "@/components/sections/FeaturedDriversSection";
import { SponsorsBand } from "@/components/ui/Sponsors";
import { HOME_HERO, KARTING_CHAMPIONS_IMAGE } from "@/config/content/home";
import { SPONSORS } from "@/config/sponsors";

export const metadata: Metadata = {
  title: "Inicio",
};

export default function HomePage() {
  return (
    <>
      <HeroHome content={HOME_HERO} />
      <SponsorsBand sponsors={SPONSORS} label="Patrocinadores Oficiales" />
      <InstitutionSection kartingImage={KARTING_CHAMPIONS_IMAGE} />
      <FeaturedDriversSection />
      <SponsorsBand sponsors={SPONSORS} dark label="Socios Técnicos" />
    </>
  );
}
