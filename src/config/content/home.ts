import type { HeroContent, StatItem, CalendarEvent } from "@/types/content";

export const HOME_HERO: HeroContent = {
    label: "TEMPORADA DE CAMPEONATO 2026",
    title: "SUPERANDO LOS",
    titleAccent: "LÍMITES",
    description: "Experimente el pináculo del automovilismo en Autódromo Internacional El Jabalí. Donde la precisión se encuentra con la pasión en la pista.",
    image: "/images/hero/jabali-noche.jpeg",
};

export const INSTITUTION_STATS: StatItem[] = [
    { value: "45+", label: "Años Impulsando el Deporte de Motor" },
    { value: "1000+", label: "Host de Carreras" },
    { value: "100K+", label: "Visitantes al año" },
    { value: "100+", label: "Eventos Deportivos al año" },
];

export const KARTING_CHAMPIONS_IMAGE = "/images/galeria/gala-campeones.jpeg";

export const HOME_CALENDAR: CalendarEvent[] = [
    { day: "15", month: "MAY", label: "PRÓXIMO", name: "Campeonato de Primavera - Ronda 1", circuit: "Autódromo El Jabalí", time: "10:00 AM" },
    { day: "08", month: "JUN", label: "CLASIFICATORIA", name: "Trofeo Internacional de Karting", circuit: "Autódromo El Jabalí - Norte", time: "09:00 AM" },
    { day: "22", month: "JUN", label: "RONDA", name: "Desafío de Resistencia 6H", circuit: "Circuito Principal", time: "12:00 PM" },
    { day: "10", month: "MAY", label: "ACADEMIA", name: "Exhibición Academia de Pilotos", circuit: "Centro de Entrenamiento", time: "10:00 PM" },
];

export const LEGADO_SECTION = {
    title: "LEGADO",
    titleAccent: "COMPETITIVO",
    paragraphs: [
        "El Autódromo Internacional El Jabalí no es solo un circuito; es la prueba definitiva. Reconocida como la pista más técnica y desafiante de la región, nuestra trazada exige maestría y redefine la excelencia en el automovilismo deportivo. Aquí, la tradición de décadas se funde con tecnología de vanguardia para ofrecer un escenario de rendimiento puro. Desde el karting hasta el profesionalismo, proporcionamos plataformas propias e independientes diseñadas para forjar campeones y empujar los límites de lo posible en cada curva.",
        "Nuestro compromiso es la evolución constante del deporte motor. En El Jabalí, no solo corremos; formamos el futuro del automovilismo en una pista que no admite errores, donde la precisión y la adrenalina están presentes desde el banderillazo de salida hasta cruzar la meta.",
        "Con un legado arraigado en la competición y una visión volcada al futuro, el Autódromo Internacional El Jabalí se posiciona como el referente técnico de la región. Nuestra pista, famosa por su complejidad y exigencia, es el circuito donde el talento se transforma en maestría.",
    ],
    ctaLabel: "DESCUBRE NUESTRA HISTORIA →",
    ctaHref: "/institucion/legado-competitivo",
};

export const SPONSOR_INQUIRY_CONTENT = {
    buttonLabel: "¿Quieres ser parte de nuestros patrocinadores élite?",
    description:
        "¡Crea una experiencia para tu marca y los tuyos siendo parte de una plataforma activa y exclusiva de automovilismo deportivo donde te ayudamos a exponerte y estar conectado con la gente de una manera única!",
    formLabels: {
        nameOrBrand: "Nombre o Marca",
        email: "Correo electrónico",
        phone: "Teléfono",
    },
    submitLabel: "Enviar solicitud",
    successMessage: "Te contactaremos en menos de 24 horas.",
};

