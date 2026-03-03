import type { RentalExperienceContent } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const KART_RENTAL_2026: RentalExperienceContent = {
    meta: {
        title: "Kart Rental Experience 2026",
        description:
            "Experiencia de alquiler de karts en el Autódromo Internacional El Jabalí. Viernes y sábados.",
    },
    hero: {
        label: "Experiencia de Pista",
        title: "KART RENTAL",
        titleAccent: "EXPERIENCE 2026",
        description:
            "Vive la emoción del karting en un circuito de clase mundial. Sesiones disponibles viernes y sábados.",
        image: PLACEHOLDER,
    },
    schedule: [
        { day: "Viernes", startTime: "5:00 PM", endTime: "12:00 MN" },
        { day: "Sábado", startTime: "1:00 PM", endTime: "12:00 MN" },
    ],
    pricing: [
        {
            type: "Sesión Individual",
            price: "$25",
            description: "Una sesión de 10 minutos en pista.",
            includes: ["Kart", "Casco", "Briefing de seguridad"],
        },
        {
            type: "Paquete Doble",
            price: "$45",
            description: "Dos sesiones de 10 minutos en pista.",
            includes: ["Kart", "Casco", "Briefing de seguridad", "Cronometraje"],
        },
        {
            type: "Grupo (6+)",
            price: "$20 / persona",
            description: "Tarifa especial para grupos de 6 o más personas.",
            includes: ["Kart", "Casco", "Briefing", "Cronometraje", "Pódium grupal"],
        },
    ],
    description:
        "La experiencia Kart Rental ofrece acceso a nuestro circuito profesional de karting con equipamiento de primera clase. Ideal para familias, amigos y eventos corporativos. Powered by Freedom.",
    highlights: [
        "Circuito profesional FIA de 850 metros",
        "Karts de última generación con motor 4T",
        "Equipamiento de seguridad completo",
        "Sistema de cronometraje digital",
        "Área de espectadores techada",
        "Estacionamiento gratuito",
    ],
    ctaLabel: "RESERVAR AHORA",
    ctaHref: "/contacto",
    poweredBy: "Freedom — Libertad Sobre 2 Ruedas",
    calendars: [
        {
            day: "Viernes",
            timeRange: "5:00 PM – 12:00 MN",
            dates: [
                { day: "13", month: "Marzo" },
                { day: "27", month: "Marzo" },
                { day: "10", month: "Abril" },
                { day: "24", month: "Abril" },
                { day: "08", month: "Mayo" },
                { day: "22", month: "Mayo" },
                { day: "12", month: "Junio" },
                { day: "26", month: "Junio" },
                { day: "10", month: "Julio" },
                { day: "24", month: "Julio" },
                { day: "21", month: "Agosto" },
                { day: "28", month: "Agosto" },
                { day: "11", month: "Septiembre" },
                { day: "18", month: "Septiembre" },
                { day: "09", month: "Octubre" },
                { day: "23", month: "Octubre" },
                { day: "06", month: "Noviembre" },
                { day: "27", month: "Noviembre" },
                { day: "11", month: "Diciembre" },
                { day: "18", month: "Diciembre" },
            ],
        },
        {
            day: "Sábado",
            timeRange: "1:00 PM – 12:00 MN",
            dates: [
                { day: "14", month: "Marzo" },
                { day: "28", month: "Marzo" },
                { day: "11", month: "Abril" },
                { day: "09", month: "Mayo" },
                { day: "30", month: "Mayo" },
                { day: "13", month: "Junio" },
                { day: "27", month: "Junio" },
                { day: "18", month: "Julio" },
                { day: "01", month: "Agosto" },
                { day: "22", month: "Agosto" },
                { day: "05", month: "Septiembre" },
                { day: "19", month: "Septiembre" },
                { day: "03", month: "Octubre" },
                { day: "10", month: "Octubre" },
                { day: "07", month: "Noviembre" },
                { day: "21", month: "Noviembre" },
                { day: "05", month: "Diciembre" },
                { day: "19", month: "Diciembre" },
            ],
        },
    ],
    sponsors: [
        "ACES",
        "FIA",
        "Liqui Moly",
        "Direct English",
        "Super Repuestos",
        "Todo Motor",
        "Sincatex Racing",
        "Hyatt Centric",
        "Electrolit",
    ],
};
