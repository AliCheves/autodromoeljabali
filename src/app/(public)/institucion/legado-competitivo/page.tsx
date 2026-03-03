import type { Metadata } from "next";
import { LEGADO_COMPETITIVO_CONTENT } from "@/config/content/institucion/legadoCompetitivo";
import { EventHero } from "@/components/sections/EventHero";
import { LegadoNarrative } from "@/components/sections/LegadoNarrative";
import { LegadoGallery } from "@/components/sections/LegadoGallery";

const content = LEGADO_COMPETITIVO_CONTENT;

export function generateMetadata(): Metadata {
    return {
        title: content.meta.title,
        description: content.meta.description,
        openGraph: {
            title: content.meta.title,
            description: content.meta.description,
            type: "website",
        },
    };
}

export default function LegadoCompetitivoPage() {
    return (
        <>
            <EventHero
                label={content.hero.label}
                title={content.hero.title}
                titleAccent={content.hero.titleAccent}
                description={content.hero.description}
                image={content.hero.image}
            />
            <LegadoNarrative sections={content.sections} />
            <LegadoGallery images={content.gallery} />
        </>
    );
}
