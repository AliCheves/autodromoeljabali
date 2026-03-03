import type { Metadata } from "next";
import { ESTRUCTURA_DEPORTIVA } from "@/config/content/estructura/deportiva";
import { EventHero } from "@/components/sections/EventHero";
import { LeadershipGrid } from "@/components/sections/LeadershipGrid";
import { Section, SectionHeader } from "@/components/ui/Section";

export function generateMetadata(): Metadata {
    const content = ESTRUCTURA_DEPORTIVA;
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

export default function EstructuraDeportivaPage() {
    const content = ESTRUCTURA_DEPORTIVA;

    return (
        <>
            <EventHero
                label={content.hero.label}
                title={content.hero.title}
                titleAccent={content.hero.titleAccent}
                description={content.hero.description}
                image={content.hero.image}
            />

            <Section>
                <div className="container-xl">
                    <SectionHeader
                        label="Liderazgo"
                        title="EQUIPO"
                        titleAccent="DIRECTIVO"
                    />
                    <LeadershipGrid members={content.members} />
                </div>
            </Section>
        </>
    );
}
