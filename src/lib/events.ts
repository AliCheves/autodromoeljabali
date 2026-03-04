import { RACE_EVENTS, type RaceEvent } from "@/config/events";

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
