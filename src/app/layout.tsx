import type { Metadata } from "next";
import { Outfit, Manuale, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { SITE_URL } from "@/content/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const manuale = Manuale({
  subsets: ["latin"],
  variable: "--font-manuale",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  // Makes every relative metadata URL (canonical, og:url) absolute on
  // employlabs.ai. ⛔ No canonical here: a layout canonical is inherited by
  // every child that does not set its own, canonicalising them all to /.
  metadataBase: new URL(SITE_URL),
  title: "EmployLabs — The autonomous hiring company",
  description: "The AI does the work — you decide at the gates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${manuale.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
