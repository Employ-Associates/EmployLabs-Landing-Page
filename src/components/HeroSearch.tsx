"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Building2, Check, FileText, Globe, Link2, Loader2, Mail } from "lucide-react";

import {
  cleanJdText,
  domainIssue,
  emailIssue,
  jdContentIssue,
  MAX_JD_CHARS,
  MAX_RUN_URL_CHARS,
  MIN_JD_CHARS,
  normalizeUrl,
  requestInvite,
  runUrl,
  unreadableBoard,
  urlIssue,
  type JobSource,
} from "@/lib/search-prospects";

type Mode = JobSource["mode"];
type Step = "job" | "email" | "launch";

const TABS: { id: Mode; label: string; icon: typeof Link2 }[] = [
  { id: "url", label: "Job link", icon: Link2 },
  { id: "text", label: "Paste JD", icon: FileText },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const field =
  "flex h-12 items-center gap-3 rounded-sm border border-white/15 bg-white/[0.06] px-4 transition-[border-color,background-color,box-shadow] focus-within:border-white/45 focus-within:bg-white/[0.1] focus-within:shadow-[0_0_0_3px_rgba(255,255,255,0.08)]";
const input = "h-full min-w-0 flex-1 bg-transparent text-[15px] text-white outline-none placeholder:text-white/75";
const problem = "pt-1.5 text-[13px] text-[#ffb4a8]";

/** How long "Opening your search" shows before the page changes, so it reads as a beat, not a flash. */
const LAUNCH_MIN_MS = 650;

/** Animates its own height as its content changes, so a step swap never makes the card jump. */
function AutoHeight({ children, instant }: { children: ReactNode; instant: boolean }) {
  const inner = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">("auto");
  useLayoutEffect(() => {
    const el = inner.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => setHeight(el.offsetHeight));
    ro.observe(el);
    setHeight(el.offsetHeight);
    return () => ro.disconnect();
  }, []);
  return (
    <motion.div
      animate={{ height }}
      initial={false}
      transition={instant ? { duration: 0 } : { duration: 0.32, ease: EASE }}
      className="overflow-hidden"
      // Room for the focus ring that sits outside the fields.
      style={{ margin: "0 -4px", padding: "0 4px" }}
    >
      <div ref={inner}>{children}</div>
    </motion.div>
  );
}

