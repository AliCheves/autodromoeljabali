import type { EventPrize } from "@/types/content";
import { Section, SectionHeader } from "@/components/ui/Section";

interface EventPrizeSectionProps {
    prizes: EventPrize[];
    label?: string;
    title?: string;
    titleAccent?: string;
}

export function EventPrizeSection({
    prizes,
    label = "Premiación",
    title = "PREMIOS",
    titleAccent = "OFICIALES",
}: EventPrizeSectionProps) {
    return (
        <Section gray>
            <div className="container-xl">
                <SectionHeader label={label} title={title} titleAccent={titleAccent} />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-brand-gray-border max-w-3xl">
                    {prizes.map((prize, idx) => (
                        <div
                            key={prize.place}
                            className="bg-white p-8 flex flex-col items-center text-center"
                        >
                            {idx === 0 && (
                                <span className="text-3xl mb-2">🏆</span>
                            )}
                            {idx === 1 && (
                                <span className="text-3xl mb-2">🥈</span>
                            )}
                            {idx === 2 && (
                                <span className="text-3xl mb-2">🥉</span>
                            )}
                            <span className="font-display font-black text-3xl text-brand-red">
                                {prize.amount}
                            </span>
                            <span className="font-mono text-2xs uppercase tracking-widest text-brand-gray-mid mt-2">
                                {prize.place}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
