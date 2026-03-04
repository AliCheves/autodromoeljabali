import type { KartRentalContent } from "@/types/content";

export const KART_RENTAL_2026_CONTENT: KartRentalContent = {
    meta: {
        title: "Karting Rental Experience | Autódromo Internacional El Jabalí",
        description:
            "Vive la experiencia de karting completamente GRATIS en el Autódromo Internacional El Jabalí. Un regalo permanente a la comunidad automovilística salvadoreña.",
    },
    hero: {
        label: "Experiencia de Pista",
        title: "KARTING RENTAL",
        titleAccent: "EXPERIENCE",
        description:
            "Vive la emoción del karting en un circuito de clase mundial. Sesiones disponibles viernes y sábados.",
        image: "/images/karting/karting-rental-experience/first-karting-rental-experience.jpeg",
    },
    announcement: {
        title: "UNA EXPERIENCIA GRATUITA PARA TODA LA COMUNIDAD",
        paragraphs: [
            "La Karting Rental Experience es completamente GRATIS para siempre. Sin costo de entrada, sin reservación, sin restricciones.",
            "Financiada íntegramente por el Autódromo Internacional El Jabalí, esta iniciativa representa nuestro compromiso permanente con el desarrollo del automovilismo en El Salvador. Un regalo a la comunidad automovilística salvadoreña, diseñado como un proyecto sostenible a largo plazo.",
            "Solo llega, firma tu registro y vive la experiencia. Así de simple.",
        ],
    },
    calendar: [
        {
            title: "VIERNES",
            schedule: "5:00 PM – 12:00 MN",
            days: [
                { day: 13, month: "Marzo" },
                { day: 27, month: "Marzo" },
                { day: 10, month: "Abril" },
                { day: 24, month: "Abril" },
                { day: 8, month: "Mayo" },
                { day: 22, month: "Mayo" },
                { day: 12, month: "Junio" },
                { day: 26, month: "Junio" },
                { day: 10, month: "Julio" },
                { day: 24, month: "Julio" },
                { day: 21, month: "Agosto" },
                { day: 28, month: "Agosto" },
                { day: 11, month: "Septiembre" },
                { day: 18, month: "Septiembre" },
                { day: 9, month: "Octubre" },
                { day: 23, month: "Octubre" },
                { day: 6, month: "Noviembre" },
                { day: 27, month: "Noviembre" },
                { day: 11, month: "Diciembre" },
                { day: 18, month: "Diciembre" },
            ],
        },
        {
            title: "SÁBADO",
            schedule: "1:00 PM – 12:00 MN",
            days: [
                { day: 14, month: "Marzo" },
                { day: 28, month: "Marzo" },
                { day: 11, month: "Abril" },
                { day: 9, month: "Mayo" },
                { day: 30, month: "Mayo" },
                { day: 13, month: "Junio" },
                { day: 27, month: "Junio" },
                { day: 18, month: "Julio" },
                { day: 1, month: "Agosto" },
                { day: 22, month: "Agosto" },
                { day: 5, month: "Septiembre" },
                { day: 19, month: "Septiembre" },
                { day: 3, month: "Octubre" },
                { day: 10, month: "Octubre" },
                { day: 7, month: "Noviembre" },
                { day: 21, month: "Noviembre" },
                { day: 5, month: "Diciembre" },
                { day: 19, month: "Diciembre" },
            ],
        },
    ],
    finalCTA: {
        title: "VEN Y VIVE LA EXPERIENCIA",
        description:
            "No necesitas reservar. Solo llega y acelera.",
        buttonText: "CÓMO LLEGAR",
        buttonHref: "/contacto",
    },
};
