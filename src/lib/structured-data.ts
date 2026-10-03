import { SITE_URL } from "@/content/blog";
import type { Faq } from "@/components/people-search/faqs";

/**
 * Pure builders for the site-level JSON-LD (the blog's own lives in
 * `content/blog/builders.ts`). Pure so a test can pin the exact output.
 *
 * ⛔ Product truth: every value here is something the site already states.
 *  - `sameAs` is ABSENT on purpose: no company profile URL (LinkedIn, X, …)
 *    exists anywhere in this repo, and an invented one is a false claim to
 *    every crawler that reads it. Add it only with a URL you can link to.
 *  - `offers` mirror the two flat monthly plans `Pricing.tsx` renders; the
 *    success-fee (%) and enterprise (range) lanes have no single price and
 *    are left out rather than approximated. `structured-data.test.ts` reads
 *    `Pricing.tsx` so a price change there fails here.
 */

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

const DESCRIPTION =
  "EmployLabs is an autonomous recruiting platform. A recruiter uploads a job description; the platform builds the hiring profile, sources and scores candidates against it with evidence, holds the candidate conversation, runs a structured voice interview, and stops at the decisions a human should make.";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "EmployLabs",
    url: SITE_URL,
    // `src/app/icon.svg` — Next serves the icon file convention at /icon.svg.
    logo: `${SITE_URL}/icon.svg`,
    description: DESCRIPTION,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: "EmployLabs",
    url: SITE_URL,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

type MonthlyPlan = { name: string; usdPerMonth: string };

/** The flat monthly lanes of `Pricing.tsx`, verbatim. */
export const MONTHLY_PLANS: readonly MonthlyPlan[] = [
  { name: "Freelancer", usdPerMonth: "120" },
  { name: "Company", usdPerMonth: "150" },
];

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "EmployLabs",
    url: SITE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: DESCRIPTION,
    publisher: { "@id": ORG_ID },
    offers: MONTHLY_PLANS.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.usdPerMonth,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: p.usdPerMonth,
        priceCurrency: "USD",
        unitCode: "MON",
      },
    })),
  };
}

export function faqPageJsonLd(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/**
 * The string that goes inside `<script type="application/ld+json">`.
 * `<` is escaped so a value containing `</script>` cannot close the tag and
 * inject markup (the Next 16 JSON-LD guide's own recipe).
 */
export const serializeJsonLd = (data: unknown): string =>
  JSON.stringify(data).replace(/</g, "\\u003c");
