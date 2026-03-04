import type { EventPrize } from "@/types/content";
import { Section, SectionHeader } from "@/components/ui/Section";

interface EventPrizeSectionProps {
    prizes: EventPrize[];
    label?: string;
    title?: string;
    titleAccent?: string;
    note?: string;
}

const PODIUM_STYLES = [
    {
        bg: "bg-brand-black",
        amount: "text-white",
        place: "text-brand-red",
        accent: "border-t-4 border-brand-red",
        size: "text-4xl sm:text-5xl",
        padding: "p-10 sm:p-12",
        order: "order-1 sm:order-2",
    },
    {
        bg: "bg-white",
        amount: "text-brand-black",
        place: "text-brand-gray-mid",
        accent: "border-t-4 border-brand-gray-border",
        size: "text-3xl sm:text-4xl",
        padding: "p-8 sm:p-10",
        order: "order-2 sm:order-1",
    },
    {
        bg: "bg-white",
        amount: "text-brand-black",
        place: "text-brand-gray-mid",
        accent: "border-t-4 border-brand-gray-border",
        size: "text-3xl sm:text-4xl",
        padding: "p-8 sm:p-10",
        order: "order-3 sm:order-3",
    },
];

export function EventPrizeSection({
    prizes,
    label = "Premiación",
    title = "PREMIOS",
    titleAccent = "OFICIALES",
    note,
}: EventPrizeSectionProps) {
    return (
        <Section gray>
            <div className="container-xl">
                <SectionHeader label={label} title={title} titleAccent={titleAccent} />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto items-end">
                    {prizes.map((prize, idx) => {
                        const style = PODIUM_STYLES[idx] || PODIUM_STYLES[2];
                        return (
                            <div
                                key={prize.place}
                                className={`${style.bg} ${style.accent} ${style.padding} ${style.order} min-w-0 overflow-hidden flex flex-col items-center text-center rounded-sm shadow-sm`}
                            >
                                <span className={`font-display font-black ${style.size} ${style.amount} truncate w-full`}>
                                    {prize.amount}
                                </span>
                                <span className={`font-mono text-2xs uppercase tracking-widest ${style.place} mt-3 truncate w-full`}>
                                    {prize.place}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {note && (
                    <p className="text-center text-sm text-brand-gray-mid mt-6 max-w-2xl mx-auto">
                        {note}
                    </p>
                )}
            </div>
        </Section>
    );
}

