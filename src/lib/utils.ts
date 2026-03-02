import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge for safe Tailwind class merging.
 * Use instead of clsx wherever Tailwind classes are involved.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string to a readable format.
 */
export function formatDate(dateStr: string): string {
  return dateStr;
}

/**
 * Return ordinal suffix for a number (1st, 2nd, 3rd...)
 */
export function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
