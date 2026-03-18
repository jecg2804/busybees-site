import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Fredoka, DM_Sans } from "next/font/google";
import { routing } from "@/i18n/routing";
import { SmoothScrollProvider } from "@/components/motion/SmoothScroll";
import "../globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Busy Bees Learning Center",
  description:
    "Preescolar bilingüe basado en el juego en Ciudad de Panamá. Grupos pequeños, maestras dedicadas, inmersión en inglés natural.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validar locale
  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${fredoka.variable} ${dmSans.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
