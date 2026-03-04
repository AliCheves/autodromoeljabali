import Link from "next/link";
import { getNextEvents, formatRaceDate } from "@/lib/events";

function LocationIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 21c-4.28-4.28-7-7.5-7-10A7 7 0 0 1 12 4a7 7 0 0 1 7 7c0 2.5-2.72 5.72-7 10Z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  );
}

function TimeIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function RaceCalendarSection() {
  const events = getNextEvents(3);

  if (events.length === 0) return null;

  return (
    <section className="bg-white py-20" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <div className="container-xl">
        <div className="mb-8 text-center">
          <span className="uppercase tracking-widest text-brand-red text-sm font-mono mb-2 block">PRÓXIMOS EVENTOS</span>
          <h2 className="font-black text-4xl md:text-5xl text-brand-black mb-2" style={{ fontFamily: "inherit" }}>
            CALENDARIO
            <span className="block text-brand-red">DE CARRERAS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {events.map((event) => {
            const formatted = formatRaceDate(event.date);
            return (
              <Link
                key={event.id}
                href={event.page}
                className="group border border-brand-gray-border bg-white transition-colors duration-300 p-6 flex gap-6 items-center hover:bg-black min-w-0 overflow-hidden"
                style={{ fontFamily: "inherit" }}
              >
                <div className="min-w-20 text-center flex-shrink-0">
                  <span className="font-black text-3xl md:text-4xl text-brand-red group-hover:text-white" style={{ fontFamily: "inherit" }}>
                    {formatted.day}
                  </span>
                  <div className="text-brand-black group-hover:text-white text-sm font-bold mt-1" style={{ fontFamily: "inherit" }}>
                    {formatted.month}
                  </div>
                  <div className="text-brand-gray-mid group-hover:text-white text-xs mt-1" style={{ fontFamily: "inherit" }}>
                    {formatted.year}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 flex-shrink-0" style={{ fontFamily: "inherit" }}>
                      {event.category}
                    </span>
                    <span className="font-black text-lg md:text-xl text-brand-black group-hover:text-white truncate" style={{ fontFamily: "inherit" }}>
                      {event.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-gray-mid group-hover:text-white text-sm mb-1 truncate" style={{ fontFamily: "inherit" }}>
                    <LocationIcon />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-gray-mid group-hover:text-white text-sm" style={{ fontFamily: "inherit" }}>
                    <TimeIcon />
                    {event.time}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/eventos/campeonato-4t"
            className="flex items-center justify-center gap-3 px-8 py-3 bg-black text-white font-bold text-base sm:text-lg border border-black hover:bg-white hover:text-black transition-all w-full sm:w-auto text-center"
            style={{ fontFamily: "inherit" }}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            VER CALENDARIO COMPLETO
          </Link>
        </div>
      </div>
    </section>
  );
}
