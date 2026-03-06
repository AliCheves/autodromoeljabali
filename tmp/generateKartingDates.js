const MONTH_MAP = {
    Enero: "01", Febrero: "02", Marzo: "03", Abril: "04",
    Mayo: "05", Junio: "06", Julio: "07", Agosto: "08",
    Septiembre: "09", Octubre: "10", Noviembre: "11", Diciembre: "12",
};

const calendar = [
    {
        title: "VIERNES",
        schedule: "5:00 PM – 12:00 MN",
        category: "Karting Rental",
        circuit: "Autódromo Internacional El Jabalí",
        days: [
            { day: 13, month: "Marzo" }, { day: 27, month: "Marzo" },
            { day: 10, month: "Abril" }, { day: 24, month: "Abril" },
            { day: 8, month: "Mayo" }, { day: 22, month: "Mayo" },
            { day: 12, month: "Junio" }, { day: 26, month: "Junio" },
            { day: 10, month: "Julio" }, { day: 24, month: "Julio" },
            { day: 21, month: "Agosto" }, { day: 28, month: "Agosto" },
            { day: 11, month: "Septiembre" }, { day: 18, month: "Septiembre" },
            { day: 9, month: "Octubre" }, { day: 23, month: "Octubre" },
            { day: 6, month: "Noviembre" }, { day: 27, month: "Noviembre" },
            { day: 11, month: "Diciembre" }, { day: 18, month: "Diciembre" },
        ],
    },
    {
        title: "SÁBADO",
        schedule: "1:00 PM – 12:00 MN",
        category: "Karting Rental",
        circuit: "Autódromo Internacional El Jabalí",
        days: [
            { day: 14, month: "Marzo" }, { day: 28, month: "Marzo" },
            { day: 11, month: "Abril" }, { day: 9, month: "Mayo" },
            { day: 30, month: "Mayo" }, { day: 13, month: "Junio" },
            { day: 27, month: "Junio" }, { day: 18, month: "Julio" },
            { day: 1, month: "Agosto" }, { day: 22, month: "Agosto" },
            { day: 5, month: "Septiembre" }, { day: 19, month: "Septiembre" },
            { day: 3, month: "Octubre" }, { day: 10, month: "Octubre" },
            { day: 7, month: "Noviembre" }, { day: 21, month: "Noviembre" },
            { day: 5, month: "Diciembre" }, { day: 19, month: "Diciembre" },
        ],
    },
];

const mappedEvents = [];
let idCounter = 1;

for (const group of calendar) {
    for (const d of group.days) {
        const monthMatch = MONTH_MAP[d.month];
        const dayMatch = String(d.day).padStart(2, "0");
        const dateStr = `2026-${monthMatch}-${dayMatch}`;
        
        // Define times for Google Calendar params later. Viernes starts at 17, Sabado starts at 13
        const isFriday = group.title === "VIERNES";
        let startHourNum = isFriday ? 17 : 13;
        
        mappedEvents.push({
            id: `karting-rental-${idCounter++}`,
            title: "Karting Rental Experience",
            category: "Karting Rental",
            date: dateStr,
            location: group.circuit,
            time: isFriday ? "5:00 PM - 12:00 MN" : "1:00 PM - 12:00 MN",
            startHour: startHourNum,
            endHour: 23,
            page: "/karting/kartingrentalexperience",
        });
    }
}

console.log(JSON.stringify(mappedEvents, null, 2));
