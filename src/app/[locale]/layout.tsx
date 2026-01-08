import type { Metadata } from "next";
import {
  Zain,
  Kalam,
  Merriweather,
  Roboto,
  Philosopher,
} from "next/font/google";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const zain = Zain({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "900"],
});
const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Royal Gate",
  description:
    "Royal Gate is a leading provider of logistics solutions for businesses",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${
          locale === "ar" ? zain.className : philosopher.className
        }`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
