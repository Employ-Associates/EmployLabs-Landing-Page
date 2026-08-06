import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NairaHero } from "@/components/naira/NairaHero";
import { NairaCoverage } from "@/components/naira/NairaCoverage";
import { NairaProblem, NairaModules } from "@/components/naira/NairaModules";
import {
  NairaArchitecture,
  NairaScoring,
  NairaOutcomes,
  NairaCTA,
} from "@/components/naira/NairaSections";

export const metadata: Metadata = {
  title: "Naira — AI Interviewer for Every Role | Weemploy",
  description:
    "Meet Naira, the AI interview agent by Weemploy. One assessment agent for engineering, sales, product, HR, finance, legal, and more. No question banks — fresh artifacts, calibrated to every role. Powered by Signal Interview™.",
  keywords: [
    "AI interviewer",
    "AI interview agent",
    "AI hiring assessment",
    "Naira AI",
    "Signal Interview",
    "Weemploy",
    "automated interviews",
    "engineering interview AI",
    "sales interview AI",
    "product manager assessment",
    "judgment-based hiring",
    "RAR scoring",
  ],
  openGraph: {
    title: "Naira — The AI Interview That Thinks Back | Weemploy",
    description:
      "One assessment agent for every role and industry. Engineering. Sales. Product. HR. Finance. Naira generates fresh assessments — calibrated to the role, not pulled from a question bank.",
    url: "https://weemploy.com/naira-ai-interviewer",
    siteName: "Weemploy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naira — The AI Interview That Thinks Back",
    description:
      "One assessment agent for every role. Engineering, Sales, Product, HR, Finance and more. No question banks — pure judgment testing.",
  },
  alternates: {
    canonical: "/naira-ai-interviewer",
  },
};

export default function NairaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Nav variant="dark" />
      <main>
        <NairaHero />
        <NairaCoverage />
        <NairaProblem />
        <NairaModules />
        <NairaArchitecture />
        <NairaScoring />
        <NairaOutcomes />
        <NairaCTA />
      </main>
      <Footer />
    </div>
  );
}
