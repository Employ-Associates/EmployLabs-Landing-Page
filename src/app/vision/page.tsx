import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/employ-lab/Hero";
import { Vision } from "@/components/employ-lab/Vision";
import { Philosophy } from "@/components/employ-lab/Philosophy";
import { FiveYearShift } from "@/components/employ-lab/FiveYearShift";
import { GapToday } from "@/components/employ-lab/GapToday";
import { ExecutionPath } from "@/components/employ-lab/ExecutionPath";
import { PlatformStructure } from "@/components/employ-lab/PlatformStructure";
import { HowItConnects } from "@/components/employ-lab/HowItConnects";
import { WhoItsBuiltFor } from "@/components/employ-lab/WhoItsBuiltFor";
import { NearTermRoadmap } from "@/components/employ-lab/NearTermRoadmap";
import { PartnerEngage } from "@/components/employ-lab/PartnerEngage";
import { CallToActionSection } from "@/components/employ-lab/CallToActionSection";
import { ParticleWave } from "@/components/ParticleWave";
import { ThreePillarsSection } from "@/components/employai/ThreePillarsSection";
import { Footer } from "@/components/Footer";

const TITLE = "Vision — Building the Future of Work Intelligence | EmployLabs";
const DESCRIPTION =
  "EmployLabs is building the foundational AI infrastructure for workforce intelligence — the data, intelligence and operational layer for AI-native workforce operations, beyond a single hiring tool.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/vision" },
  openGraph: { url: "/vision", title: TITLE, description: DESCRIPTION, siteName: "EmployLabs", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function VisionPage() {
  return (
    <div className="min-h-screen font-sans text-white bg-black selection:bg-blue-500 selection:text-white">
      <Nav variant="dark" />
      <main>
        <Hero />

        {/* Wave Transition */}
        <div className="relative w-full h-[200px] -mt-20 z-20 pointer-events-none">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/80 to-black"></div>
          <ParticleWave />
        </div>

        <Vision />
        <Philosophy />
        {/* <FiveYearShift /> */}
        {/* <GapToday /> */}
        {/* <ExecutionPath /> */}
        <HowItConnects />
        <ThreePillarsSection />
        {/* <PlatformStructure /> */}
        {/* <WhoItsBuiltFor /> */}

        <NearTermRoadmap />
        {/* <PartnerEngage /> */}
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
