import type { RegistrationInfo, PressConference } from "@/types/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SPONSORS } from "@/config/sponsors";
import { SponsorsBand } from "@/components/ui/Sponsors";
import { OFFICIAL_CONTACT_INFO } from "@/config/content/contact";

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
    const showSponsors = sponsors && sponsors.length > 0;

    return (
        <>
            <Section>
                <div className="container-xl overflow-hidden">
                    <SectionHeader
                        label="Inscripción"
                        title="REGLAS"
                        titleAccent="DE PARTICIPACIÓN"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl">
                        <div className="min-w-0 overflow-hidden border border-brand-gray-border p-8">
                            <div className="font-display font-black text-5xl text-brand-red text-center">
                                {registration.totalSlots}
                            </div>
                            <div className="font-mono text-2xs uppercase tracking-widest text-brand-gray-mid text-center mt-2">
                                Cupos Disponibles
                            </div>
                            {registration.engineNote && (
                                <p className="text-sm text-brand-gray-mid text-center mt-4 border-t border-brand-gray-border pt-4 break-words">
                                    {registration.engineNote}
                                </p>
                            )}
                        </div>

                        <div className="min-w-0 overflow-hidden border border-brand-gray-border p-8 flex flex-col">
                            <h3 className="font-display font-bold text-lg uppercase text-brand-black mb-4 flex-shrink-0">
                                Requisitos
                            </h3>
                            <ul className="space-y-3 overflow-y-auto max-h-64 pr-2">
                                {registration.requirements.map((req) => (
                                    <li key={req} className="flex items-start gap-3 text-sm text-brand-gray-mid">
                                        <span className="text-brand-red flex-shrink-0 mt-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </span>
                                        <span className="break-words min-w-0">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="min-w-0 overflow-hidden border border-brand-gray-border p-8">
                            <h3 className="font-display font-bold text-lg uppercase text-brand-black mb-4">
                                Mayor Información
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-1">Teléfono</p>
                                    <a
                                        href={`tel:${OFFICIAL_CONTACT_INFO.phone}`}
                                        className="block text-brand-black hover:text-brand-red transition-colors font-display font-bold text-xl truncate"
                                    >
                                        {OFFICIAL_CONTACT_INFO.phoneFormatted}
                                    </a>
                                </div>
                                <div className="min-w-0">
                                    <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-1">Correo</p>
                                    <a
                                        href={`mailto:${OFFICIAL_CONTACT_INFO.email}`}
                                        className="block text-brand-black hover:text-brand-red transition-colors font-bold text-sm break-all"
                                    >
                                        {OFFICIAL_CONTACT_INFO.email}
                                    </a>
                                </div>
                                <div className="min-w-0">
                                    <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-1">Ubicación</p>
                                    <a
                                        href={OFFICIAL_CONTACT_INFO.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-sm text-brand-gray-mid hover:text-brand-red transition-colors break-words"
                                    >
                                        {OFFICIAL_CONTACT_INFO.address.line1}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {pressConference && (
                        <div className="mt-12 border-t-2 border-brand-red pt-8 max-w-5xl overflow-hidden">
                            <h3 className="font-display font-black text-heading-md uppercase text-brand-black mb-2 break-words">
                                Conferencia de Prensa Oficial
                            </h3>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-gray-mid">
                                <span className="truncate">{pressConference.venue}</span>
                                <span className="w-px h-4 bg-brand-gray-border hidden sm:block" />
                                <span className="truncate">{pressConference.date}</span>
                                <span className="w-px h-4 bg-brand-gray-border hidden sm:block" />
                                <span className="truncate">{pressConference.time}</span>
                            </div>
                        </div>
                    )}
                </div>
            </Section>

            {showSponsors && (
                <SponsorsBand sponsors={SPONSORS} label="Patrocinadores Oficiales" />
            )}
        </>
    );
}
