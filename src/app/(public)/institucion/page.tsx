import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { INSTITUCION_PAGE_CONTENT } from "@/config/content/institucion";
import { Section, SectionHeader, Card, Divider } from "@/components/ui/Section";

const ICON_MAP = {
    trophy: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
    ),
    users: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    graduation: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
        </svg>
    ),
    star: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ),
    building: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" />
            <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
        </svg>
    ),
    book: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="12" cy="12" r="3" />
            <path d="M3 9h2M3 15h2M19 9h2M19 15h2M9 3v2M15 3v2M9 19v2M15 19v2" />
        </svg>
    ),
};

export const metadata: Metadata = {
    title: "Institución",
    description: "Conozca la institución detrás del Autódromo Internacional El Jabalí: historia, estructura, programas y logros del automovilismo salvadoreño.",
};

export default function InstitucionPage() {
    const content = INSTITUCION_PAGE_CONTENT;

    return (
        <>
            {/* HERO */}
            <section className="relative bg-brand-black overflow-hidden">
                <Image
                    src={content.hero.image}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
                <div className="relative z-10 container-xl py-20 lg:py-28">
                    <p className="section-label text-brand-red">{content.hero.label}</p>
                    <h1 className="font-display font-black text-white text-heading-xl leading-none">
                        {content.hero.title}
                        <br />
                        <span className="text-brand-red">{content.hero.titleAccent}</span>
                    </h1>
                    <p className="mt-6 text-brand-gray-light text-lg max-w-3xl leading-relaxed break-words">
                        {content.hero.description}
                    </p>
                </div>
            </section>

            {/* NAVIGATION GRID */}
            <Section>
                <div className="container-xl">
                    <SectionHeader
                        label="Explora"
                        title="ÁREAS"
                        titleAccent="INSTITUCIONALES"
                        subtitle="Descubre los pilares que conforman nuestra institución y su compromiso con el automovilismo."
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.navCards.map((card) => (
                            <Link key={card.href} href={card.href} className="group">
                                <Card bordered hover className="p-8 h-full flex flex-col min-w-0 overflow-hidden">
                                    <div className="text-brand-red mb-4 group-hover:scale-110 transition-transform duration-200">
                                        {ICON_MAP[card.icon]}
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-brand-black mb-2 group-hover:text-brand-red transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm text-brand-gray-mid leading-relaxed flex-1 break-words">
                                        {card.description}
                                    </p>
                                    <span className="mt-4 inline-flex items-center gap-1 font-mono text-2xs uppercase tracking-widest text-brand-red">
                                        Ver más →
                                    </span>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FEATURED HIGHLIGHT */}
            <Section dark>
                <div className="container-xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-12 text-center">
                            <p className="section-label justify-center">{content.featured.label}</p>
                            <h2 className="font-display font-black text-heading-lg text-white">
                                {content.featured.title}{" "}
                                <span className="text-brand-red">{content.featured.titleAccent}</span>
                            </h2>
                        </div>
                        <p className="text-brand-gray-light text-lg leading-relaxed -mt-6 break-words">
                            {content.featured.text}
                        </p>
                        <Link
                            href={content.featured.ctaHref}
                            className="btn-cta mt-8"
                        >
                            {content.featured.ctaLabel}
                        </Link>
                    </div>
                </div>
            </Section>

            {/* STRUCTURE OVERVIEW */}
            <Section gray>
                <div className="container-xl">
                    <SectionHeader
                        label="Nuestra Estructura"
                        title="PILARES"
                        titleAccent="INSTITUCIONALES"
                        align="center"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {content.pillars.map((pillar, idx) => (
                            <div key={idx} className="text-center p-6">
                                <Divider className="mx-auto mb-4" />
                                <h3 className="font-display font-bold text-lg text-brand-black mb-2">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-brand-gray-mid leading-relaxed break-words">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA BLOCK */}
            <Section>
                <div className="container-xl text-center">
                    <p className="font-display font-black text-heading-md text-brand-black mb-6">
                        {content.cta.text}
                    </p>
                    <Link
                        href={content.cta.buttonHref}
                        className="btn-cta text-lg"
                    >
                        {content.cta.buttonLabel}
                    </Link>
                </div>
            </Section>
        </>
    );
}
