import type { EstructuraPageContent } from "@/types/content";

export const ESTRUCTURA_PAGE_CONTENT: EstructuraPageContent = {
    meta: {
        title: "Estructura Institucional",
        description:
            "Conozca la estructura institucional, respaldo FIA y gobernanza deportiva del Autódromo Internacional El Jabalí.",
    },
    hero: {
        label: "Gobernanza Deportiva",
        title: "ESTRUCTURA",
        titleAccent: "INSTITUCIONAL",
        description:
            "Organización deportiva respaldada por la Federación Internacional del Automóvil, comprometida con los más altos estándares de gobernanza, seguridad y excelencia competitiva.",
    },
    narrative: [
        {
            title: "Representación ante la FIA",
            paragraphs: [
                "El Autódromo Internacional El Jabalí opera bajo el respaldo y supervisión de la Asociación Centroamericana de Automovilismo Deportivo (ACES), entidad reconocida oficialmente por la Fédération Internationale de l'Automobile (FIA) como la Autoridad Deportiva Nacional para el automovilismo en la región.",
                "Esta relación institucional garantiza que todas las competiciones, homologaciones de circuito y procedimientos técnicos se rigen bajo los estándares internacionales establecidos por el máximo organismo rector del automovilismo mundial.",
            ],
        },
        {
            title: "Estándares de Gobernanza",
            paragraphs: [
                "Nuestra estructura organizacional está diseñada para cumplir con los lineamientos del Código Deportivo Internacional de la FIA, asegurando transparencia, equidad y profesionalismo en cada aspecto operativo del autódromo.",
                "Desde la dirección de carrera hasta la gestión de infraestructura, cada departamento opera con protocolos alineados a las mejores prácticas internacionales del deporte motor.",
            ],
        },
        {
            title: "Compromiso con la Integridad Deportiva",
            paragraphs: [
                "El compromiso con la integridad deportiva se manifiesta en la aplicación rigurosa de reglamentos, la capacitación continua de oficiales y la implementación de sistemas de control que garantizan competiciones justas y seguras para todos los participantes.",
            ],
        },
    ],
    fiaSection: {
        title: "Mensaje del Presidente de la FIA",
        description: [
            "El reconocimiento de la Fédération Internationale de l'Automobile representa el más alto aval que una instalación deportiva puede obtener en el mundo del automovilismo.",
            "Este respaldo confirma que el Autódromo Internacional El Jabalí cumple con los estándares globales de seguridad, infraestructura y gestión deportiva exigidos por el organismo rector del automovilismo mundial.",
            "La certificación FIA posiciona al autódromo como referente regional en materia de excelencia deportiva y competitividad internacional.",
        ],
        video: {
            src: "/videos/FIA/fia-president-message.mp4",
        },
    },
    integrityHighlights: {
        title: "Pilares Institucionales",
        items: [
            {
                title: "Afiliación FIA",
                description:
                    "Respaldo oficial de la Fédération Internationale de l'Automobile a través de ACES como Autoridad Deportiva Nacional reconocida.",
            },
            {
                title: "Estándares Técnicos",
                description:
                    "Circuito homologado bajo normativas internacionales de diseño, señalización y sistemas de cronometraje de precisión.",
            },
            {
                title: "Cumplimiento de Seguridad",
                description:
                    "Protocolos de seguridad alineados al Código Deportivo Internacional, incluyendo equipos médicos y sistemas de protección en pista.",
            },
            {
                title: "Liderazgo Regional",
                description:
                    "Referente centroamericano en la organización de eventos deportivos de automovilismo con proyección internacional.",
            },
            {
                title: "Programas Educativos",
                description:
                    "Academias de formación para pilotos, oficiales de carrera y voluntarios con certificación avalada internacionalmente.",
            },
            {
                title: "Alianzas Internacionales",
                description:
                    "Vínculos estratégicos con federaciones, circuitos y organizaciones deportivas a nivel global para el desarrollo continuo del automovilismo.",
            },
        ],
    },
};
