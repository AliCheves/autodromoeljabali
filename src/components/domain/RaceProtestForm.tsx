"use client";

import { useState } from "react";
import { sendRaceProtestEmail } from "@/lib/server/actions/sendRaceProtestEmail";

export function RaceProtestForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const result = await sendRaceProtestEmail(formData);

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
            <div className="bg-white border border-brand-gray-border p-8 text-center max-w-2xl mx-auto">
                <div className="w-12 h-12 bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
                <h3 className="font-display font-bold text-xl uppercase text-brand-black mb-2">
                    Protesta Enviada
                </h3>
                <p className="text-sm text-brand-gray-mid">
                    Tu protesta oficial ha sido registrada y enviada a la Comisión Deportiva. Recibirás una respuesta en las próximas 48 horas.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white border border-brand-gray-border p-8 max-w-2xl mx-auto">
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <h3 className="font-display font-bold text-xl uppercase text-brand-black mb-2">
                Formulario de Protesta Oficial
            </h3>
            <p className="text-sm text-brand-gray-mid mb-8">
                Complete todos los campos obligatorios. Esta protesta será enviada directamente a la Comisión Deportiva para su evaluación.
            </p>

            <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                            Nombre del Piloto *
                        </label>
                        <input
                            type="text"
                            name="driverName"
                            required
                            placeholder="Tu nombre completo"
                            className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                        />
                    </div>
                    <div>
                        <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                            Número de Auto
                        </label>
                        <input
                            type="text"
                            name="driverNumber"
                            placeholder="Ej: 42"
                            className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                            Piloto Incidentado *
                        </label>
                        <input
                            type="text"
                            name="opponentName"
                            required
                            placeholder="Nombre del otro piloto"
                            className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                        />
                    </div>
                    <div>
                        <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                            Número de Auto Contrario
                        </label>
                        <input
                            type="text"
                            name="opponentNumber"
                            placeholder="Ej: 17"
                            className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                        Fecha del Incidente *
                    </label>
                    <input
                        type="date"
                        name="incidentDate"
                        required
                        className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                    />
                </div>

                <div>
                    <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                        Descripción Detallada del Incidente *
                    </label>
                    <textarea
                        name="description"
                        required
                        rows={6}
                        placeholder="Describe con detalle lo que ocurrió durante la carrera..."
                        className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"
                    />
                </div>

                <div className="border-t border-brand-gray-border pt-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="accepted"
                            value="true"
                            required
                            className="mt-0.5 w-4 h-4 accent-brand-red flex-shrink-0"
                        />
                        <span className="text-sm text-brand-gray-mid leading-relaxed">
                            Declaro que la información proporcionada es veraz y reconozco
                            que esta protesta constituye un documento oficial ante la Comisión
                            Deportiva del Autódromo Internacional El Jabalí.
                        </span>
                    </label>
                </div>

                {status === "error" && (
                    <p className="text-sm text-red-600">{errorMsg}</p>
                )}

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center disabled:opacity-50"
                >
                    {status === "sending" ? "Enviando..." : "Enviar Protesta Oficial"}
                </button>
            </div>
        </form>
    );
}
