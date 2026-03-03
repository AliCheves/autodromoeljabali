import type { RegistrationInfo, PressConference } from "@/types/content";
import { Section, SectionHeader } from "@/components/ui/Section";

interface EventRegistrationSectionProps {
    registration: RegistrationInfo;
    pressConference?: PressConference;
    sponsors?: string[];
}

export function EventRegistrationSection({
    registration,
    pressConference,
    sponsors,
}: EventRegistrationSectionProps) {
    return (
        <Section>
            <div className="container-xl">
                <SectionHeader
                    label="Inscripción"
                    title="REGLAS"
                    titleAccent="DE PARTICIPACIÓN"
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl">
                    {/* Cupos + Engine */}
                    <div className="border border-brand-gray-border p-8">
                        <div className="font-display font-black text-5xl text-brand-red text-center">
                            {registration.totalSlots}
                        </div>
                        <div className="font-mono text-2xs uppercase tracking-widest text-brand-gray-mid text-center mt-2">
                            Cupos Disponibles
                        </div>
                        {registration.engineNote && (
                            <p className="text-sm text-brand-gray-mid text-center mt-4 border-t border-brand-gray-border pt-4">
                                {registration.engineNote}
                            </p>
                        )}
                    </div>

                    {/* Requirements */}
                    <div className="border border-brand-gray-border p-8">
                        <h3 className="font-display font-bold text-lg uppercase text-brand-black mb-4">
                            Requisitos
                        </h3>
                        <ul className="space-y-3">
                            {registration.requirements.map((req) => (
                                <li key={req} className="flex items-start gap-3 text-sm text-brand-gray-mid">
                                    <span className="text-brand-red flex-shrink-0 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="border border-brand-gray-border p-8">
                        <h3 className="font-display font-bold text-lg uppercase text-brand-black mb-4">
                            Mayor Información
                        </h3>
                        <div className="space-y-2">
                            {registration.contactPhones.map((phone) => (
                                <a
                                    key={phone}
                                    href={`tel:${phone.replace(/-/g, "")}`}
                                    className="block text-brand-black hover:text-brand-red transition-colors font-display font-bold text-xl"
                                >
                                    {phone}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Press Conference */}
                {pressConference && (
                    <div className="mt-12 border-t-2 border-brand-red pt-8 max-w-5xl">
                        <h3 className="font-display font-black text-heading-md uppercase text-brand-black mb-2">
                            Conferencia de Prensa Oficial
                        </h3>
                        <div className="flex flex-wrap gap-6 text-sm text-brand-gray-mid">
                            <span>{pressConference.venue}</span>
                            <span className="w-px h-4 bg-brand-gray-border" />
                            <span>{pressConference.date}</span>
                            <span className="w-px h-4 bg-brand-gray-border" />
                            <span>{pressConference.time}</span>
                        </div>
                    </div>
                )}

                {/* Sponsors */}
                {sponsors && sponsors.length > 0 && (
                    <div className="mt-12 max-w-5xl">
                        <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-4">
                            Patrocinadores
                        </p>
                        <div className="flex flex-wrap gap-px bg-brand-gray-border">
                            {sponsors.map((sponsor) => (
                                <div
                                    key={sponsor}
                                    className="bg-white px-6 py-3 text-xs font-display font-bold text-brand-gray-mid uppercase"
                                >
                                    {sponsor}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
}
