import type { Metadata } from "next";
import Link from "next/link";
import { CAMPEONATO_4T } from "@/config/content/eventos/campeonato4T";
import { EventHero } from "@/components/sections/EventHero";
import { EventCalendarGrid } from "@/components/sections/EventCalendarGrid";
import { EventPrizeSection } from "@/components/sections/EventPrizeSection";
import { EventRegistrationSection } from "@/components/sections/EventRegistrationSection";
import { EventDocumentCTA } from "@/components/sections/EventDocumentCTA";
import { Section } from "@/components/ui/Section";

export function generateMetadata(): Metadata {
    const content = CAMPEONATO_4T;
    return {
        title: content.meta.title,
        description: content.meta.description,
        openGraph: {
            title: content.meta.title,
            description: content.meta.description,
            images: [{ url: content.hero.image || "/images/placeholders/placeholder.svg" }],
        },
        twitter: {
            card: "summary_large_image",
            title: content.meta.title,
            description: content.meta.description,
        },
    };
}

export default function Campeonato4TPage() {
    const content = CAMPEONATO_4T;

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
                    <p className="text-brand-gray-mid text-lg leading-relaxed max-w-3xl">
                        {content.description}
                    </p>
                    <p className="mt-4 font-mono text-2xs uppercase tracking-widest text-brand-gray-light">
                        Organizado por {content.organizer}
                    </p>
                </div>
            </Section>

            <EventCalendarGrid
                rounds={content.rounds}
                label="Rondas del Campeonato"
                title="CALENDARIO"
                titleAccent="2026"
            />

            <EventPrizeSection
                prizes={content.prizes}
                label="Premiación Oficial"
                title="PREMIOS"
                titleAccent="DEL CAMPEONATO"
            />

            {content.registration && (
                <EventRegistrationSection
                    registration={content.registration}
                    pressConference={content.pressConference}
                    sponsors={content.sponsors}
                />
            )}

            {content.document && (
                <Section gray>
                    <div className="container-xl">
                        <EventDocumentCTA document={content.document} />
                    </div>
                </Section>
            )}

            <Section>
                <div className="container-xl flex justify-center">
                    <Link href={content.ctaHref} className="btn-primary">
                        {content.ctaLabel}
                    </Link>
                </div>
            </Section>
        </>
    );
}
