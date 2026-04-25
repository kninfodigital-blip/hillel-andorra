import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hillel Andorra — Una comunidad que cree en personas",
  description:
    "Iglesia evangélica en Andorra. Reuniones, jóvenes, kids y ONG. Bienvenido a casa.",
  openGraph: {
    title: "Hillel Andorra — Bienvenido a Casa",
    description: "Una comunidad que cree en personas. En Andorra, contigo.",
    locale: "es_AD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
