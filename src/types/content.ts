// ============================================================
// CONTENT TYPES — Phase 2
// Pure type definitions for all content structures.
// These will map 1:1 to Supabase table schemas in Phase 3.
// ============================================================

// ------------------------------------
// Reusable building blocks
// ------------------------------------

export interface HeroContent {
    label: string;
    title: string;
    titleAccent: string;
    description: string;
    image?: string;
}

export interface ContentSection {
    title: string;
    description: string;
    image?: string;
}

export interface ImageSet {
    [key: string]: string;
}

// ------------------------------------
// Institution domain
// ------------------------------------

export interface VoluntariadoContent {
    hero: HeroContent;
    sections: ContentSection[];
    benefits: string[];
    images: ImageSet;
}

export interface School {
    id: string;
    name: string;
    tagline: string;
    description: string;
    features: string[];
    ctaLabel: string;
    ctaHref: string;
    image: string;
}

export interface Achievement {
    id: string;
    title: string;
    year: string;
    summary: string;
    description: string;
    category: string;
    image: string;
}

export interface PremiadoFia {
    id: string;
    name: string;
    title: string;
    year: string;
    discipline: string;
    image: string;
}

// ------------------------------------
// Events domain
// ------------------------------------

export interface PricingTier {
    type: string;
    price: string;
    description: string;
    includes: string[];
}

export interface NochesContent {
    hero: HeroContent;
    description: string;
    highlights: string[];
    pricing: PricingTier[];
    ctaLabel: string;
    ctaHref: string;
    schedule: string;
    images: ImageSet;
}

// ------------------------------------
// Structured event types (Phase 3)
// ------------------------------------

export interface EventDate {
    day: string;
    month: string;
    year?: number;
    sponsor?: string;
}

export interface EventPrize {
    place: string;
    amount: string;
}

export interface EventScheduleSlot {
    day: string;
    startTime: string;
    endTime: string;
}

export interface RegistrationInfo {
    totalSlots: number;
    requirements: string[];
    contactPhones: string[];
    engineNote?: string;
}

export interface PressConference {
    venue: string;
    date: string;
    time: string;
}

export interface EventDayCalendar {
    day: string;
    timeRange: string;
    dates: EventDate[];
}

export interface ChampionshipContent {
    meta: PageMeta;
    hero: HeroContent;
    organizer: string;
    rounds: EventDate[];
    prizes: EventPrize[];
    description: string;
    ctaLabel: string;
    ctaHref: string;
    registration?: RegistrationInfo;
    pressConference?: PressConference;
    sponsors?: string[];
}

export interface CalendarSeasonContent {
    meta: PageMeta;
    hero: HeroContent;
    season: number;
    rounds: EventDate[];
    description: string;
    ctaLabel: string;
    ctaHref: string;
    sponsors?: string[];
    disclaimer?: string;
}

export interface RentalExperienceContent {
    meta: PageMeta;
    hero: HeroContent;
    schedule: EventScheduleSlot[];
    pricing: PricingTier[];
    description: string;
    highlights: string[];
    ctaLabel: string;
    ctaHref: string;
    calendars?: EventDayCalendar[];
    poweredBy?: string;
    sponsors?: string[];
}

// ------------------------------------
// Leadership / structure domain
// ------------------------------------

export interface LeadershipMember {
    name: string;
    role: string;
    image?: string;
}

export interface LeadershipSectionContent {
    meta: PageMeta;
    hero: HeroContent;
    members: LeadershipMember[];
}

// ------------------------------------
// Karting domain
// ------------------------------------

export interface KartingClass {
    id: string;
    name: string;
    ageMin: number;
    ageMax: number | null;
    engine: string;
    description: string;
}

export interface RaceEvent {
    id: string;
    name: string;
    date: string;
    time: string;
    circuit: string;
    category: string;
    status: "upcoming" | "open" | "closed" | "past";
    distance: string;
}

export interface StandingsEntry {
    position: number;
    driver: string;
    team: string;
    points: number;
    wins: number;
    podiums: number;
    trend?: "up" | "down" | "stable";
}

// ------------------------------------
// Drivers domain
// ------------------------------------

export interface RaceResult {
    round: string;
    date: string;
    circuit: string;
    grid: string;
    position: string;
    points: number;
    fastestLap?: boolean;
    victory?: boolean;
}

export interface DriverProfile {
    id: string;
    slug: string;
    name: string;
    firstName: string;
    lastName: string;
    number: number;
    nationality: string;
    team: string;
    teamColor?: string;
    birthDate: string;
    birthPlace: string;
    careerStart: number;
    position: number;
    points: number;
    wins: number;
    podiums: number;
    races: number;
    polePositions: number;
    bio: string;
    achievements: string[];
    image: string;
    sponsors: {
        main: string[];
        official: string[];
        technical: string[];
    };
    recentResults: RaceResult[];
}

// ------------------------------------
// Home / general
// ------------------------------------

export type PilotDiscipline =
    | "Karting"
    | "Circuito"
    | "Aceleración"
    | "Motorsport"
    | "SimRacing"
    | "Tuning"
    | "Otros";

export interface PilotStatItem {
    label: string;
    value: string;
}

export interface PilotProfileContent {
    meta: PageMeta;
    slug: string;
    name: string;
    firstName: string;
    lastName: string;
    disciplines: PilotDiscipline[];
    highlights: string[];
    bio: string[];
    stats: PilotStatItem[];
    image: string;
    actionImage?: string;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface NarrativeSection {
    title: string;
    paragraphs: string[];
}

export interface GalleryImage {
    src: string;
    alt: string;
}

export interface LegadoCompetitivoContent {
    meta: PageMeta;
    hero: HeroContent;
    sections: NarrativeSection[];
    gallery: GalleryImage[];
}

export interface CalendarEvent {
    day: string;
    month: string;
    label: string;
    name: string;
    circuit: string;
    time: string;
}

// ------------------------------------
// Page-level content wrapper
// ------------------------------------

export interface PageMeta {
    title: string;
    description: string;
}
