// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Tv, ShieldCheck, Code2, Coins, Hexagon, Globe, MapPin, User, Sparkles, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-[#1800ad] selection:text-white pb-20">
      
      {/* Navbar - Made slightly glassier and cleaned up */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/70 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Hexagon fill="#1800ad" className="text-[#1800ad] w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-base font-bold tracking-tight text-zinc-100">Mesh Services UK</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <Link to="/infrastructure" className="hover:text-zinc-200 transition-colors">Infrastructure</Link>
            <Link to="/economics" className="hover:text-zinc-200 transition-colors">Economics</Link>
            <Link to="/policies" className="hover:text-zinc-200 transition-colors">Compliance</Link>
            <Link to="/about" className="hover:text-zinc-200 transition-colors">Our Story</Link>
            <Link to="/support" className="hover:text-zinc-200 transition-colors">Support</Link>
            <Link to="/admin-login" className="hover:text-[#3b1df2] transition-colors flex items-center gap-1 font-bold">Admin</Link>
          </div>
          <a href="https://meshservicesuk.com" className="bg-zinc-100 text-black px-5 py-2 rounded-lg text-sm font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] inline-block">
            Launch App
          </a>
        </div>
      </nav>

      {/* Hero Section - Rewritten to sound like a human with a mission */}
      <main className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mt-16 mb-24">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-semibold tracking-wide mb-8 flex items-center gap-2 shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b1df2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1800ad]"></span>
            </span>
            Systems Operational
          </div>
          
          <h1 className="text-5xl md:text-[72px] font-extrabold tracking-tighter mb-6 leading-[1.05] text-white max-w-4xl">
            Building a better web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-[#1800ad]">for independent creators.</span>
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            We were tired of algorithms dictating culture. Mesh Services UK provides the actual server infrastructure for independent artists and filmmakers. No compressed nonsense, no creepy tracking, and creators keep 70% of the cut.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <button className="px-6 py-3 bg-[#1800ad] text-white font-semibold rounded-xl hover:bg-[#290df2] hover:shadow-[0_0_30px_rgba(24,0,173,0.4)] transition-all flex items-center gap-2">
              Explore the Network <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 bg-[#111] border border-white/10 text-white font-semibold rounded-xl hover:bg-[#1a1a1a] hover:border-white/20 transition-all flex items-center gap-2">
              <Code2 className="w-4 h-4 text-zinc-500" /> Developer API
            </button>
          </div>
        </div>

        {/* The Bento Grid - Expanded and redesigned */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="platforms">
          
          {/* Box 1: Music */}
          <div className="md:col-span-2 group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-[#1800ad]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[300px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1800ad]/10 blur-[100px] rounded-full group-hover:bg-[#1800ad]/20 transition-colors"></div>
            <div className="relative z-10">
              <Music className="w-8 h-8 text-[#3b1df2] mb-4" />
              <h3 className="text-2xl font-bold text-zinc-100 mb-2 tracking-tight">Mesh Music Hub</h3>
              <p className="text-zinc-400 font-medium max-w-md leading-relaxed">
                Stop letting standard streaming platforms ruin your masters. Upload your raw WAVs and FLACs directly. We serve your audio exactly how you mixed it in the studio.
              </p>
            </div>
            <div className="relative z-10 mt-8 text-sm font-bold text-zinc-200 flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 cursor-pointer">
              Enter Hub <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Box 2: TV */}
          <div className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Tv className="w-8 h-8 text-zinc-200" />
                <span className="text-[10px] bg-white/5 text-zinc-300 border border-white/10 px-2 py-1 rounded-md uppercase font-bold tracking-widest">Est. 2027</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-2 tracking-tight">MeshTV</h3>
              <p className="text-zinc-400 font-medium leading-relaxed">
                Independent cinema in real 4K HDR. A home for visual storytellers that isn't buried underneath endless corporate reboots.
              </p>
            </div>
          </div>

          {/* Box 3: Privacy */}
          <div className="md:col-span-2 group relative p-8 rounded-3xl bg-gradient-to-br from-[#1800ad] to-[#0a0040] border border-[#1800ad] overflow-hidden transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between min-h-[300px] gap-8 shadow-2xl">
            <div className="relative z-10 max-w-lg">
              <ShieldCheck className="w-8 h-8 text-white mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">We don't want your data.</h3>
              <p className="text-white/80 font-medium leading-relaxed mb-6">
                No third-party ads. No selling your watch history to data brokers. We're fully GDPR and DMCA compliant, meaning your digital footprint actually belongs to you.
              </p>
              <Link to="/policies">
                <button className="px-5 py-2.5 bg-white text-[#1800ad] font-bold rounded-xl hover:bg-zinc-100 hover:scale-105 transition-all text-sm shadow-lg">
                  Read the Boring Legal Stuff
                </button>
              </Link>
            </div>
            <div className="relative z-10 hidden md:block flex-shrink-0">
               <div className="w-32 h-32 border-[8px] border-white/10 rounded-full flex items-center justify-center relative">
                 <div className="w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
                 <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
               </div>
            </div>
          </div>

          {/* Box 4: Economics */}
          <Link to="/economics" className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[300px] cursor-pointer">
            <div>
              <Coins className="w-8 h-8 text-zinc-200 mb-4" />
              <h3 className="text-2xl font-bold text-zinc-100 mb-2 tracking-tight">The 70% Rule</h3>
              <p className="text-zinc-400 font-medium leading-relaxed mb-4">
                The people making the art should keep the money. It's really that simple. 70% of all net revenue goes straight into creators' pockets.
              </p>
              <div className="text-sm font-bold text-zinc-300 flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                See the breakdown <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Box 5: Regions */}
          <div className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[200px]">
            <div>
              <Globe className="w-8 h-8 text-zinc-400 mb-4" />
              <h3 className="text-xl font-bold text-zinc-100 mb-2 tracking-tight">Global Network</h3>
              <p className="text-zinc-400 font-medium text-sm leading-relaxed mb-4">
                We operate low-latency nodes locally to ensure fast delivery.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300 font-medium">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#3b1df2]" /> United Kingdom (HQ)</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#3b1df2]" /> European Union</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#3b1df2]" /> North America (US HQ)</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#3b1df2]" /> Middle East</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#3b1df2]" /> Oceania</li>
              </ul>
            </div>
          </div>

          {/* Box 6: Run by Dylan Scully */}
          <div className="md:col-span-2 group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 overflow-hidden transition-all duration-300 flex items-center gap-6 min-h-[200px]">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1800ad] to-[#3b1df2] flex items-center justify-center flex-shrink-0 shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-2 tracking-tight">Independently Built</h3>
              <p className="text-zinc-400 font-medium leading-relaxed max-w-xl">
                Mesh Global Services is proudly run by <span className="text-zinc-200 font-semibold">Dylan Scully</span>. A single person trying to make a change and move it away from bigger platforms that don't care about creators. No VC money, no corporate overlords, just a mission to make the web better for independent artists.
              </p>
            </div>
          </div>
        </div>

        {/* Pre-Sign Up CTA Section */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Box 7: Standard Pre-Sign Up */}
          <div className="group relative p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <User className="w-8 h-8 text-zinc-400" />
                <span className="text-[10px] bg-white/5 text-zinc-300 border border-white/10 px-2 py-1 rounded-md uppercase font-bold tracking-widest">Free</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-2 tracking-tight">Standard Pre-Sign Up</h3>
              <p className="text-zinc-400 font-medium leading-relaxed mb-6">
                Join the waitlist for a standard Mesh account. Always free for listeners, standard 70% revenue split for creators. Get notified the second we open our doors.
              </p>
            </div>
            <a href="https://form.typeform.com/to/tlk23u2E" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 w-full">
              Pre-Sign Up (Standard) <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Box 8: Pro Pre-Sign Up */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-[#1800ad]/20 to-zinc-900/30 border border-[#1800ad]/30 hover:border-[#3b1df2]/60 transition-all duration-300 flex flex-col justify-between min-h-[260px] overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#3b1df2]/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#3b1df2]/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Sparkles className="w-8 h-8 text-[#3b1df2]" />
                <span className="text-[10px] bg-[#3b1df2]/10 text-[#3b1df2] border border-[#3b1df2]/30 px-2 py-1 rounded-md uppercase font-bold tracking-widest">Early Access</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Pro Plan Pre-Sign Up</h3>
              <p className="text-zinc-300 font-medium leading-relaxed mb-6">
                For serious creators. Priority high-bitrate encoding, advanced analytics, custom creator profiles, and exclusive early access to MeshTV.
              </p>
            </div>
            <a href="https://form.typeform.com/to/tlk23u2E" target="_blank" rel="noopener noreferrer" className="relative z-10 px-6 py-3 bg-[#1800ad] text-white font-semibold rounded-xl hover:bg-[#290df2] hover:shadow-[0_0_30px_rgba(24,0,173,0.4)] transition-all flex items-center justify-center gap-2 w-full">
              Pre-Sign Up (Pro) <Zap className="w-4 h-4" />
            </a>
          </div>
          
        </div>
      </main>

      {/* Footer - Cleaned up */}
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