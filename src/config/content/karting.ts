import type {
    KartingClass,
    RaceEvent,
    StandingsEntry,
} from "@/types/content";

export const KARTING_CLASSES: KartingClass[] = [
    {
        id: "cadete",
        name: "Cadete",
        ageMin: 8,
        ageMax: 12,
        engine: "Motor 50cc",
        description:
            "Categoría de iniciación para jóvenes pilotos que comienzan su trayectoria e inspiran competición.",
    },
    {
        id: "junior",
        name: "Junior",
        ageMin: 12,
        ageMax: 15,
        engine: "Motor 125cc",
        description:
            "Competición intermedia para pilotos en desarrollo con habilidades avanzadas.",
    },
    {
        id: "senior",
        name: "Senior",
        ageMin: 15,
        ageMax: 18,
        engine: "Motor 125cc / TaG",
        description:
            "Categoría avanzada de pilotos altamente experimentados y profesionales.",
    },
    {
        id: "master",
        name: "Máster",
        ageMin: 18,
        ageMax: null,
        engine: "Motor 125cc",
        description:
            "Competición de élite para pilotos veteranos altamente competitivos.",
    },
];

export const RACE_EVENTS: RaceEvent[] = [
    {
        id: "1",
        name: "Campeonato Sprint de Primavera",
        date: "28 MAR 2026",
        time: "09:00 AM",
        circuit: "Autódromo El Jabalí - Norte",
        category: "Todas las categorías",
        status: "open",
        distance: "18.3 km",
    },
    {
        id: "2",
        name: "Gran Premio de San Salvador",
        date: "11 ABR 2026",
        time: "10:00 AM",
        circuit: "Circuito Internacional de Karting",
        category: "Senior / Máster",
        status: "open",
        distance: "22.0 km",
    },
    {
        id: "3",
        name: "Copa Centroamericana",
        date: "25 ABR 2026",
        time: "11:00 AM",
        circuit: "Autódromo El Jabalí - Sur",
        category: "Junior / Senior",
        status: "upcoming",
        distance: "7.2 km",
    },
];

export const STANDINGS: StandingsEntry[] = [
    { position: 1, driver: "Carlos Vega", team: "Team Red Bull Racing", points: 245, wins: 8, podiums: 12, trend: "stable" },
    { position: 2, driver: "Sofía Martínez", team: "Velocity Racing", points: 238, wins: 7, podiums: 11, trend: "up" },
    { position: 3, driver: "Miguel Rodríguez", team: "Apex Racing Team", points: 220, wins: 6, podiums: 10, trend: "down" },
    { position: 4, driver: "Ana Santos", team: "Thunder Racing", points: 205, wins: 5, podiums: 9, trend: "up" },
    { position: 5, driver: "Juan Hernández", team: "Sprint Dreams", points: 198, wins: 3, podiums: 8, trend: "stable" },
];
