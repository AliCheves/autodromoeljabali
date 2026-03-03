"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PilotProfileContent } from "@/types/content";
import { DisciplineChips } from "@/components/ui/DisciplineChips";

const PLACEHOLDER = "/images/placeholders/placeholder.svg";
const INTERVAL_MS = 7000;

interface FeaturedPilotsRotatorProps {
    pilots: PilotProfileContent[];
}

export function FeaturedPilotsRotator({ pilots }: FeaturedPilotsRotatorProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const isPaused = useRef(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const reducedMotion = useRef(false);

    useEffect(() => {
        reducedMotion.current = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
    }, []);

    const goTo = useCallback(
        (index: number) => {
            if (index === activeIndex) return;
            if (reducedMotion.current) {
                setActiveIndex(index);
                return;
            }
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveIndex(index);
                setIsTransitioning(false);
            }, 200);
        },
        [activeIndex]
    );

    const next = useCallback(() => {
        goTo((activeIndex + 1) % pilots.length);
    }, [activeIndex, pilots.length, goTo]);

    useEffect(() => {
        if (reducedMotion.current) return;

        const start = () => {
            intervalRef.current = setInterval(() => {
                if (!isPaused.current) next();
            }, INTERVAL_MS);
        };
        start();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [next]);

    const pilot = pilots[activeIndex];
    if (!pilot) return null;

    return (
        <div
            className="relative"
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => (isPaused.current = false)}
            onFocus={() => (isPaused.current = true)}
            onBlur={() => (isPaused.current = false)}
        >
            <div
                className={`relative overflow-hidden shadow-lg min-h-96 transition-opacity duration-200 motion-reduce:transition-none ${isTransitioning ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
                    }`}
            >
                <Image
                    src={pilot.image || PLACEHOLDER}
                    alt={pilot.name}
                    fill
                    className="object-cover brightness-50"
                    sizes="(max-width: 1024px) 100vw, 800px"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="relative z-10 flex flex-col justify-end h-full min-h-96 p-8">
                    <DisciplineChips disciplines={pilot.disciplines} />
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-3 uppercase leading-tight">
                        {pilot.name}
                    </h3>
                    {pilot.highlights.length > 0 && (
                        <p className="font-mono text-2xs uppercase tracking-widest text-brand-red mt-2">
                            {pilot.highlights[0]}
                        </p>
                    )}
                    <Link
                        href={`/pilotos/${pilot.slug}`}
                        className="inline-flex items-center gap-2 mt-4 font-mono text-xs uppercase tracking-widest text-white hover:text-brand-red transition-colors"
                    >
                        Ver Perfil
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Navigation dots */}
            <div className="flex items-center justify-center gap-3 mt-6">
                <button
                    type="button"
                    onClick={() => goTo((activeIndex - 1 + pilots.length) % pilots.length)}
                    aria-label="Piloto anterior"
                    className="w-8 h-8 flex items-center justify-center text-brand-gray-mid hover:text-brand-red transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {pilots.map((p, i) => (
                    <button
                        key={p.slug}
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`Ver ${p.name}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === activeIndex
                                ? "bg-brand-red scale-125"
                                : "bg-brand-gray-border hover:bg-brand-gray-mid"
                            }`}
                    />
                ))}

                <button
                    type="button"
                    onClick={() => goTo((activeIndex + 1) % pilots.length)}
                    aria-label="Piloto siguiente"
                    className="w-8 h-8 flex items-center justify-center text-brand-gray-mid hover:text-brand-red transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
