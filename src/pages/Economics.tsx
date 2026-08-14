// src/pages/Economics.tsx
import { Link } from 'react-router-dom';
import { Hexagon, ArrowLeft, Coins, PieChart, Activity, CreditCard } from 'lucide-react';

export default function Economics() {
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
            <Link to="/" className="hover:text-white transition-colors">Infrastructure</Link>
            <span className="text-white">Economics</span>
            <Link to="/about" className="hover:text-white transition-colors">Our Vision</Link>
            <Link to="/policies" className="hover:text-white transition-colors">Compliance</Link>
          </div>
          <Link to="/" className="text-sm font-medium text-[#888] flex items-center gap-2 hover:text-white transition-colors md:hidden">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mt-12 mb-20">
          <div className="px-3 py-1 rounded-full border border-mesh-brand/30 bg-mesh-brand/10 text-mesh-brand text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
            <Coins className="w-3 h-3" /> The Creator Economics Model
          </div>
          
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tighter mb-6 leading-[1.05] text-white">
            You make the culture.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#1800ad]">You keep the revenue.</span>
          </h1>
          
          <p className="text-lg text-[#888] max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            The legacy streaming model is fundamentally broken. Pennies per thousand streams isn't a business model—it's exploitation. Mesh operates on a direct 70/30 split, returning the majority of subscription revenue directly to the artists and filmmakers.
          </p>
        </div>

        {/* The 70% Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          
          <div className="p-10 rounded-2xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden group hover:border-mesh-brand/50 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-mesh-brand/5 blur-[100px] rounded-full group-hover:bg-mesh-brand/10 transition-colors"></div>
            <PieChart className="w-10 h-10 text-mesh-brand mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">The 70% Split</h3>
            <p className="text-[#888] font-medium leading-relaxed">
              When a user subscribes to Mesh Pro, their monthly fee goes into the revenue pool. After standard transaction fees and platform maintenance taxes, exactly 70% of the net revenue is allocated to our creator payout pool.
            </p>
          </div>

          <div className="p-10 rounded-2xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors">
            <Activity className="w-10 h-10 text-white mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Pro-Rata Distribution</h3>
            <p className="text-[#888] font-medium leading-relaxed">
              We distribute the payout pool based on actual listening time. If a user spends 50% of their month streaming your album, you receive 50% of their allocated subscription share. No hidden algorithmic weighting.
            </p>
          </div>

        </div>

        {/* Technical Payment Infrastructure */}
        <div className="p-10 rounded-2xl bg-gradient-to-br from-[#1800ad] to-[#0d0066] border border-mesh-brand relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-8 h-8 text-white" />
              <h3 className="text-3xl font-bold text-white tracking-tight">Seamless Payouts</h3>
            </div>
            <p className="text-white/80 font-medium leading-relaxed mb-6">
              Track your daily streams, audience retention, and pending revenue directly from the Mesh Creator Dashboard. We issue payouts on a standard Net-30 cycle straight to your connected bank account or PayPal via our secure payment partners.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-[#1800ad] font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm">
                Open Creator Dashboard
              </button>
            </div>
          </div>
          
          {/* Abstract visual */}
          <div className="relative z-10 hidden md:flex items-center justify-center flex-1">
            <div className="w-48 h-48 rounded-full border border-white/20 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-t-2 border-white animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="text-white font-black text-4xl">70%</div>
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