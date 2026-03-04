"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface ImageLightboxProps {
    isOpen: boolean;
    onClose: () => void;
    src: string;
    alt: string;
}

export function ImageLightbox({ isOpen, onClose, src, alt }: ImageLightboxProps) {
    const dialogRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (!isOpen) return;
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        dialogRef.current?.focus();
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in motion-reduce:animate-none"
            onClick={onClose}
            role="presentation"
        >
            <div className="absolute inset-0 bg-black/90" />

            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label={alt || "Vista ampliada"}
                tabIndex={-1}
                className="relative z-10 flex items-center justify-center w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar"
                    className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="relative w-full max-h-[80vh]">
                    <Image
                        src={src}
                        alt={alt}
                        width={1200}
                        height={800}
                        className="w-full h-auto max-h-[80vh] object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
                    />
                </div>
            </div>
        </div>
    );
}
