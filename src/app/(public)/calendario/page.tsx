import { Section, SectionHeader } from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calendario",
};

export default function CalendarioPage() {
    return (
        <Section>
            <Container>
                <SectionHeader title="Calendario de" titleAccent="Eventos" subtitle="Próximas competiciones y track days." />
                <div className="min-h-[40vh] border border-brand-gray-border flex items-center justify-center text-brand-gray-mid bg-white">
                    <p>Calendario del año en curso...</p>
                </div>
            </Container>
        </Section>
    );
}
