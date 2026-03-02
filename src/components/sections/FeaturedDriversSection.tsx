import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { featuredDrivers } from "@/config/featuredDrivers";
import { Driver } from "@/types";

type Props = {
  drivers?: Driver[];
};

export default function FeaturedDriversSection({ drivers = featuredDrivers }: Props) {
  return (
    <Section id="pilotos-destacados" gray>
      <div className="container-xl">
        <span className="uppercase tracking-widest text-brand-red text-sm font-mono mb-2 block text-center">NUESTROS PILOTOS</span>
        <h2 className="font-black text-5xl md:text-6xl text-brand-black text-center mb-2" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
          ÉLITE
          <span className="block text-brand-red">COMPETITIVA</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {drivers.map(driver => (
            <Link
              key={driver.slug}
              href={`/pilotos/${driver.slug}`}
              className="group relative block overflow-hidden shadow-md"
              style={{ minHeight: 370 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${driver.image}')`, filter: 'brightness(0.55)' }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
              <div className="absolute top-4 right-6 font-black text-5xl md:text-6xl text-brand-red/80 select-none pointer-events-none" style={{ fontFamily: "inherit" }}>
                {driver.number}
              </div>
              <div className="relative z-10 flex flex-col justify-end h-full p-8">
                <div className="font-mono text-xs uppercase tracking-widest text-brand-red mb-1">
                  {driver.team}
                </div>
                <h3 className="font-black text-2xl md:text-3xl text-white mb-1" style={{ fontFamily: "inherit" }}>
                  {driver.name}
                </h3>
                <div className="text-brand-gray-light text-base mb-2" style={{ fontFamily: "inherit" }}>{driver.subtitle}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/pilotos" className="px-10 py-3 bg-black text-white font-bold text-lg rounded-none shadow-none hover:bg-brand-red transition-all" style={{ fontFamily: "inherit" }}>
            VER TODOS LOS PILOTOS
          </Link>
        </div>
      </div>
    </Section>
  );
}

export { FeaturedDriversSection };
