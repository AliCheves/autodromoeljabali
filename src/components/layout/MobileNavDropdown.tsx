"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import type { NavLink } from "@/types";

interface MobileNavDropdownProps {
    item: NavLink;
    index: number;
    isMenuOpen: boolean;
}

export function MobileNavDropdown({ item, index, isMenuOpen }: MobileNavDropdownProps) {
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname();

    return (
        <div
            className={clsx(
                "border-b border-brand-gray-border",
                isMenuOpen ? "animate-fade-up" : ""
            )}
            style={{ animationDelay: `${index * 60}ms`, animationFillMode: "both" }}
        >
            <div className="flex items-center justify-between">
                <Link
                    href={item.href}
                    className={clsx(
                        "font-display font-bold text-3xl uppercase tracking-wide pb-4 pt-4 transition-colors flex-1",
                        "hover:text-brand-red",
                        pathname === item.href || pathname.startsWith(item.href + "/")
                            ? "text-brand-red"
                            : ""
                    )}
                >
                    {item.label}
                </Link>
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="p-4 text-brand-gray-mid hover:text-brand-red transition-colors"
                    aria-label={`Expandir ${item.label}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={clsx(
                            "w-5 h-5 transition-transform duration-200",
                            expanded && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            <div
                className={clsx(
                    "overflow-hidden transition-all duration-300",
                    expanded ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
                )}
            >
                <div className="pl-4 space-y-3">
                    {item.children?.map((child) => (
                        <Link
                            key={child.href}
                            href={child.href}
                            className={clsx(
                                "block font-body text-lg uppercase tracking-wide transition-colors",
                                pathname === child.href
                                    ? "text-brand-red"
                                    : "text-brand-gray-mid hover:text-brand-red"
                            )}
                        >
                            {child.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
