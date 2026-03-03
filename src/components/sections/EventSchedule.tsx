import type { EventScheduleSlot } from "@/types/content";
import { Section, SectionHeader } from "@/components/ui/Section";

interface EventScheduleProps {
    slots: EventScheduleSlot[];
    label?: string;
    title?: string;
    titleAccent?: string;
}

export function EventSchedule({
    slots,
    label = "Horarios",
    title = "HORARIO",
    titleAccent = "DE OPERACIÓN",
}: EventScheduleProps) {
    return (
        <Section>
            <div className="container-xl">
                <SectionHeader label={label} title={title} titleAccent={titleAccent} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-gray-border max-w-2xl">
                    {slots.map((slot) => (
                        <div
                            key={slot.day}
                            className="bg-white p-8 flex flex-col items-center text-center"
                        >
                            <span className="font-display font-black text-2xl uppercase text-brand-black">
                                {slot.day}
                            </span>
                            <div className="w-8 h-0.5 bg-brand-red my-4" />
                            <span className="font-mono text-sm text-brand-gray-mid">
                                {slot.startTime} — {slot.endTime}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
