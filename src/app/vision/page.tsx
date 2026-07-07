import { Header } from "@/components/employ-lab/Header";
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

export default function VisionPage() {
  return (
    <div className="min-h-screen font-sans text-white bg-black selection:bg-blue-500 selection:text-white">
      <Header />
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
