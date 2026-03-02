import type { School } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const ESCUELAS: School[] = [
    {
        id: "karting-gratuita",
        name: "Escuela Gratuita de Karting",
        tagline: "Formando a los campeones del mañana",
        description:
            "Un programa sin costo diseñado para descubrir y desarrollar el talento joven en el automovilismo. Los estudiantes reciben instrucción profesional en técnicas de conducción, mecánica básica y disciplina deportiva, con acceso completo a karts y equipamiento.",
        features: [
            "Programa 100% gratuito para jóvenes de 8 a 16 años",
            "Instructores certificados con experiencia internacional",
            "Equipamiento completo proporcionado (kart, casco, traje)",
            "Sesiones semanales en circuito profesional",
            "Evaluaciones periódicas y seguimiento de progreso",
            "Posibilidad de competir en campeonatos oficiales",
        ],
        ctaLabel: "Solicitar Inscripción",
        ctaHref: "#formulario",
        image: PLACEHOLDER,
    },
    {
        id: "licencia-deportiva",
        name: "Escuela para Licencia Deportiva",
        tagline: "Tu camino hacia la competición oficial",
        description:
            "Programa de formación intensiva orientado a obtener la licencia deportiva nacional e internacional. Los participantes reciben preparación teórica y práctica bajo los estándares de la FIA para competir en campeonatos oficiales de automovilismo.",
        features: [
            "Curso teórico de reglamentación deportiva FIA",
            "Práctica intensiva en circuito con cronometraje profesional",
            "Preparación para examen de licencia deportiva nacional",
            "Certificación médica deportiva incluida",
            "Asesoramiento para licencia internacional FIA",
            "Acceso a simulador profesional de carreras",
        ],
        ctaLabel: "Más Información",
        ctaHref: "#formulario",
        image: PLACEHOLDER,
    },
];

export const ESCUELAS_PAGE_META = {
    title: "Escuelas",
    description:
        "Escuelas de formación del Autódromo Internacional El Jabalí. Escuela Gratuita de Karting y Escuela para Licencia Deportiva.",
};
