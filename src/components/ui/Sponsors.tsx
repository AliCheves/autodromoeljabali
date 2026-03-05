"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import type { Sponsor } from "@/config/sponsors";

interface SponsorsBandProps {
  sponsors: Sponsor[];
  className?: string;
  dark?: boolean;
  label?: string;
}

export function SponsorsBand({
  sponsors,
  className,
  dark = false,
  label,
}: SponsorsBandProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(3);

  const measure = useCallback(() => {
    const container = containerRef.current;
    const set = setRef.current;
    if (!container || !set || sponsors.length === 0) return;

    const containerW = container.offsetWidth;
    const setW = set.scrollWidth;

    if (setW > 0) {
      const needed = Math.ceil((containerW * 2) / setW) + 1;
      setCopies(Math.max(3, needed));
    }
  }, [sponsors.length]);

  useEffect(() => {
    measure();
    const frame = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const renderLogo = (sponsor: Sponsor, key: string) => {
    const logo = (
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={160}
        height={48}
        className={clsx(
          "h-10 sm:h-12 w-auto object-contain",
          "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 motion-reduce:transition-none",
          "max-sm:grayscale-0 max-sm:opacity-80"
        )}
      />
    );

    return (
      <div key={key} className="flex-shrink-0 flex items-center px-8">
        {sponsor.url ? (
          <Link
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar ${sponsor.name}`}
          >
            {logo}
          </Link>
        ) : (
          logo
        )}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "overflow-hidden border-y",
        dark
          ? "bg-brand-black border-brand-gray"
          : "bg-brand-gray-dark border-brand-gray",
        className
      )}
    >
      {label && (
        <p className="font-mono text-2xs uppercase tracking-widest text-center pt-6 pb-2 text-brand-gray-light">
          {label}
        </p>
      )}
      <div ref={containerRef} className="py-10 overflow-hidden">
        <div
          className="flex w-max animate-marquee will-change-transform motion-reduce:animate-none"
          style={{
            backfaceVisibility: "hidden",
            perspective: 1000,
          }}
        >
          {Array.from({ length: copies }).map((_, copyIdx) => (
            <div
              key={copyIdx}
              ref={copyIdx === 0 ? setRef : undefined}
              className="flex flex-shrink-0"
            >
              {sponsors.map((s, i) => renderLogo(s, `${copyIdx}-${i}`))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
