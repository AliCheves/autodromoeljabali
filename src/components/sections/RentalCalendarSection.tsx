import type { RentalCalendarGroup } from "@/types/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { RentalCalendarCard } from "@/components/sections/RentalCalendarCard";

interface RentalCalendarSectionProps {
    groups: RentalCalendarGroup[];
}

const START_HOURS: Record<string, number> = {
    VIERNES: 17,
    SÁBADO: 13,
};

export function RentalCalendarSection({ groups }: RentalCalendarSectionProps) {
    return (
        <Section gray>
            <div className="container-xl">
                <SectionHeader
                    label="Fechas Oficiales"
                    title="CALENDARIO"
                    titleAccent="OFICIAL 2026"
                />

                <div className="space-y-12">
                    {groups.map((group) => {
                        const startHour = START_HOURS[group.title] || 17;

                        return (
                            <div key={group.title}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-1 h-10 bg-brand-red" />
                                    <div>
                                        <h3 className="font-display font-black text-xl uppercase text-brand-black">
                                            {group.title}
                                        </h3>
                                        <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light">
                                            Horario: {group.schedule}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                    {group.days.map((date, i) => (
                                        <RentalCalendarCard
                                            key={i}
                                            date={date}
                                            startHour={startHour}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <p className="mt-8 text-center font-mono text-2xs uppercase tracking-widest text-brand-gray-light">
                    Haz clic en una fecha para agregarla a tu Google Calendar
                </p>
            </div>
        </Section>
    );
}
