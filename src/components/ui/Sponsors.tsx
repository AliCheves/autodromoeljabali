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

function useMarqueeDuplication(
  containerRef: React.RefObject<HTMLDivElement | null>,
  trackRef: React.RefObject<HTMLDivElement | null>,
  itemCount: number
) {
  const [copies, setCopies] = useState(2);

  const measure = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track || itemCount === 0) return;

    const containerWidth = container.offsetWidth;
    const trackChildren = track.children;
    let singleSetWidth = 0;

    for (let i = 0; i < itemCount; i++) {
      if (trackChildren[i]) {
        singleSetWidth += (trackChildren[i] as HTMLElement).offsetWidth;
      }
    }

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    singleSetWidth += gap * (itemCount - 1);

    const needed = Math.max(2, Math.ceil((containerWidth * 2) / singleSetWidth));
    setCopies(needed);
  }, [containerRef, trackRef, itemCount]);

  useEffect(() => {
    measure();

    let timeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(measure, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, [measure]);

  return copies;
}

export function SponsorsBand({
  sponsors,
  className,
  dark = false,
  label,
}: SponsorsBandProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const copies = useMarqueeDuplication(containerRef, trackRef, sponsors.length);

  const extendedSponsors: Sponsor[] = [];
  for (let c = 0; c < copies; c++) {
    for (const s of sponsors) {
      extendedSponsors.push(s);
    }
  }

  const renderSponsors = (keyPrefix: string) =>
    extendedSponsors.map((sponsor, i) => {
      const logo = (
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={160}
          height={48}
          className={clsx(
            "h-10 sm:h-12 w-auto object-contain",
            "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 motion-reduce:transition-none",
            "sm:grayscale sm:opacity-60 sm:hover:grayscale-0 sm:hover:opacity-100",
            "max-sm:grayscale-0 max-sm:opacity-80"
          )}
        />
      );

      return (
        <div
          key={`${keyPrefix}-${i}`}
          className="flex-shrink-0 flex items-center"
        >
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
    });

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
          ref={trackRef}
          className="flex w-max gap-16 animate-marquee motion-reduce:animate-none will-change-transform"
          style={{ transform: "translate3d(0, 0, 0)" }}
        >
          {renderSponsors("a")}
          {renderSponsors("b")}
        </div>
      </div>
    </div>
  );
}
