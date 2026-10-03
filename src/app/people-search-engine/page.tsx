import type { Metadata } from "next";
import { PEOPLE_SEARCH_FAQS } from "@/components/people-search/faqs";
import { faqPageJsonLd, serializeJsonLd } from "@/lib/structured-data";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/people-search/Hero";
import { FeaturesSection } from "@/components/people-search/FeaturesSection";
import { FAQSection } from "@/components/people-search/FAQSection";
import { CallToActionSection } from "@/components/people-search/CallToActionSection";
import DiscoverySection from "@/components/people-search/DiscoverySection";
import PipelineStagesSection from "@/components/people-search/PipelineStagesSection";
// import TestinomialSection from "@/components/people-search/TestimonialsSection";

const TITLE = "AI People Search Engine for Recruiters | EmployLabs";
const DESCRIPTION =
  "EmployLabs' AI people search discovers and ranks talent from 800M+ profiles — it fetches candidates, maps their competencies and returns the insight a recruiter needs to shortlist.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/people-search-engine" },
  openGraph: {
    url: "/people-search-engine",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "EmployLabs",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

// Built from the SAME array FAQSection renders, so the answer an assistant quotes can never
// drift from the one a visitor reads.
const FAQ_JSON_LD = serializeJsonLd(faqPageJsonLd(PEOPLE_SEARCH_FAQS));

export default function PeopleSearchEngine() {
  return (
    <div className="min-h-screen font-sans text-white bg-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_JSON_LD }} />
      <Nav variant="dark" />
      <Hero />
      <DiscoverySection />
      <PipelineStagesSection />
      <FeaturesSection />
      {/* <TestinomialSection /> */}
      <FAQSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
