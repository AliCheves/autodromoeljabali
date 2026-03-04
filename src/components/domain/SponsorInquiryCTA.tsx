"use client";

import { useState } from "react";
import { sendContactEmail } from "@/lib/server/actions/sendContactEmail";
import { SPONSOR_INQUIRY_CONTENT } from "@/config/content/home";

export function SponsorInquiryCTA() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const content = SPONSOR_INQUIRY_CONTENT;

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");

        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;

        const formData = new FormData();
        formData.set("name", name);
        formData.set("email", email);
        formData.set("interest", "Patrocinio Élite");
        formData.set("message", "Solicitud de patrocinio élite recibida desde la landing page.");

        const result = await sendContactEmail(formData);

        if (result.success) {
            setStatus("success");
            form.reset();
        } else {
            setStatus("error");
            setErrorMsg(result.error || "Error desconocido.");
        }
    }

    return (
        <div className="bg-brand-black border-t border-brand-gray">
            <div className="container-xl py-4 text-center">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center gap-2 text-sm text-brand-gray-light hover:text-white transition-colors duration-200 group"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red group-hover:scale-125 transition-transform" />
                    {content.buttonLabel}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[600px] opacity-100 mt-6" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="max-w-lg mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sm:p-8">
                        <p className="text-brand-gray-light text-sm leading-relaxed mb-6">
                            {content.description}
                        </p>

                        {status === "success" ? (
                            <div className="py-4 text-center">
                                <div className="w-10 h-10 bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <p className="text-white text-sm font-bold">
                                    {content.successMessage}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div>
                                    <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5 text-left">
                                        {content.formLabels.nameOrBrand} *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm rounded focus:outline-none focus:border-brand-red transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5 text-left">
                                        {content.formLabels.email} *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm rounded focus:outline-none focus:border-brand-red transition-colors"
                                    />
                                </div>
                                {status === "error" && (
                                    <p className="text-sm text-red-400">{errorMsg}</p>
                                )}
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="btn-primary w-full justify-center disabled:opacity-50 text-sm"
                                >
                                    {status === "sending" ? "Enviando..." : content.submitLabel}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
