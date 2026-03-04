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
  const doubled = [...sponsors, ...sponsors];

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
      <div className="py-10 flex overflow-hidden">
        <div className="flex animate-marquee motion-reduce:animate-none">
          {doubled.map((sponsor, i) => {
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
                key={i}
                className="flex-shrink-0 px-8 flex items-center"
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
          })}
        </div>
      </div>
    </div>
  );
}
