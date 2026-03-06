import type { Metadata } from "next";
import { EventHero } from "@/components/sections/EventHero";
import { NOTICIAS_CONTENT } from "@/config/content/noticias";

export function generateMetadata(): Metadata {
    const content = NOTICIAS_CONTENT;
    return {
        title: content.meta.title,
        description: content.meta.description,
        openGraph: {
            title: content.meta.title,
            description: content.meta.description,
        },
        twitter: {
            card: "summary_large_image",
            title: content.meta.title,
            description: content.meta.description,
        },
    };
}

export default function NoticiasPage() {
    const content = NOTICIAS_CONTENT;

    return (
        <>
            <EventHero
                label={content.hero.label}
                title={content.hero.title}
                titleAccent={content.hero.titleAccent}
                description={content.hero.description}
                image={content.hero.image}
            />
        </>
    );
}
