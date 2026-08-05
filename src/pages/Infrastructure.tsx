// src/pages/Infrastructure.tsx
import { Link } from 'react-router-dom';
import { Hexagon, ArrowLeft, Server, Database, Radio, MonitorPlay, Code2, ShieldCheck } from 'lucide-react';

export default function Infrastructure() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-mesh-brand selection:text-white pb-20">
      
      {/* Minimal Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Hexagon fill="#1800ad" className="text-mesh-brand w-6 h-6" />
            <span className="text-base font-bold tracking-tight text-white">Mesh Services UK</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]">
            <span className="text-white">Infrastructure</span>
            <Link to="/economics" className="hover:text-white transition-colors">Economics</Link>
            <Link to="/policies" className="hover:text-white transition-colors">Compliance</Link>
          </div>
          <Link to="/" className="text-sm font-medium text-[#888] flex items-center gap-2 hover:text-white transition-colors md:hidden">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-start mt-12 mb-20">
          <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#888] text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
            <Server className="w-3 h-3 text-mesh-brand" /> Network Architecture
          </div>
          
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tighter mb-6 leading-[1.05] text-white max-w-4xl">
            Engineered for fidelity. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#1800ad]">Built to scale globally.</span>
          </h1>
          
          <p className="text-lg text-[#888] max-w-2xl mb-10 font-medium leading-relaxed">
            Mesh Services UK utilizes a modern edge-delivery network to ensure zero-latency playback. From our Supabase backend to our React-powered interfaces, every line of code is optimized for the creator class.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          
          {/* Audio Engine */}
          <div className="p-10 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-colors">
            <Radio className="w-8 h-8 text-mesh-brand mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Lossless Audio Engine</h3>
            <p className="text-[#888] font-medium leading-relaxed mb-6">
              Standard streaming platforms compress art into muddy MP3s. The Mesh Audio Hub natively supports direct `.WAV` and `.FLAC` uploads, delivering master-quality, high-fidelity audio directly to the listener's hardware.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-[#888] font-mono">.WAV</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-[#888] font-mono">.FLAC</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-[#888] font-mono">320kbps fallback</span>
            </div>
          </div>

          {/* Video Engine */}
          <div className="p-10 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden">
            <MonitorPlay className="w-8 h-8 text-white mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">MeshTV Delivery (2027)</h3>
            <p className="text-[#888] font-medium leading-relaxed mb-6">
              Our upcoming video architecture is being designed to handle massive throughput. Delivering 4K HDR independent cinema requires heavy edge-caching and adaptive bitrate streaming to prevent buffering.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-[#888] font-mono">4K HDR</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-[#888] font-mono">HLS Streaming</span>
            </div>
          </div>

          {/* Backend & Auth */}
          <div className="p-10 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-colors">
            <Database className="w-8 h-8 text-[#4ADE80] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Supabase Architecture</h3>
            <p className="text-[#888] font-medium leading-relaxed">
              Our entire database, user authentication, and media storage is powered by Supabase. This provides us with bank-grade Postgres security, Row Level Security (RLS) policies to protect creator data, and ultra-fast real-time database subscriptions.
            </p>
          </div>

          {/* Frontend */}
          <div className="p-10 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-colors">
            <Code2 className="w-8 h-8 text-[#61DAFB] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">React & Vercel Edge</h3>
            <p className="text-[#888] font-medium leading-relaxed">
              The Mesh network frontend is built on highly optimized React architecture, styled with Tailwind CSS, and deployed via Vercel. This guarantees instant page loads, smooth transitions, and a flawless user experience across all devices.
            </p>
          </div>

        </div>

        {/* Security Banner */}
        <div className="p-10 rounded-2xl bg-[#111] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-white/80 font-bold mb-3 text-sm uppercase tracking-wide">
              <ShieldCheck className="w-5 h-5 text-mesh-brand" /> Enterprise Security
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Your data is locked down.</h3>
            <p className="text-[#888] max-w-2xl font-medium">
              We employ strict CORS policies, Row Level Security, and JWT authentication tokens. We do not store raw passwords, and our media buckets require authorized API keys to prevent hotlinking and bandwidth theft.
            </p>
          </div>
          <Link to="/policies">
            <button className="whitespace-nowrap px-6 py-3 border border-white/10 text-white font-bold rounded-lg hover:bg-white/5 transition-colors text-sm">
              Review Compliance Data
            </button>
          </Link>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-20 pt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#666] font-medium text-sm">
            © 2026 Mesh Services UK.
          </div>
          <div className="flex gap-6 text-sm font-medium text-[#666]">
            <Link to="/policies" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/policies" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/policies" className="hover:text-white transition-colors">DMCA</Link>
            <a href="mailto:support@meshservicesuk.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}