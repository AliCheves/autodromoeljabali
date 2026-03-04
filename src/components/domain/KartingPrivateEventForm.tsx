"use client";

import { useState } from "react";
import { sendContactEmail } from "@/lib/server/actions/sendContactEmail";
import { KARTING_PRIVATE_EVENTS_CONTENT } from "@/config/content/karting/kartingPrivateEvents";

export function KartingPrivateEventForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const content = KARTING_PRIVATE_EVENTS_CONTENT;

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");

        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;

        const formData = new FormData();
        formData.set("name", name);
        formData.set("email", email);
        formData.set("interest", "Evento Privado de Kartismo");
        formData.set("message", `Teléfono: ${phone}\n\nSolicitud de evento privado de kartismo.`);

        const result = await sendContactEmail(formData);

        if (result.success) {
            setStatus("success");
            form.reset();
        } else {
            setStatus("error");
            setErrorMsg(result.error || "Error desconocido.");
        }
    }

    if (status === "success") {
        return (
            <div className="bg-white border border-brand-gray-border p-8 text-center rounded-lg">
                <div className="w-12 h-12 bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
                <h3 className="font-display font-bold text-xl uppercase text-brand-black mb-2">
                    {content.successTitle}
                </h3>
                <p className="text-sm text-brand-gray-mid">
                    {content.successMessage}
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div>
                    <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                        Nombre *
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors rounded"
                    />
                </div>
                <div>
                    <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                        Correo electrónico *
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors rounded"
                    />
                </div>
                <div>
                    <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                        Teléfono *
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors rounded"
                    />
                </div>
                {status === "error" && (
                    <p className="text-sm text-red-600">{errorMsg}</p>
                )}
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center disabled:opacity-50"
                >
                    {status === "sending" ? "Enviando..." : content.submitLabel}
                </button>
            </div>
        </form>
    );
}
