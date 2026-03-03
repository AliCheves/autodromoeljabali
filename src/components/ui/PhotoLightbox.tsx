"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface PhotoLightboxProps {
    isOpen: boolean;
    onClose: () => void;
    src: string;
    alt: string;
    title?: string;
    subtitle?: string;
}

export function PhotoLightbox({
    isOpen,
    onClose,
    src,
    alt,
    title,
    subtitle,
}: PhotoLightboxProps) {
    const panelRef = useRef<HTMLDivElement>(null);

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
        panelRef.current?.focus();
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200 motion-reduce:animate-none"
            onClick={onClose}
            role="presentation"
        >
            <div className="absolute inset-0 bg-black/60" />

            <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-label={title ? `Foto de ${title}` : "Vista ampliada"}
                tabIndex={-1}
                className="relative z-10 flex flex-col items-center gap-4 p-6 sm:p-8 bg-white rounded-lg shadow-xl max-w-sm w-full animate-in zoom-in-95 duration-200 motion-reduce:animate-none"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar"
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-brand-gray-mid hover:text-brand-black hover:bg-brand-gray-bg transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
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

                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-brand-gray-border flex-shrink-0">
                    <Image
                        src={src}
                        alt={alt}
                        width={256}
                        height={256}
                        className="w-full h-full object-cover"
                    />
                </div>

                {(title || subtitle) && (
                    <div className="text-center">
                        {title && (
                            <h3 className="font-display font-black text-lg uppercase text-brand-black">
                                {title}
                            </h3>
                        )}
                        {subtitle && (
                            <p className="font-mono text-2xs uppercase tracking-widest text-brand-red mt-1">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
