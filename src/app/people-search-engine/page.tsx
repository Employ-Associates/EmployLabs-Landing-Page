import { Header } from "@/components/people-search/Header";
import { Hero } from "@/components/people-search/Hero";
import { FeaturesSection } from "@/components/people-search/FeaturesSection";
import { FAQSection } from "@/components/people-search/FAQSection";
import { CallToActionSection } from "@/components/people-search/CallToActionSection";
import DiscoverySection from "@/components/people-search/DiscoverySection";
import PipelineStagesSection from "@/components/people-search/PipelineStagesSection";
// import TestinomialSection from "@/components/people-search/TestimonialsSection";

export default function PeopleSearchEngine() {
  return (
    <div className="min-h-screen font-sans text-white bg-black">
      <Header />
      <Hero />
      <DiscoverySection />
      <PipelineStagesSection />
      <FeaturesSection />
      {/* <TestinomialSection /> */}
      <FAQSection />
      <CallToActionSection />
    </div>
  );
}
