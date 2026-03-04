import { Section } from "@/components/ui/Section";

interface RentalAnnouncementProps {
    title: string;
    paragraphs: string[];
}

export function RentalAnnouncementSection({ title, paragraphs }: RentalAnnouncementProps) {
    return (
        <Section>
            <div className="container-xl">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block mb-8">
                        <p className="font-mono text-2xs uppercase tracking-widest text-brand-red mb-2">
                            Anuncio Oficial
                        </p>
                        <div className="h-px w-16 bg-brand-red mx-auto" />
                    </div>
                    <h2 className="font-display font-black text-heading-lg text-brand-black leading-tight">
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-brand-red mx-auto mt-6 mb-8" />
                    <div className="space-y-5">
                        {paragraphs.map((p, i) => (
                            <p
                                key={i}
                                className="text-brand-gray-mid text-lg leading-relaxed"
                            >
                                {p}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
