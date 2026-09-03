import type { ReactNode } from "react";

/**
 * The prose kit every post is built from.
 *
 * Two jobs: keep 12 posts typographically identical, and keep the markup
 * semantic enough that an assistant chunking the page gets clean, quotable
 * units — real <h2>, real <ol>, real <figure>/<figcaption>, no div soup.
 *
 * Body copy is Manuale (`font-title`). The landing design system reserves
 * that face for hero display, but the blog is a long-form reading surface
 * the landing page does not have, and Outfit at 1,500 words is tiring.
 * Deliberate extension, noted here so it does not read as a mistake.
 */

export function P({ children }: { children: ReactNode }) {
  return <p className="font-title text-[17px] md:text-lg leading-[1.75] text-zinc-300 my-6">{children}</p>;
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white mt-14 mb-2 text-balance">
      {children}
    </h2>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

/** The answer-first block. Rendered once, directly under the byline. */
export function Answer({ children }: { children: ReactNode }) {
  return (
    <div className="glass-card rounded-sm p-6 md:p-7 my-8">
      <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">In short</div>
      <p className="font-title text-[17px] md:text-lg leading-[1.7] text-zinc-200">{children}</p>
    </div>
  );
}

export function Pull({ children }: { children: ReactNode }) {
  return (
    <p className="my-11 pl-6 border-l-[3px] border-accent font-display text-xl md:text-2xl font-medium leading-snug tracking-tight text-white">
      {children}
    </p>
  );
}

export function Steps({ children }: { children: ReactNode }) {
  return (
    <ol className="my-7 pl-6 list-decimal marker:text-accent marker:font-mono font-title text-[17px] md:text-lg leading-[1.7] text-zinc-300 space-y-4">
      {children}
    </ol>
  );
}

export function Bullets({ children }: { children: ReactNode }) {
  return (
    <ul className="my-7 pl-6 list-disc marker:text-accent font-title text-[17px] md:text-lg leading-[1.7] text-zinc-300 space-y-4">
      {children}
    </ul>
  );
}

export function Figure({ children, caption }: { children: ReactNode; caption: string }) {
  return (
    <figure className="my-11">
      {children}
      <figcaption className="mt-3 font-mono text-[11px] leading-relaxed text-zinc-500">{caption}</figcaption>
    </figure>
  );
}

/** A simple two-column comparison table. Tables extract well for assistants. */
export function CompareTable({
  head,
  rows,
}: {
  head: [string, string, string];
  rows: [string, string, string][];
}) {
  return (
    <div className="my-10 overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border">
            {head.map((h) => (
              <th key={h} className="py-3 pr-6 font-mono text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-b border-border/60 align-top">
              <td className="py-4 pr-6 font-display text-[15px] font-medium text-white">{r[0]}</td>
              <td className="py-4 pr-6 font-title text-[15px] leading-relaxed text-zinc-400">{r[1]}</td>
              <td className="py-4 font-title text-[15px] leading-relaxed text-zinc-400">{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── product figures ─────────────────────────────────────────────────── */

type Verdict = "met" | "unstated" | "failed";

const VERDICT = {
  met: { label: "Met", cls: "text-accent border-accent/35 bg-accent/[0.14]", glyph: "✓" },
  unstated: { label: "Not stated", cls: "text-gold border-gold/35 bg-gold/[0.13]", glyph: "?" },
  failed: { label: "Not met", cls: "text-[#ff8b7a] border-[#ff8b7a]/35 bg-[#ff8b7a]/[0.13]", glyph: "×" },
} as const;

export function RequirementCard({
  name,
  role,
  alignment,
  rows,
}: {
  name: string;
  role: string;
  alignment: string;
  rows: { label: string; verdict: Verdict; evidence: ReactNode }[];
}) {
  return (
    <div className="glass-card rounded-sm overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-border">
        <div>
          <div className="font-display text-base font-semibold tracking-tight text-white">{name}</div>
          <div className="text-[12.5px] text-zinc-500 mt-0.5">{role}</div>
        </div>
        <span className="rounded-full border border-accent/40 bg-accent/[0.12] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
          {alignment}
        </span>
      </div>
      {rows.map((r) => {
        const v = VERDICT[r.verdict];
        return (
          <div key={r.label} className="px-5 py-4 border-b border-border last:border-b-0">
            <div className="flex items-start gap-3">
              <span className={`mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border text-[10px] font-bold ${v.cls}`}>
                {v.glyph}
              </span>
              <span className="flex-1 font-display text-[14.5px] font-medium text-white">{r.label}</span>
              <span className={`shrink-0 pt-0.5 font-mono text-[9.5px] uppercase tracking-widest ${v.cls.split(" ")[0]}`}>
                {v.label}
              </span>
            </div>
            <div
              className={`mt-2 pl-[30px] font-title text-[13px] leading-relaxed ${
                r.verdict === "unstated" ? "text-gold/90" : "text-zinc-400"
              }`}
            >
              {r.evidence}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Compounding-rejection funnel. Values are labelled illustrative in the caption. */
export function PoolFunnel({ rows }: { rows: { label: string; pct: number; tone?: "warn" | "bad" }[] }) {
  return (
    <div className="glass-card rounded-sm p-6">
      <div className="font-mono text-[10.5px] uppercase tracking-widest text-zinc-500 mb-6">
        What each hard requirement does to a pool of 100
      </div>
      <div className="flex flex-col gap-2.5">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[110px_1fr_44px] items-center gap-3.5">
            <span className="font-mono text-[11px] text-zinc-500">{r.label}</span>
            <span className="h-[26px] rounded-sm bg-[#181c19] overflow-hidden">
              <span
                className={`block h-full rounded-sm border ${
                  r.tone === "bad"
                    ? "bg-[#ff8b7a]/25 border-[#ff8b7a]/50"
                    : r.tone === "warn"
                      ? "bg-gold/25 border-gold/50"
                      : "bg-[#2a322c] border-[#333b35]"
                }`}
                style={{ width: `${r.pct}%` }}
              />
            </span>
            <span
              className={`text-right font-mono text-[13px] tabular-nums ${
                r.tone === "bad" ? "text-[#ff8b7a]" : r.tone === "warn" ? "text-gold" : "text-zinc-400"
              }`}
            >
              {r.pct}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
