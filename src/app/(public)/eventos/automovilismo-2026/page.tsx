import type { Metadata } from "next";
import { AUTOMOVILISMO_2026 } from "@/config/content/eventos/automovilismo2026";
import { EventHero } from "@/components/sections/EventHero";
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

                    <div className="mt-12 border border-brand-gray-border bg-brand-gray-bg p-10 text-center max-w-2xl">
                        <p className="font-mono text-2xs uppercase tracking-widest text-brand-red mb-2">
                            En Desarrollo
                        </p>
                        <h2 className="font-display font-black text-heading-md text-brand-black mb-3">
                            SECCIÓN EN <span className="text-brand-red">CONSTRUCCIÓN</span>
                        </h2>
                        <p className="text-sm text-brand-gray-mid leading-relaxed">
                            Estamos trabajando en esta sección. Pronto tendrás acceso al calendario completo, patrocinadores y más información sobre la temporada de automovilismo 2026.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}
