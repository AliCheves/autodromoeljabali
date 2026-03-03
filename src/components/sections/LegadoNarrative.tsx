import type { NarrativeSection } from "@/types/content";

interface LegadoNarrativeProps {
    sections: NarrativeSection[];
}

export function LegadoNarrative({ sections }: LegadoNarrativeProps) {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-xl">
                <div className="max-w-3xl">
                    {sections.map((section, idx) => (
                        <div key={idx} className={idx > 0 ? "mt-16" : ""}>
                            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-brand-black uppercase leading-tight mb-6">
                                {section.title}
                            </h2>
                            <div className="space-y-5">
                                {section.paragraphs.map((paragraph, pIdx) => (
                                    <p
                                        key={pIdx}
                                        className="text-brand-gray-mid text-base sm:text-lg leading-relaxed"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
