import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import { NOCHES_CONTENT } from "@/config/content/eventos";

export const metadata: Metadata = {
    title: "Noches de Aceleración",
    description: NOCHES_CONTENT.hero.description,
};

export default function NochesDeAceleracionPage() {
    const content = NOCHES_CONTENT;

    return (
        <>
            <section className="relative bg-brand-black py-20 lg:py-28 overflow-hidden">
                <Image
                    src={content.hero.image!}
                    alt={content.hero.titleAccent}
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="container-xl relative z-10">
                    <p className="section-label text-brand-red">
                        {content.hero.label}
                    </p>
                    <h1 className="font-display font-black text-white text-heading-xl leading-none">
                        {content.hero.title}
                        <br />
                        <span className="text-brand-red">
                            {content.hero.titleAccent}
                        </span>
                    </h1>
                    <p className="mt-6 text-brand-gray-light text-lg max-w-2xl leading-relaxed">
                        {content.hero.description}
                    </p>
                </div>
            </section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <SectionHeader
                                title="La Experiencia"
                                titleAccent="Nocturna"
                            />
                            <p className="text-brand-gray-mid leading-relaxed mb-8">
                                {content.description}
                            </p>
                            <ul className="space-y-3">
                                {content.highlights.map((highlight) => (
                                    <li
                                        key={highlight}
                                        className="flex items-start gap-3 text-sm text-brand-gray-mid"
                                    >
                                        <span className="text-brand-red flex-shrink-0 mt-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 font-mono text-2xs uppercase tracking-widest text-brand-gray-light">
                                {content.schedule}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-display font-bold text-xl uppercase text-brand-black">
                                Precios
                            </h3>
                            {content.pricing.map((tier) => (
                                <div
                                    key={tier.type}
                                    className="border border-brand-gray-border bg-white p-6 hover:border-brand-red transition-colors duration-200"
                                >
                                    <div className="flex items-baseline justify-between mb-3">
                                        <h4 className="font-display font-bold text-lg uppercase text-brand-black">
                                            {tier.type}
                                        </h4>
                                        <span className="font-display font-black text-3xl text-brand-red">
                                            {tier.price}
                                        </span>
                                    </div>
                                    <p className="text-sm text-brand-gray-mid mb-4">
                                        {tier.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {tier.includes.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-2 text-sm text-brand-gray-mid"
                                            >
                                                <span className="text-brand-red flex-shrink-0 mt-0.5">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <Link
                                href={content.ctaHref}
                                className="btn-primary w-full justify-center"
                            >
                                {content.ctaLabel}
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
