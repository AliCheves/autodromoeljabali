import type { NavLink } from "@/types";

export const navigation: NavLink[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Institución",
    href: "/institucion",
    children: [
      { label: "Legado Competitivo", href: "/institucion/legado-competitivo" },
      { label: "Voluntariado", href: "/institucion/voluntariado" },
      { label: "Escuelas", href: "/institucion/escuelas" },
      { label: "Logros", href: "/institucion/logros" },
    ],
  },
  {
    label: "Estructura",
    href: "/estructura",
    children: [
      { label: "Estructura Deportiva", href: "/estructura/deportiva" },
      { label: "Galería", href: "/estructura/galeria" },
    ],
  },
  {
    label: "Karting",
    href: "/karting",
    children: [
      { label: "Karting Rental Experience", href: "/karting/kartingrentalexperience" },
    ],
  },
  {
    label: "Eventos",
    href: "/eventos",
    children: [
      { label: "Noches de Aceleración", href: "/eventos/noches-de-aceleracion" },
      { label: "Campeonato 4T", href: "/eventos/campeonato-4t" },
      { label: "Automovilismo 2026", href: "/eventos/automovilismo-2026" },
    ],
  },
  { label: "Pilotos", href: "/pilotos" },
  { label: "Contacto", href: "/contacto" },
];

export const secondaryNavigation: NavLink[] = [
  { label: "Noticias", href: "/noticias" },
  { label: "Disciplinas", href: "/disciplinas" },
  { label: "Calendario", href: "/calendario" },
];
