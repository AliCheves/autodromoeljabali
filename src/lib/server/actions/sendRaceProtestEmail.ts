"use server";

import { sendEmail, ProtestEmailPayload } from "../emails";

// Phase 2: Attach evidence via secure object storage (S3 / Blob)

export async function sendRaceProtestEmail(
  formData: FormData
) {
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

  const payload: ProtestEmailPayload = {
    driverName,
    driverNumber: driverNumber || "",
    opponentName,
    opponentNumber: opponentNumber || "",
    incidentDate,
    description,
    submittedAt,
  };

  return await sendEmail("protest", payload);
}
