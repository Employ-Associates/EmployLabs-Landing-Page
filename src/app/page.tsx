import { Header } from "@/components/employ-lab/Header";
import { Hero } from "@/components/employai/Hero";
import { WhyEmploySection } from "@/components/employai/WhyEmploySection";
import ProcessIllustration from "@/components/employai/ProcessIllustration";
import PeopleSearchSection from "@/components/employai/people-search";
import SignalInterviewSection from "@/components/employai/signal-interview";
import AssessmentSection from "@/components/employai/assessment";
import { HumanOwnershipSection } from "@/components/employai/HumanOwnershipSection";
import OutcomesSection from "@/components/employai/OutcomesSection";
import { CallToActionSection } from "@/components/employai/CallToActionSection";
import { TrustedBySection } from "@/components/employai/TrustedBySection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans text-white bg-black selection:bg-blue-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <TrustedBySection />
        <WhyEmploySection />
        <ProcessIllustration />
        <PeopleSearchSection />
        <SignalInterviewSection />
        <AssessmentSection />
        <HumanOwnershipSection />
        <OutcomesSection />
        <CallToActionSection />
      </main>
    </div>
  );
}
