import type { Metadata } from "next";
import { HeroHome } from "@/components/sections/HeroHome";
import { InstitutionSection } from "@/components/sections/InstitutionSection";
import { FeaturedDriversSection } from "@/components/sections/FeaturedDriversSection";
import { SponsorsBand } from "@/components/ui/Sponsors";
import { HOME_HERO } from "@/config/content/home";

export const metadata: Metadata = {
  title: "Inicio",
};

export default function HomePage() {
  return (
    <>
      <HeroHome content={HOME_HERO} />
      <SponsorsBand label="Patrocinadores Oficiales" />
      <InstitutionSection />
      <FeaturedDriversSection />
      <SponsorsBand dark label="Socios Técnicos" />
    </>
  );
}
