"use client";

import { useId, useRef, useState } from "react";
import { track } from "@/lib/analytics-events";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Building2, FileText, Globe, Link2, Loader2, Mail } from "lucide-react";

import {
  domainIssue,
  emailIssue,
  MAX_JD_CHARS,
  MIN_JD_CHARS,
  normalizeUrl,
  requestInvite,
  runUrl,
  urlIssue,
  type JobSource,
} from "@/lib/search-prospects";

type Mode = JobSource["mode"];

const TABS: { id: Mode; label: string; icon: typeof Link2 }[] = [
  { id: "url", label: "Job link", icon: Link2 },
  { id: "text", label: "Paste JD", icon: FileText },
];

const field =
  "flex h-12 items-center gap-3 rounded-sm border border-white/15 bg-white/[0.06] px-4 transition-[border-color,background-color,box-shadow] focus-within:border-white/45 focus-within:bg-white/[0.1] focus-within:shadow-[0_0_0_3px_rgba(255,255,255,0.08)]";
const input = "h-full min-w-0 flex-1 bg-transparent text-[15px] text-white outline-none placeholder:text-white/75";
const problem = "mt-1.5 text-[13px] text-[#ffb4a8]";

/**
 * The hero's search card: a job (link or pasted JD) → an email → the run opens
 * on app.employlabs.ai/search-prospects and starts on its own.
 */
