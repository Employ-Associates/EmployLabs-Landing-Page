'use client';

import React from 'react';
import type { IconProps, ButtonProps, NewPillProps, EyebrowPillProps, EyebrowProps, MonoTagProps } from './types';

export const Icon: React.FC<IconProps> = ({ name, size = 18, className = '', ...rest }) => {
  const paths: Record<string, React.ReactNode> = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    check: <path d="M20 6L9 17l-5-5" />,
    brain: <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 7 19.5v-15A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 2.5 2.5h0a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 14.5 2Z"/></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    userCheck: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M17 11l2 2 4-4"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
    target: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
    trending: <><path d="M22 7l-9.5 9.5-5-5L1 18"/><path d="M16 7h6v6"/></>,
    search: <><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    menu: <><path d="M3 12h18M3 6h18M3 18h18"/></>,
  };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}>{paths[name]}</svg>
  );
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', icon = false, children, className = '', ...rest }) => {
  const base = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer border';
  const variants = {
    primary: 'bg-white text-black hover:bg-zinc-200 border-transparent shadow-[0_0_20px_rgba(255,255,255,0.15)]',
    outline: 'bg-transparent text-white border-zinc-700 hover:bg-white/10 hover:border-zinc-600',
    secondary: 'bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700',
    ghost: 'bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-zinc-800/50',
  };
  const sizes = { sm: 'text-xs px-4 py-1.5', md: 'text-sm px-6 py-2.5', lg: 'text-base px-8 py-3.5 gap-2' };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
      {icon && <Icon name="arrow" size={16} className="ml-2" />}
    </button>
  );
};

export const NewPill: React.FC<NewPillProps> = ({ children }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-800">
    <span className="rounded-full bg-neutral-900 px-2 py-0.5 text-xs font-semibold text-white">New</span>
    {children}
  </div>
);

export const EyebrowPill: React.FC<EyebrowPillProps> = ({ children, accent = 'blue' }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full">
    <span className={`w-1.5 h-1.5 rounded-full ${accent === 'purple' ? 'bg-purple-400' : accent === 'emerald' ? 'bg-emerald-400' : 'bg-blue-400'}`}></span>
    <span className="text-sm text-zinc-400 font-medium">{children}</span>
  </div>
);

export const Eyebrow: React.FC<EyebrowProps> = ({ children }) => (
  <p className="text-sm font-medium tracking-widest text-center uppercase text-zinc-500">{children}</p>
);

export const MonoTag: React.FC<MonoTagProps> = ({ children, tone = 'neutral' }) => {
  const tones = {
    neutral: 'text-zinc-600 bg-zinc-900/50 border-zinc-800/50',
    danger: 'text-red-400/70 bg-red-950/20 border-red-900/30',
    warn: 'text-amber-400/70 bg-amber-950/20 border-amber-900/30',
  };
  return <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded border ${tones[tone]}`}>{children}</span>;
};
