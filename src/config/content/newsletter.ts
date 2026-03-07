import type { PageMeta, HeroContent } from "@/types/content";

export interface NewsletterContent {
  meta: PageMeta;
  hero: HeroContent;
  form: {
    title: string;
    description: string;
    successTitle: string;
    successMessage: string;
  };
}

export const NEWSLETTER_CONTENT: NewsletterContent = {
  meta: {
    title: "Suscríbete al Newsletter oficial",
    description:
      "Recibe las últimas noticias, calendarios, comunicados oficiales y anuncios sobre los eventos del Autódromo Internacional El Jabalí directamente en tu correo.",
  },
  hero: {
    label: "Noticias Oficiales",
    title: "SUSCRÍBETE AL",
    titleAccent: "NEWSLETTER",
    description:
      "Mantente conectado con la capital del automovilismo centroamericano. Recibe notificaciones de apertura de inscripciones, cambios de calendario y resultados oficiales.",
    image: "/images/temporarychangelater/heros/hero calendario eventos.jpg",
  },
  form: {
    title: "Únete a la lista",
    description:
      "Completa el siguiente formulario para recibir nuestras actualizaciones.",
    successTitle: "¡Suscripción Exitosa!",
    successMessage:
      "Tu correo ha sido añadido a nuestra lista de distribución.",
  },
};
