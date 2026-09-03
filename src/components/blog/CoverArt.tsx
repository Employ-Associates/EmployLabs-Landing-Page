import type { BlogCategory, Motif } from "@/content/blog/types";

/**
 * Every post carries a cover. Rather than commission or stock-source one per
 * post, each motif is a geometric figure that says something true about its
 * subject — rising-then-falling bars for the requirement ceiling, three
 * verdict rows for evidence-backed scoring, a dashed ceiling line for spend
 * caps. Drawn inline so there is no asset to host and no layout shift.
 *
 * Tint is by category so the index reads at a glance.
 */

const TINT: Record<BlogCategory, string> = {
  update: "#55ea8c", // --color-accent
  article: "#e8b059", // --color-gold
  compare: "#6ea8fe", // comparison blue, blog-only
};

const WELL = "#0e0e11"; // --color-surface
const LINE = "#2a322c";
const MUTE = "#242c26";
const MUTE_LINE = "#2f3831";

type Props = {
  motif: Motif;
  category: BlogCategory;
  className?: string;
};

export function CoverArt({ motif, category, className }: Props) {
  const t = TINT[category];
  const gid = `cover-${motif}-${category}`;

  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={t} stopOpacity="0.55" />
          <stop offset="1" stopColor={t} stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill={WELL} />
      {render(motif, t, `url(#${gid})`)}
    </svg>
  );
}

