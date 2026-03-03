import type { LegadoCompetitivoContent } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const LEGADO_COMPETITIVO_CONTENT: LegadoCompetitivoContent = {
    meta: {
        title: "Legado Competitivo | Autódromo Internacional El Jabalí",
        description:
            "Conoce la historia del Autódromo Internacional El Jabalí y el legado del Automóvil Club de El Salvador (ACES), impulsando el deporte motor desde 1971.",
    },

    hero: {
        label: "Institución — Legado Competitivo",
        title: "LEGADO",
        titleAccent: "COMPETITIVO",
        description:
            "La historia y el compromiso institucional que definen al Autódromo Internacional El Jabalí y al Automóvil Club de El Salvador.",
    },

    sections: [
        {
            title: "ACES — Automóvil Club de El Salvador",
            paragraphs: [
                "El Automóvil Club de El Salvador es una organización sin fines de lucro fundada en 1971 con el objetivo de impulsar el deporte motor en El Salvador, miembros activos y representantes de la FIA desde su fundación.",
                "Desde sus inicios el club ha aportado a la movilidad y seguridad vial del país y deportivamente en circuito desde la pista más desafiante de la región: Autódromo Internacional El Jabalí, donde se han vivido las mejores épocas del automovilismo regional.",
                "Ahora por primera vez en 2026 se desarrollan plataformas propias e independientes de enseñanza en pista de kartismo y circuito, generando oportunidades de desarrollo y crecimiento para los amantes de la velocidad.",
            ],
        },
    ],

    gallery: [
        {
            src: "/images/institucion/legado-competitivo/legado-1.svg",
            alt: "Vista aérea del Autódromo Internacional El Jabalí",
        },
        {
            src: "/images/institucion/legado-competitivo/legado-2.svg",
            alt: "Competición histórica en el circuito principal",
        },
        {
            src: "/images/institucion/legado-competitivo/legado-3.svg",
            alt: "Instalaciones y paddock del autódromo",
        },
        {
            src: "/images/institucion/legado-competitivo/legado-4.svg",
            alt: "Premiación oficial de campeonato regional",
        },
    ],
};
