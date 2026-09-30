/**
 * The hero's "see the market behind any role" form → app.employlabs.ai/search-prospects.
 *
 *   job (link or pasted JD) ──▶ email ──▶ POST {APP}/api/search-prospects/self-serve
 *                                            └─▶ { path: "/search-prospects?invite=…" }
 *   then go to {APP}{path}#mode=…&url=…   (the job rides in the FRAGMENT: it never
 *                                          reaches a server or an access log)
 *
 * The server re-checks the email for real (its domain must take mail); the
 * checks here only save a round trip on an obvious mistake.
 */

export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://app.employlabs.ai").replace(/\/$/, "");

/** The app's limits for a pasted JD (el-platform `PASTED_JD_MIN_CHARS` / `PASTED_JD_MAX_CHARS`). */
export const MIN_JD_CHARS = 300;
export const MAX_JD_CHARS = 3_000;

export type JobSource =
  | { mode: "url"; url: string; companyName: string }
  | { mode: "text"; text: string; domain: string; companyName: string };

/** "careers.acme.com/jobs/1" → "https://careers.acme.com/jobs/1". */
export const normalizeUrl = (raw: string): string => {
  const v = raw.trim();
  if (!v) return v;
  return /^[a-z]+:\/\//i.test(v) ? v : `https://${v}`;
};

/** A job link we could fetch, or why not; `null` when it looks fine. */
export const urlIssue = (raw: string): string | null => {
  let u: URL;
  try {
    u = new URL(normalizeUrl(raw));
  } catch {
    return "That isn't a web link. Paste the job posting's address.";
  }
  if (u.protocol !== "https:" && u.protocol !== "http:") return "Paste a web link (https://…).";
  if (!u.hostname.includes(".")) return "That link is missing its domain, e.g. careers.acme.com.";
  if (/\.(?:pdf|docx?)$/i.test(u.pathname)) return "That link is a file. Paste the JD's text instead.";
  return null;
};

export const domainIssue = (raw: string): string | null => {
  const v = raw.trim();
  if (v.includes("@")) return "That's an email address. Enter the company's website, e.g. acme.com.";
  const host = v.replace(/^[a-z]+:\/\//i, "").replace(/^www\./i, "").split(/[/?#]/)[0] ?? "";
  if (!/^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i.test(host)) return "Enter the company's website, e.g. acme.com.";
  return null;
};

const EMAIL_RE = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*\.[a-z]{2,}$/i;

const TYPOS: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gmail.con": "gmail.com",
  "gnail.com": "gmail.com",
  "hotmial.com": "hotmail.com",
  "outlok.com": "outlook.com",
  "outlook.con": "outlook.com",
  "yahoo.con": "yahoo.com",
  "yaho.com": "yahoo.com",
};

export type EmailIssue = { message: string; suggestion?: string };

/** The shape of an email, or what's wrong with it; `null` when it looks fine. */
export const emailIssue = (raw: string): EmailIssue | null => {
  const v = raw.trim().toLowerCase();
  if (!v) return { message: "Enter your work email." };
  if (v.length > 254 || !EMAIL_RE.test(v) || v.includes("..")) {
    return { message: "That email address doesn't look right. Check it and try again." };
  }
  const [local, domain] = v.split("@") as [string, string];
  const fix = TYPOS[domain];
  if (fix) return { message: `Did you mean ${local}@${fix}?`, suggestion: `${local}@${fix}` };
  return null;
};

/** Where the visitor goes once they have an invite: the app page, their job in the fragment. */
export const runUrl = (path: string, job: JobSource): string => {
  const p = new URLSearchParams({ mode: job.mode });
  if (job.mode === "url") p.set("url", normalizeUrl(job.url));
  else {
    p.set("text", job.text.trim());
    p.set("domain", job.domain.trim());
  }
  if (job.companyName.trim()) p.set("company", job.companyName.trim());
  return `${APP_URL}${path}#${p.toString()}`;
};

export type StartResult = { ok: true; path: string } | { ok: false; message: string; suggestion?: string };

/**
 * Ask the app for an invite. Sent as text/plain so the browser makes a "simple"
 * request (no CORS preflight); the server reads the body as JSON regardless.
 */
export const requestInvite = async (email: string, companyName: string): Promise<StartResult> => {
  let res: Response;
  try {
    res = await fetch(`${APP_URL}/api/search-prospects/self-serve`, {
      method: "POST",
      headers: { "content-type": "text/plain;charset=UTF-8" },
      body: JSON.stringify({ email: email.trim(), ...(companyName.trim() ? { companyName: companyName.trim() } : {}) }),
    });
  } catch {
    return { ok: false, message: "We couldn't reach EmployLabs. Check your connection and try again." };
  }
  const body = (await res.json().catch(() => ({}))) as { path?: unknown; error?: unknown; suggestion?: unknown };
  if (res.ok && typeof body.path === "string" && body.path) return { ok: true, path: body.path };
  if (res.status === 400 || res.status === 429) {
    // The body is server JSON, so any field can be `null` or the wrong type.
    // Only a non-empty string is a suggestion; anything else is "none", which is
    // exactly what `suggestion?: string` promises every caller.
    const suggestion = typeof body.suggestion === "string" && body.suggestion.trim() ? body.suggestion : undefined;
    const message = typeof body.error === "string" && body.error ? body.error : "That email address doesn't look right.";
    return suggestion ? { ok: false, message, suggestion } : { ok: false, message };
  }
  return { ok: false, message: "Searches can't start from here right now. Try again in a few minutes." };
};
