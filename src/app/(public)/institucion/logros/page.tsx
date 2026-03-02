import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import { ACHIEVEMENTS, PREMIADOS_FIA } from "@/config/content/logros";
import { AchievementsCarousel } from "@/components/domain/AchievementsCarousel";

export const metadata: Metadata = {
    title: "Logros Emblemáticos",
    description:
        "Logros emblemáticos y premios del Autódromo Internacional El Jabalí. Premiados FIA y reconocimientos internacionales.",
};

export default function LogrosPage() {
    const achievements = ACHIEVEMENTS;
    const premiadosFia = PREMIADOS_FIA;

    return (
        <>
            <section className="bg-brand-black py-20 lg:py-28">
                <div className="container-xl">
                    <p className="section-label text-brand-red">
                        Institución — Logros
                    </p>
                    <h1 className="font-display font-black text-white text-heading-xl leading-none">
                        LOGROS
                        <br />
                        <span className="text-brand-red">EMBLEMÁTICOS</span>
                    </h1>
                    <p className="mt-6 text-brand-gray-light text-lg max-w-2xl leading-relaxed">
                        Hitos que han marcado la historia del automovilismo en El Salvador y Centroamérica.
                    </p>
                </div>
            </section>

            <Section>
                <Container>
                    <SectionHeader
                        label="Nuestra Historia"
                        title="Momentos que nos"
                        titleAccent="Definen"
                        subtitle="Cada logro representa el compromiso con la excelencia y el desarrollo del automovilismo en la región."
                    />
                    <AchievementsCarousel achievements={achievements} />
                </Container>
            </Section>

            <Section gray>
                <Container>
                    <SectionHeader
                        label="Reconocimientos Internacionales"
                        title="Premiados"
                        titleAccent="FIA"
                        subtitle="Pilotos y profesionales de nuestro autódromo reconocidos por la Federación Internacional del Automóvil."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-gray-border">
                        {premiadosFia.map((premiado) => (
                            <div
                                key={premiado.id}
                                className="bg-white p-8 hover:bg-brand-gray-bg transition-colors duration-200 group"
                            >
                                <div className="relative w-16 h-16 bg-brand-black text-white flex items-center justify-center font-display font-black text-2xl mb-5 overflow-hidden">
                                    <Image
                                        src={premiado.image}
                                        alt={premiado.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-display font-bold text-lg uppercase text-brand-black group-hover:text-brand-red transition-colors mb-1">
                                    {premiado.name}
                                </h3>
                                <p className="font-mono text-2xs uppercase tracking-widest text-brand-red mb-2">
                                    {premiado.title}
                                </p>
                                <div className="flex items-center gap-2 text-sm text-brand-gray-mid">
                                    <span>{premiado.year}</span>
                                    <span className="w-px h-3 bg-brand-gray-border" />
                                    <span>{premiado.discipline}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
}
