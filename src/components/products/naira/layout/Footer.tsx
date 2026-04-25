import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Assessments",  href: "#assessments" },
      { label: "Reports",      href: "#reports" },
      { label: "Integrations", href: "#integrations" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "API Docs",      href: "#api" },
      { label: "Case Studies",  href: "#case-studies" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",   href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const linkClass = cn(
  "text-sm text-zinc-500 transition-colors duration-150",
  "hover:text-white focus-visible:outline-none focus-visible:text-white"
);

const legalLinkClass = cn(
  "text-xs text-zinc-700 transition-colors duration-150",
  "hover:text-zinc-500 focus-visible:outline-none focus-visible:text-zinc-500"
);

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr_1fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-xl font-bold text-white w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              EmployLabs.
            </Link>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-md">
              All scores derived from structured interviews, work samples, and validated behavioral assessments.
            </p>
          </div>

          {footerLinks.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-4">
              <p className="text-xs font-medium text-zinc-300">{heading}</p>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className={linkClass}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-zinc-700">&copy; 2026 EmployLabs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className={legalLinkClass}>Privacy Policy</a>
            <span className="text-zinc-800" aria-hidden>|</span>
            <a href="/terms" className={legalLinkClass}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
