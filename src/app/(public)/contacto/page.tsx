import type { Metadata } from "next";
import { OFFICIAL_CONTACT_INFO } from "@/config/content/contact";
import { ContactForm } from "@/components/domain/ContactForm";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Información de contacto del ${OFFICIAL_CONTACT_INFO.institution}. Teléfono: ${OFFICIAL_CONTACT_INFO.phoneFormatted}. Email: ${OFFICIAL_CONTACT_INFO.email}.`,
};

export default function ContactoPage() {
  const contact = OFFICIAL_CONTACT_INFO;

  const contactItems = [
    {
      label: "Dirección",
      value: `${contact.address.line1}, ${contact.address.line2}, ${contact.address.country}`,
      href: contact.mapsUrl,
    },
    {
      label: "Teléfono",
      value: contact.phoneFormatted,
      href: `tel:${contact.phone}`,
    },
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      label: "Horario de Oficina",
      value: "Lunes – Viernes: 8:00 AM – 5:00 PM",
    },
  ];

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
                {contactItems.map((item) => (
                  <div key={item.label} className="border-l-2 border-brand-red pl-6">
                    <div className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-body text-brand-black hover:text-brand-red transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-body text-brand-black">{item.value}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
