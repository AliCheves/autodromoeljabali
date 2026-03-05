import type { CalendarSeasonContent } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const AUTOMOVILISMO_2026: CalendarSeasonContent = {
    meta: {
        title: "Calendario Automovilismo 2026",
        description:
            "Calendario oficial de la temporada de automovilismo 2026 del Autódromo Internacional El Jabalí.",
    },
    hero: {
        label: "Temporada Oficial",
        title: "AUTOMOVILISMO",
        titleAccent: "2026",
        description:
            "Seis fechas de competición con los mejores pilotos y patrocinadores del automovilismo centroamericano.",
        image: "/images/temporarychangelater/heros/hero automovilismo 2026.jpg",
    },
    season: 2026,
    rounds: [
        { day: "15", month: "Febrero", year: 2026, sponsor: "Sincatex" },
        { day: "19", month: "Abril", year: 2026, sponsor: "Axalta" },
        { day: "20", month: "Junio", year: 2026, sponsor: "Direct English" },
        { day: "16", month: "Agosto", year: 2026, sponsor: "Diparvel" },
        { day: "26", month: "Septiembre", year: 2026, sponsor: "elf" },
        { day: "14", month: "Noviembre", year: 2026, sponsor: "LêCleire Paris" },
    ],
    description:
        "El calendario de automovilismo 2026 presenta seis jornadas de competición en el Autódromo Internacional El Jabalí, cada una respaldada por patrocinadores líderes de la industria.",
    ctaLabel: "VER EVENTOS",
    ctaHref: "/eventos",
    sponsors: [
        "ACES",
        "Autódromo Internacional El Jabalí",
        "Sincatex",
        "Axalta",
        "Direct English",
        "Diparvel",
        "elf",
        "LêCleire Paris",
    ],
    disclaimer: "Fechas sujetas a cambios",
};
