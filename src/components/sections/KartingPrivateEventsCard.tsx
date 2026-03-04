import { Section } from "@/components/ui/Section";
import { KARTING_PRIVATE_EVENTS_CONTENT } from "@/config/content/karting/kartingPrivateEvents";
import { KartingPrivateEventForm } from "@/components/domain/KartingPrivateEventForm";

export function KartingPrivateEventsCard() {
    const { title, description, services } = KARTING_PRIVATE_EVENTS_CONTENT;

    return (
        <Section gray>
            <div className="container-xl">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
                    <h2 className="font-display font-black text-heading-sm text-brand-black uppercase text-center">
                        {title}
                    </h2>

                    <p className="mt-4 text-brand-gray-mid text-base leading-relaxed text-center">
                        {description}
                    </p>

                    <ul className="mt-6 space-y-2">
                        {services.map((service) => (
                            <li
                                key={service}
                                className="flex items-center gap-3 text-sm text-brand-black"
                            >
                                <span className="w-2 h-2 rounded-full bg-brand-red shrink-0" />
                                {service}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 pt-8 border-t border-brand-gray-border">
                        <KartingPrivateEventForm />
                    </div>
                </div>
            </div>
        </Section>
    );
}
