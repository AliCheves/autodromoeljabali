import { Section, SectionHeader } from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disciplinas",
};

export default function DisciplinasPage() {
    return (
        <Section>
            <Container>
                <SectionHeader title="Nuestras" titleAccent="Disciplinas" subtitle="Explora las diferentes categorías de competición." />
                <div className="min-h-[40vh] border border-brand-gray-border flex items-center justify-center text-brand-gray-mid bg-white">
                    <p>Categorías y disciplinas aquí...</p>
                </div>
            </Container>
        </Section>
    );
}
