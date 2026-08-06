import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 text-xs text-zinc-500">
        <div className="space-y-4">
          <span className="text-lg font-bold text-white">Weemploy.</span>
          <div className="max-w-xs text-zinc-600">
            3000 El Camino Real
            <br />
            California, US 94306
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-24 min-h-[200px]">
          <div className="flex flex-col gap-3">
            <span className="mb-2 font-medium text-zinc-300">Platform</span>
            <a href="#platform" className="transition-colors hover:text-white">
              Intelligence Platform
            </a>
            <a
              href="#interviewer"
              className="transition-colors hover:text-white"
            >
              Naira
            </a>
            <a href="#serpx" className="transition-colors hover:text-white">
              Serpex
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mb-2 font-medium text-zinc-300">Resources</span>
            <a href="#" className="transition-colors hover:text-white">
              Docs
            </a>
            <a href="#" className="transition-colors hover:text-white">
              API
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Status
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mb-2 font-medium text-zinc-300">Company</span>
            <a href="#" className="transition-colors hover:text-white">
              Careers
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Contact
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mb-2 font-medium text-zinc-300">Connect</span>
            <a href="#" className="transition-colors hover:text-white">
              Twitter
            </a>
            <a href="#" className="transition-colors hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 mt-12 pt-8 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-700">
        <span>© 2026 Weemploy</span>
        <span>Security & Privacy First</span>
      </div>

      {/* Large Weemploy Text at Bottom */}
      <div className="max-w-8xl mx-auto px-6 mt-16 mb-8">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-linear-to-b from-white to-zinc-900 bg-clip-text text-transparent text-center">
          Work Intelligence Starts Here
        </h2>
      </div>
    </footer>
  );
};
