import type { HeroContent, StatItem, CalendarEvent } from "@/types/content";

export const HOME_HERO: HeroContent = {
    label: "TEMPORADA DE CAMPEONATO 2026",
    title: "SUPERANDO LOS",
    titleAccent: "LÍMITES",
    description: "Experimente el pináculo del automovilismo en Autódromo Internacional El Jabalí. Donde la precisión se encuentra con la pasión en la pista.",
    image: "/images/hero/jabali-noche.jpeg",
};

export const INSTITUTION_STATS: StatItem[] = [
    { value: "45+", label: "Impulsando el Deporte de Motor" },
    { value: "1000+", label: "Host de Carreras" },
    { value: "100K+", label: "Visitantes al año" },
    { value: "100+", label: "Eventos Deportivos al año" },
];

export const KARTING_CHAMPIONS_IMAGE = "/images/galeria/gala-campeones.jpeg";

export const HOME_CALENDAR: CalendarEvent[] = [
    { day: "15", month: "MAY", label: "PRÓXIMO", name: "Campeonato de Primavera - Ronda 1", circuit: "Autódromo El Jabalí", time: "10:00 AM" },
    { day: "08", month: "JUN", label: "CLASIFICATORIA", name: "Trofeo Internacional de Karting", circuit: "Autódromo El Jabalí - Norte", time: "09:00 AM" },
    { day: "22", month: "JUN", label: "RONDA", name: "Desafío de Resistencia 6H", circuit: "Circuito Principal", time: "12:00 PM" },
    { day: "10", month: "MAY", label: "ACADEMIA", name: "Exhibición Academia de Pilotos", circuit: "Centro de Entrenamiento", time: "10:00 PM" },
];
