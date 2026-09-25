/**
 * Google Analytics 4 measurement-id handling.
 *
 * employlabs.ai and app.employlabs.ai are ONE GA4 property sharing one data
 * stream, so a visitor who reads the marketing site and then signs into the app
 * stays a single session and a single journey. There is deliberately no second
 * property and no second stream.
 *
 * The id is NOT hardcoded: it comes from NEXT_PUBLIC_GA_MEASUREMENT_ID, set in
 * Vercel project settings for production only. Preview deployments omit it, so
 * preview traffic never lands in production reports. When it is unset or
 * malformed we render nothing at all -- no script tag, no request to Google.
 */

/** A GA4 measurement id: the literal "G-" followed by upper-case alphanumerics. */
const MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/;

export function isValidMeasurementId(value: string | undefined): value is string {
  return typeof value === "string" && MEASUREMENT_ID_PATTERN.test(value);
}
