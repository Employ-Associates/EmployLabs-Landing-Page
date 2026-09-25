import Script from "next/script";
import { isValidMeasurementId } from "@/lib/analytics";

/**
 * The standard Google-documented GA4 snippet: the gtag.js loader plus the inline
 * bootstrap. Nothing is rendered unless NEXT_PUBLIC_GA_MEASUREMENT_ID is present
 * and well formed, which is what keeps Vercel previews (where the var is unset)
 * from reaching Google at all.
 *
 * No url scrubbing: this site's urls carry no tokens and no personal
 * identifiers, and /blog/[slug] carries a public post slug we WANT to see in
 * reports. Page paths are reported verbatim.
 *
 * The inline snippet is copied from Google verbatim for one specific reason:
 * gtag.js branches on the type of each dataLayer entry and silently discards a
 * real Array, so the queue shim MUST push `arguments`. A hand-rolled helper that
 * spreads a rest parameter and pushes an array sends nothing, with no error
 * anywhere. Do not "modernise" the function below.
 */
export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!isValidMeasurementId(measurementId)) return null;

  // Safe to interpolate: the id matched /^G-[A-Z0-9]+$/, so it cannot contain a
  // quote, a backslash or a `<`.
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}');`}
      </Script>
    </>
  );
}
