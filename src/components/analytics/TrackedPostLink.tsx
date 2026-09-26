"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { track, type PostCategory, type PostLinkSurface } from "@/lib/analytics-events";

/**
 * A `next/link` to a blog post that reports its own click.
 *
 * Same boundary reason as `TrackedCtaLink`: `PostCard.tsx` and
 * `app/blog/page.tsx` are Server Components, deliberately so — the post list is
 * rendered on the server and filtered with CSS precisely so every post sits in
 * the initial HTML for crawlers and assistants. Moving the list into a client
 * component would undo that.
 *
 * ⛔ `dataCategory` MUST be forwarded on the grid cards. `globals.css` hides
 * non-matching posts with `[data-blog-filter="x"] [data-category]:not(...)`,
 * so dropping the attribute silently breaks the category filter while every
 * test still passes.
 */
export type TrackedPostLinkProps = {
  slug: string;
  category: PostCategory;
  listPosition: "lead" | "grid";
  linkSurface: PostLinkSurface;
  className?: string;
  /** Renders as `data-category`, which is what the CSS category filter reads. */
  dataCategory?: PostCategory;
  children: ReactNode;
};

export function TrackedPostLink({
  slug,
  category,
  listPosition,
  linkSurface,
  className,
  dataCategory,
  children,
}: TrackedPostLinkProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={className}
      data-category={dataCategory}
      onClick={() =>
        track({
          name: "post_opened",
          params: {
            post_slug: slug,
            post_category: category,
            list_position: listPosition,
            link_surface: linkSurface,
          },
        })
      }
    >
      {children}
    </Link>
  );
}
