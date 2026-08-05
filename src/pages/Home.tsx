// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Tv, ShieldCheck, Code2, Coins, Hexagon, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-mesh-brand selection:text-white pb-20">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hexagon fill="#1800ad" className="text-mesh-brand w-6 h-6" />
            <span className="text-base font-bold tracking-tight text-white">Mesh Services UK</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]">
            <Link to="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link>
            <Link to="/economics" className="hover:text-white transition-colors">Economics</Link>
            <Link to="/policies" className="hover:text-white transition-colors">Compliance</Link>
            <Link to="/about" className="hover:text-white transition-colors">Our Vision</Link>
            <Link to="/support" className="hover:text-white transition-colors">Support</Link>
          </div>
        <a href="https://meshservicesuk.com" className="bg-white text-black px-4 py-1.5 rounded-md text-sm font-bold hover:bg-gray-200 transition-colors inline-block">
  Launch App
</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mt-16 mb-24">
          <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#888] text-xs font-semibold tracking-wide mb-8 flex items-center gap-2">
            <Globe className="w-3 h-3 text-mesh-brand" /> System Status: Fully Operational
          </div>
          
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tighter mb-6 leading-[1.05] text-white max-w-4xl">
            Infrastructure for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#1800ad]">Creator Class.</span>
          </h1>
          
          <p className="text-lg text-[#888] max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Mesh Services UK builds high-fidelity networks for independent artists and filmmakers. Experience lossless audio, 4K video, and a zero-tracking ecosystem that returns 70% of revenue directly to creators.
          </p>
          
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-mesh-brand text-white font-semibold rounded-lg hover:bg-[#290df2] transition-colors flex items-center gap-2">
              Explore the Network <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 bg-[#111] border border-white/10 text-white font-semibold rounded-lg hover:bg-[#1a1a1a] transition-colors flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#888]" /> Developer API
            </button>
          </div>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4" id="platforms">
          
          <div className="md:col-span-2 group relative p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-mesh-brand/50 overflow-hidden transition-colors flex flex-col justify-between min-h-[300px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-mesh-brand/10 blur-[100px] rounded-full group-hover:bg-mesh-brand/20 transition-colors"></div>
            <div>
              <Music className="w-8 h-8 text-mesh-brand mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Mesh Music Hub</h3>
              <p className="text-[#888] font-medium max-w-md leading-relaxed">
                A high-fidelity streaming architecture. Upload raw WAV/FLAC masters directly to the network. Features real-time EQ, algorithmic curation, and custom brand accents.
              </p>
            </div>
            <div className="mt-8 text-sm font-bold text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 cursor-pointer">
              Enter Hub <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div className="group relative p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 overflow-hidden transition-colors flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Tv className="w-8 h-8 text-[#fff]" />
                <span className="text-[10px] bg-white/10 text-white px-2 py-1 rounded-sm uppercase font-bold tracking-widest">Est. 2027</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">MeshTV</h3>
              <p className="text-[#888] font-medium leading-relaxed">
                Independent cinema streaming in true 4K HDR. A dedicated home for visual storytellers away from corporate algorithms.
              </p>
            </div>
          </div>
<Link to="/economics" className="group relative p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 overflow-hidden transition-colors flex flex-col justify-between min-h-[300px] cursor-pointer">
  <div>
    <Coins className="w-8 h-8 text-[#fff] mb-4" />
    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">The 70% Promise</h3>
    <p className="text-[#888] font-medium leading-relaxed mb-4">
      The people making the culture should keep the profits. 70% of net subscription revenue goes directly to the creators you stream.
    </p>
    <div className="text-sm font-bold text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
      Read How it Works <ArrowRight className="w-4 h-4" />
    </div>
  </div>
</Link>

          

          <div className="md:col-span-2 group relative p-8 rounded-2xl bg-mesh-brand border border-mesh-brand overflow-hidden transition-colors flex flex-col md:flex-row items-start md:items-center justify-between min-h-[300px] gap-8">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1800ad] to-[#0d0066]"></div>
            <div className="relative z-10 max-w-lg">
              <ShieldCheck className="w-8 h-8 text-white mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Zero Tracking. Zero Ads.</h3>
              <p className="text-white/80 font-medium leading-relaxed mb-6">
                Mesh operates on a strict Data Care policy. Fully GDPR and DMCA compliant. We don't sell your data, and we don't serve third-party ads. Your frequency is protected.
              </p>
              <Link to="/policies">
                <button className="px-4 py-2 bg-white text-[#1800ad] font-bold rounded-md hover:bg-gray-100 transition-colors text-sm">
                  View Legal Documents
                </button>
              </Link>
            </div>
            <div className="relative z-10 hidden md:block">
               <div className="w-32 h-32 border-[10px] border-white/10 rounded-full flex items-center justify-center">
                 <div className="w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
               </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-20 pt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#666] font-medium text-sm">
            © 2026 Mesh Services UK. 
          </div>
          <div className="flex gap-6 text-sm font-medium text-[#666]">
            <Link to="/bot" className="hover:text-white transition-colors">Discord Bot</Link>
            <Link to="/policies" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/policies" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/policies" className="hover:text-white transition-colors">DMCA</Link>
            <Link to="/support" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}