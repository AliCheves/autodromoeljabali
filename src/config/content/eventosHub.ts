import type { PageMeta, HeroContent } from "@/types/content";

export interface EventosHubContent {
    meta: PageMeta;
    hero: HeroContent;
}

export const EVENTOS_HUB_CONTENT: EventosHubContent = {
    meta: {
        title: "Eventos y Campeonatos",
        description: "Descubre todos los campeonatos, experiencias de pista y noches de aceleración en el Autódromo Internacional El Jabalí.",
    },
    hero: {
        label: "Temporada 2026",
        title: "EVENTOS Y",
        titleAccent: "CAMPEONATOS",
        description: "Desde noches de aceleración amateur hasta campeonatos internacionales de karting y automovilismo. Vive la pasión del deporte motor en el Autódromo Internacional El Jabalí.",
        image: "/images/temporarychangelater/heros/hero campeonato 4t.jpg",
    },
};
