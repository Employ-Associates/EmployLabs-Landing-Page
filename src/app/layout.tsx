import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/employ-lab/Footer";

const exo = Exo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-exo",
});

export const metadata: Metadata = {
  title:
    "EmployLabs - Reimagining how people are found, understood and connected",
  description: "Reimagining how people are found, understood and connected",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={exo.variable}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
