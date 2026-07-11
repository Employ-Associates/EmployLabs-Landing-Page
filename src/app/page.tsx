import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Funnel } from "@/components/Funnel";
import { ParadigmShift } from "@/components/ParadigmShift";
import { Agents } from "@/components/Agents";
import { HumanAtGates } from "@/components/HumanAtGates";
import { Trust } from "@/components/Trust";
import { Pricing } from "@/components/Pricing";
import { CustomerSpotlight } from "@/components/CustomerSpotlight";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-white">
      <Nav variant="dark" />
      <main>
        <Hero />
        {/* Dark Mode Sections Wrapper */}
        <div className="bg-zinc-950 text-zinc-100">
          <SocialProof />
          <ParadigmShift />
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
