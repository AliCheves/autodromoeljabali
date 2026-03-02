import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import { VOLUNTARIADO_CONTENT } from "@/config/content/institucion";
import { VolunteerForm } from "@/components/domain/VolunteerForm";

// ------------------------------------
// Metadata — uses content config
// ------------------------------------
export const metadata: Metadata = {
    title: VOLUNTARIADO_CONTENT.hero.title + " " + VOLUNTARIADO_CONTENT.hero.titleAccent,
    description: VOLUNTARIADO_CONTENT.hero.description,
};

// ------------------------------------
// Page — Server Component
// Content is assigned to a local variable so that in Phase 3
// this can be swapped to `const content = await getVoluntariadoContent()`
// without changing the JSX below.
// ------------------------------------
export default function VoluntariadoPage() {
    const content = VOLUNTARIADO_CONTENT;

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
                        <div className="space-y-10">
                            {content.sections.map((section) => (
                                <div key={section.title}>
                                    <h2 className="font-display font-bold text-heading-md text-brand-black mb-4">
                                        {section.title}
                                    </h2>
                                    <p className="text-brand-gray-mid leading-relaxed">
                                        {section.description}
                                    </p>
                                </div>
                            ))}

                            <div>
                                <h3 className="font-display font-bold text-xl uppercase text-brand-black mb-4">
                                    Beneficios
                                </h3>
                                <ul className="space-y-3">
                                    {content.benefits.map((benefit) => (
                                        <li
                                            key={benefit}
                                            className="flex items-start gap-3 text-sm text-brand-gray-mid"
                                        >
                                            <span className="text-brand-red flex-shrink-0 mt-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <VolunteerForm />
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
