import type { PageMeta, HeroContent } from "@/types/content";

export interface NoticiasContent {
    meta: PageMeta;
    hero: HeroContent;
}

export const NOTICIAS_CONTENT: NoticiasContent = {
    meta: {
        title: "Noticias",
        description: "Manténgase informado sobre las novedades del automovilismo y el Autódromo Internacional El Jabalí.",
    },
    hero: {
        label: "Sala de Prensa",
        title: "EN PREPARACIÓN",
        titleAccent: "2026",
        description: "Estamos trabajando para traerle las últimas noticias, comunicados oficiales y resultados de la temporada 2026. La sala de prensa estará disponible próximamente.",
        image: "/images/temporarychangelater/heros/hero noches de aceleracion.jpg",
    },
};
