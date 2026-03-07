"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import type { NavLink } from "@/types";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { MobileNavDropdown } from "@/components/layout/MobileNavDropdown";
import { BrandLogos } from "@/components/layout/BrandLogos";

interface NavbarClientProps {
    links: NavLink[];
}

export function NavbarClient({ links }: NavbarClientProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-gray-border"
                        : "bg-white border-b border-brand-gray-border"
                )}
                style={{ height: "var(--nav-height)" }}
            >
                <nav className="container-xl h-full flex items-center justify-between gap-4 lg:gap-6 xl:gap-8">
                    <Link href="/" className="flex items-center gap-x-4 flex-shrink-0" aria-label="Autódromo Internacional El Jabalí – Inicio">
                        <BrandLogos />
                        <div className="hidden sm:flex flex-col leading-none">
                            <span className="font-display font-black text-sm uppercase tracking-widest text-brand-black">
                                Autódromo Internacional
                            </span>
                            <span className="font-display font-black text-xs uppercase tracking-[0.25em] text-brand-red">
                                El Jabalí
                            </span>
                        </div>
                    </Link>

                    <ul className="hidden lg:flex items-center gap-4 xl:gap-8">
                        {links.map((link) =>
                            link.children && link.children.length > 0 ? (
                                <NavDropdown key={link.href} item={link} />
                            ) : (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={clsx(
                                            "font-body text-xs uppercase tracking-widest font-semibold transition-colors duration-200 relative group",
                                            pathname === link.href ||
                                                pathname.startsWith(link.href + "/")
                                                ? "text-brand-red"
                                                : "text-brand-gray-dark hover:text-brand-red"
                                        )}
                                    >
                                        {link.label}
                                        <span
                                            className={clsx(
                                                "absolute -bottom-1 left-0 h-px bg-brand-red transition-all duration-200",
                                                pathname === link.href
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                            )}
                                        />
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>

                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/noticias/newsletter" className="btn-primary text-xs">
                            Inscríbete
                        </Link>
                    </div>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden flex flex-col gap-1.5 p-2 group"
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                    >
                        <span
                            className={clsx(
                                "block w-6 h-0.5 bg-brand-black transition-all duration-300",
                                mobileOpen && "rotate-45 translate-y-2"
                            )}
                        />
                        <span
                            className={clsx(
                                "block w-4 h-0.5 bg-brand-red transition-all duration-300 ml-auto",
                                mobileOpen && "opacity-0 w-0"
                            )}
                        />
                        <span
                            className={clsx(
                                "block w-6 h-0.5 bg-brand-black transition-all duration-300",
                                mobileOpen && "-rotate-45 -translate-y-2"
                            )}
                        />
                    </button>
                </nav>
            </header>

            <div
                className={clsx(
                    "fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden overflow-y-auto",
                    mobileOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
                style={{ paddingTop: "var(--nav-height)" }}
            >
                <nav className="container-xl py-10 pb-24 flex flex-col gap-2 min-h-max">
                    {links.map((link, i) =>
                        link.children && link.children.length > 0 ? (
                            <MobileNavDropdown
                                key={link.href}
                                item={link}
                                index={i}
                                isMenuOpen={mobileOpen}
                            />
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={clsx(
                                    "font-display font-bold text-3xl uppercase tracking-wide border-b border-brand-gray-border pb-4 pt-4 transition-colors",
                                    "hover:text-brand-red",
                                    mobileOpen ? "animate-fade-up" : ""
                                )}
                                style={{
                                    animationDelay: `${i * 60}ms`,
                                    animationFillMode: "both",
                                }}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                    <Link
                        href="/noticias/newsletter"
                        className="btn-primary mt-4 self-start"
                    >
                        Inscríbete ahora
                    </Link>
                </nav>
            </div>
        </>
    );
}
