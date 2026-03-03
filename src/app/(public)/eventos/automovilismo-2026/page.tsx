import type { Metadata } from "next";
import Link from "next/link";
import { AUTOMOVILISMO_2026 } from "@/config/content/eventos/automovilismo2026";
import { EventHero } from "@/components/sections/EventHero";
import { EventCalendarGrid } from "@/components/sections/EventCalendarGrid";
import { Section } from "@/components/ui/Section";

export function generateMetadata(): Metadata {
    const content = AUTOMOVILISMO_2026;
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

export default function Automovilismo2026Page() {
    const content = AUTOMOVILISMO_2026;

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

            {content.sponsors && content.sponsors.length > 0 && (
                <Section gray>
                    <div className="container-xl">
                        <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-4">
                            Patrocinadores
                        </p>
                        <div className="flex flex-wrap gap-px bg-brand-gray-border max-w-4xl">
                            {content.sponsors.map((sponsor) => (
                                <div
                                    key={sponsor}
                                    className="bg-white px-6 py-3 text-xs font-display font-bold text-brand-gray-mid uppercase"
                                >
                                    {sponsor}
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {content.disclaimer && (
                <Section>
                    <div className="container-xl">
                        <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light">
                            *{content.disclaimer}
                        </p>
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
