import type { EventDayCalendar } from "@/types/content";
import { Section, SectionHeader } from "@/components/ui/Section";

interface EventDayCalendarGridProps {
    calendars: EventDayCalendar[];
    label?: string;
    title?: string;
    titleAccent?: string;
}

export function EventDayCalendarGrid({
    calendars,
    label = "Calendario Completo",
    title = "FECHAS",
    titleAccent = "DISPONIBLES",
}: EventDayCalendarGridProps) {
    return (
        <Section>
            <div className="container-xl">
                <SectionHeader label={label} title={title} titleAccent={titleAccent} />

                <div className="space-y-12">
                    {calendars.map((calendar) => (
                        <div key={calendar.day}>
                            <div className="flex items-center gap-4 mb-6">
                                <h3 className="font-display font-black text-2xl uppercase text-brand-black">
                                    {calendar.day}
                                </h3>
                                <span className="font-mono text-sm text-brand-gray-mid">
                                    {calendar.timeRange}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-px bg-brand-gray-border">
                                {calendar.dates.map((date, idx) => (
                                    <div
                                        key={`${date.day}-${date.month}-${idx}`}
                                        className="bg-white p-4 flex items-center gap-3 group hover:bg-brand-black transition-colors duration-200"
                                    >
                                        <span className="font-display font-black text-2xl text-brand-red group-hover:text-white leading-none min-w-10 text-center">
                                            {date.day}
                                        </span>
                                        <span className="font-mono text-2xs uppercase tracking-widest text-brand-gray-mid group-hover:text-brand-gray-light">
                                            {date.month}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
