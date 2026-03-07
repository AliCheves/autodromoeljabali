import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(request: Request) {
  try {
    if (!AUDIENCE_ID) {
      throw new Error("Missing RESEND_AUDIENCE_ID environment variable");
    }

    const body = await request.json();
    const { email, firstName, lastName } = body;

    if (!email || !firstName) {
      return NextResponse.json(
        { error: "El correo y el nombre son obligatorios." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.contacts.create({
      email,
      firstName,
      lastName: lastName || "",
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        {
          error:
            "Hubo un error al procesar tu suscripción. Intenta nuevamente.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "¡Suscripción exitosa!", data },
      { status: 200 },
    );
  } catch (err) {
    console.error("Newsletter API Error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor. Intenta nuevamente más tarde." },
      { status: 500 },
    );
  }
}
