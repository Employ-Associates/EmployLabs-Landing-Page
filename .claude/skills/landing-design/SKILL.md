---
name: landing-design
description: The Weemploy landing-page design system — theme tokens, fonts, the glass eyebrow-tag pattern, section conventions, animation stack. Use BEFORE styling any landing-page component (new section, tag/pill, card, headline, marquee) so the look stays consistent instead of re-derived. Scope = landing-page/ only (Next 16 + Tailwind v4 + motion/react).
---

# Weemploy landing — design system

Reference for `landing-page/` (Next 16, React 19, Tailwind v4 CSS-first, `motion/react`).
Read this before adding/styling any section so new work matches. Source of truth:
`src/app/globals.css` (@theme tokens + keyframes). This doc mirrors it — if they
disagree, globals.css wins; update this file.

## Stack rules
- **Tailwind v4, no config.** Tokens live in `@theme` in `src/app/globals.css`; using
  a token name (`bg-surface`, `text-accent`) generates the utility. No `tailwind.config`.
- **Animation = `motion/react` only** (motion v12) + **Lenis** smooth scroll (root
  provider in `src/components/SmoothScroll.tsx`). NO GSAP — motion covers scroll-scrub
  (`useScroll`/`useTransform`) + reveals (`whileInView`); Lenis only adds inertial feel.
  Lenis runs in real-scroll mode, so `position: fixed`/`sticky` stay correct.
- **Fonts** (next/font vars, wired in `layout.tsx`):
  - `font-display` = **Outfit** → all headings/UI (default for h1–h6).
  - `font-title` = **Manuale** (serif) → ONLY the hero H1 wordmark-scale display.
  - `font-mono` = **JetBrains Mono** → eyebrows, stats labels, code-y chips.
  - Accent words inside a headline: use `italic text-accent` (SAME display font) —
    do NOT switch to `font-title` for inline accents (looks like a broken font swap).

## Palette (from @theme)
- `--color-accent: #55ea8c` (brand green) · `--color-accent-hover: #3dcc73` · `--color-gold: #e8b059`
- Dark surfaces: `--color-surface: #0e0e11` · `--color-card: #151515` · `--color-border: #242424`
- Page is **light by default** (`body` white). Sections opt into dark
  (`bg-zinc-950` / `bg-surface`). The whole post-hero page is wrapped in a
  `bg-zinc-950 text-zinc-100` div in `page.tsx` — most sections are dark.

## The glass eyebrow tag (dark sections) — REUSE VERBATIM
Every dark section's eyebrow/kicker uses this exact pill (icon + uppercase label):
```tsx
<div className="relative overflow-hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/70 backdrop-blur-md border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-6 shadow-lg before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:content-['']">
  <Icon className="w-3.5 h-3.5 text-white" />
  <span>Label</span>
</div>
```
Icon white, text `text-zinc-300`, the `before:` line is the top sheen. Used in
ParadigmShift, Trust, RolesStrip, etc.

## Glass surfaces (globals.css classes — apply INSTEAD of bg-/border- utilities)
- `.glass-card` — opaque dark card + hairline border + lit top-edge `::before`. For
  panels/pricing tiles. `.glass-card-accent` stacks on it for a "popular"/highlighted tile.
- `.liquid-glass` — near-transparent frosted control over video (FinalCTA), masked
  gradient ring border.
- `.glass-nav-light` — light frosted nav bar.

## Tone badges / status pills (bordered tint, NOT flat fill)
el-platform convention: `border-<c>/40 bg-<c>/[0.12] text-<c>` at ~full color.
- accent/green (good/done), amber (needs-you/warning), red (fail), sky (running).
- "Popular"/label chip: `rounded-full border border-accent/40 bg-accent/[0.12] px-2 py-0.5 text-[10px] text-accent`.
- Running: `<Loader2 className="animate-spin" />` + sky. Done: `<Check strokeWidth={3} />` + accent.

## Section conventions
- Vertical rhythm: `py-32 md:py-40` (hero-adjacent breather sections can be `py-24 md:py-28`).
- Container: `max-w-[1400px] mx-auto px-6 md:px-8`.
- Big section headline: `text-6xl md:text-7xl lg:text-8xl font-display tracking-tight`.
  Standard: `text-5xl md:text-6xl lg:text-7xl`. Sub: `text-3xl md:text-4xl lg:text-5xl`.
- Reveal: `initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}`.
- Corners: cards/CTAs use `rounded-sm` (the house radius); floating capsule nav `rounded-lg`;
  chips/pills/tags `rounded-full`.
- Icon chip (light-on-dark): `grid h-11 w-11 place-items-center rounded-sm bg-white` + `text-black` icon.

## Marquee (auto-scroll row)
Duplicate the array, `flex w-max`, `motion.div animate x ["0%","-50%"]` (reverse row uses
`["-50%","0%"]`), `ease:linear duration:~38 repeat:Infinity`, edge-masked with
`maskImage: linear-gradient(to right, transparent, black 12%, black 88%, transparent)`.

## Custom keyframes (globals.css)
`dashFlow` (spoke stroke flow) · `connPacket` (funnel connector packet) · `ctaBob` (window bob,
scale 1.5) · `sceneSway`/`isoFloat*`/`gatePulse`/`beamFlow` (iso scene). Reuse before inventing.

## Page order (page.tsx)
Nav → Hero → [dark wrapper: SocialProof → ParadigmShift → RolesStrip → Funnel → Agents →
HumanAtGates → Trust → Pricing → CustomerSpotlight → FinalCTA → Footer].

## Product truth (don't invent claims)
No SOC2/GDPR/CCPA/ISO — company has none; say "we don't sell/share your data" instead.
Agents: **Meera** (recruiter copilot — sources/scores/orchestrates), **Zia** (candidate
outreach), **Naira** (voice interviewer). On the hero, do NOT name agents (cold visitors
don't know them); name them only in the agent-team sections. All CTAs → `https://app.weemploy.ai`.
