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

export const STANDINGS: StandingsEntry[] = [
    { position: 1, driver: "Carlos Vega", team: "Team Red Bull Racing", points: 245, wins: 8, podiums: 12, trend: "stable" },
    { position: 2, driver: "Sofía Martínez", team: "Velocity Racing", points: 238, wins: 7, podiums: 11, trend: "up" },
    { position: 3, driver: "Miguel Rodríguez", team: "Apex Racing Team", points: 220, wins: 6, podiums: 10, trend: "down" },
    { position: 4, driver: "Ana Santos", team: "Thunder Racing", points: 205, wins: 5, podiums: 9, trend: "up" },
    { position: 5, driver: "Juan Hernández", team: "Sprint Dreams", points: 198, wins: 3, podiums: 8, trend: "stable" },
];
