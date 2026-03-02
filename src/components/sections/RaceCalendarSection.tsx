import React from "react";
import Link from "next/link";
import { UPCOMING_EVENTS as EVENTS } from "@/config/disciplines";

function LocationIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 21c-4.28-4.28-7-7.5-7-10A7 7 0 0 1 12 4a7 7 0 0 1 7 7c0 2.5-2.72 5.72-7 10Z" /><circle cx="12" cy="11" r="2" /></svg>
  );
}
function TimeIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
  );
}

export function RaceCalendarSection() {
  return (
    <section className="bg-white py-20 flex flex-col items-center" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <div className="mb-8 text-center">
        <span className="uppercase tracking-widest text-brand-red text-sm font-mono mb-2 block">PRÓXIMOS EVENTOS</span>
        <h2 className="font-black text-4xl md:text-5xl text-brand-black mb-2" style={{ fontFamily: "inherit" }}>
          CALENDARIO
          <span className="block text-brand-red">DE CARRERAS</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-8">
        {EVENTS.map((event, idx) => (
          <div
            key={idx}
            className="group border border-brand-gray-border bg-white transition-colors duration-300 rounded-none p-6 flex gap-6 items-center cursor-pointer hover:bg-black"
            style={{ fontFamily: "inherit" }}
          >
            <div className="min-w-[70px] text-center">
              <span className="font-black text-3xl md:text-4xl text-brand-red group-hover:text-white" style={{ fontFamily: "inherit" }}>{event.date.day}</span>
              <div className="text-brand-black group-hover:text-white text-sm font-bold mt-1" style={{ fontFamily: "inherit" }}>{event.date.month}</div>
              <div className="text-brand-gray-mid group-hover:text-white text-xs mt-1" style={{ fontFamily: "inherit" }}>{event.date.year}</div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-none" style={{ fontFamily: "inherit" }}>{event.category}</span>
                <span className="font-black text-lg md:text-xl text-brand-black group-hover:text-white" style={{ fontFamily: "inherit" }}>{event.title}</span>
              </div>
              <div className="flex items-center gap-2 text-brand-gray-mid group-hover:text-white text-sm mb-1" style={{ fontFamily: "inherit" }}>
                <LocationIcon />
                {event.location}
              </div>
              <div className="flex items-center gap-2 text-brand-gray-mid group-hover:text-white text-sm" style={{ fontFamily: "inherit" }}>
                <TimeIcon />
                {event.time}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 flex justify-center w-full">
        <Link href="/calendario" className="flex items-center gap-3 px-8 py-3 bg-black text-white font-bold text-lg rounded-none shadow-none border border-black hover:bg-white hover:text-black transition-all" style={{ fontFamily: "inherit" }}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
          VER CALENDARIO COMPLETO
        </Link>
      </div>
    </section>
  );
}