export function HeroSearch() {
  const reduce = useReducedMotion();
  const ids = useId();
  const [step, setStep] = useState<"job" | "email">("job");
  const [mode, setMode] = useState<Mode>("url");
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [domain, setDomain] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState({ url: false, domain: false, email: false });
  const [serverError, setServerError] = useState<{ message: string; suggestion?: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const chars = text.trim().length;
  const urlProblem = url.trim() ? urlIssue(url) : null;
  const domainProblem = domain.trim() ? domainIssue(domain) : null;
  const textProblem =
    chars > MAX_JD_CHARS
      ? `That's ${chars.toLocaleString("en-US")} characters — the limit is ${MAX_JD_CHARS.toLocaleString("en-US")}. Keep the role, requirements and location.`
      : null;
  const jobReady =
    mode === "url"
      ? url.trim().length > 0 && !urlProblem
      : chars >= MIN_JD_CHARS && !textProblem && domain.trim().length > 0 && !domainProblem;

  const emailProblem = emailIssue(email);
  const shownEmailProblem = serverError ?? (touched.email && email.trim() ? emailProblem : null);

  const job = (): JobSource =>
    mode === "url" ? { mode, url, companyName } : { mode, text, domain, companyName };

  const toEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched((t) => ({ ...t, url: true, domain: true }));
    if (!jobReady) return;
    if (mode === "url") setUrl(normalizeUrl(url));
    // ⛔ AFTER the readiness gate, never on the click. A visitor stabbing at a
    // disabled button has not submitted a job, and counting that would make the
    // step-1 → step-2 drop-off — the only thing this funnel is for — meaningless.
    track({
      name: "hero_job_submitted",
      params: { mode, has_company_name: companyName.trim() !== "" },
    });
    setStep("email");
    // After the swap renders.
    requestAnimationFrame(() => emailRef.current?.focus());
  };

  const start = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched((t) => ({ ...t, email: true }));
    setServerError(null);
    if (emailProblem || busy) return;
    setBusy(true);
    const res = await requestInvite(email, companyName);
    if (!res.ok) {
      setBusy(false);
      setServerError({ message: res.message, suggestion: res.suggestion });
      // ⛔ NO MESSAGE, EVER. `res.message` and `res.suggestion` are server prose
      // that can echo what the visitor typed — an address, a domain. Whether a
      // correction was offered is the only part a funnel needs.
      track({
        name: "hero_run_failed",
        params: { mode, has_suggestion: res.suggestion !== undefined },
      });
      emailRef.current?.focus();
      return;
    }
    // ⛔ ON THE SERVER'S ANSWER, BEFORE THE NAVIGATION. Firing on the click would
    // count every visitor who typed an address the endpoint then refused.
    // ⚠️ `email` is in scope on this very line and is deliberately absent — the
    // closed param union makes attaching it a compile error.
    track({
      name: "hero_run_started",
      params: { mode, has_company_name: companyName.trim() !== "" },
    });
    // Stays "busy" through the navigation.
    window.location.assign(runUrl(res.path, job()));
  };

  const applySuggestion = (s: string) => {
    setEmail(s);
    setServerError(null);
    emailRef.current?.focus();
  };

  const jobSummary =
    mode === "url"
      ? (() => {
          try {
            const u = new URL(normalizeUrl(url));
            return u.hostname.replace(/^www\./, "") + (u.pathname.length > 1 ? u.pathname : "");
          } catch {
            return url;
          }
        })()
      : `Pasted JD · ${chars.toLocaleString()} characters`;

  const swap = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <div className="liquid-glass hero-glass w-full rounded-sm p-5 sm:p-6 text-white backdrop-blur-xl backdrop-saturate-150">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/85">From a job to real insights</p>
      <h2 className="mt-2 font-display text-[26px] sm:text-[30px] leading-[1.1] tracking-tight font-medium text-balance">
        Find the talent your role <span className="italic text-accent">actually needs.</span>
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-white/90 text-pretty">
        Discover the right candidates, understand your talent market, and build a stronger shortlist in minutes.
      </p>

      {/* Entry-only swap: the new step renders at once (no waiting on an exit animation). */}
      {step === "job" ? (
          <motion.form key="job" {...swap} onSubmit={toEmail} noValidate className="mt-5 grid gap-3">
            <div role="tablist" aria-label="Job source" className="grid grid-cols-2 gap-1 rounded-sm border border-white/10 bg-black/20 p-1">
              {TABS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`${ids}-tab-${id}`}
                  aria-selected={mode === id}
                  aria-controls={`${ids}-panel-${id}`}
                  onClick={() => setMode(id)}
                  className={`flex h-9 items-center justify-center gap-2 rounded-[2px] text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                    mode === id ? "bg-white/15 font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]" : "text-white/80 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {label}
                </button>
              ))}
            </div>

            <div id={`${ids}-panel-url`} role="tabpanel" aria-labelledby={`${ids}-tab-url`} hidden={mode !== "url"}>
              <label className={field}>
                <Link2 className="h-4 w-4 shrink-0 text-white/80" aria-hidden />
                <span className="sr-only">Job posting link</span>
                <input
                  className={input}
                  type="url"
                  name="job-url"
                  inputMode="url"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="https://careers.company.com/jobs/…"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, url: true }))}
                  aria-invalid={touched.url && Boolean(urlProblem)}
                  aria-describedby={touched.url && urlProblem ? `${ids}-url-problem` : undefined}
                />
              </label>
              {touched.url && urlProblem ? (
                <p id={`${ids}-url-problem`} className={problem}>
                  {urlProblem}
                </p>
              ) : null}
            </div>

            <div id={`${ids}-panel-text`} role="tabpanel" aria-labelledby={`${ids}-tab-text`} hidden={mode !== "text"} className="grid gap-3">
              <div>
                <textarea
                  aria-label="Job description"
                  name="job-description"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Paste the whole JD: title, responsibilities, requirements, location…"
                  rows={4}
                  spellCheck={false}
                  className="block max-h-[34vh] min-h-28 w-full resize-y rounded-sm border border-white/15 bg-white/[0.06] px-4 py-3 text-[15px] leading-relaxed text-white outline-none transition-[border-color,background-color,box-shadow] placeholder:text-white/75 focus:border-white/45 focus:bg-white/[0.1] focus:shadow-[0_0_0_3px_rgba(255,255,255,0.08)]"
                />
                <p className={textProblem ? problem : "mt-1.5 text-[12px] tabular-nums text-white/75"} aria-live="polite">
                  {textProblem ??
                    (chars < MIN_JD_CHARS
                      ? `${chars.toLocaleString()} of ${MIN_JD_CHARS} characters minimum`
                      : `${chars.toLocaleString()} / ${MAX_JD_CHARS.toLocaleString()} characters`)}
                </p>
              </div>
              <div>
                <label className={field}>
                  <Globe className="h-4 w-4 shrink-0 text-white/80" aria-hidden />
                  <span className="sr-only">Company website</span>
                  <input
                    className={input}
                    name="company-website"
                    inputMode="url"
                    autoCapitalize="none"
                    autoComplete="off"
                    spellCheck={false}
                    placeholder="Company website, e.g. stripe.com"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, domain: true }))}
                    aria-invalid={touched.domain && Boolean(domainProblem)}
                    aria-describedby={touched.domain && domainProblem ? `${ids}-domain-problem` : undefined}
                  />
                </label>
                {touched.domain && domainProblem ? (
                  <p id={`${ids}-domain-problem`} className={problem}>
                    {domainProblem}
                  </p>
                ) : null}
              </div>
            </div>

            <label className={field}>
              <Building2 className="h-4 w-4 shrink-0 text-white/80" aria-hidden />
              <span className="sr-only">Company name (optional)</span>
              <input
                className={input}
                name="company"
                autoComplete="organization"
                placeholder="Company name (optional)"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </label>

            <CtaButton disabled={!jobReady} label="Start run" />
          </motion.form>
        ) : (
          <motion.form key="email" {...swap} onSubmit={start} noValidate className="mt-5 grid gap-3">
            <div className="flex items-center gap-3 rounded-sm border border-white/10 bg-black/20 px-3 py-2">
              {mode === "url" ? (
                <Link2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              ) : (
                <FileText className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              )}
              <span className="min-w-0 flex-1 truncate text-[13px] text-white" title={mode === "url" ? url : undefined}>
                {jobSummary}
              </span>
              <button
                type="button"
                onClick={() => {
                  setStep("job");
                  setServerError(null);
                }}
                className="inline-flex shrink-0 items-center gap-1 rounded-sm px-1.5 py-0.5 text-[12px] text-white/85 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <ArrowLeft className="h-3 w-3" aria-hidden />
                Change
              </button>
            </div>

            <div>
              <label htmlFor={`${ids}-email`} className="mb-1.5 block text-[14px] font-medium text-white">
                Where should we send your results?
              </label>
              <div className={field}>
                <Mail className="h-4 w-4 shrink-0 text-white/80" aria-hidden />
                <input
                  ref={emailRef}
                  id={`${ids}-email`}
                  className={input}
                  type="email"
                  name="email"
                  inputMode="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setServerError(null);
                  }}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  aria-invalid={Boolean(shownEmailProblem)}
                  aria-describedby={`${ids}-email-note`}
                />
              </div>
              <div id={`${ids}-email-note`} aria-live="polite">
                {shownEmailProblem ? (
                  <p className={problem}>
                    {shownEmailProblem.suggestion ? (
                      <>
                        Did you mean{" "}
                        <button
                          type="button"
                          onClick={() => applySuggestion(shownEmailProblem.suggestion!)}
                          className="underline underline-offset-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        >
                          {shownEmailProblem.suggestion}
                        </button>
                        ?
                      </>
                    ) : (
                      shownEmailProblem.message
                    )}
                  </p>
                ) : (
                  <p className="mt-1.5 text-[12px] text-white/75">Your work email works best. No password, no sign-up.</p>
                )}
              </div>
            </div>

            <CtaButton disabled={busy} busy={busy} label={busy ? "Checking your email…" : "Start run"} />
          </motion.form>
      )}
    </div>
  );
}

function CtaButton({ label, disabled, busy = false }: { label: string; disabled: boolean; busy?: boolean }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="group mt-1 flex h-12 items-center rounded-sm border-2 border-white/60 bg-white p-1 font-sans font-medium text-zinc-900 shadow-xl shadow-black/20 transition-[background-color,opacity] hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 disabled:cursor-not-allowed disabled:opacity-85"
    >
      <span className="flex-1 px-6 text-center text-[16px]">{label}</span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-zinc-900 text-white transition-transform group-enabled:group-hover:scale-105">
        {busy ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> : <ArrowRight className="h-5 w-5" aria-hidden />}
      </span>
    </button>
  );
}
