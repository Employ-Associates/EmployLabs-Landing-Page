/**
 * When a dated post actually goes live.
 *
 * ⛔⛔ THIS EXISTS BECAUSE COMPARING CALENDAR DATES IS WRONG.
 * The first cut did `new Date().toISOString().slice(0,10)` and compared date
 * STRINGS. That silently means "midnight UTC", so a post the team scheduled
 * for 4 September appeared at 05:30 on the 4th in Indian time, and — worse —
 * on the evening of the 2nd in IST the server still called it the 2nd for five
 * and a half hours after the team had moved on. It shipped three posts that
 * were not live and a build that looked correct.
 *
 * So a `publishedAt` date is resolved to a REAL INSTANT: 09:00 in
 * `PUBLISH_TIMEZONE` on that date. A post dated 4 September is published on the
 * morning of the 4th, in the timezone of the people who scheduled it.
 *
 * ⚠ The offset is hard-coded rather than computed through Intl because
 * Asia/Kolkata has no daylight saving and never has. If PUBLISH_TIMEZONE is
 * ever changed to a zone that observes DST, this must move to a real timezone
 * conversion — a fixed offset would drift by an hour twice a year.
 */

export const PUBLISH_TIMEZONE = "Asia/Kolkata";
export const PUBLISH_UTC_OFFSET = "+05:30";
export const PUBLISH_LOCAL_HOUR = "09:00:00";

/** The exact instant a post dated `yyyy-mm-dd` becomes live. */
export function publishInstant(publishedAt: string): Date {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(publishedAt)) {
    throw new Error(`publishedAt must be yyyy-mm-dd, got: ${publishedAt}`);
  }
  return new Date(`${publishedAt}T${PUBLISH_LOCAL_HOUR}${PUBLISH_UTC_OFFSET}`);
}

/** Live once the instant has arrived. Inclusive at the boundary. */
export function isLive(publishedAt: string, now: Date): boolean {
  return publishInstant(publishedAt).getTime() <= now.getTime();
}
