import type { Metadata } from "next";
import { ESTRUCTURA_GALERIA_CONTENT } from "@/config/content/estructura/galeria";
import { EventHero } from "@/components/sections/EventHero";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { Section, SectionHeader } from "@/components/ui/Section";

export function generateMetadata(): Metadata {
    const { meta } = ESTRUCTURA_GALERIA_CONTENT;
    return {
        title: meta.title,
        description: meta.description,
        openGraph: {
            title: meta.title,
            description: meta.description,
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
        },
    };
}

export default function EstructuraGaleriaPage() {
    const { hero, images } = ESTRUCTURA_GALERIA_CONTENT;

    return (
        <>
            <EventHero
                label={hero.label}
                title={hero.title}
                titleAccent={hero.titleAccent}
                description={hero.description}
                image={hero.image}
            />

            <Section>
                <div className="container-xl">
                    <SectionHeader
                        label="Fotografía"
                        title="GALERÍA"
                        titleAccent="INSTITUCIONAL"
                    />
                    <ImageGallery images={images} />
                </div>
            </Section>
        </>
    );
}
