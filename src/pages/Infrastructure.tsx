// src/pages/Infrastructure.tsx
import { Link } from 'react-router-dom';
import {  Server, Database, Radio, MonitorPlay, Code2, ShieldCheck, Globe, Activity } from 'lucide-react';

export default function Infrastructure() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-[#1800ad] selection:text-white pb-20">
      
      {/* Navbar - Matched to Home.tsx style */}
  

      {/* Hero Section */}
      <main className="pt-32 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-start mt-12 mb-20">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-bold tracking-wide mb-8 flex items-center gap-2 shadow-lg">
            <Server className="w-3 h-3 text-[#3b1df2]" /> A deep dive into how Mesh works behind the scene.
          </div>
          
          <h1 className="text-5xl md:text-[72px] font-extrabold tracking-tighter mb-6 leading-[1.05] text-white max-w-4xl">
            No fluff. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-[#1800ad]">Just raw throughput.</span>
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-2xl mb-10 font-medium leading-relaxed">
            We hate slow websites and buffered streams as much as you do. Mesh is built on an aggressive edge-delivery architecture that puts your art physically closer to your audience, stripping out the middleware that slows down the web.
          </p>
        </div>

        {/* Global Network Section (UPDATED TO ACTUAL SPECS) */}
        <div className="mb-4">
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1800ad]/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <Globe className="w-8 h-8 text-[#3b1df2]" />
              <h3 className="text-3xl font-bold text-white tracking-tight">Global Routing Topology</h3>
            </div>
            
            <p className="text-zinc-400 font-medium leading-relaxed mb-10 max-w-3xl relative z-10">
              Your audience shouldn't have to wait for data to cross an ocean. Our hardware is strategically placed in key global regions to ensure zero-latency playback and instant UI responsiveness, no matter where a stream is initiated.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {/* Region 1: Ireland (UK/EU) */}
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-[#1800ad]/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#3b1df2] bg-[#1800ad]/20 px-2 py-1 rounded">NODE: IRE-01</span>
                  <Activity className="w-4 h-4 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-zinc-100 mb-2">UK & West Europe (eu-west-1)</h4>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                  This is where the hub for all of Mesh's European traffic is located. It acts as a primary edge-caching node for the UK and Western Europe, ensuring that streams and UI requests are served with minimal latency, even during peak hours.
                </p>
              </div>

              {/* Region 2: Northern California (US) */}
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-zinc-400 bg-white/5 px-2 py-1 rounded">NODE: NCA-01</span>
                  <Activity className="w-4 h-4 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-zinc-100 mb-2">North America (us-west-1)</h4>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                  Based in Northern California, this American Hub acts as a heavy edge-caching tier to ensure smooth, high-bandwidth delivery for audiences across the United States and Canada.
                </p>
              </div>

              {/* Region 3: Rest of World */}
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-zinc-400 bg-white/5 px-2 py-1 rounded">EDGE ROUTING</span>
                  <Activity className="w-4 h-4 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-zinc-100 mb-2">Rest of the World</h4>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                  Every request outside our primary zones is automatically ping-routed to whichever server (Ireland or California) is physically closer to the user, strictly minimizing latency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          
          {/* Audio Engine */}
          <div className="p-8 md:p-10 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-[#1800ad]/30 transition-all duration-300">
            <Radio className="w-8 h-8 text-[#3b1df2] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Uncompressed Audio Pipeline</h3>
            <p className="text-zinc-400 font-medium leading-relaxed mb-6">
              Standard streaming platforms compress art into muddy MP3s to save on server costs. We don't. The Mesh Audio Hub natively ingests and streams `.WAV` and `.FLAC` files, delivering exact studio-master fidelity directly to the listener.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-zinc-300 font-mono font-semibold">.WAV</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-zinc-300 font-mono font-semibold">.FLAC</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-zinc-500 font-mono">320kbps fallback</span>
            </div>
          </div>

          {/* Video Engine */}
          <div className="p-8 md:p-10 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all duration-300">
            <MonitorPlay className="w-8 h-8 text-zinc-200 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">The 4K Video Grid (2027)</h3>
            <p className="text-zinc-400 font-medium leading-relaxed mb-6">
              Delivering independent cinema in true 4K HDR requires serious horsepower. Our upcoming video architecture utilizes aggressive chunked HLS streaming and adaptive bitrates so your films never buffer, even on bad connections.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-zinc-300 font-mono font-semibold">4K HDR</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-zinc-300 font-mono font-semibold">HLS Edge Streaming</span>
            </div>
          </div>

          {/* Backend & Auth */}
          <div className="p-8 md:p-10 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all duration-300">
            <Database className="w-8 h-8 text-green-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Supabase Architecture</h3>
            <p className="text-zinc-400 font-medium leading-relaxed">
              We rely on Supabase to power our backend. This isn't just about speed—it gives us bank-grade PostgreSQL stability, strict Row Level Security (RLS) to ensure creators strictly own their data, and real-time socket subscriptions for live UI updates.
            </p>
          </div>

          {/* Frontend */}
          <div className="p-8 md:p-10 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all duration-300">
            <Code2 className="w-8 h-8 text-sky-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">React & Vercel Edge</h3>
            <p className="text-zinc-400 font-medium leading-relaxed">
              The Mesh interface is built in React, styled purely with Tailwind, and deployed to Vercel's Edge Network. We cache UI components globally so the platform feels like a native app: instant page loads, zero layout shifts, and flawless mobile scaling.
            </p>
          </div>

        </div>

        {/* Security Banner */}
        <div className="p-8 md:p-10 rounded-3xl bg-[#1800ad]/10 border border-[#1800ad]/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <div className="flex items-center gap-2 text-white/80 font-bold mb-3 text-sm uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5 text-[#3b1df2]" /> Paranoid-Level Security
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Your data is locked down.</h3>
            <p className="text-zinc-300 max-w-2xl font-medium leading-relaxed">
              We employ strict CORS policies and JWT auth tokens. We never store raw passwords, and our media storage buckets require highly-expiring API keys to completely prevent hotlinking, piracy, and bandwidth theft of your art.
            </p>
          </div>
          <Link to="/policies" className="flex-shrink-0">
            <button className="whitespace-nowrap px-6 py-3 bg-white text-[#1800ad] font-bold rounded-xl hover:bg-zinc-200 hover:scale-105 transition-all text-sm shadow-lg">
              Review Security Policies
            </button>
          </Link>
        </div>

      </main>

      {/* Footer - Matched to Home.tsx style */}
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