function render(motif: Motif, t: string, grad: string) {
  switch (motif) {
    case "bars":
      return (
        <>
          {[70, 104, 150, 96, 58, 32].map((h, i) => (
            <rect
              key={i}
              x={44 + i * 40}
              y={146 - h}
              width={24}
              height={h}
              rx={3}
              fill={i === 2 ? grad : MUTE}
              stroke={i === 2 ? t : MUTE_LINE}
            />
          ))}
          <line x1={30} y1={147} x2={290} y2={147} stroke={LINE} />
        </>
      );

    case "rows":
      return (
        <>
          {[
            [54, t, 1],
            [90, "#e8b059", 0.85],
            [126, "#ff8b7a", 0.85],
          ].map(([y, c, o], i) => (
            <g key={i} opacity={o as number}>
              <circle cx={52} cy={y as number} r={8} fill="none" stroke={c as string} strokeWidth={1.5} />
              <rect x={72} y={(y as number) - 5} width={140 - ((y as number) - 54) / 2} height={4} rx={2} fill={c as string} opacity={0.5} />
              <rect x={72} y={(y as number) + 3} width={196 - ((y as number) - 54)} height={3} rx={1.5} fill="#39423b" />
            </g>
          ))}
        </>
      );

    case "funnel":
      return (
        <>
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={60 + i * 17}
              y={40 + i * 24}
              width={200 - i * 34}
              height={14}
              rx={4}
              fill={i === 3 ? grad : MUTE}
              stroke={i === 3 ? t : MUTE_LINE}
            />
          ))}
        </>
      );

    case "channels":
      return (
        <>
          {[46, 76, 106, 136].map((y) => (
            <line key={`l${y}`} x1={66} y1={y} x2={196} y2={90} stroke={MUTE_LINE} strokeWidth={1.4} />
          ))}
          {[46, 76, 106, 136].map((y) => (
            <circle key={`c${y}`} cx={66} cy={y} r={6} fill="#151a16" stroke="#3a443d" strokeWidth={1.4} />
          ))}
          <circle cx={196} cy={90} r={17} fill={grad} stroke={t} strokeWidth={1.5} />
          <circle cx={196} cy={90} r={5} fill={t} />
        </>
      );

    case "timeline":
      return (
        <>
          <line x1={46} y1={90} x2={274} y2={90} stroke={LINE} strokeWidth={1.5} />
          {[46, 103, 160, 217, 274].map((x, i) => (
            <circle
              key={x}
              cx={x}
              cy={90}
              r={i === 4 ? 11 : 7}
              fill={i === 4 ? grad : "#151a16"}
              stroke={i === 4 ? t : "#3a443d"}
              strokeWidth={1.5}
            />
          ))}
        </>
      );

    case "ceiling":
      return (
        <>
          <line x1={40} y1={58} x2={280} y2={58} stroke={t} strokeWidth={2} strokeDasharray="7 5" />
          {[46, 30, 44, 38].map((h, i) => (
            <rect key={i} x={66 + i * 48} y={146 - h - 30} width={26} height={h + 30} rx={3} fill={MUTE} stroke={MUTE_LINE} />
          ))}
          <line x1={40} y1={147} x2={280} y2={147} stroke={LINE} />
        </>
      );

    case "market":
      return (
        <>
          {Array.from({ length: 34 }, (_, i) => {
            const x = 34 + ((i * 97) % 250);
            const y = 30 + ((i * 53) % 118);
            const hot = i % 9 === 0;
            return <circle key={i} cx={x} cy={y} r={hot ? 5 : 3} fill={hot ? t : "#333c36"} opacity={hot ? 0.92 : 0.8} />;
          })}
          <rect x={150} y={42} width={86} height={66} rx={8} fill="none" stroke={t} strokeOpacity={0.45} strokeDasharray="5 4" />
        </>
      );

    case "report":
      return (
        <>
          <rect x={76} y={26} width={168} height={128} rx={9} fill="#151a16" stroke={MUTE_LINE} />
          {[44, 58, 72].map((y) => (
            <rect key={y} x={94} y={y} width={132 - (y - 44) * 1.6} height={4} rx={2} fill="#39423b" />
          ))}
          <rect x={94} y={90} width={132} height={26} rx={5} fill={grad} stroke={t} strokeOpacity={0.6} />
          <rect x={104} y={99} width={72} height={4} rx={2} fill={t} opacity={0.75} />
          {[128, 138].map((y) => (
            <rect key={y} x={94} y={y} width={132 - (y - 128) * 3} height={4} rx={2} fill="#39423b" />
          ))}
        </>
      );

    case "versus":
      return (
        <>
          <rect x={44} y={36} width={106} height={108} rx={9} fill="#151a16" stroke={MUTE_LINE} />
          <rect x={170} y={36} width={106} height={108} rx={9} fill={grad} stroke={t} strokeOpacity={0.55} />
          {[58, 72, 86, 100].map((y, i) => (
            <rect key={`a${y}`} x={60} y={y} width={74 - i * 9} height={4} rx={2} fill="#39423b" />
          ))}
          {[58, 72, 86, 100].map((y, i) => (
            <rect key={`b${y}`} x={186} y={y} width={74 - i * 5} height={4} rx={2} fill={t} opacity={0.6} />
          ))}
        </>
      );

    case "consent":
      return (
        <>
          <path
            d="M160 32 L212 52 V96 C212 124 188 142 160 150 C132 142 108 124 108 96 V52 Z"
            fill={grad}
            stroke={t}
            strokeWidth={1.6}
          />
          <rect x={146} y={82} width={28} height={22} rx={4} fill={WELL} stroke={t} strokeWidth={1.4} />
          <path d="M152 82 V74 a8 8 0 0 1 16 0 V82" fill="none" stroke={t} strokeWidth={1.4} />
        </>
      );

    case "calendar":
      return (
        <>
          <rect x={80} y={34} width={160} height={118} rx={9} fill="#151a16" stroke={MUTE_LINE} />
          <line x1={80} y1={62} x2={240} y2={62} stroke={MUTE_LINE} />
          {Array.from({ length: 15 }, (_, i) => {
            const x = 98 + (i % 5) * 30;
            const y = 78 + Math.floor(i / 5) * 26;
            const hot = i === 8;
            return (
              <rect key={i} x={x} y={y} width={18} height={14} rx={3} fill={hot ? grad : MUTE} stroke={hot ? t : MUTE_LINE} />
            );
          })}
        </>
      );
  }
}
