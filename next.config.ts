import type { NextConfig } from "next";

/**
 * The same Vercel project also answers on weemploy.world, serving a byte-for-byte
 * copy of this site — duplicate content that splits ranking and citations.
 * Every path on those hosts 308s to the same path on employlabs.ai.
 *
 * Next anchors a `has` host value as `^value$`, so the dots are escaped and
 * employlabs.ai / *.vercel.app previews can never match (no redirect loop).
 * Query strings are carried to the destination by Next automatically.
 */
export const WEEMPLOY_HOSTS = ["weemploy\\.world", "www\\.weemploy\\.world"];

const nextConfig: NextConfig = {
  async redirects() {
    return WEEMPLOY_HOSTS.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://employlabs.ai/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
