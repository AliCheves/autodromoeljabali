import type { EventDate } from "@/types/content";
import { Section, SectionHeader, Badge } from "@/components/ui/Section";

interface EventCalendarGridProps {
    rounds: EventDate[];
    label?: string;
    title?: string;
    titleAccent?: string;
}

export function EventCalendarGrid({
    rounds,
    label = "Calendario",
    title = "FECHAS",
    titleAccent = "OFICIALES",
}: EventCalendarGridProps) {
    return (
        <Section>
            <div className="container-xl">
                <SectionHeader label={label} title={title} titleAccent={titleAccent} />

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-brand-gray-border">
                    {rounds.map((round, idx) => (
                        <div
                            key={`${round.day}-${round.month}-${idx}`}
                            className="bg-white p-6 flex flex-col items-center text-center group hover:bg-brand-black transition-colors duration-200"
                        >
                            <span className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light group-hover:text-brand-red mb-2">
                                Ronda {idx + 1}
                            </span>
                            <span className="font-display font-black text-4xl text-brand-black group-hover:text-white leading-none">
                                {round.day}
                            </span>
                            <span className="font-display font-bold text-sm uppercase text-brand-gray-mid group-hover:text-brand-gray-light mt-1">
                                {round.month}
                            </span>
                            {round.year && (
                                <span className="font-mono text-2xs text-brand-gray-light group-hover:text-brand-gray-light mt-1">
                                    {round.year}
                                </span>
                            )}
                            {round.sponsor && (
                                <Badge variant="red" className="mt-3">
                                    {round.sponsor}
                                </Badge>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
