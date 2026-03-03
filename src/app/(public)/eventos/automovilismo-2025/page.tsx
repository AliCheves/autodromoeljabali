import type { Metadata } from "next";
import Link from "next/link";
import { AUTOMOVILISMO_2025 } from "@/config/content/eventos/automovilismo2025";
import { EventHero } from "@/components/sections/EventHero";
import { EventCalendarGrid } from "@/components/sections/EventCalendarGrid";
import { Section } from "@/components/ui/Section";

export function generateMetadata(): Metadata {
    const content = AUTOMOVILISMO_2025;
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

export default function Automovilismo2025Page() {
    const content = AUTOMOVILISMO_2025;

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
                </div>
            </Section>

            <EventCalendarGrid
                rounds={content.rounds}
                label={`Temporada ${content.season}`}
                title="CALENDARIO"
                titleAccent={String(content.season)}
            />

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
