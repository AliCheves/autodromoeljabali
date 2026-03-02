import type { NavLink } from "@/types";

export const navigation: NavLink[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Institución",
    href: "/institucion",
    children: [
      { label: "Voluntariado", href: "/institucion/voluntariado" },
      { label: "Escuelas", href: "/institucion/escuelas" },
      { label: "Logros", href: "/institucion/logros" },
    ],
  },
  { label: "Estructura", href: "/estructura" },
  { label: "Karting", href: "/karting" },
  {
    label: "Eventos",
    href: "/eventos",
    children: [
      { label: "Noches de Aceleración", href: "/eventos/noches-de-aceleracion" },
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
