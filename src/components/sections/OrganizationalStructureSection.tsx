import React from "react";

const CARDS = [
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#D6001C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/></svg>
    ),
    title: "Junta Directiva",
    desc: "Liderazgo estratégico y supervisión del gobierno corporativo para todas las operaciones de competición y desarrollo institucional."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#D6001C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M17 8a5 5 0 1 1-10 0c0-2.5 2.5-4 5-4s5 1.5 5 4Z"/></svg>
    ),
    title: "División de Competición",
    desc: "Gestión de eventos de competición, campeonatos y programas competitivos en todas las categorías."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#D6001C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20.5 13.5 19 15l-2-2 1.5-1.5a2 2 0 0 0-2.83-2.83L9 13l-2-2 6.67-6.67a2 2 0 0 1 2.83 2.83L11 11l2 2 6.67-6.67a2 2 0 0 0-2.83-2.83L13 9l-2-2 6.67-6.67a2 2 0 0 1 2.83 2.83L15 11l2 2 6.67-6.67a2 2 0 0 0-2.83-2.83L17 13l-2-2 6.67-6.67a2 2 0 0 1 2.83 2.83Z"/></svg>
    ),
    title: "Departamento Técnico",
    desc: "Excelencia en ingeniería, desarrollo de vehículos y optimización del rendimiento para nuestros equipos de competición."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#D6001C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 17v-4M7 12v-2a5 5 0 0 1 10 0v2"/><path d="M12 17v-4M7 12v-2a5 5 0 0 1 10 0v2"/></svg>
    ),
    title: "Academia de Pilotos",
    desc: "Programas de formación integral, desarrollo de talento y progresión profesional para pilotos en formación."
  }
];

export function OrganizationalStructureSection() {
  return (
    <section
      className="bg-[#f7f7f7] py-20 flex flex-col items-center"
      style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      <div className="mb-8 text-center">
        <span className="uppercase tracking-widest text-brand-red text-sm font-mono mb-2 block">ESTRUCTURA ORGANIZACIONAL</span>
        <h2 className="font-black text-4xl md:text-5xl text-brand-black mb-2" style={{ fontFamily: "inherit" }}>
          DISEÑADOS PARA LA
          <span className="block text-brand-red">EXCELENCIA</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl mt-8">
        {CARDS.map((card, idx) => (
          <div
            key={idx}
            className="group bg-white transition-colors duration-300 shadow-sm rounded-none p-8 flex flex-col items-start h-full cursor-pointer border border-transparent hover:bg-black hover:border-black"
            style={{ fontFamily: "inherit" }}
          >
            <div className="mb-4 group-hover:text-white">
              {card.icon}
            </div>
            <h3 className="font-black text-xl mb-2 group-hover:text-white" style={{ fontFamily: "inherit" } }>
              {card.title}
            </h3>
            <p className="text-brand-gray-mid group-hover:text-white text-base" style={{ fontFamily: "inherit" }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
