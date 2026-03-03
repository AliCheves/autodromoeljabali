import type { ChampionshipContent } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const CAMPEONATO_4T: ChampionshipContent = {
    meta: {
        title: "Campeonato 4T — By ACES",
        description:
            "Campeonato oficial de karting 4 tiempos organizado por ACES en el Autódromo Internacional El Jabalí. Motores de carrera preparados en USA.",
    },
    hero: {
        label: "By ACES",
        title: "CAMPEONATO",
        titleAccent: "4T",
        description:
            "Competición oficial de karting 4 tiempos. Seis rondas de alta intensidad con premios para los tres primeros lugares. Motores de carrera preparados en USA.",
        image: PLACEHOLDER,
    },
    organizer: "ACES",
    rounds: [
        { day: "08", month: "Marzo" },
        { day: "26", month: "Abril" },
        { day: "07", month: "Junio" },
        { day: "05", month: "Julio" },
        { day: "13", month: "Septiembre" },
        { day: "25", month: "Octubre" },
    ],
    prizes: [
        { place: "1er Lugar", amount: "$1,500.00" },
        { place: "2do Lugar", amount: "$1,000.00" },
        { place: "3er Lugar", amount: "$500.00" },
    ],
    description:
        "El Campeonato 4T es la competición de referencia para el karting de 4 tiempos en El Salvador. Organizado por ACES, reúne a los mejores pilotos de la región en seis rondas de alta competitividad a lo largo del año. Motores de carrera preparados en USA.",
    ctaLabel: "INSCRIBIRSE",
    ctaHref: "/contacto",
    registration: {
        totalSlots: 20,
        requirements: [
            "Chasis requerido",
            "Motores y configuración montada en pista",
        ],
        contactPhones: ["7856-6554", "2231-5555"],
        engineNote: "Motores de carrera preparados en USA",
    },
    pressConference: {
        venue: "Hotel Hyatt Centric",
        date: "Jueves 15 de Enero",
        time: "7:00 PM",
    },
    sponsors: [
        "ACES",
        "FIA",
        "Liqui Moly",
        "Hyatt Centric",
        "Sincatex Racing",
        "Direct English",
        "Todo Motor",
    ],
};
