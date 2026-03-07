"use client";

import { useState } from "react";
import { NEWSLETTER_CONTENT } from "@/config/content/newsletter";
import { EventHero } from "@/components/sections/EventHero";
import { Section } from "@/components/ui/Section";
import { clsx } from "clsx";

export default function NewsletterPageClient() {
    const { hero, form } = NEWSLETTER_CONTENT;

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
        };

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || "Ocurrió un error inesperado.");
            }

            setStatus("success");
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err: unknown) {
            setStatus("error");
            setErrorMessage(err instanceof Error ? err.message : "Error de red.");
        }
    }

    return (
        <>
            <EventHero
                label={hero.label}
                title={hero.title}
                titleAccent={hero.titleAccent}
                description={hero.description}
                image={hero.image || "/images/placeholders/placeholder.svg"}
            />

            <Section className="bg-brand-gray-bg">
                <div className="container-xl max-w-3xl border border-brand-gray-border bg-white overflow-hidden shadow-sm">
                    {status === "success" ? (
                        <div className="p-12 md:p-20 text-center flex flex-col items-center justify-center min-h-[400px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-green-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h2 className="font-display font-black text-heading-md text-brand-black uppercase mb-4">
                                {form.successTitle}
                            </h2>
                            <p className="text-brand-gray-mid text-lg max-w-md">
                                {form.successMessage}
                            </p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="btn-secondary mt-10 px-8"
                            >
                                Registrar otro correo
                            </button>
                        </div>
                    ) : (
                        <div className="p-8 md:p-14">
                            <div className="mb-10 text-center">
                                <h2 className="font-display font-black text-3xl uppercase text-brand-black">{form.title}</h2>
                                <p className="mt-2 text-brand-gray-mid">{form.description}</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="font-display font-bold text-sm tracking-widest uppercase text-brand-gray-dark block">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            disabled={status === "loading"}
                                            className="w-full bg-brand-gray-bg border border-brand-gray-border px-4 py-3 text-brand-black focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors disabled:opacity-50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="font-display font-bold text-sm tracking-widest uppercase text-brand-gray-dark block">
                                            Apellido <span className="text-brand-gray-light font-normal text-xs normal-case tracking-normal">(Opcional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            disabled={status === "loading"}
                                            className="w-full bg-brand-gray-bg border border-brand-gray-border px-4 py-3 text-brand-black focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="font-display font-bold text-sm tracking-widest uppercase text-brand-gray-dark block">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        disabled={status === "loading"}
                                        className="w-full bg-brand-gray-bg border border-brand-gray-border px-4 py-3 text-brand-black focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors disabled:opacity-50"
                                    />
                                </div>

                                {status === "error" && (
                                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 text-sm flex items-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0 mt-0.5">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>
                                        <p>{errorMessage}</p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className={clsx(
                                        "btn-primary w-full justify-center text-lg py-4 mt-8",
                                        status === "loading" && "opacity-70 cursor-not-allowed"
                                    )}
                                >
                                    {status === "loading" ? "Procesando..." : "Suscribirse"}
                                </button>

                                <p className="text-center text-xs text-brand-gray-light mt-4">
                                    Puedes darte de baja en cualquier momento. Respetamos tu privacidad.
                                </p>
                            </form>
                        </div>
                    )}
                </div>
            </Section>
        </>
    );
}
