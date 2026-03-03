import type { PilotProfileContent } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const PILOTS: PilotProfileContent[] = [
    {
        meta: {
            title: "Mauricio Sermeño | Piloto",
            description:
                "Corredor de autos de carrera desde 2004 y tunner desde 1999, competidor de la categoría 4T de kartismo de ACES.",
        },
        slug: "mauricio-sermeno",
        name: "Mauricio Sermeño",
        firstName: "Mauricio",
        lastName: "Sermeño",
        disciplines: ["Karting", "Circuito", "Aceleración", "Tuning", "Motorsport"],
        highlights: ["Categoría 4T ACES", "Tunner desde 1999"],
        bio: [
            "Corredor de autos de carrera desde el año 2004 y tunner desde 1999, conocido por ser un piloto muy habilidoso en pista y por su gran carisma que ha ayudado a otros a crecer en el deporte motor, actualmente corredor de la categoría 4T de kartismo de ACES y corredor activo en circuito de Autódromo Internacional El Jabalí y el responsable de muchos podios en la historia gracias a sus modificaciones.",
        ],
        stats: [
            { label: "Inicio en carreras", value: "2004" },
            { label: "Inicio en tuning", value: "1999" },
            { label: "Categoría actual", value: "4T ACES" },
            { label: "Equipo", value: "N/A" },
        ],
        image: "/images/pilotos/MauricioSermeno/portrait/MauricioSermeno.jpeg",
    },
    {
        meta: {
            title: "Eduardo Parker | Piloto",
            description:
                "Apasionado del deporte motor, ganador SimRacing F1 2024 y competidor de la categoría 4T de ACES con Parker Racing Team.",
        },
        slug: "eduardo-parker",
        name: "Eduardo Parker",
        firstName: "Eduardo",
        lastName: "Parker",
        disciplines: ["Karting", "Motorsport", "SimRacing", "Circuito", "Aceleración"],
        highlights: ["Parker Racing Team (PRT)", "Ganador SimRacing F1 2024", "Categoría 4T ACES"],
        bio: [
            "Apasionado del deporte motor, fan de la fórmula 1 y amante del automovilismo. Compitió en el 2008 en campeonatos de aceleración y en algunos trackdays de Autódromo Internacional El Jabalí. Su regreso formal al mundo de las carreras fue en la categoría vintage con un datsun 1200.",
            "En el 2024, fue ganador de competencia de SimRacing en fórmula 1 y recientemente participó en la escuela de manejo deportivo de ACES poniendo un tiempo de 1:53 bajo y actual competidor de la categoría 4T de ACES con Parker Racing Team (PRT).",
        ],
        stats: [
            { label: "Aceleración", value: "2008" },
            { label: "Ganador SimRacing F1", value: "2024" },
            { label: "Tiempo escuela ACES", value: "1:53" },
            { label: "Categoría actual", value: "4T ACES" },
            { label: "Equipo", value: "Parker Racing Team (PRT)" },
        ],
        image: "/images/pilotos/EduardoParker/portrait/EduardoParker.jpeg",
    },
    {
        meta: {
            title: "Roberto Alonso Turcios | Piloto",
            description:
                "Apasionado por el automovilismo deportivo y la ingeniería, voluntario ACES a las puertas de su debut en campeonatos oficiales.",
        },
        slug: "roberto-alonso-turcios",
        name: "Roberto Alonso Turcios",
        firstName: "Roberto Alonso",
        lastName: "Turcios",
        disciplines: ["Karting", "Motorsport"],
        highlights: ["Voluntario ACES", "Ingeniería Mecánica"],
        bio: [
            "Apasionado por el automovilismo deportivo y la ingeniería. Mi enfoque une la precisión técnica con la disciplina en pista. Actualmente formo parte del equipo de voluntarios en ACES, fortaleciendo mi visión del deporte desde la organización y la mecánica.",
            "A las puertas de mi debut en campeonatos oficiales, trabajo para consolidarme como un piloto integral y un referente en la ingeniería automotriz.",
        ],
        stats: [
            { label: "Rol", value: "Voluntario ACES" },
            { label: "Debut oficial", value: "Pendiente" },
            { label: "Categoría actual", value: "N/A" },
        ],
        image: "/images/pilotos/RobertoAlonsoTurcios/portrait/RobertoAlonsoTurcios.jpeg",
    },
    {
        meta: {
            title: "Jose Flores | Piloto",
            description:
                "Piloto de karts desde los 6 años con más de 25 victorias y 22 podios, actualmente piloto activo de kartismo y aviación.",
        },
        slug: "jose-flores",
        name: "Jose Flores",
        firstName: "Jose",
        lastName: "Flores",
        disciplines: ["Karting"],
        highlights: ["Voluntario ACES", "Aviación", "Piloto desde los 6 años"],
        bio: [
            "¡Amante del deporte motor desde su nacimiento! Piloto de karts desde los 6 años en categorías de alto rendimiento obteniendo más de 25 victorias y más de 22 podios mostrando un alto nivel de competitividad en pista y una actitud deportiva ejemplar.",
            "Actualmente es un piloto activo de la aviación y del kartismo donde junto a su padre comparten la ingeniería en pista y celebran juntos cada podio.",
        ],
        stats: [
            { label: "Edad inicio karting", value: "6 años" },
            { label: "Victorias", value: "25+" },
            { label: "Podios", value: "22+" },
            { label: "Rol", value: "Voluntario ACES" },
        ],
        image: "/images/pilotos/JoseFlores/portrait/JoseFlores.jpeg",
    },
    {
        meta: {
            title: "Roberto Mendoza | Piloto",
            description:
                "Piloto apasionado del kartismo desde los 10 años, con más de 55 carreras y 56 podios, competidor de la categoría 4T de ACES.",
        },
        slug: "roberto-mendoza",
        name: "Roberto Mendoza",
        firstName: "Roberto",
        lastName: "Mendoza",
        disciplines: ["Karting", "Motorsport"],
        highlights: ["Voluntario ACES", "Mecánica Automotriz", "Categoría 4T ACES"],
        bio: [
            "Piloto apasionado del kartismo desde los 10 años, con más de 55 carreras y 56 podios sigue demostrando su nivel en pista este 2026, actualmente corriendo en la categoría 4T de ACES y con un corazón ejemplar que gira a altas revoluciones trabajando como voluntario en proyectos del deporte motor junto a su padre que es un pilar para el kartismo actual.",
        ],
        stats: [
            { label: "Edad inicio karting", value: "10 años" },
            { label: "Carreras", value: "55+" },
            { label: "Podios", value: "56" },
            { label: "Categoría actual", value: "4T ACES" },
            { label: "Año foco", value: "2026" },
        ],
        image: "/images/pilotos/RobertoMendoza/portrait/RobertoMendoza.jpeg",
    },
    {
        meta: {
            title: "Cesar Rivas | Piloto",
            description:
                "Piloto experimentado de circuito y campeón durante años, regresa al kartismo en la categoría 4T de ACES 2026.",
        },
        slug: "cesar-rivas",
        name: "Cesar Rivas",
        firstName: "Cesar",
        lastName: "Rivas",
        disciplines: ["Circuito", "Karting"],
        highlights: ["Categoría 4T ACES", "ACURA RSX"],
        bio: [
            "Piloto experimentado de circuito desde temprana edad con un alto nivel de manejo deportivo donde ha sido campeón durante años y que regresa oficialmente al kartismo este 2026 en la categoría 4T de ACES decidido a levantar el trofeo en lo más alto del podio, actualmente corredor de carros en circuito con un ACURA RSX preparado por su dupla el piloto Mauricio Sermeño.",
        ],
        stats: [
            { label: "Auto circuito", value: "ACURA RSX" },
            { label: "Regreso karting", value: "2026" },
            { label: "Categoría karting", value: "4T ACES" },
            { label: "Campeonatos", value: "N/A" },
        ],
        image: "/images/pilotos/CesarRivas/portrait/CesarRivas.jpeg",
    },
    {
        meta: {
            title: "Carlos Pineda | Piloto",
            description:
                "Campeón de kartismo 2025, director general de TODO MOTOR y competidor de la categoría 4T de ACES.",
        },
        slug: "carlos-pineda",
        name: "Carlos Pineda",
        firstName: "Carlos",
        lastName: "Pineda",
        disciplines: ["Karting", "Aceleración", "Motorsport"],
        highlights: ["Campeón Kartismo 2025", "Director General TODO MOTOR", "Categoría 4T ACES"],
        bio: [
            "Amante de la velocidad extrema desde muy joven y editor referente de automovilismo deportivo en El Salvador y Latinoamérica, campeón de kartismo 2025 con un manejo competitivo y técnico, organizador de las carreras más desafiantes de aceleración a nivel regional, director general de TODO MOTOR y actual competidor de la categoría 4T de ACES donde quiere dedicar este año en pista a su hijo, parte de su motivación en cada éxito alcanzado en pista.",
        ],
        stats: [
            { label: "Campeón kartismo", value: "2025" },
            { label: "Rol", value: "Director General TODO MOTOR" },
            { label: "Categoría actual", value: "4T ACES" },
        ],
        image: "/images/pilotos/CarlosPineda/portrait/CarlosPineda.jpeg",
    },
    {
        meta: {
            title: "Napoleon Serrano | Piloto",
            description:
                "Referente internacional de kartismo que ha puesto el nombre de El Salvador en alto desde los 12 años.",
        },
        slug: "napoleon-serrano",
        name: "Napoleon Serrano",
        firstName: "Napoleon",
        lastName: "Serrano",
        disciplines: ["Karting", "Circuito"],
        highlights: ["Referente Internacional", "Categoría 4T ACES"],
        bio: [
            "Referente internacional de kartismo, un competidor con un alto nivel de competición que ha puesto el nombre de El Salvador en alto desde los 12 años, actualmente está compitiendo en circuito con un VW MK1 demostrando un manejo impresionante y con una actitud muy humilde que lo hace un gran deportista dentro y fuera de pista.",
            "Actualmente corredor de la categoría 4T de ACES y apoyando el automovilismo deportivo junto a su padre que es pilar de su carrera como piloto de kartismo y circuito.",
        ],
        stats: [
            { label: "Inicio internacional", value: "12 años" },
            { label: "Auto circuito", value: "VW MK1" },
            { label: "Categoría actual", value: "4T ACES" },
        ],
        image: PLACEHOLDER,
    },
];

export const FEATURED_PILOT_SLUGS = [ //Exporta para mostrarlos en el home
    "roberto-mendoza",
    "eduardo-parker",
    "jose-flores",
];

export function getPilotBySlug(
    slug: string
): PilotProfileContent | undefined {
    return PILOTS.find((p) => p.slug === slug);
}
