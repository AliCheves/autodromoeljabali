import { RACE_EVENTS } from "@/config/events";
import type { RaceEvent } from "@/types/content";

const MONTHS_ES = [
    "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
    "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE",
];

export function getAllEvents(): RaceEvent[] {
    return [...RACE_EVENTS].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
}

export function getUpcomingEvents(): RaceEvent[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return getAllEvents().filter(
        (event) => new Date(event.date).getTime() >= today.getTime()
    );
}

export function getNextEvents(limit: number): RaceEvent[] {
    return getUpcomingEvents().slice(0, limit);
}

export function formatRaceDate(isoDate: string): { day: string; month: string; year: string } {
    const date = new Date(isoDate + "T00:00:00");
    return {
        day: String(date.getDate()).padStart(2, "0"),
        month: MONTHS_ES[date.getMonth()],
        year: String(date.getFullYear()),
    };
}

/**
 * Generates a Google Calendar "Add Event" URL suitable for any RaceEvent.
 */
export function buildGlobalGoogleCalendarUrl(event: RaceEvent): string {
    const startHour = event.startHour ?? 8; // Default 8am if not specified
    const endHour = event.endHour ?? startHour + 5; // Default 5 hour duration

    // Input date is YYYY-MM-DD
    const dateStr = event.date.split("-").join("");

    const startH = String(startHour).padStart(2, "0");
    const endH = String(endHour > 23 ? 23 : endHour).padStart(2, "0");

    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: event.title,
        dates: `${dateStr}T${startH}0000/${dateStr}T${endH}0000`,
        details: `Categoría: ${event.category}\\nHorario: ${event.time}\\n\\nMás información: autodromoeljabali.com${event.page}`,
        location: event.location,
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
