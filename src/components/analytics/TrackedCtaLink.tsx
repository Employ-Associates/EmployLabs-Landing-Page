"use client";

import type { ReactNode } from "react";

import { track, type CtaDestination, type CtaId, type CtaLocation } from "@/lib/analytics-events";

/**
 * A plain `<a>` that reports its own click.
 *
 * ⚠ THIS EXISTS ONLY FOR SERVER COMPONENTS. `blog/[slug]/page.tsx`,
 * `employ-lab/Hero.tsx` and both `CallToActionSection.tsx` are Server
 * Components, so they cannot hold an `onClick` — a boundary has to be crossed
 * somewhere, and one shared child is cheaper than turning four pages into
 * client components and dragging their whole subtree into the bundle.
 *
 * Components that are ALREADY `"use client"` (Nav, Hero, FinalCTA, Pricing)
 * call `track` inline instead of wrapping their markup in this. That is the
 * rule, not an inconsistency: this component's only job is the boundary, and
 * adding it where no boundary is needed would rewrite working markup for
 * nothing.
 *
 * Styling is entirely the caller's: no className is added here, so the visual
 * result is byte-identical to the `<a>` it replaces.
 */
export type TrackedCtaLinkProps = {
  href: string;
  ctaId: CtaId;
  ctaLocation: CtaLocation;
  destination: CtaDestination;
  className?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
};

export function TrackedCtaLink({
  href,
  ctaId,
  ctaLocation,
  destination,
  className,
  target,
  rel,
  children,
}: TrackedCtaLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      // No preventDefault and no delay: the navigation must happen even if the
      // GA script never loaded. `track` is a no-op when `gtag` is absent.
      onClick={() =>
        track({
          name: "cta_clicked",
          params: { cta_id: ctaId, cta_location: ctaLocation, destination },
        })
      }
    >
      {children}
    </a>
  );
}
