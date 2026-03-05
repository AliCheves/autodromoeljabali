import type { CalendarSeasonContent } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const AUTOMOVILISMO_2025: CalendarSeasonContent = {
    meta: {
        title: "Calendario Automovilismo 2025",
        description:
            "Calendario oficial de la temporada de automovilismo 2025 del Autódromo Internacional El Jabalí.",
    },
    hero: {
        label: "Temporada Oficial",
        title: "AUTOMOVILISMO",
        titleAccent: "2025",
        description:
            "Seis fechas de competición con los mejores pilotos y patrocinadores del automovilismo centroamericano.",
        image: "/images/temporarychangelater/heros/hero legado competitivo.jpg",
    },
    season: 2025,
    rounds: [
        { day: "15", month: "Febrero", year: 2025, sponsor: "Sincatex" },
        { day: "19", month: "Abril", year: 2025, sponsor: "Axalta" },
        { day: "20", month: "Junio", year: 2025, sponsor: "Direct English" },
        { day: "16", month: "Agosto", year: 2025, sponsor: "Diparvel" },
        { day: "26", month: "Septiembre", year: 2025, sponsor: "eif" },
        { day: "14", month: "Noviembre", year: 2025, sponsor: "LeClerc Paris" },
    ],
    description:
        "El calendario de automovilismo 2025 presenta seis jornadas de competición en el Autódromo Internacional El Jabalí, cada una respaldada por patrocinadores líderes de la industria.",
    ctaLabel: "VER EVENTOS",
    ctaHref: "/eventos",
};
