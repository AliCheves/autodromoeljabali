import type { DriverProfile, RaceResult } from "@/types/content";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";

export const DRIVERS: DriverProfile[] = [
    {
        id: "1",
        slug: "carlos-vega",
        name: "Carlos Vega",
        firstName: "Carlos",
        lastName: "Vega",
        number: 1,
        nationality: "El Salvador",
        team: "Team Red Bull Racing",
        teamColor: "#C8102E",
        birthDate: "15 de Marzo, 2001",
        birthPlace: "San Salvador, El Salvador",
        careerStart: 2009,
        position: 1,
        points: 245,
        wins: 8,
        podiums: 12,
        races: 15,
        polePositions: 10,
        bio: "Carlos Vega se ha establecido como una de las fuerzas más dominantes en el karting de competición. Nacido y criado en San Salvador, El Salvador, Carlos comenzó su trayectoria en el automovilismo a los 8 años, demostrando rápidamente un talento excepcional y habilidades de competición sobresalientes. Su estilo de conducción agresivo pero calculado, combinado con una capacidad innata para leer situaciones de carrera, le ha valido numerosas victorias y títulos de campeonato. Conocido por su consistencia y fortaleza mental bajo presión, Carlos continúa superando los límites del rendimiento, estableciendo nuevos estándares en el karting competitivo. Su dedicación a la mejora continua y comprensión técnica de la dinámica vehicular lo distingue de sus competidores.",
        achievements: [
            "Líder del Campeonato 2026 - 245 puntos",
            "8 Victorias en la Temporada Actual",
            "Campeón Regional de Karting 2025",
            "10 Pole Positions en 2026",
            "Piloto más joven en ganar el Gran Premio de San Salvador (2023)",
            "Poseedor de Múltiples Récords de Pista",
            "Graduado de la Academia de Karting FIA",
        ],
        image: PLACEHOLDER,
        sponsors: {
            main: ["Red Bull Racing", "Michelin"],
            official: ["Alpinestars", "Bell Helmets", "OMP Racing", "Sparco"],
            technical: ["Motul", "Puma", "Tag Heuer", "Oakley", "Eibach", "Pirelli"],
        },
        recentResults: [
            { round: "R15", date: "14 Feb, 2026", circuit: "Autódromo El Jabalí - Norte", grid: "P2", position: "P1", points: 25, fastestLap: true, victory: true },
            { round: "R14", date: "7 Feb, 2026", circuit: "Circuito Internacional de Karting", grid: "P1", position: "P2", points: 18 },
            { round: "R13", date: "31 Ene, 2026", circuit: "Autódromo El Jabalí - Sur", grid: "P1", position: "P1", points: 25, fastestLap: true, victory: true },
            { round: "R12", date: "24 Ene, 2026", circuit: "Circuito Urbano de San Salvador", grid: "P5", position: "P3", points: 15 },
            { round: "R11", date: "17 Ene, 2026", circuit: "Parque de Karting Centroamericano", grid: "P1", position: "P1", points: 25, fastestLap: true, victory: true },
            { round: "R10", date: "10 Ene, 2026", circuit: "Autódromo El Jabalí - Norte", grid: "P3", position: "P2", points: 18 },
        ],
    },
    {
        id: "2",
        slug: "sofia-martinez",
        name: "Sofía Martínez",
        firstName: "Sofía",
        lastName: "Martínez",
        number: 2,
        nationality: "El Salvador",
        team: "Velocity Racing",
        birthDate: "8 de Junio, 2003",
        birthPlace: "Santa Ana, El Salvador",
        careerStart: 2014,
        position: 2,
        points: 238,
        wins: 7,
        podiums: 11,
        races: 15,
        polePositions: 8,
        bio: "Sofía Martínez es una de las pilotas más talentosas de la región centroamericana. Su precisión técnica y consistencia la han llevado a ser una seria contendiente por el campeonato.",
        achievements: [
            "Segunda en el Campeonato 2026",
            "7 Victorias en la Temporada Actual",
            "Primera piloto femenina en ganar una ronda del campeonato nacional",
        ],
        image: PLACEHOLDER,
        sponsors: {
            main: ["Velocity Racing"],
            official: ["Sparco", "Bell Helmets"],
            technical: ["Motul", "Pirelli"],
        },
        recentResults: [],
    },
];

export function getDriverBySlug(slug: string): DriverProfile | undefined {
    return DRIVERS.find((d) => d.slug === slug);
}
