import Link from "next/link";

const FOOTER_LINKS = {
  "Accesos Rápidos": [
    { label: "Institución", href: "/estructura" },
    { label: "Estructura", href: "/estructura#estructura" },
    { label: "Karting", href: "/karting" },
    { label: "Eventos", href: "/eventos" },
    { label: "Pilotos", href: "/pilotos" },
  ],
};

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <p className="font-display font-black text-sm uppercase tracking-widest text-white">
                Autódromo Internacional
              </p>
              <p className="font-display font-black text-xs uppercase tracking-[0.25em] text-brand-red">
                El Jabalí
              </p>
            </div>
            <p className="text-sm text-brand-gray-light leading-relaxed max-w-xs">
              Liderando el futuro del automovilismo con pasión, precisión y excelencia en el rendimiento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-5">
              Accesos Rápidos
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS["Accesos Rápidos"].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-gray-light hover:text-brand-red transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-brand-gray-light">
              <li>
                <span className="block text-white">Autódromo El Jabalí</span>
                Campaña de Automovilismo<br />
                San Salvador, El Salvador
              </li>
              <li>
                <a
                  href="tel:+50322090000"
                  className="hover:text-brand-red transition-colors"
                >
                  +503 2209-0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@autdromojabali.com"
                  className="hover:text-brand-red transition-colors break-all"
                >
                  info@autodomojabali.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-5">
              Síguenos
            </h4>
            <div className="flex gap-3 mb-6">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center border border-brand-gray text-brand-gray-light hover:border-brand-red hover:text-brand-red transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <Link
              href="/contacto"
              className="btn-primary text-xs"
            >
              Contáctanos
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-gray pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-2xs text-brand-gray-light uppercase tracking-widest">
            © {currentYear} Autódromo Internacional El Jabalí. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacidad"
              className="font-mono text-2xs text-brand-gray-light hover:text-brand-red transition-colors uppercase tracking-widest"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos"
              className="font-mono text-2xs text-brand-gray-light hover:text-brand-red transition-colors uppercase tracking-widest"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
