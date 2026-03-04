"use server";

import { Resend } from "resend";
import { OFFICIAL_CONTACT_INFO } from "@/config/content/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailResult {
    success: boolean;
    error?: string;
}

function buildEmailHtml({
    name,
    email,
    interest,
    message,
}: {
    name: string;
    email: string;
    interest: string;
    message: string;
}): string {
    const contact = OFFICIAL_CONTACT_INFO;

    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="es">
  <head>
    <meta content="width=device-width" name="viewport" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Nuevo mensaje</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f4f4f4;">
      <tr>
        <td align="center" style="padding:30px 15px;">
          <table width="600" cellpadding="0" cellspacing="0" role="presentation"
            style="background-color:#ffffff;border-radius:8px;overflow:hidden;font-family:Arial, Helvetica, sans-serif;">
            <tr>
              <td style="background-color:#000000;padding:30px;text-align:center;">
                <h1 style="margin:0;font-size:20px;color:#ffffff;font-weight:700;letter-spacing:1px;">
                  AUTODROMO INTERNACIONAL
                </h1>
                <p style="margin:5px 0 0 0;font-size:18px;color:#DC0000;font-weight:700;">
                  EL JABALI
                </p>
              </td>
            </tr>
            <tr>
              <td style="height:4px;background-color:#DC0000;"></td>
            </tr>
            <tr>
              <td style="padding:30px;">
                <h2 style="margin:0 0 20px 0;font-size:18px;color:#111111;">
                  Nuevo mensaje recibido desde el sitio web
                </h2>
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-size:14px;color:#333333;">
                  <tr>
                    <td style="padding:8px 0;font-weight:bold;width:140px;">Nombre:</td>
                    <td style="padding:8px 0;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;font-weight:bold;">Correo:</td>
                    <td style="padding:8px 0;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;font-weight:bold;">Interes:</td>
                    <td style="padding:8px 0;">${interest}</td>
                  </tr>
                </table>
                <div style="margin-top:25px;padding:15px;border:1px solid #e5e5e5;border-radius:6px;background-color:#fafafa;">
                  <p style="margin:0;font-size:14px;line-height:1.6;color:#333333;">
                    ${message.replace(/\n/g, "<br />")}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f8f8f8;padding:25px;text-align:center;font-size:12px;color:#666666;line-height:1.6;">
                <strong>${contact.institution}</strong><br />
                ${contact.address.line1}<br />
                ${contact.address.country}<br /><br />
                Tel: ${contact.phoneFormatted}<br />
                ${contact.email}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function sendContactEmail(
    formData: FormData
): Promise<SendEmailResult> {
    const name = formData.get("name") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const interest = (formData.get("interest") as string) || "Consulta general";

    if (!name || !email || !message) {
        return { success: false, error: "Campos requeridos faltantes." };
    }

    const fullName = lastName ? `${name} ${lastName}` : name;
    const emailSubject = subject
        ? `[Web] ${subject} — ${fullName}`
        : `[Web] ${interest} — ${fullName}`;

    try {
        await resend.emails.send({
            from: `Autodromo Web <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
            to: "alipixeled2020@gmail.com", // TODO: revert to OFFICIAL_CONTACT_INFO.email
            replyTo: email,
            subject: emailSubject,
            html: buildEmailHtml({
                name: fullName,
                email,
                interest,
                message,
            }),
        });

        return { success: true };
    } catch {
        return {
            success: false,
            error: "Error al enviar el mensaje. Intenta de nuevo.",
        };
    }
}
