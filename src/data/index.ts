// ============================================================
// DATA BARREL — Re-exports from config/content/
// Preserves backward compatibility for all existing imports.
// In Phase 3, these will be replaced with Supabase queries.
// ============================================================

export { PILOTS, getPilotBySlug, FEATURED_PILOT_SLUGS } from "@/config/content/pilotos";
export { KARTING_CLASSES, RACE_EVENTS, STANDINGS } from "@/config/content/karting";
export { INSTITUTION_STATS, HOME_CALENDAR } from "@/config/content/home";

export type { RaceResult, KartingClass, RaceEvent, StandingsEntry } from "@/types/content";