/** A message that grows into place instead of shoving the form down. */
function Reveal({ show, children }: { show: boolean; children: ReactNode }) {
  return (
    <AnimatePresence initial={false}>
      {show ? (
        <motion.div
          key="r"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.22, ease: EASE }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/**
 * The hero's search card: a job (link or pasted JD) → an email → the run opens
 * on app.employlabs.ai/search-prospects and starts on its own.
 */
export function HeroSearch() {
  const reduce = useReducedMotion() ?? false;
  const ids = useId();
  const [step, setStep] = useState<Step>("job");
  const [mode, setMode] = useState<Mode>("url");
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [domain, setDomain] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState({ url: false, domain: false, email: false, text: false });
  const [serverError, setServerError] = useState<{ message: string; suggestion?: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const domainRef = useRef<HTMLInputElement>(null);
  const launching = useRef(false);
  /** A field to focus as soon as its panel mounts (a tab swap waits for the old panel to leave). */
  const [autoFocusField, setAutoFocusField] = useState<"url" | "text" | null>(null);

  const cleaned = cleanJdText(text);
  const chars = cleaned.length;
  const urlProblem = url.trim() ? urlIssue(url) : touched.url ? "Paste a job link to start." : null;
  const urlHost = (() => {
    try {
      return url.trim() ? new URL(normalizeUrl(url)).hostname : "";
    } catch {
      return "";
    }
  })();
  const domainProblem = domain.trim()
    ? domainIssue(domain)
    : touched.domain
      ? "Enter the company's website, e.g. stripe.com."
      : null;
  const lengthProblem =
    chars > MAX_JD_CHARS
      ? `That's ${chars.toLocaleString("en-US")} characters, over the ${MAX_JD_CHARS.toLocaleString("en-US")} limit. Keep the role, requirements and location.`
      : null;
  const content = chars >= MIN_JD_CHARS || /^(?:https?:\/\/|www\.)\S+$/i.test(cleaned) ? jdContentIssue(cleaned) : null;
  const textProblem = lengthProblem ?? content?.message ?? null;
  const jobReady =
    mode === "url"
      ? url.trim().length > 0 && !urlProblem
      : chars >= MIN_JD_CHARS && !textProblem && domain.trim().length > 0 && !domainProblem;

  const emailProblem = emailIssue(email);
  const shownEmailProblem = serverError ?? (touched.email && email.trim() ? emailProblem : null);

  const job = (): JobSource =>
    mode === "url" ? { mode, url, companyName } : { mode, text: cleaned, domain, companyName };

  // Back from the app (bfcache) restores this page mid-hand-off: let them go again.
  useEffect(() => {
    const onShow = (e: PageTransitionEvent) => {
      if (!e.persisted) return;
      launching.current = false;
      setBusy(false);
      setStep((s) => (s === "launch" ? "email" : s));
    };
    window.addEventListener("pageshow", onShow);
    return () => window.removeEventListener("pageshow", onShow);
  }, []);

  const toEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTouched((t) => ({ ...t, url: true, domain: true, text: true }));
    if (!jobReady) {
      // Put the cursor on whatever is wrong.
      if (mode === "url") urlRef.current?.focus();
      else if (chars < MIN_JD_CHARS || textProblem) textRef.current?.focus();
      else domainRef.current?.focus();
      return;
    }
    if (mode === "url") setUrl(normalizeUrl(url));
    setStep("email");
  };

  const start = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched((t) => ({ ...t, email: true }));
    setServerError(null);
    if (emailProblem || busy || launching.current) return;
    setBusy(true);
    const res = await requestInvite(email, companyName);
    if (!res.ok) {
      setBusy(false);
      setServerError({ message: res.message, suggestion: res.suggestion });
      emailRef.current?.focus();
      return;
    }
    const href = runUrl(res.path, job());
    if (href.length > MAX_RUN_URL_CHARS) {
      setBusy(false);
      setServerError({ message: "That job description is too long to carry over. Shorten it, or use the job link instead." });
      return;
    }
    launching.current = true;
    setStep("launch");
    window.setTimeout(() => window.location.assign(href), reduce ? 0 : LAUNCH_MIN_MS);
  };

  const applySuggestion = (s: string) => {
    setEmail(s);
    setServerError(null);
    emailRef.current?.focus();
  };

  const switchToLink = (link: string) => {
    setUrl(link);
    setText("");
    setMode("url");
    setTouched((t) => ({ ...t, url: false, text: false }));
    setAutoFocusField("url");
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
      : `Pasted JD · ${chars.toLocaleString("en-US")} characters`;

  // Same props on server and client (no hydration mismatch); `MotionConfig reducedMotion="user"`
  // below turns the movement off for people who ask for less, leaving only the fade.
  const swap = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.28, delay: 0.06, ease: EASE } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.14, ease: "easeIn" as const } },
  };
  const panelSwap = {
    initial: { opacity: 0, x: 12 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.24, ease: EASE } },
    exit: { opacity: 0, x: -12, transition: { duration: 0.12 } },
  };

  const meter = Math.min(1, chars / MAX_JD_CHARS);
  const nearLimit = chars > MAX_JD_CHARS * 0.9 && !lengthProblem;

  return (
    <MotionConfig reducedMotion="user">
    <div className="liquid-glass hero-glass w-full rounded-sm p-5 sm:p-6 text-white backdrop-blur-xl backdrop-saturate-150">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/85">From a job to real insights</p>
      <h2 className="mt-2 font-display text-[26px] sm:text-[30px] leading-[1.1] tracking-tight font-medium text-balance">
        Find the talent your role <span className="italic text-accent">actually needs.</span>
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-white/90 text-pretty">
        Discover the right candidates, understand your talent market, and build a stronger shortlist in minutes.
      </p>

      <div className="mt-5">
        <AutoHeight instant={reduce}>
          <AnimatePresence mode="wait" initial={false}>
            {step === "job" ? (
              <motion.form key="job" {...swap} onSubmit={toEmail} noValidate className="grid gap-3">
                <div role="tablist" aria-label="Job source" className="relative grid grid-cols-2 gap-1 rounded-sm border border-white/10 bg-black/20 p-1">
                  {TABS.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      type="button"
                      role="tab"
                      id={`${ids}-tab-${id}`}
                      aria-selected={mode === id}
                      aria-controls={`${ids}-panel-${id}`}
                      tabIndex={mode === id ? 0 : -1}
                      onKeyDown={(e) => {
                        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
                        e.preventDefault();
                        const next = TABS[(TABS.findIndex((t) => t.id === id) + (e.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length]!;
                        setAutoFocusField(null);
                        setMode(next.id);
                        document.getElementById(`${ids}-tab-${next.id}`)?.focus();
                      }}
                      onClick={() => {
                        setAutoFocusField(null);
                        setMode(id);
                      }}
                      className={`relative flex h-9 items-center justify-center gap-2 rounded-[2px] text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                        mode === id ? "font-medium text-white" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {mode === id ? (
                        <motion.span
                          layoutId={`${ids}-tab-pill`}
                          aria-hidden
                          className="absolute inset-0 rounded-[2px] bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 520, damping: 40 }}
                        />
                      ) : null}
                      <Icon className="relative h-4 w-4" aria-hidden />
                      <span className="relative">{label}</span>
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  {mode === "url" ? (
                    <motion.div
                      key="url"
                      {...panelSwap}
                      id={`${ids}-panel-url`}
                      role="tabpanel"
                      aria-labelledby={`${ids}-tab-url`}
                    >
                      <label className={field}>
                        <Link2 className="h-4 w-4 shrink-0 text-white/80" aria-hidden />
                        <span className="sr-only">Job posting link</span>
                        <input
                          ref={urlRef}
                          autoFocus={autoFocusField === "url"}
                          className={input}
                          type="text"
                          name="job-url"
                          inputMode="url"
                          autoComplete="off"
                          autoCapitalize="none"
                          spellCheck={false}
                          placeholder="https://careers.company.com/jobs/…"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, url: true }))}
                          aria-invalid={touched.url && Boolean(urlProblem)}
                          aria-describedby={touched.url && urlProblem ? `${ids}-url-problem` : undefined}
                        />
                      </label>
                      <Reveal show={!urlProblem && /(?:^|\.)linkedin\.com$/i.test(urlHost)}>
                        <p className="pt-1.5 text-[12px] text-white/75">
                          LinkedIn doesn&apos;t share the company&apos;s website, so we&apos;ll ask for it on the next screen.
                        </p>
                      </Reveal>
                      <Reveal show={touched.url && Boolean(urlProblem)}>
                        <p id={`${ids}-url-problem`} className={problem} role="alert">
                          {urlProblem}
                          {unreadableBoard(url) ? (
                            <>
                              {" "}
                              <button
                                type="button"
                                onClick={() => {
                                  setAutoFocusField("text");
                                  setMode("text");
                                  setTouched((t) => ({ ...t, url: false }));
                                }}
                                className="underline underline-offset-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                              >
                                Paste the JD
                              </button>
                            </>
                          ) : null}
                        </p>
                      </Reveal>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="text"
                      {...panelSwap}
                      id={`${ids}-panel-text`}
                      role="tabpanel"
                      aria-labelledby={`${ids}-tab-text`}
                      className="grid gap-3"
                    >
                      <div>
                        <textarea
                          ref={textRef}
                          autoFocus={autoFocusField === "text"}
                          aria-label="Job description"
                          name="job-description"
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, text: true }))}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) toEmail(e);
                          }}
                          placeholder="Paste the whole JD: title, responsibilities, requirements, location…"
                          rows={4}
                          spellCheck={false}
                          aria-invalid={Boolean(textProblem)}
                          aria-describedby={`${ids}-text-note`}
                          className="block max-h-[34vh] min-h-28 w-full resize-y rounded-sm border border-white/15 bg-white/[0.06] px-4 py-3 text-[15px] leading-relaxed text-white outline-none transition-[border-color,background-color,box-shadow] placeholder:text-white/75 focus:border-white/45 focus:bg-white/[0.1] focus:shadow-[0_0_0_3px_rgba(255,255,255,0.08)]"
                        />
                        <div
                          aria-hidden
                          className="mt-2 h-[2px] overflow-hidden rounded-full bg-white/10"
                        >
                          <motion.i
                            className={`block h-full origin-left rounded-full ${textProblem ? "bg-[#ffb4a8]" : nearLimit ? "bg-gold" : "bg-accent"}`}
                            initial={false}
                            animate={{ scaleX: chars < MIN_JD_CHARS ? Math.max(0.02, (chars / MIN_JD_CHARS) * 0.35) : 0.35 + meter * 0.65 }}
                            transition={reduce ? { duration: 0 } : { duration: 0.25, ease: EASE }}
                          />
                        </div>
                        <div id={`${ids}-text-note`} aria-live="polite">
                          <p
                            className={`mt-1.5 text-[12px] tabular-nums ${
                              textProblem ? "text-[#ffb4a8]" : nearLimit ? "text-gold" : "text-white/75"
                            }`}
                          >
                            {textProblem ??
                              (chars < MIN_JD_CHARS
                                ? `${chars.toLocaleString("en-US")} of ${MIN_JD_CHARS} characters minimum`
                                : `${chars.toLocaleString("en-US")} / ${MAX_JD_CHARS.toLocaleString("en-US")} characters`)}
                            {content?.switchToLink ? (
                              <>
                                {" "}
                                <button
                                  type="button"
                                  onClick={() => switchToLink(content.switchToLink!)}
                                  className="underline underline-offset-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                                >
                                  Use as job link
                                </button>
                              </>
                            ) : null}
                          </p>
                        </div>
                      </div>
                      <div>
                        <label className={field}>
                          <Globe className="h-4 w-4 shrink-0 text-white/80" aria-hidden />
                          <span className="sr-only">Company website</span>
                          <input
                            ref={domainRef}
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
                        <Reveal show={touched.domain && Boolean(domainProblem)}>
                          <p id={`${ids}-domain-problem`} className={problem} role="alert">
                            {domainProblem}
                          </p>
                        </Reveal>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <label className={field}>
                  <Building2 className="h-4 w-4 shrink-0 text-white/80" aria-hidden />
                  <span className="sr-only">Company name (optional)</span>
                  <input
                    className={input}
                    name="company"
                    autoComplete="organization"
                    maxLength={120}
                    placeholder="Company name (optional)"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </label>

                <CtaButton disabled={false} label="Start run" />
              </motion.form>
            ) : step === "email" ? (
              <motion.form key="email" {...swap} onSubmit={start} noValidate className="grid gap-3">
                <div className="flex items-center gap-3 rounded-sm border border-white/10 bg-black/20 px-3 py-2">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/20 text-accent" aria-hidden>
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
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
                    Your work email
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
                      autoFocus
                      disabled={busy}
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
                      <p className={`mt-1.5 text-[13px] text-[#ffb4a8]`}>
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
                      <p className="mt-1.5 text-[12px] text-white/75">We use it to open your search here. No password, no sign-up.</p>
                    )}
                  </div>
                </div>

                <CtaButton disabled={busy} busy={busy} label={busy ? "Checking your email…" : "Start run"} />
              </motion.form>
            ) : (
              <motion.div key="launch" {...swap} role="status" aria-live="polite" className="grid justify-items-center gap-3 py-6 text-center">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 420, damping: 22 }}
                  className="grid h-11 w-11 place-items-center rounded-full bg-accent text-zinc-950"
                >
                  <Check className="h-5 w-5" strokeWidth={3} aria-hidden />
                </motion.span>
                <p className="font-display text-[19px] font-medium">Opening your search</p>
                <p className="max-w-[28ch] truncate text-[13px] text-white/80">{jobSummary}</p>
                <span aria-hidden className="relative mt-1 h-[2px] w-40 overflow-hidden rounded-full bg-white/15">
                  <motion.i
                    className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: reduce ? 0 : LAUNCH_MIN_MS / 1000 + 0.4, ease: EASE }}
                  />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </AutoHeight>
      </div>
    </div>
    </MotionConfig>
  );
}

function CtaButton({ label, disabled, busy = false }: { label: string; disabled: boolean; busy?: boolean }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      aria-busy={busy}
      className="group mt-1 flex h-12 items-center rounded-sm border-2 border-white/60 bg-white p-1 font-sans font-medium text-zinc-900 shadow-xl shadow-black/20 transition-[background-color,opacity,transform] hover:bg-zinc-100 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 disabled:cursor-not-allowed disabled:opacity-85"
    >
      <span className="flex-1 px-6 text-center text-[16px]">{label}</span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-zinc-900 text-white transition-transform group-enabled:group-hover:scale-105">
        {busy ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> : <ArrowRight className="h-5 w-5" aria-hidden />}
      </span>
    </button>
  );
}
