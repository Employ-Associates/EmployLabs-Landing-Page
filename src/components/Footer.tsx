import { Sparkles, Bot, Sparkle, Brain } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative h-[600px] flex flex-col pt-24 pb-12 overflow-hidden bg-transparent">
      {/* Background image masked to fade to transparent at the top so it blends with the section above */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 contrast-90"
        style={{
          backgroundImage: `url('https://assets.cdn.filesafe.space/VAKiqZyjSYMOQr9YsIKD/media/69410a03b4f42055a480f6c0.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%)',
        }}
      />
      {/* Balanced dark overlay to ensure readability while letting the image show through */}
      <div className="absolute inset-0 bg-zinc-950/45 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full px-8 relative z-10 flex flex-col h-full">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-8 gap-y-12">

          <div>
            <h4 className="text-lg text-white mb-6 font-display">Product</h4>
            <ul className="space-y-4 text-gray-200">
              <li><a href="#" className="hover:text-white transition-colors">Onboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Decide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lifecycle</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-white mb-6 font-display">Platform</h4>
            <ul className="space-y-4 text-gray-200">
              <li><a href="#" className="hover:text-white transition-colors">EmployLabs AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Policy engine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data platform</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-white mb-6 font-display">Industries</h4>
            <ul className="space-y-4 text-gray-200">
              <li><a href="#" className="hover:text-white transition-colors">Financial technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Banking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Platforms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-white mb-6 font-display">Customers</h4>
            <ul className="space-y-4 text-gray-200">
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Revenue</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-white mb-6 font-display">Company</h4>
            <ul className="space-y-4 text-gray-200">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Foundation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-white mb-6 font-display">Resources</h4>
            <ul className="space-y-4 text-gray-200">
              <li><a href="#" className="hover:text-white transition-colors">Trust</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resources Hub</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-300 pt-8 mt-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white text-black w-8 h-8 flex items-center justify-center font-display font-black text-lg tracking-tighter leading-none rounded-none">EL</div>
              <span className="font-display font-bold tracking-tight">EMPLOYLABS</span>
            </div>
            <span>© 2026</span>
            <span className="text-zinc-500">Employlabs is handled by Weemploy Co.</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
          <div className="flex items-center gap-5">
            <span>Get an AI summary of EmployLabs:</span>
            <div className="flex items-center gap-4 text-white">
              <Sparkles className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Bot className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Sparkle className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Brain className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
