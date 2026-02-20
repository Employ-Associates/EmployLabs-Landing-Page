import React from "react";

type Company = {
  name: string;
  logo?: string;
  href?: string;
};

interface CompanySectionProps {
  companies?: Company[];
}

const defaultCompanies: Company[] = [
  { name: "Acme", logo: "/svg/new.svg" },
  { name: "Atlas", logo: "/svg/new.svg" },
  { name: "Bright", logo: "/svg/new.svg" },
  { name: "Cirrus", logo: "/svg/new.svg" },
  { name: "Drift", logo: "/svg/new.svg" },
  { name: "Echo", logo: "/svg/new.svg" },
  { name: "Flux", logo: "/svg/new.svg" },
];

const CompanySection: React.FC<CompanySectionProps> = ({
  companies = defaultCompanies,
}) => {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-sm text-zinc-400 uppercase tracking-wide">
            Trusted by
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-items-center">
          {companies.slice(0, 7).map((c) => (
            <a
              key={c.name}
              href={c.href ?? "#"}
              className="flex items-center justify-center w-full h-16 bg-transparent rounded-md border border-zinc-800 hover:border-zinc-700"
              aria-label={c.name}
            >
              {/* {c.logo ? (
                // use img if logo available
                // apply filter to keep it visible on dark backgrounds
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-10 object-contain"
                />
              ) : (
                <span className="text-sm text-zinc-300">{c.name}</span>
              )} */}
              {c.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
