import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import { ESCUELAS, ESCUELAS_PAGE_META } from "@/config/content/escuelas";
import { SchoolInterestForm } from "@/components/domain/SchoolInterestForm";

export const metadata: Metadata = ESCUELAS_PAGE_META;

export default function EscuelasPage() {
    const schools = ESCUELAS;

    return (
        <>
            <section className="bg-brand-black py-20 lg:py-28">
                <div className="container-xl">
                    <p className="section-label text-brand-red">
                        Institución — Escuelas
                    </p>
                    <h1 className="font-display font-black text-white text-heading-xl leading-none">
                        NUESTRAS
                        <br />
                        <span className="text-brand-red">ESCUELAS</span>
                    </h1>
                    <p className="mt-6 text-brand-gray-light text-lg max-w-2xl leading-relaxed">
                        Programas de formación diseñados para desarrollar talento y facilitar el acceso al automovilismo profesional.
                    </p>
                </div>
            </section>

            <Section>
                <Container>
                    <div className="space-y-16">
                        {schools.map((school, i) => (
                            <div
                                key={school.id}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                            >
                                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                                    <span className="font-mono text-2xs uppercase tracking-widest text-brand-red mb-3 block">
                                        {school.tagline}
                                    </span>
                                    <h2 className="font-display font-black text-heading-lg text-brand-black mb-4">
                                        {school.name.split(" ").slice(0, -1).join(" ")}{" "}
                                        <span className="text-brand-red">
                                            {school.name.split(" ").slice(-1)}
                                        </span>
                                    </h2>
                                    <p className="text-brand-gray-mid leading-relaxed mb-6">
                                        {school.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {school.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-3 text-sm text-brand-gray-mid"
                                            >
                                                <span className="text-brand-red flex-shrink-0 mt-0.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={school.ctaHref} className="btn-primary text-xs">
                                        {school.ctaLabel}
                                    </Link>
                                </div>

                                <div
                                    className={`relative min-h-64 border border-brand-gray-border bg-brand-gray-bg overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""
                                        }`}
                                >
                                    <Image
                                        src={school.image}
                                        alt={school.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section gray id="formulario">
                <Container>
                    <div className="max-w-lg mx-auto">
                        <SectionHeader
                            title="¿Te"
                            titleAccent="Interesa?"
                            subtitle="Déjanos tus datos y nos pondremos en contacto contigo con más información sobre nuestras escuelas."
                            align="center"
                        />
                        <SchoolInterestForm />
                    </div>
                </Container>
            </Section>
        </>
    );
}
