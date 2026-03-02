import { Section, SectionHeader } from "@/components/ui/Section";
import Container from "@/components/layout/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Institución",
};

export default function InstitucionPage() {
    return (
        <Section>
            <Container>
                <SectionHeader title="Nuestra" titleAccent="Institución" subtitle="Conozca más sobre el Autódromo Internacional El Jabalí." />
                <div className="min-h-[40vh] border border-brand-gray-border flex items-center justify-center text-brand-gray-mid bg-white">
                    <p>Contenido de la Institución aquí...</p>
                </div>
            </Container>
        </Section>
    );
}
