"use server";

import { Resend } from "resend";
import { OFFICIAL_CONTACT_INFO } from "@/config/content/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailResult {
  success: boolean;
  error?: string;
}

// Phase 2: Attach evidence via secure object storage (S3 / Blob)

function buildProtestEmailHtml({
  driverName,
  driverNumber,
  opponentName,
  opponentNumber,
  incidentDate,
  description,
  submittedAt,
}: {
  driverName: string;
  driverNumber: string;
  opponentName: string;
  opponentNumber: string;
  incidentDate: string;
  description: string;
  submittedAt: string;
}): string {
  const contact = OFFICIAL_CONTACT_INFO;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="es">
  <head>
    <meta content="width=device-width" name="viewport" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Protesta Oficial de Carrera</title>
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
                  Protesta Oficial de Carrera — Campeonato 4T
                </h2>
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-size:14px;color:#333333;">
                  <tr>
                    <td style="padding:8px 0;font-weight:bold;width:180px;">Piloto que protesta:</td>
                    <td style="padding:8px 0;">${driverName}${driverNumber ? ` (#${driverNumber})` : ""}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;font-weight:bold;">Piloto incidentado:</td>
                    <td style="padding:8px 0;">${opponentName}${opponentNumber ? ` (#${opponentNumber})` : ""}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;font-weight:bold;">Fecha del incidente:</td>
                    <td style="padding:8px 0;">${incidentDate}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;font-weight:bold;">Enviado:</td>
                    <td style="padding:8px 0;">${submittedAt}</td>
                  </tr>
                </table>
                <div style="margin-top:25px;padding:15px;border:1px solid #e5e5e5;border-radius:6px;background-color:#fafafa;">
                  <p style="margin:0 0 8px 0;font-size:12px;font-weight:bold;color:#666666;text-transform:uppercase;letter-spacing:1px;">
                    Descripcion del Incidente
                  </p>
                  <p style="margin:0;font-size:14px;line-height:1.6;color:#333333;">
                    ${description.replace(/\n/g, "<br />")}
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

export async function sendRaceProtestEmail(
  formData: FormData
): Promise<SendEmailResult> {
  const driverName = formData.get("driverName") as string;
  const driverNumber = formData.get("driverNumber") as string;
  const opponentName = formData.get("opponentName") as string;
  const opponentNumber = formData.get("opponentNumber") as string;
  const incidentDate = formData.get("incidentDate") as string;
  const description = formData.get("description") as string;
  const accepted = formData.get("accepted") as string;
  const honeypot = formData.get("website") as string;

  if (honeypot) {
    return { success: true };
  }

  if (!driverName || !opponentName || !incidentDate || !description || !accepted) {
    return { success: false, error: "Todos los campos obligatorios deben ser completados." };
  }

  const submittedAt = new Date().toLocaleString("es-SV", {
    timeZone: "America/El_Salvador",
  });

  try {
    await resend.emails.send({
      from: `Autodromo Web <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: OFFICIAL_CONTACT_INFO.email,
      subject: `Protesta Oficial 4T — ${driverName} vs ${opponentName}`,
      html: buildProtestEmailHtml({
        driverName,
        driverNumber: driverNumber || "",
        opponentName,
        opponentNumber: opponentNumber || "",
        incidentDate,
        description,
        submittedAt,
      }),
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Error al enviar la protesta. Intenta de nuevo.",
    };
  }
}
