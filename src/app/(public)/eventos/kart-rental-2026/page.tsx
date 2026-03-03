import type { Metadata } from "next";
import Link from "next/link";
import { KART_RENTAL_2026 } from "@/config/content/eventos/kartRental2026";
import { EventHero } from "@/components/sections/EventHero";
import { EventSchedule } from "@/components/sections/EventSchedule";
import { EventDayCalendarGrid } from "@/components/sections/EventDayCalendarGrid";
import { Section, SectionHeader, Card } from "@/components/ui/Section";

export function generateMetadata(): Metadata {
    const content = KART_RENTAL_2026;
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

export default function KartRental2026Page() {
    const content = KART_RENTAL_2026;

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
                    {content.poweredBy && (
                        <p className="mt-4 font-mono text-2xs uppercase tracking-widest text-brand-gray-light">
                            Powered by {content.poweredBy}
                        </p>
                    )}
                </div>
            </Section>

            <EventSchedule
                slots={content.schedule}
                label="Disponibilidad"
                title="HORARIOS"
                titleAccent="SEMANALES"
            />

            {content.calendars && content.calendars.length > 0 && (
                <EventDayCalendarGrid
                    calendars={content.calendars}
                    label="Calendario Completo 2026"
                    title="TODAS LAS"
                    titleAccent="FECHAS"
                />
            )}

            {/* Highlights */}
            <Section gray>
                <div className="container-xl">
                    <SectionHeader
                        label="Incluye"
                        title="QUÉ"
                        titleAccent="OFRECEMOS"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-gray-border max-w-4xl">
                        {content.highlights.map((item) => (
                            <div
                                key={item}
                                className="bg-white p-6 flex items-center gap-3"
                            >
                                <span className="text-brand-red flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                                <span className="text-sm text-brand-gray-mid">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Pricing */}
            <Section>
                <div className="container-xl">
                    <SectionHeader
                        label="Tarifas"
                        title="PRECIOS"
                        titleAccent="2026"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-brand-gray-border max-w-4xl">
                        {content.pricing.map((tier) => (
                            <Card key={tier.type} className="p-8 flex flex-col items-center text-center">
                                <span className="font-display font-black text-3xl text-brand-red">
                                    {tier.price}
                                </span>
                                <span className="font-display font-bold text-lg uppercase text-brand-black mt-2">
                                    {tier.type}
                                </span>
                                <p className="text-sm text-brand-gray-mid mt-3">{tier.description}</p>
                                <ul className="mt-4 space-y-1">
                                    {tier.includes.map((item) => (
                                        <li key={item} className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Sponsors */}
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
