"use client";

import { clsx } from "clsx";
import { defaultSponsors, sponsorCategories } from "@/config/sponsors";

interface SponsorsBandProps {
  sponsors?: string[];
  className?: string;
  dark?: boolean;
  label?: string;
}

export function SponsorsBand({
  sponsors = defaultSponsors,
  className,
  dark = false,
  label,
}: SponsorsBandProps) {
  // Duplicate for seamless loop
  const doubled = [...sponsors, ...sponsors];

  return (
    <div
      className={clsx(
        "overflow-hidden border-y",
        dark
          ? "bg-brand-black border-brand-gray"
          : "bg-brand-gray-bg border-brand-gray-border",
        className
      )}
    >
      {label && (
        <p
          className={clsx(
            "font-mono text-2xs uppercase tracking-widest text-center pt-6 pb-2",
            dark ? "text-brand-gray-light" : "text-brand-gray-light"
          )}
        >
          {label}
        </p>
      )}
      <div className="marquee-track py-5 flex">
        <div className="marquee-content flex animate-marquee">
          {doubled.map((sponsor, i) => (
            <span key={i} className="sponsor-item flex items-center gap-8">
              {sponsor}
              <span
                className={clsx(
                  "inline-block w-1 h-1 rounded-full",
                  dark ? "bg-brand-red" : "bg-brand-red"
                )}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface SponsorGridProps {
  mainSponsors?: string[];
  officialSponsors?: string[];
  technicalPartners?: string[];
}

export function SponsorGrid({
  mainSponsors = sponsorCategories.main,
  officialSponsors = sponsorCategories.official,
  technicalPartners = sponsorCategories.technical,
}: SponsorGridProps) {
  return (
    <div className="space-y-8">
      {/* Main sponsors */}
      <div>
        <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-4">
          Patrocinadores Principales
        </p>
        <div className="grid grid-cols-2 gap-4">
          {mainSponsors.map((s) => (
            <div
              key={s}
              className="border border-brand-gray-border flex items-center justify-center py-6 px-8 hover:border-brand-red transition-colors duration-200"
            >
              <span className="font-display font-bold text-lg uppercase tracking-widest text-brand-gray hover:text-brand-red transition-colors">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Official sponsors */}
      <div>
        <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-4">
          Patrocinadores Oficiales
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {officialSponsors.map((s) => (
            <div
              key={s}
              className="border border-brand-gray-border flex items-center justify-center py-4 px-4 hover:border-brand-red transition-colors duration-200"
            >
              <span className="font-display font-bold text-sm uppercase tracking-widest text-brand-gray-mid hover:text-brand-red transition-colors text-center">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Technical partners */}
      <div>
        <p className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light mb-4">
          Socios Técnicos
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {technicalPartners.map((s) => (
            <span
              key={s}
              className="font-display font-bold text-sm uppercase tracking-widest text-brand-gray-light hover:text-brand-red transition-colors cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
