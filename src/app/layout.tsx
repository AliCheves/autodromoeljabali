import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Autódromo Internacional El Jabalí",
    template: "%s | Autódromo Internacional El Jabalí",
  },
  description:
    "La institución automovilística líder en El Salvador. Competición profesional, formación de pilotos y eventos de primer nivel internacional.",
  keywords: ["karting", "autodromo", "el jabali", "motorsport", "el salvador", "competicion"],
  openGraph: {
    type: "website",
    locale: "es_SV",
    siteName: "Autódromo Internacional El Jabalí",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C8102E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className="min-h-screen flex flex-col bg-white text-brand-black antialiased">
        {children}
      </body>
    </html>
  );
}
