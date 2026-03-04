import type { EstructuraGaleriaContent } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const ESTRUCTURA_GALERIA_CONTENT: EstructuraGaleriaContent = {
    meta: {
        title: "Galería — Estructura",
        description:
            "Galería fotográfica del Autódromo Internacional El Jabalí: pista, eventos, infraestructura y visitas institucionales.",
    },
    hero: {
        label: "Estructura",
        title: "GALERÍA",
        titleAccent: "INSTITUCIONAL",
        description:
            "Recorrido visual por las instalaciones, eventos y momentos que definen al Autódromo Internacional El Jabalí.",
    },
    images: [
        { src: "/images/galeria/jabali-noche.jpeg", alt: "Vista aérea del circuito principal" },
        { src: PLACEHOLDER, alt: "Zona de boxes e infraestructura técnica" },
        { src: PLACEHOLDER, alt: "Torre de control y cronometraje" },
        { src: PLACEHOLDER, alt: "Evento de competición en pista" },
        { src: PLACEHOLDER, alt: "Visita institucional FIA" },
        { src: PLACEHOLDER, alt: "Área de espectadores y grada principal" },
        { src: PLACEHOLDER, alt: "Ceremonia de premiación" },
        { src: PLACEHOLDER, alt: "Infraestructura de seguridad en pista" },
        { src: PLACEHOLDER, alt: "Paddock y zona de preparación" },
    ],
};
