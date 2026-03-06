import { Resend } from "resend";
import { buildContactEmailHtml, buildProtestEmailHtml } from "./templates";
import { OFFICIAL_CONTACT_INFO } from "@/config/content/contact";

export interface SendEmailResult {
    success: boolean;
    error?: string;
}

export type EmailType = "contact" | "protest";

export interface ContactEmailPayload {
    name: string;
    email: string;
    interest: string;
    message: string;
    subject?: string;
}

export interface ProtestEmailPayload {
    driverName: string;
    driverNumber: string;
    opponentName: string;
    opponentNumber: string;
    incidentDate: string;
    description: string;
    submittedAt: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
    type: "contact",
    payload: ContactEmailPayload
): Promise<SendEmailResult>;
export async function sendEmail(
    type: "protest",
    payload: ProtestEmailPayload
): Promise<SendEmailResult>;
export async function sendEmail(
    type: EmailType,
    payload: any
): Promise<SendEmailResult> {
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    try {
        if (type === "contact") {
            const data = payload as ContactEmailPayload;
            const emailSubject = data.subject || `[Web] ${data.interest} — ${data.name}`;

            await resend.emails.send({
                from: `Autodromo Web <${fromEmail}>`,
                to: OFFICIAL_CONTACT_INFO.email,
                replyTo: data.email,
                subject: emailSubject,
                html: buildContactEmailHtml(data),
            });
            return { success: true };
        }

        if (type === "protest") {
            const data = payload as ProtestEmailPayload;
            await resend.emails.send({
                from: `Autodromo Web <${fromEmail}>`,
                to: OFFICIAL_CONTACT_INFO.email,
                subject: `Protesta Oficial 4T — ${data.driverName} vs ${data.opponentName}`,
                html: buildProtestEmailHtml(data),
            });
            return { success: true };
        }

        return { success: false, error: "Tipo de email no soportado." };
    } catch {
        return {
            success: false,
            error: "Error al enviar el mensaje. Intenta de nuevo.",
        };
    }
}
