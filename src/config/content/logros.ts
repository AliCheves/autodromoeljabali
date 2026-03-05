import type { Achievement, PremiadoFia } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const ACHIEVEMENTS: Achievement[] = [
    {
        id: "campeonato-centroamericano-2025",
        title: "Campeonato Centroamericano de Karting",
        year: "2025",
        summary: "Sede oficial del Campeonato Centroamericano con participación de 8 países.",
        description:
            "El Autódromo Internacional El Jabalí fue sede del Campeonato Centroamericano de Karting 2025, recibiendo a más de 120 pilotos de 8 países de la región. El evento marcó un hito en la historia del automovilismo centroamericano con estándares internacionales de organización y seguridad certificados por la FIA.",
        category: "Internacional",
        image: "/images/temporarychangelater/galeria/race start.jpg",
    },
    {
        id: "certificacion-fia-2024",
        title: "Certificación FIA Grado 3",
        year: "2024",
        summary: "Primer circuito de El Salvador en obtener certificación FIA Grado 3.",
        description:
            "El Autódromo Internacional El Jabalí se convirtió en el primer circuito de El Salvador en recibir la certificación FIA Grado 3, permitiendo la celebración de eventos internacionales oficiales. La certificación valida las instalaciones, medidas de seguridad y estándares operativos del circuito.",
        category: "Institucional",
        image: "/images/temporarychangelater/galeria/Cars going down.jpg",
    },
    {
        id: "record-asistencia-2024",
        title: "Récord de Asistencia",
        year: "2024",
        summary: "Más de 15,000 espectadores en el Gran Premio Nacional 2024.",
        description:
            "El Gran Premio Nacional 2024 estableció un récord histórico de asistencia con más de 15,000 espectadores en un solo fin de semana de competición. El evento contó con transmisión en vivo, zona de entretenimiento familiar y exhibiciones de automovilismo clásico.",
        category: "Eventos",
        image: "/images/temporarychangelater/galeria/cars in race 2.jpg",
    },
    {
        id: "escuela-karting-2023",
        title: "Lanzamiento Escuela Gratuita",
        year: "2023",
        summary: "Inauguración del programa de formación gratuita para jóvenes pilotos.",
        description:
            "Se inauguró la Escuela Gratuita de Karting, un programa social que ha formado a más de 200 jóvenes pilotos desde su lanzamiento. El programa proporciona equipamiento, instrucción profesional y oportunidades de competición sin costo para familias de la comunidad.",
        category: "Social",
        image: "/images/temporarychangelater/galeria/cars in race 3.jpg",
    },
    {
        id: "expansion-circuito-2022",
        title: "Expansión del Circuito Norte",
        year: "2022",
        summary: "Ampliación de las instalaciones con nuevo trazado de competición.",
        description:
            "Finalización de la expansión del Circuito Norte, añadiendo un nuevo trazado de 1.2 km con 12 curvas técnicas. La expansión incluyó nueva infraestructura de boxes, torre de control y áreas de espectadores con capacidad para 5,000 personas.",
        category: "Infraestructura",
        image: "/images/temporarychangelater/galeria/curve.jpg",
    },
    {
        id: "primer-campeonato-2020",
        title: "Primer Campeonato Nacional",
        year: "2020",
        summary: "Organización del primer campeonato nacional oficial de karting.",
        description:
            "El Autódromo Internacional El Jabalí organizó el primer Campeonato Nacional de Karting oficial de El Salvador, sentando las bases para el desarrollo del automovilismo profesional en el país. El campeonato contó con 4 categorías y más de 60 pilotos inscritos.",
        category: "Competición",
        image: "/images/temporarychangelater/galeria/cars in race 4.jpg",
    },
];

export const PREMIADOS_FIA: PremiadoFia[] = [
    {
        id: "carlos-vega-fia",
        name: "Carlos Vega",
        title: "Piloto del Año Centroamérica",
        year: "2025",
        discipline: "Karting",
        image: "/images/temporarychangelater/galeria/flag pilot.jpg",
    },
    {
        id: "sofia-martinez-fia",
        name: "Sofía Martínez",
        title: "Piloto Revelación FIA",
        year: "2024",
        discipline: "Karting",
        image: "/images/temporarychangelater/galeria/cars in race 5.jpg",
    },
    {
        id: "roberto-mendez-fia",
        name: "Roberto Méndez",
        title: "Mejor Director de Carrera",
        year: "2024",
        discipline: "Organización",
        image: "/images/temporarychangelater/galeria/Porsche.jpg",
    },
    {
        id: "ana-santos-fia",
        name: "Ana Santos",
        title: "Promesa del Automovilismo",
        year: "2023",
        discipline: "Karting",
        image: "/images/temporarychangelater/galeria/ferrari.jpg",
    },
];
