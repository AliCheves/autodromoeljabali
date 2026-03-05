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
        image: "/images/temporarychangelater/heros/hero campeonato 4t.jpg",
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
            "Edad mínima: 12 años",
            "Inscripción por fecha: $250.00 (incluye 6 prácticas, clasificación, 3 heats, servicio de motor, transporte de kart y 4 pases familiares)",
            "Arrive & Drive disponible: $450.00 + depósito",
            "Motor: Ghost Predator 4T — 212 c.c., monocilíndrico, enfriado por aire, embrague centrífugo — proporcionado por ACES",
            "Llantas obligatorias: MG RL2 (compuesto azul), suministradas por ACES",
            "Chasis: libre de marca y año (ejes traseros de 40mm y 50mm, sin restricción de dureza)",
            "Entrega de chasis al autódromo o sede ACES 72 horas antes del evento para inspección técnica",
            "Cable de seguridad de frenos estrictamente obligatorio",
            "Escape de fábrica 4T — sin modificaciones ni envoltura térmica",
            "Relación de engranajes fija, determinada por ACES para garantizar paridad",
            "Categoría Heavy: peso mínimo 380 lbs | Categoría Light: peso mínimo 340 lbs",
            "Para optar a premios de fin de campeonato, el piloto debe participar en las 6 fechas",
        ],
        contactPhones: ["2231-5555"],
        engineNote: "Motores Ghost Predator 4T preparados en USA — asignados por sorteo público",
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
    document: {
        label: "Descargar Reglamento Oficial 2026",
        fileName: "Reglamento Campeonato 4T 2026",
        filePath: "/docs/reglamentos/reglamento-campeonato-4t-2026.pdf",
    },
    documents: [
        {
            label: "Descargar Reglamento Oficial 2026",
            fileName: "Reglamento Campeonato 4T 2026",
            filePath: "/docs/reglamentos/reglamento-campeonato-4t-2026.pdf",
            variant: "primary",
        },
        {
            label: "Descargar Comunicado — 1er Fecha",
            fileName: "COMUNICADO 1er. Fecha",
            filePath: "/docs/comunicados/COMUNICADO%201er.%20Fecha.pdf",
            variant: "secondary",
        },
    ],
};
