import type { Metadata } from "next";
import { HeroHome } from "@/components/sections/HeroHome";
import { InstitutionSection } from "@/components/sections/InstitutionSection";
import { FeaturedDriversSection } from "@/components/sections/FeaturedDriversSection";
import { SponsorsBand } from "@/components/ui/Sponsors";

export const metadata: Metadata = {
  title: "Inicio",
};

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <SponsorsBand label="Patrocinadores Oficiales" />
      <InstitutionSection />
      <FeaturedDriversSection />
      <SponsorsBand dark label="Socios Técnicos" />
    </>
  );
}
