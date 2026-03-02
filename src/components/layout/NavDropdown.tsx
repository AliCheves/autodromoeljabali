"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import type { NavLink } from "@/types";

interface NavDropdownProps {
    item: NavLink;
}

export function NavDropdown({ item }: NavDropdownProps) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const isActive =
        pathname === item.href || pathname.startsWith(item.href + "/");

    function handleEnter() {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
    }

    function handleLeave() {
        timeoutRef.current = setTimeout(() => setOpen(false), 150);
    }

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <li
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <Link
                href={item.href}
                className={clsx(
                    "font-body text-xs uppercase tracking-widest font-semibold transition-colors duration-200 relative group flex items-center gap-1",
                    isActive
                        ? "text-brand-red"
                        : "text-brand-gray-dark hover:text-brand-red"
                )}
            >
                {item.label}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={clsx(
                        "w-3 h-3 transition-transform duration-200",
                        open && "rotate-180"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span
                    className={clsx(
                        "absolute -bottom-1 left-0 h-px bg-brand-red transition-all duration-200",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                />
            </Link>

            <div
                className={clsx(
                    "absolute top-full left-0 mt-2 min-w-48 bg-white border border-brand-gray-border shadow-lg transition-all duration-200",
                    open
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                )}
            >
                <ul className="py-2">
                    {item.children?.map((child) => (
                        <li key={child.href}>
                            <Link
                                href={child.href}
                                className={clsx(
                                    "block px-5 py-2.5 text-xs uppercase tracking-widest font-body transition-colors duration-150",
                                    pathname === child.href
                                        ? "text-brand-red bg-brand-gray-bg"
                                        : "text-brand-gray-dark hover:text-brand-red hover:bg-brand-gray-bg"
                                )}
                            >
                                {child.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
}
