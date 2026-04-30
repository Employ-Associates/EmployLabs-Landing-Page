import React from 'react';
import { EyebrowPill } from './primitives';
import type { IndustryCategory } from './types';

export const NairaCoverage: React.FC = () => {
  const cats: IndustryCategory[] = [
    { tag: 'ENG', name: 'Engineering', roles: 'Backend · Frontend · DevOps · ML · Security' },
    { tag: 'SLS', name: 'Sales', roles: 'AEs · SDRs · Sales Eng · RevOps' },
    { tag: 'PRD', name: 'Product', roles: 'PMs · Designers · Analysts' },
    { tag: 'MKT', name: 'Marketing', roles: 'Brand · Demand Gen · Content · Growth' },
    { tag: 'HR', name: 'People & HR', roles: 'HRBPs · Recruiters · Comp · L&D' },
    { tag: 'FIN', name: 'Finance', roles: 'FP&A · Accounting · Treasury' },
    { tag: 'OPS', name: 'Operations', roles: 'BizOps · PgM · Strategy · Procurement' },
    { tag: 'CS', name: 'Customer Success', roles: 'CSMs · TAMs · Implementation' },
    { tag: 'LGL', name: 'Legal', roles: 'Counsel · Compliance · Contracts' },
    { tag: 'RX', name: 'Healthcare / Regulated', roles: 'Clinical Ops · Pharma · MSLs' },
  ];

  return (
    <section className="relative py-20 bg-black border-y border-zinc-900" data-screen-label="Coverage">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <EyebrowPill accent="purple">10 Role Categories · 4 Seniority Tiers</EyebrowPill>
            <h2 className="mt-5 text-3xl md:text-5xl font-medium tracking-tight leading-[1.05] text-white max-w-3xl">
              If you can write a JD, Naira can run the assessment.
            </h2>
          </div>
          <p className="text-[15px] text-zinc-400 max-w-md leading-relaxed">
            Drop in any role description. Naira reads the ICP, the JTBDs, and the seniority — and composes an interview that fits.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-zinc-800/50 border border-zinc-800">
          {cats.map((c) => (
            <div key={c.tag} className="bg-black/60 px-5 py-5 hover:bg-purple-950/20 transition-colors duration-300 group">
              <div className="font-mono text-[10px] tracking-widest text-purple-400/70 mb-2">{c.tag}</div>
              <div className="text-[15px] font-medium text-white mb-2">{c.name}</div>
              <div className="text-[11px] text-zinc-500 leading-snug">{c.roles}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
