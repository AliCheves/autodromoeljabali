import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { PILOTS, FEATURED_PILOT_SLUGS } from "@/data";
import { FeaturedPilotsRotator } from "./FeaturedPilotsRotator";

const featuredPilots = PILOTS.filter((p) =>
  FEATURED_PILOT_SLUGS.includes(p.slug)
);

export function FeaturedDriversSection() {
  return (
    <Section id="pilotos-destacados" gray>
      <div className="container-xl">
        <span className="uppercase tracking-widest text-brand-red text-sm font-mono mb-2 block text-center">
          NUESTROS PILOTOS
        </span>
        <h2 className="font-display font-black text-5xl md:text-6xl text-brand-black text-center mb-2">
          ÉLITE
          <span className="block text-brand-red">COMPETITIVA</span>
        </h2>

        <div className="mt-12 max-w-2xl mx-auto">
          <FeaturedPilotsRotator pilots={featuredPilots} />
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/pilotos"
            className="px-10 py-3 bg-black text-white font-bold text-base sm:text-lg hover:bg-brand-red transition-all w-full sm:w-auto text-center"
          >
            VER TODOS LOS PILOTOS
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default FeaturedDriversSection;
