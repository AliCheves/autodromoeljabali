import type { VoluntariadoContent, ContentSection } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const VOLUNTARIADO_CONTENT: VoluntariadoContent = {
    hero: {
        label: "Institución — Voluntariado",
        title: "PROGRAMA DE",
        titleAccent: "VOLUNTARIADO",
        description:
            "Únete a nuestra comunidad de voluntarios y forma parte del equipo que hace posible cada evento del Autódromo Internacional El Jabalí.",
        image: "/images/voluntariado/nuevo-kart.jpeg",
    },

    sections: [
        {
            title: "¿Qué Hacemos?",
            description:
                "Nuestro programa de voluntariado permite a personas apasionadas por el automovilismo participar activamente en la organización y ejecución de eventos deportivos de clase mundial. Los voluntarios son pieza fundamental en cada carrera, brindando apoyo logístico, seguridad en pista y atención al público.",
        },
        {
            title: "¿Por Qué Ser Voluntario?",
            description:
                "Ser voluntario del Autódromo Internacional El Jabalí es una oportunidad única para vivir el automovilismo desde adentro, recibir capacitación profesional en gestión de eventos deportivos y formar parte de una red de personas comprometidas con el deporte motor en Centroamérica.",
        },
    ],

    benefits: [
        "Acceso exclusivo a zonas de pista y paddock durante eventos",
        "Capacitación profesional en gestión deportiva y seguridad",
        "Certificación oficial de voluntariado FIA",
        "Uniforme y equipamiento del programa",
        "Red de contactos en la industria del automovilismo",
        "Experiencia práctica en eventos internacionales",
    ],

    images: {
        banner: PLACEHOLDER,
        program: PLACEHOLDER,
    },
};

export interface InstitutionNavCard {
    title: string;
    description: string;
    href: string;
    icon: "trophy" | "users" | "graduation" | "star" | "building" | "book";
}

export const INSTITUCION_PAGE_CONTENT = {
    hero: {
        label: "Autódromo Internacional El Jabalí",
        title: "NUESTRA",
        titleAccent: "INSTITUCIÓN",
        description:
            "El Autódromo Internacional El Jabalí es piedra angular del desarrollo del automovilismo en El Salvador. Con más de cuatro décadas de historia, somos la plataforma donde la tradición, la competencia y la formación deportiva convergen para forjar el futuro del deporte motor en la región.",
        image: "/images/hero/jabali-noche.jpeg",
    },

    navCards: [
        {
            title: "Legado Competitivo",
            description: "Más de 45 años de historia impulsando el automovilismo salvadoreño con pasión y excelencia deportiva.",
            href: "/institucion/legado-competitivo",
            icon: "trophy" as const,
        },
        {
            title: "Voluntariado",
            description: "Programa oficial de voluntarios que hacen posible cada evento con dedicación y profesionalismo.",
            href: "/institucion/voluntariado",
            icon: "users" as const,
        },
        {
            title: "Escuelas",
            description: "Programas de formación para nuevos pilotos desde las bases del kartismo hasta la competición profesional.",
            href: "/institucion/escuelas",
            icon: "graduation" as const,
        },
        {
            title: "Logros",
            description: "Reconocimientos, hitos y logros que han posicionado al autódromo como referente regional.",
            href: "/institucion/logros",
            icon: "star" as const,
        },
        {
            title: "Estructura Deportiva",
            description: "Organización, gobernanza y respaldo FIA que garantizan estándares internacionales en cada competencia.",
            href: "/estructura/deportiva",
            icon: "building" as const,
        },
        {
            title: "Galería",
            description: "Imágenes de nuestras instalaciones, eventos, infraestructura y momentos históricos del autódromo.",
            href: "/estructura/galeria",
            icon: "book" as const,
        },
    ] as InstitutionNavCard[],

    featured: {
        label: "Compromiso Institucional",
        title: "DESARROLLO DEL",
        titleAccent: "AUTOMOVILISMO",
        text: "Desde nuestra fundación, el Autódromo Internacional El Jabalí ha sido mucho más que una pista de carreras. Somos una institución comprometida con el desarrollo integral del deporte motor — desde la formación de nuevos talentos en nuestras escuelas de karting, hasta la organización de campeonatos que cumplen con los más altos estándares internacionales bajo el respaldo de la FIA.",
        ctaLabel: "DESCUBRE NUESTRO LEGADO →",
        ctaHref: "/institucion/legado-competitivo",
    },

    pillars: [
        { title: "Organización Deportiva", description: "Estructura profesional respaldada por ACES y la FIA para cada evento." },
        { title: "Programas de Desarrollo", description: "Escuelas, academias y programas que forman a las nuevas generaciones del automovilismo." },
        { title: "Eventos Oficiales", description: "Campeonatos, series y experiencias de karting con estándares internacionales." },
        { title: "Reglamentación", description: "Normativas claras y transparentes que garantizan competencia justa y segura." },
    ],

    cta: {
        text: "¿Listo para ser parte de nuestra historia?",
        buttonLabel: "INSCRÍBETE A UN EVENTO",
        buttonHref: "/eventos/campeonato-4t",
    },
};
