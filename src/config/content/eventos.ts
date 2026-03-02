import type { NochesContent } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const NOCHES_CONTENT: NochesContent = {
    hero: {
        label: "Eventos — Noches de Aceleración",
        title: "NOCHES DE",
        titleAccent: "ACELERACIÓN",
        description:
            "La adrenalina del automovilismo bajo las luces. Cada viernes, el Autódromo Internacional El Jabalí abre sus puertas para una noche de velocidad, emoción y competición accesible para todos.",
        image: PLACEHOLDER,
    },

    description:
        "Las Noches de Aceleración son el evento semanal más popular del autódromo, donde pilotos amateurs y entusiastas del motor pueden experimentar la emoción de competir en un circuito profesional. Con un ambiente familiar y precios accesibles, las noches de aceleración combinan entretenimiento, gastronomía y deporte motor en un solo lugar.",

    highlights: [
        "Carreras cronometradas en circuito iluminado profesionalmente",
        "Categorías para principiantes y experimentados",
        "Zona de food trucks y entretenimiento familiar",
        "Transmisión en vivo en pantallas gigantes",
        "Premios semanales y tabla de posiciones acumulada",
        "Estacionamiento gratuito para espectadores",
    ],

    pricing: [
        {
            type: "Espectadores",
            price: "$3",
            description: "Acceso general a todas las zonas de espectadores",
            includes: [
                "Acceso al circuito y gradas",
                "Zona de food trucks",
                "Estacionamiento gratuito",
            ],
        },
        {
            type: "Competidores",
            price: "$5",
            description: "Participa en las carreras de la noche",
            includes: [
                "Todo lo incluido en Espectadores",
                "Participación en carreras cronometradas",
                "Registro en tabla de posiciones",
                "Seguro deportivo de la noche",
            ],
        },
    ],

    ctaLabel: "Reservar Mi Lugar",
    ctaHref: "/contacto",
    schedule: "Todos los viernes de 7:00 PM a 11:00 PM",

    images: {
        banner: PLACEHOLDER,
        atmosphere: PLACEHOLDER,
    },
};
