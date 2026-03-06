"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { Achievement } from "@/types/content";
import { AchievementModal } from "@/components/domain/AchievementModal";

interface AchievementsCarouselProps {
    achievements: Achievement[];
}

export function AchievementsCarousel({ achievements }: AchievementsCarouselProps) {
    const [selected, setSelected] = useState<Achievement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollToIndex = useCallback((index: number) => {
        if (!scrollRef.current) return;
        const children = scrollRef.current.children;
        if (children[index]) {
            (children[index] as HTMLElement).scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
            });
        }
        setCurrentIndex(index);
    }, []);

    function handlePrev() {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : achievements.length - 1;
        scrollToIndex(newIndex);
    }

    function handleNext() {
        const newIndex = currentIndex < achievements.length - 1 ? currentIndex + 1 : 0;
        scrollToIndex(newIndex);
    }

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape" && selected) {
                setSelected(null);
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [selected]);

    return (
        <>
            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                    style={{ scrollbarWidth: "none" }}
                >
                    {achievements.map((achievement, i) => (
                        <button
                            key={achievement.id}
                            onClick={() => setSelected(achievement)}
                            className="group flex-shrink-0 w-80 snap-start bg-white border border-brand-gray-border p-6 text-left hover:border-brand-red transition-colors duration-200 cursor-pointer"
                        >
                            <div className="mb-3 flex items-center justify-between">
                                <span className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light">
                                    {achievement.category}
                                </span>
                                <span className="font-display font-black text-2xl text-brand-gray-border group-hover:text-brand-red transition-colors">
                                    {achievement.year}
                                </span>
                            </div>
                            <h3 className="font-display font-bold text-lg uppercase text-brand-black group-hover:text-brand-red transition-colors mb-3 leading-tight">
                                {achievement.title}
                            </h3>
                            <p className="text-sm text-brand-gray-mid leading-relaxed line-clamp-3">
                                {achievement.summary}
                            </p>
                            <span className="inline-block mt-4 font-mono text-2xs uppercase tracking-widest text-brand-red">
                                Ver más →
                            </span>
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 border border-brand-gray-border flex items-center justify-center hover:border-brand-red hover:text-brand-red transition-colors"
                        aria-label="Anterior"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="flex gap-2">
                        {achievements.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToIndex(i)}
                                className={`w-2 h-2 transition-colors duration-200 ${i === currentIndex ? "bg-brand-red" : "bg-brand-gray-border hover:bg-brand-gray-light"
                                    }`}
                                aria-label={`Ir a logro ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-10 h-10 border border-brand-gray-border flex items-center justify-center hover:border-brand-red hover:text-brand-red transition-colors"
                        aria-label="Siguiente"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <AchievementModal
                achievement={selected}
                onClose={() => setSelected(null)}
            />
        </>
    );
}
