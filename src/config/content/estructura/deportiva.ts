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
            image: "/images/estructura/deportiva/FranciscoHernandezRojas.jpeg",
        },
        {
            name: "Karen Escamilla",
            role: "Gerente Autódromo Internacional El Jabalí",
            image: "/images/estructura/deportiva/KarenEscamilla.jpeg",
        },
        {
            name: "Rodrigo Mendoza",
            role: "Gerente de Operaciones",
            image: "/images/estructura/deportiva/RodrigoMendoza.jpeg",
        },
        {
            name: "Rubén Ángel",
            role: "Director de Carrera FIA",
            image: "/images/estructura/deportiva/RubenAngel.jpeg",
        },
        {
            name: "Fernando Galdámez",
            role: "Director de Kartismo Nacional",
            image: "/images/estructura/deportiva/FernandoGaldamez.jpeg",
        },
    ],
};
