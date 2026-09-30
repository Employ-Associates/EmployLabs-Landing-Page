import type { Metadata } from "next";
import {
  organizationJsonLd,
  websiteJsonLd,
  softwareApplicationJsonLd,
  serializeJsonLd,
} from "@/lib/structured-data";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { RolesStrip } from "@/components/RolesStrip";
import { Funnel } from "@/components/Funnel";
import { ParadigmShift } from "@/components/ParadigmShift";
import { Agents } from "@/components/Agents";
import { HumanAtGates } from "@/components/HumanAtGates";
import { Trust } from "@/components/Trust";
import { Pricing } from "@/components/Pricing";
import { CustomerSpotlight } from "@/components/CustomerSpotlight";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const TITLE = "EmployLabs — Hiring on autopilot";
const DESCRIPTION =
  "EmployLabs automates hiring end-to-end. A recruiter uploads a job description; AI agents build the hiring profile, source and score candidates with evidence, engage candidates, run a structured voice interview, and stop at the decisions a human should make.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: TITLE, description: DESCRIPTION, siteName: "EmployLabs", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const JSON_LD = [organizationJsonLd(), websiteJsonLd(), softwareApplicationJsonLd()];

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-white">
      {JSON_LD.map((d) => (
        <script
          key={d["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(d) }}
        />
      ))}
      <Nav variant="dark" />
      <main>
        <Hero />
        {/* Dark Mode Sections Wrapper */}
        <div className="bg-zinc-950 text-zinc-100">
          <SocialProof />
          <ParadigmShift />
          <RolesStrip />
          <Funnel />
          <Agents />
          <HumanAtGates />
          <Trust />
          <Pricing />
          <CustomerSpotlight />
          <FinalCTA />
          <Footer />
        </div>
      </main>
    </div>
  );
}
