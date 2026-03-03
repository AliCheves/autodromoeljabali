import type { StatItem, CalendarEvent } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const INSTITUTION_STATS: StatItem[] = [
    { value: "45+", label: "Años de Experiencia" },
    { value: "1000+", label: "Host de Carreras" },
    { value: "75+", label: "Configuraciones de Pista" },
    { value: "50+", label: "Eventos Anuales" },
];

export const HOME_CALENDAR: CalendarEvent[] = [
    { day: "15", month: "MAY", label: "PRÓXIMO", name: "Campeonato de Primavera - Ronda 1", circuit: "Autódromo El Jabalí", time: "10:00 AM" },
    { day: "08", month: "JUN", label: "CLASIFICATORIA", name: "Trofeo Internacional de Karting", circuit: "Autódromo El Jabalí - Norte", time: "09:00 AM" },
    { day: "22", month: "JUN", label: "RONDA", name: "Desafío de Resistencia 6H", circuit: "Circuito Principal", time: "12:00 PM" },
    { day: "10", month: "MAY", label: "ACADEMIA", name: "Exhibición Academia de Pilotos", circuit: "Centro de Entrenamiento", time: "10:00 PM" },
];

export const HOME_HERO = {
    image: PLACEHOLDER,
};
