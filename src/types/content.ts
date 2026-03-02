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

export interface StatItem {
    value: string;
    label: string;
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
