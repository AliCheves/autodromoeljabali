"use server";

import { sendEmail, ContactEmailPayload } from "../emails";

export async function sendContactEmail(
  formData: FormData
) {
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

  const payload: ContactEmailPayload = {
    name: fullName,
    email,
    interest,
    message,
    subject: emailSubject,
  };

  return await sendEmail("contact", payload);
}
