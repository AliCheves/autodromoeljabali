"use client";

import { useState } from "react";
import { ESCUELAS } from "@/config/escuelas";

export function SchoolInterestForm() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = data.get("name") as string;
        const email = data.get("email") as string;
        const school = data.get("school") as string;

        const subject = encodeURIComponent(`Interés Escuela - ${school} - ${name}`);
        const body = encodeURIComponent(
            `Nombre: ${name}\nCorreo: ${email}\nEscuela: ${school}`
        );
        window.location.href = `mailto:escuelas@autodromojabali.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="bg-white border border-brand-gray-border p-8 text-center">
                <div className="w-12 h-12 bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
                <h3 className="font-display font-bold text-xl uppercase text-brand-black mb-2">
                    ¡Solicitud Enviada!
                </h3>
                <p className="text-sm text-brand-gray-mid">
                    Tu cliente de correo se ha abierto. Nos pondremos en contacto contigo pronto.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white border border-brand-gray-border p-8">
            <h3 className="font-display font-bold text-xl uppercase text-brand-black mb-6">
                Formulario de Interés
            </h3>
            <p className="text-sm text-brand-gray-mid mb-6">
                Selecciona la escuela de tu interés y déjanos tus datos.
            </p>
            <div className="space-y-4">
                <div>
                    <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                        Nombre Completo *
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Tu nombre completo"
                        className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                    />
                </div>
                <div>
                    <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                        Correo Electrónico *
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="tu@ejemplo.com"
                        className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                    />
                </div>
                <div>
                    <label className="font-mono text-2xs uppercase tracking-widest text-brand-gray-light block mb-1.5">
                        Escuela *
                    </label>
                    <select
                        name="school"
                        required
                        className="w-full border border-brand-gray-border px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors bg-white text-brand-gray-mid appearance-none"
                    >
                        <option value="">Selecciona una escuela</option>
                        {ESCUELAS.map((school) => (
                            <option key={school.id} value={school.name}>
                                {school.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn-primary w-full justify-center mt-2">
                    Enviar Solicitud →
                </button>
            </div>
        </form>
    );
}
