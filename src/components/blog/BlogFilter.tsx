"use client";

import { useState, type ReactNode } from "react";
import { BLOG_CATEGORIES, CATEGORY_LABEL, type BlogCategory } from "@/content/blog/types";

/**
 * Category filter.
 *
 * ⚠ The cards are rendered on the SERVER and passed in as children — this
 * component only sets `data-blog-filter` on the wrapper, and CSS in
 * globals.css hides the non-matching ones. Filtering by re-rendering a
 * client-side list would keep every post out of the initial HTML, which is
 * exactly what crawlers and assistants read. Never move the list in here.
 */
export function BlogFilter({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<BlogCategory | "all">("all");

  const options: (BlogCategory | "all")[] = ["all", ...BLOG_CATEGORIES];

  return (
    <>
      <div className="flex flex-wrap gap-2 border-b border-border py-3 pb-8">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={active === o}
            onClick={() => setActive(o)}
            className={`rounded-full border px-4 py-1.5 font-display text-[13.5px] font-medium transition-colors ${
              active === o
                ? "border-white bg-white text-zinc-950"
                : "border-border text-zinc-400 hover:border-zinc-600 hover:text-white"
            }`}
          >
            {o === "all" ? "All" : CATEGORY_LABEL[o]}
          </button>
        ))}
      </div>
      <div data-blog-filter={active}>{children}</div>
    </>
  );
}
