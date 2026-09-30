/**
 * Internal-traffic marking for the shared GA4 property (G-KEVEJ1JSJK).
 *
 * employlabs.ai and app.employlabs.ai report into ONE property, and our own team
 * is most of its page views. A STAFF DEVICE is marked with a first-party cookie
 * `el_internal=1`; the GA bootstrap reads it before the first `config` and, when
 * present, the config call carries `traffic_type: 'internal'` -- the exact
 * parameter GA4's internal-traffic data filter keys on -- so every event
 * (page_view, session_start, user_engagement, ...) inherits it.
 *
 * ⛔ THIS FILE HAS A TWIN in el-platform services/web/src/lib/internal-traffic.ts.
 * The cookie name, attributes and bootstrap snippet MUST stay byte-compatible:
 * a device marked on one site has to read as internal on the other.
 *
 * Domain rule: `Domain=.employlabs.ai` ONLY on employlabs.ai or a subdomain of
 * it. A browser silently REJECTS a cookie whose Domain the page is not inside,
 * so setting it from localhost / *.vercel.app / weemploy.world would fail with
 * no error anywhere; there the cookie is host-only.
 *
 * Only the boolean parameter ever leaves the browser -- never an email or name.
 */

export const INTERNAL_COOKIE_NAME = "el_internal";
export const INTERNAL_QUERY_PARAM = "el_internal";
const ONE_YEAR_SECONDS = 31536000;

/** True for employlabs.ai and any *.employlabs.ai host -- nothing else. */
export const isEmployLabsHost = (hostname: string): boolean =>
  hostname === "employlabs.ai" || hostname.endsWith(".employlabs.ai");

type CookieInput = { hostname: string; protocol: string; on: boolean };

/**
 * The exact `document.cookie` assignment for setting (`on`) or deleting the mark.
 * Deletion uses the same Path/Domain as setting, or the browser keeps the cookie.
 * `Secure` is omitted on plain http (localhost dev), where a browser would drop it.
 */
export const buildInternalCookie = ({ hostname, protocol, on }: CookieInput): string =>
  `${INTERNAL_COOKIE_NAME}=${on ? "1" : ""}; Path=/; Max-Age=${on ? ONE_YEAR_SECONDS : 0}; SameSite=Lax` +
  (protocol === "https:" ? "; Secure" : "") +
  (isEmployLabsHost(hostname) ? "; Domain=.employlabs.ai" : "");

/**
 * Self-contained inline JS (runs before React and before gtag.js) that:
 *  1. applies `?el_internal=1` (set) / `?el_internal=0` (delete) from the url;
 *  2. defines the global `__elInternal` boolean from the query or the cookie.
 * The query wins over the cookie on the page it appears on, so an opt-out takes
 * effect immediately rather than one page later. Mirrors buildInternalCookie.
 */
export const INTERNAL_TRAFFIC_BOOTSTRAP =
  "var __elInternal=(function(){try{" +
  "var h=location.hostname," +
  "a='; Path=/; Max-Age='," +
  "b='; SameSite=Lax'+(location.protocol==='https:'?'; Secure':'')+" +
  "(h==='employlabs.ai'||/\\.employlabs\\.ai$/.test(h)?'; Domain=.employlabs.ai':'')," +
  "q=new URLSearchParams(location.search).get('el_internal');" +
  "if(q==='1'){document.cookie='el_internal=1'+a+'31536000'+b;return true;}" +
  "if(q==='0'){document.cookie='el_internal='+a+'0'+b;return false;}" +
  "return /(?:^|;\\s*)el_internal=1(?:;|$)/.test(document.cookie);" +
  "}catch(e){return false;}})();";

/**
 * Wraps a config-object JS literal so it gains `traffic_type:'internal'` only on
 * a marked device. The literal itself is emitted untouched.
 */
export const withInternalTraffic = (configLiteral: string): string =>
  `Object.assign(${configLiteral},__elInternal?{traffic_type:'internal'}:{})`;

/**
 * The landing site's whole inline GA bootstrap. The `gtag` shim MUST push
 * `arguments` (gtag.js silently discards a real Array) -- do not modernise it.
 * `measurementId` must already have passed isValidMeasurementId.
 */
export const buildGaBootstrap = (measurementId: string): string =>
  INTERNAL_TRAFFIC_BOOTSTRAP +
  "window.dataLayer=window.dataLayer||[];" +
  "function gtag(){dataLayer.push(arguments);}" +
  "gtag('js',new Date());" +
  `gtag('config',${JSON.stringify(measurementId)},${withInternalTraffic("{send_page_view:false}")});`;
