import type { Metadata } from "next";
import Link from "next/link";
import { KART_RENTAL_2026_CONTENT } from "@/config/content/karting/kartRental2026";
import { SPONSORS } from "@/config/content/sponsors";
import { EventHero } from "@/components/sections/EventHero";
import { RentalAnnouncementSection } from "@/components/sections/RentalAnnouncementSection";
import { RentalCalendarSection } from "@/components/sections/RentalCalendarSection";
import { KartingPrivateEventsCard } from "@/components/sections/KartingPrivateEventsCard";
import { SponsorsBand } from "@/components/ui/Sponsors";
import { Section } from "@/components/ui/Section";

export function generateMetadata(): Metadata {
    const { meta } = KART_RENTAL_2026_CONTENT;
    return {
        title: meta.title,
        description: meta.description,
        openGraph: {
            title: meta.title,
            description: meta.description,
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
        },
    };
}

export default function KartRental2026Page() {
    const { hero, announcement, calendar, finalCTA } =
        KART_RENTAL_2026_CONTENT;

    return (
        <>
            <EventHero
                label={hero.label}
                title={hero.title}
                titleAccent={hero.titleAccent}
                description={hero.description}
                image={hero.image}
            />

            <RentalAnnouncementSection
                title={announcement.title}
                paragraphs={announcement.paragraphs}
            />

            <RentalCalendarSection groups={calendar} />

            <SponsorsBand
                sponsors={SPONSORS}
                dark
                label="Patrocinadores Oficiales"
            />

            <Section>
                <div className="container-xl text-center">
                    <h2 className="font-display font-black text-heading-lg text-brand-black">
                        {finalCTA.title}
                    </h2>
                    <p className="mt-4 text-brand-gray-mid text-lg max-w-xl mx-auto">
                        {finalCTA.description}
                    </p>
                    <Link
                        href={finalCTA.buttonHref}
                        className="btn-primary mt-8 inline-block px-12 py-4 text-lg"
                    >
                        {finalCTA.buttonText}
                    </Link>
                </div>
            </Section>

            <KartingPrivateEventsCard />
        </>
    );
}

