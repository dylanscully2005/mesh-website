// src/pages/About.tsx
import { Link } from 'react-router-dom';
import {  MapPin, Users, Target, Zap, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-mesh-brand selection:text-white pb-20">
      
      {/* Minimal Navbar */}
   

      <main className="pt-32 px-6 max-w-5xl mx-auto">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mt-12 mb-24">
          <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#888] text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
            <Target className="w-3 h-3 text-mesh-brand" /> The Mission
          </div>
          
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tighter mb-6 leading-[1.05] text-white max-w-4xl">
            Rebuilding the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#1800ad]">Creator Economy.</span>
          </h1>
          
          <p className="text-lg text-[#888] max-w-2xl mx-auto font-medium leading-relaxed">
            Mesh Services UK was founded on a simple principle: the people who make the culture should own it. We are building the high-fidelity infrastructure required to bypass legacy gatekeepers.
          </p>
        </div>

        {/* The Founders Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Users className="w-6 h-6 text-mesh-brand" />
            <h2 className="text-3xl font-bold text-white tracking-tight">The Founding Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Dylan's Card */}
            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-mesh-brand/50 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-mesh-brand/10 blur-[80px] rounded-full group-hover:bg-mesh-brand/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="text-xs text-mesh-brand font-bold uppercase tracking-widest mb-2">By Dylan Scully</div>
                <h3 className="text-2xl font-bold text-white mb-4">Dylan</h3>
                <p className="text-[#888] font-medium leading-relaxed mb-6">
                  Dylan leads the product vision and technical architecture for Mesh. Specializing in React development, Supabase database infrastructure, and UI/UX design, his focus is on building a blazing-fast, zero-latency network for high-fidelity media delivery.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-white/50 uppercase">
                  <Zap className="w-4 h-4" /> Systems Architecture
                </div>
              </div>
            </div>

            {/* Myles's Card */}
            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden group">
              <div className="relative z-10">
                <div className="text-xs text-[#888] font-bold uppercase tracking-widest mb-2">By Myles</div>
                <h3 className="text-2xl font-bold text-white mb-4">Myles</h3>
                <p className="text-[#888] font-medium leading-relaxed mb-6">
                  Myles commands the day-to-day platform operations. From enforcing Trust & Safety policies to managing creator payouts and community moderation, he ensures the Mesh ecosystem remains secure, fair, and legally compliant.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-white/50 uppercase">
                  <ShieldCheck className="w-4 h-4" /> Trust & Operations
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* The Runcorn / Origin Banner */}
        <div className="p-10 rounded-2xl bg-gradient-to-br from-[#1800ad] to-[#0d0066] border border-mesh-brand relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-white" />
              <h3 className="text-3xl font-bold text-white tracking-tight">Built in Merseyside. <br/> Scaled globally.</h3>
            </div>
            <p className="text-white/80 font-medium leading-relaxed mb-6">
              We aren't a Silicon Valley megacorp. Mesh Services UK operates out of Merseyside, built by independent developers who actually understand the independent scene. We are building the tools we always wanted to use.
            </p>
            <div className="flex gap-4">
              <Link to="/support">
                <button className="px-6 py-3 bg-white text-[#1800ad] font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
          
          {/* Abstract Location Visual */}
          <div className="relative z-10 hidden md:flex items-center justify-center flex-1">
            <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center relative bg-black/20 backdrop-blur-sm">
              <div className="absolute w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div className="absolute w-2 h-2 bg-white rounded-full"></div>
              {/* Radar rings */}
              <div className="absolute w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute w-32 h-32 border border-white/10 rounded-full"></div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
       <footer className="border-t border-white/5 mt-20 pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-600 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mesh Services UK. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            Run with purpose by Dylan Scully.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-500">
            <Link to="/bot" className="hover:text-zinc-200 transition-colors">Discord Bot</Link>
            <Link to="/policies" className="hover:text-zinc-200 transition-colors">Terms & Privacy</Link>
            <Link to="/policies" className="hover:text-zinc-200 transition-colors">DMCA</Link>
            <Link to="/support" className="hover:text-zinc-200 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}