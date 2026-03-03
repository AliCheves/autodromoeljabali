import type { LeadershipSectionContent } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const ESTRUCTURA_DEPORTIVA: LeadershipSectionContent = {
    meta: {
        title: "Estructura Deportiva",
        description:
            "Equipo directivo y liderazgo deportivo del Autódromo Internacional El Jabalí.",
    },
    hero: {
        label: "Estructura",
        title: "ESTRUCTURA",
        titleAccent: "DEPORTIVA",
        description:
            "El liderazgo del Autódromo Internacional El Jabalí está conformado por profesionales con amplia experiencia en el automovilismo y la gestión deportiva a nivel internacional.",
    },
    members: [
        {
            name: "Francisco Hernández Rojas",
            role: "Director General",
            image: PLACEHOLDER,
        },
        {
            name: "Karen Escamilla",
            role: "Gerente Autódromo Internacional El Jabalí",
            image: PLACEHOLDER,
        },
        {
            name: "Rodrigo Mendoza",
            role: "Gerente de Operaciones",
            image: PLACEHOLDER,
        },
        {
            name: "Rubén Ángel",
            role: "Director de Carrera FIA",
            image: PLACEHOLDER,
        },
        {
            name: "Fernando Galdámez",
            role: "Director de Kartismo Nacional",
            image: PLACEHOLDER,
        },
    ],
};
