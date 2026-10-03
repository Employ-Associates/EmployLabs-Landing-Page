import { describe, it, expect, vi } from "vitest";

// The layout calls next/font at module scope; the loader only exists under the
// Next compiler. Stub it so the real `metadata` export can be read.
vi.mock("next/font/google", () => {
  const font = () => ({ variable: "", className: "", style: {} });
  return { Outfit: font, Manuale: font, JetBrains_Mono: font };
});
import { readFileSync } from "node:fs";
import {
  organizationJsonLd,
  websiteJsonLd,
  softwareApplicationJsonLd,
  faqPageJsonLd,
  serializeJsonLd,
  MONTHLY_PLANS,
} from "./structured-data";
import { PEOPLE_SEARCH_FAQS } from "@/components/people-search/faqs";
import nextConfig from "../../next.config";
import { metadata as rootMeta } from "@/app/layout";
import { metadata as homeMeta } from "@/app/page";
import { metadata as visionMeta } from "@/app/vision/page";
import { metadata as psMeta } from "@/app/people-search-engine/page";
import { metadata as nairaMeta } from "@/app/naira-ai-interviewer/page";

const DESC =
  "EmployLabs is an autonomous recruiting platform. A recruiter uploads a job description; the platform builds the hiring profile, sources and scores candidates against it with evidence, holds the candidate conversation, runs a structured voice interview, and stops at the decisions a human should make.";

describe("site JSON-LD builders — exact output", () => {
  it("Organization", () => {
    expect(organizationJsonLd()).toEqual({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://employlabs.ai/#organization",
      name: "EmployLabs",
      url: "https://employlabs.ai",
      logo: "https://employlabs.ai/icon.svg",
      description: DESC,
    });
  });

  it("the logo it names is a real file", () => {
    expect(readFileSync("src/app/icon.svg", "utf8")).toContain("<svg");
  });

  it("WebSite", () => {
    expect(websiteJsonLd()).toEqual({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://employlabs.ai/#website",
      name: "EmployLabs",
      url: "https://employlabs.ai",
      inLanguage: "en",
      publisher: { "@id": "https://employlabs.ai/#organization" },
    });
  });

  it("SoftwareApplication", () => {
    const offer = (name: string, price: string) => ({
      "@type": "Offer",
      name,
      price,
      priceCurrency: "USD",
      priceSpecification: { "@type": "UnitPriceSpecification", price, priceCurrency: "USD", unitCode: "MON" },
    });
    expect(softwareApplicationJsonLd()).toEqual({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "EmployLabs",
      url: "https://employlabs.ai",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: DESC,
      publisher: { "@id": "https://employlabs.ai/#organization" },
      offers: [offer("Freelancer", "120"), offer("Company", "150")],
    });
  });

  it("every offer is a price Pricing.tsx actually shows, monthly", () => {
    const src = readFileSync("src/components/Pricing.tsx", "utf8");
    for (const p of MONTHLY_PLANS) {
      const re = new RegExp(`name: "${p.name}",[\\s\\S]*?price: "\\$${p.usdPerMonth}",\\s*priceNote: "/month"`);
      expect(src, `${p.name} $${p.usdPerMonth}/month not in Pricing.tsx`).toMatch(re);
    }
  });

  it("FAQPage is built from the array FAQSection renders", () => {
    const ld = faqPageJsonLd(PEOPLE_SEARCH_FAQS);
    expect(ld["@type"]).toBe("FAQPage");
    expect(ld.mainEntity).toEqual(
      PEOPLE_SEARCH_FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    );
    expect(ld.mainEntity).toHaveLength(6);
    expect(readFileSync("src/components/people-search/FAQSection.tsx", "utf8")).toMatch(
      /const faqs = PEOPLE_SEARCH_FAQS;/,
    );
  });

  it("serializeJsonLd escapes < so a value cannot close the script tag", () => {
    const out = serializeJsonLd({ text: "a</script><script>alert(1)</script>" });
    expect(out).toBe('{"text":"a\\u003c/script>\\u003cscript>alert(1)\\u003c/script>"}');
    expect(out).not.toContain("<");
    expect(JSON.parse(out)).toEqual({ text: "a</script><script>alert(1)</script>" });
  });
});

describe("canonicals resolve to employlabs.ai", () => {
  it("layout sets metadataBase and NO canonical", () => {
    expect(String(rootMeta.metadataBase)).toBe("https://employlabs.ai/");
    expect(rootMeta.alternates).toBeUndefined();
  });

  const pages = [
    ["/", homeMeta],
    ["/vision", visionMeta],
    ["/people-search-engine", psMeta],
    ["/naira-ai-interviewer", nairaMeta],
  ] as const;
  for (const [path, m] of pages) {
    it(`${path} canonical + og:url are its own path`, () => {
      expect(m.alternates?.canonical).toBe(path);
      expect(new URL(String(m.alternates?.canonical), String(rootMeta.metadataBase)).href).toBe(
        `https://employlabs.ai${path === "/" ? "/" : path}`,
      );
      const og = m.openGraph as { url?: string; siteName?: string };
      expect(og.url).toBe(path);
      expect(og.siteName).toBe("EmployLabs");
      expect(m.title).toBeTruthy();
      expect(m.description).toBeTruthy();
    });
  }
});

describe("weemploy.world → employlabs.ai redirect", () => {
  const anchored = (v: string) => new RegExp(`^${v}$`); // how Next matches `has` values

  it("is a permanent path-preserving redirect per weemploy host", async () => {
    expect(await nextConfig.redirects!()).toEqual([
      {
        source: "/:path*",
        has: [{ type: "host", value: "weemploy\\.world" }],
        destination: "https://employlabs.ai/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www\\.weemploy\\.world" }],
        destination: "https://employlabs.ai/:path*",
        permanent: true,
      },
    ]);
  });

  it("matches only the weemploy hosts — never employlabs.ai or a preview", async () => {
    const rules = await nextConfig.redirects!();
    const hit = (host: string) =>
      rules.some((r) => r.has!.some((h) => h.type === "host" && anchored(h.value!).test(host)));
    expect(hit("weemploy.world")).toBe(true);
    expect(hit("www.weemploy.world")).toBe(true);
    for (const h of ["employlabs.ai", "www.employlabs.ai", "el-landing-page-git-x.vercel.app", "weemployXworld", "notweemploy.world"]) {
      expect(hit(h), h).toBe(false);
    }
  });
});
