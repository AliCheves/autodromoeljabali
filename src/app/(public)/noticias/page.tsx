import { Section, SectionHeader } from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Noticias",
};

export default function NoticiasPage() {
    return (
        <Section>
            <Container>
                <SectionHeader title="Últimas" titleAccent="Noticias" subtitle="Manténgase informado sobre las novedades del automovilismo." />
                <div className="min-h-[40vh] border border-brand-gray-border flex items-center justify-center text-brand-gray-mid bg-white">
                    <p>Sección de noticias en construcción...</p>
                </div>
            </Container>
        </Section>
    );
}
