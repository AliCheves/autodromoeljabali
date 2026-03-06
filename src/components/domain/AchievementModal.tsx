"use client";

import { useState } from "react";
import type { Achievement } from "@/types/content";

interface AchievementModalProps {
    achievement: Achievement | null;
    onClose: () => void;
}

export function AchievementModal({ achievement, onClose }: AchievementModalProps) {
    if (!achievement) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm" />
            <div
                className="relative bg-white max-w-lg w-full p-8 shadow-2xl animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-brand-gray-mid hover:text-brand-red transition-colors"
                    aria-label="Cerrar"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="mb-4">
                    <span className="font-mono text-2xs uppercase tracking-widest text-brand-red">
                        {achievement.category} · {achievement.year}
                    </span>
                </div>

                <h3 className="font-display font-black text-heading-md text-brand-black mb-4">
                    {achievement.title}
                </h3>

                <p className="text-brand-gray-mid leading-relaxed">
                    {achievement.description}
                </p>
            </div>
        </div>
    );
}
