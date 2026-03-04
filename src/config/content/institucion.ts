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

export const INSTITUCION_PAGE_CONTENT = {
    hero: {
        label: "Autódromo Internacional El Jabalí",
        title: "Nuestra",
        titleAccent: "Institución",
        description:
            "Conozca más sobre el Autódromo Internacional El Jabalí, la institución automovilística líder de El Salvador.",
        image: PLACEHOLDER,
    },

    images: {
        banner: PLACEHOLDER,
    },
};
