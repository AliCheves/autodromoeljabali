import type { Metadata } from "next";
import { RaceProtestForm } from "@/components/domain/RaceProtestForm";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "Protesta Oficial | Campeonato 4T",
    description:
        "Formulario oficial de protesta de carrera para el Campeonato 4T del Autódromo Internacional El Jabalí.",
};

export default function ProtestaPage() {
    return (
        <>
            <section className="bg-brand-black py-20 lg:py-28">
                <div className="container-xl">
                    <p className="section-label text-brand-red">Campeonato 4T</p>
                    <h1 className="font-display font-black text-white text-heading-xl leading-none">
                        PROTESTA <span className="text-brand-red">OFICIAL</span>
                    </h1>
                    <p className="mt-6 text-brand-gray-light text-lg max-w-2xl leading-relaxed">
                        Este formulario constituye un documento oficial ante la Comisión
                        Deportiva. Toda la información será tratada con confidencialidad.
                    </p>
                </div>
            </section>

            <Section>
                <div className="container-xl">
                    <RaceProtestForm />
                </div>
            </Section>
        </>
    );
}
