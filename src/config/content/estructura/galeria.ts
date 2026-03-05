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
        image: "/images/temporarychangelater/galeria/sunset.jpg",
    },
    images: [
        { src: "/images/galeria/jabali-noche.jpeg", alt: "Vista aérea del circuito principal" },
        { src: "/images/temporarychangelater/galeria/Porsche.jpg", alt: "Zona de boxes e infraestructura técnica" },
        { src: "/images/temporarychangelater/galeria/curve.jpg", alt: "Torre de control y cronometraje" },
        { src: "/images/temporarychangelater/galeria/race start.jpg", alt: "Evento de competición en pista" },
        { src: "/images/temporarychangelater/galeria/Cars going down.jpg", alt: "Visita institucional FIA" },
        { src: "/images/temporarychangelater/galeria/cars in race.jpg", alt: "Área de espectadores y grada principal" },
        { src: "/images/temporarychangelater/galeria/flag pilot.jpg", alt: "Ceremonia de premiación" },
        { src: "/images/temporarychangelater/galeria/ferrari.jpg", alt: "Infraestructura de seguridad en pista" },
        { src: "/images/temporarychangelater/galeria/Audi.jpg", alt: "Paddock y zona de preparación" },
    ],
};
