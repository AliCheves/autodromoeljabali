export type Driver = {
  id: string;
  name: string;
  team: string;
  country: string;
  slug?: string;
  image?: string;
  number?: string;
  subtitle?: string;
};
// ============================================================
// SHARED TYPES — Phase 1 MVP
// These will map to Supabase table schemas in Phase 2
// ============================================================

export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

export type KartingCategory = "cadete" | "junior" | "senior" | "master";

export type EventStatus = "upcoming" | "open" | "closed" | "past";

export type TrendDirection = "up" | "down" | "stable";

export type DisciplineType = "karting" | "circuito" | "motocross";

export interface Discipline {
  id: DisciplineType;
  name: string;
  description: string;
  icon?: React.ReactNode;
}

// Future auth user shape (Supabase)
export interface AuthUser {
  id: string;
  email: string;
  role: "pilot" | "admin" | "staff";
  driverId?: string;
}

export * from "./content";
