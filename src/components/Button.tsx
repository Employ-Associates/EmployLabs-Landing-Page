import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  icon = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200 border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700",
    outline: "bg-transparent text-zinc-300 border border-zinc-700 hover:bg-zinc-800 hover:text-white hover:border-zinc-600",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/50",
  };

  const sizes = {
    sm: "text-xs px-4 py-1.5",
    md: "text-sm px-6 py-2.5",
    lg: "text-base px-8 py-3.5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
      {icon && <ArrowRight size={16} className="ml-2" />}
    </button>
  );
};