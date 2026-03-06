"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import type { RaceEvent } from "@/types/content";
import { formatRaceDate, buildGlobalGoogleCalendarUrl } from "@/lib/events";

interface GlobalCalendarProps {
    events: RaceEvent[];
}

export function GlobalCalendar({ events }: GlobalCalendarProps) {
    const [mounted, setMounted] = useState(false);
    const [upcomingEvents, setUpcomingEvents] = useState<RaceEvent[]>([]);

    useEffect(() => {
        setMounted(true);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const filtered = events.filter((event) => {
            const eventDate = new Date(event.date + "T00:00:00");
            return eventDate.getTime() >= today.getTime();
        });

        // Ensure chronological order
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        setUpcomingEvents(filtered);
    }, [events]);

    // Don't render dates until hydration to prevent mismatch
    if (!mounted) {
        return <div className="min-h-[400px] flex items-center justify-center text-brand-gray-light">Cargando calendario...</div>;
    }

    if (upcomingEvents.length === 0) {
        return (
            <div className="border border-brand-gray-border bg-brand-gray-bg/30 p-12 text-center text-brand-gray-mid">
                No hay eventos próximos programados por el momento.
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {upcomingEvents.map((event, index) => {
                const dateParts = formatRaceDate(event.date);
                const isNext = index === 0;

                return (
                    <div
                        key={event.id}
                        className={clsx(
                            "border p-6 flex flex-col sm:flex-row sm:items-center gap-4 transition-all duration-200 group relative",
                            isNext ? "border-brand-red bg-white shadow-sm" : "border-brand-gray-border bg-white hover:border-brand-red"
                        )}
                    >
                        {isNext && (
                            <div className="absolute -top-3 left-6 bg-brand-red text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1 font-bold z-10 shadow-sm">
                                Próximo Evento
                            </div>
                        )}

                        <div className="flex-shrink-0 text-center w-20">
                            <div className={clsx(
                                "font-mono text-2xs uppercase tracking-widest transition-colors",
                                isNext ? "text-brand-red" : "text-brand-gray-light group-hover:text-brand-red"
                            )}>
                                {dateParts.month}
                            </div>
                            <div className="font-display font-black text-4xl text-brand-black leading-none">
                                {dateParts.day}
                            </div>
                        </div>

                        <div className="w-px h-12 bg-brand-gray-border hidden sm:block" />

                        <div className="flex-1">
                            <h2 className="font-display font-bold text-xl uppercase text-brand-black group-hover:text-brand-red transition-colors mb-2">
                                {event.title}
                            </h2>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-gray-mid">
                                <span className="flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-brand-gray-light">
                                        <path fillRule="evenodd" d="Mm4 1.75C4 .784 4.784 0 5.75 0h5.5C12.216 0 13 .784 13 1.75v12.5A1.75 1.75 0 0 1 11.25 16h-5.5A1.75 1.75 0 0 1 4 14.25V1.75Zm1.5 0v12.5h5.5V1.75h-5.5Z" clipRule="evenodd" />
                                        <path d="M5.5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z" />
                                    </svg>
                                    {event.location}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-brand-gray-light">
                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z" clipRule="evenodd" />
                                    </svg>
                                    {event.time}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-brand-gray-light">
                                        <path fillRule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-6-3.5v5.524A2.501 2.501 0 0 1 7.288 12.5h-1.02a.75.75 0 0 1 0-1.5h1.02A1 1 0 0 0 8 10V4.5a.75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
                                    </svg>
                                    {event.category}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                            <Link
                                href={event.page}
                                className="btn-secondary text-xs text-center sm:text-left justify-center px-4"
                            >
                                Ver Detalles
                            </Link>
                            <a
                                href={buildGlobalGoogleCalendarUrl(event)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-xs flex items-center justify-center gap-2 px-4 shadow-sm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                                    <path d="M2.5 3.5A1.5 1.5 0 0 1 4 2h8a1.5 1.5 0 0 1 1.5 1.5v1H2.5v-1Z" />
                                    <path fillRule="evenodd" d="M2.5 6V12.5A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6h-11Zm3.604 1.764a.75.75 0 0 0-.208 1.04l1.35 2 1.35-2a.75.75 0 0 0-1.248-.832L8 9.07l-.646-1.098a.75.75 0 0 0-1.25.792Z" clipRule="evenodd" />
                                </svg>
                                Añadir a Calendar
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
