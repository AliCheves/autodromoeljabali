"use client";

import type { RentalCalendarDay } from "@/types/content";

const MONTH_MAP: Record<string, string> = {
    Enero: "01",
    Febrero: "02",
    Marzo: "03",
    Abril: "04",
    Mayo: "05",
    Junio: "06",
    Julio: "07",
    Agosto: "08",
    Septiembre: "09",
    Octubre: "10",
    Noviembre: "11",
    Diciembre: "12",
};

interface RentalCalendarCardProps {
    date: RentalCalendarDay;
    startHour: number;
    year?: number;
}

function buildGoogleCalendarUrl(
    date: RentalCalendarDay,
    startHour: number,
    year: number
): string {
    const month = MONTH_MAP[date.month] || "01";
    const day = String(date.day).padStart(2, "0");
    const startH = String(startHour).padStart(2, "0");
    const endHour = startHour + 5;
    const endH = String(endHour > 23 ? 23 : endHour).padStart(2, "0");
    const dateStr = `${year}${month}${day}`;

    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: "Karting Rental Experience",
        dates: `${dateStr}T${startH}0000/${dateStr}T${endH}0000`,
        details: "Experiencia gratuita de karting en el Autódromo Internacional El Jabalí.",
        location: "Autódromo Internacional El Jabalí, El Salvador",
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function RentalCalendarCard({
    date,
    startHour,
    year = 2026,
}: RentalCalendarCardProps) {
    const url = buildGoogleCalendarUrl(date, startHour, year);

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Agregar ${date.day} de ${date.month} al calendario`}
            className="group flex flex-col items-center justify-center p-4 bg-white border border-brand-gray-border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-brand-red motion-reduce:transform-none motion-reduce:transition-none"
        >
            <span className="font-display font-black text-2xl text-brand-black group-hover:text-brand-red transition-colors">
                {date.day}
            </span>
            <span className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mt-1">
                {date.month}
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 text-brand-gray-light group-hover:text-brand-red transition-colors mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
            </svg>
        </a>
    );
}
