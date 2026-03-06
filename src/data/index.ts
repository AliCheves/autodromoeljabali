// ============================================================
// DATA BARREL — Re-exports from config/content/
// Preserves backward compatibility for all existing imports.
// In Phase 3, these will be replaced with Supabase queries.
// ============================================================

export { PILOTS, getPilotBySlug, FEATURED_PILOT_SLUGS } from "@/config/content/pilotos";
export { KARTING_CLASSES, STANDINGS } from "@/config/content/karting";
export { RACE_EVENTS } from "@/config/events";
export { INSTITUTION_STATS, HOME_CALENDAR, LEGADO_SECTION } from "@/config/content/home";

export type { RaceResult, KartingClass, RaceEvent, StandingsEntry } from "@/types/content";
