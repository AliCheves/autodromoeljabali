import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="container-xl">
          <p className="section-label text-brand-red">Ponerse en Contacto</p>
          <h1 className="font-display font-black text-white text-heading-xl leading-none">
            CONTACTO
          </h1>
        </div>
      </section>

      <Section>
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <p className="section-label">Información de Contacto</p>
              <h2 className="font-display font-black text-heading-md text-brand-black mb-8">
                ESTAMOS AQUÍ <span className="text-brand-red">PARA AYUDAR</span>
              </h2>
              <div className="space-y-8">
                {[
                  { label: "Dirección", value: "Autódromo El Jabalí, Campaña de Automovilismo, San Salvador, El Salvador" },
                  { label: "Teléfono", value: "+503 2209-0000" },
                  { label: "Email", value: "info@autodomojabali.com" },
                  { label: "Horario de Oficina", value: "Lunes – Viernes: 8:00 AM – 5:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-brand-red pl-6">
                    <div className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-1">
                      {item.label}
                    </div>
                    <div className="font-body text-brand-black">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-display font-bold text-xl uppercase text-brand-black mb-6">
                Envíanos un Mensaje
              </h2>
              {/* Phase 2: server action + Supabase */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">Nombre</label>
                    <input type="text" className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                  </div>
                  <div>
                    <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">Apellido</label>
                    <input type="text" className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">Email</label>
                  <input type="email" className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                </div>
                <div>
                  <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">Asunto</label>
                  <input type="text" className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                </div>
                <div>
                  <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">Mensaje</label>
                  <textarea rows={5} className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none" />
                </div>
                <button className="btn-primary w-full justify-center">
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
