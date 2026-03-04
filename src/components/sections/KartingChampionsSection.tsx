import React from "react";
import Link from "next/link";
import Image from "next/image";

interface KartingChampionsSectionProps {
  image: string;
}

export function KartingChampionsSection({ image }: KartingChampionsSectionProps) {
  return (
    <section
      className="bg-black py-20 flex flex-col items-center"
      style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      <div className="container-xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div
            className="relative w-full max-w-md md:max-w-lg overflow-hidden shadow-lg aspect-[11/10] border-8 border-white"
          >
            <Image
              src={image}
              alt="Karting Champions"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Texto */}
        <div className="text-left">
          <span className="uppercase tracking-widest text-brand-red text-sm font-mono mb-4 block">KARTING DIVISION</span>
          <h2 className="font-black text-4xl md:text-5xl text-white mb-2" style={{ fontFamily: "inherit" }}>
            WHERE <span className="text-brand-red">CHAMPIONS</span><br />BEGIN
          </h2>
          <p className="text-brand-gray-light text-base md:text-lg leading-relaxed mb-8 mt-4" style={{ fontFamily: "inherit" }}>
            Our world-class karting facilities provide the perfect foundation for aspiring racers. With professional-grade tracks, cutting-edge equipment, and expert instruction, we develop the skills that define championship drivers.
          </p>
          <ul className="space-y-6 mb-10">
            <li className="flex items-start gap-4">
              <span className="mt-1">
                {/* Icono pista */}
                <svg width="28" height="28" fill="none" stroke="#D6001C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </span>
              <div>
                <span className="font-black text-white text-lg" style={{ fontFamily: "inherit" }}>Professional Track</span>
                <div className="text-brand-gray-light text-sm mt-1" style={{ fontFamily: "inherit" }}>FIA-certified circuit with state-of-the-art timing systems</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1">
                {/* Icono seguridad */}
                <svg width="28" height="28" fill="none" stroke="#D6001C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              </span>
              <div>
                <span className="font-black text-white text-lg" style={{ fontFamily: "inherit" }}>Safety First</span>
                <div className="text-brand-gray-light text-sm mt-1" style={{ fontFamily: "inherit" }}>Advanced safety protocols and equipment standards</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1">
                {/* Icono entrenamiento */}
                <svg width="28" height="28" fill="none" stroke="#D6001C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 19v-7" /><circle cx="12" cy="7" r="4" /><path d="M6 21v-2a6 6 0 0 1 12 0v2" /></svg>
              </span>
              <div>
                <span className="font-black text-white text-lg" style={{ fontFamily: "inherit" }}>Elite Training</span>
                <div className="text-brand-gray-light text-sm mt-1" style={{ fontFamily: "inherit" }}>Programs led by experienced professional racing instructors</div>
              </div>
            </li>
          </ul>
          <Link href="/institucion/escuelas" className="mt-2 px-8 py-3 bg-brand-red text-white font-bold text-base sm:text-lg rounded-none shadow-none hover:bg-brand-red/80 transition-all inline-flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start" style={{ fontFamily: "inherit" }}>
            JOIN KARTING PROGRAM
            <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
