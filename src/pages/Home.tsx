// src/pages/Home.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Tv, 
  ShieldCheck, 
  Coins, 
  Globe, 
  MapPin, 
  User, 
  Sparkles, 
  Zap, 
  Bot, 
  X, 
  Gift,
  Clock 
} from 'lucide-react';

function FreeTrialBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    // Check if user has already dismissed the banner in a previous session
    const isDismissed = localStorage.getItem('mesh_trial_banner_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => setIsVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  // Live countdown targeting August 23, 23:59:00 GMT
  useEffect(() => {
    const targetDate = new Date('2026-08-23T23:59:00Z').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          expired: false,
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('mesh_trial_banner_dismissed', 'true');
  };

  if (!isVisible || timeLeft.expired) return null;

  return (
    <div className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-6 duration-500">
      <div className="relative bg-[#0a0a0d]/95 backdrop-blur-xl border border-white/15 p-6 rounded-3xl shadow-[0_0_40px_rgba(140,82,255,0.25)] text-white overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute top-[-50%] left-[-20%] w-48 h-48 bg-[#ff5757]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-50%] right-[-20%] w-48 h-48 bg-[#8c52ff]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ff5757] to-[#8c52ff] flex items-center justify-center shrink-0 shadow-lg shadow-[#8c52ff]/20 mt-1">
            <Gift className="w-6 h-6 text-white" />
          </div>

          <div className="pr-6 flex-1">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#ff5757] mb-1">
              <Sparkles className="w-3 h-3" /> Special Offer
            </div>

            <h3 className="text-lg font-extrabold tracking-tight text-white mb-1">
              Try Mesh+ Free for 30 Days
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed font-medium mb-3">
              Unlock lossless studio music streaming, instant AI chat co-pilots, and priority ecosystem access.
            </p>

            {/* Countdown Badge */}
            <div className="mb-4 p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-1.5 text-zinc-400 font-sans text-[11px] font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#ff5757]" /> Offer Ends (23 Aug 23:59 GMT):
              </div>
              <div className="flex items-center gap-1 text-white font-bold">
                <span className="bg-white/10 px-1.5 py-0.5 rounded text-[11px]">{timeLeft.days}d</span>:
                <span className="bg-white/10 px-1.5 py-0.5 rounded text-[11px]">{String(timeLeft.hours).padStart(2, '0')}h</span>:
                <span className="bg-white/10 px-1.5 py-0.5 rounded text-[11px]">{String(timeLeft.minutes).padStart(2, '0')}m</span>:
                <span className="bg-white/10 px-1.5 py-0.5 rounded text-[11px]">{String(timeLeft.seconds).padStart(2, '0')}s</span>
              </div>
            </div>

            <Link
              to="/mesh-plus"
              onClick={handleDismiss}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white font-bold text-xs rounded-xl hover:opacity-90 transition-opacity shadow-md no-underline"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-[#1800ad] selection:text-white pb-20 relative">
      
      {/* Hero Section */}
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
            {/* "Our Services" Link */}
            <a 
              href="/ourservices" 
              className="px-6 py-3 bg-[#1800ad] text-white font-semibold rounded-xl hover:bg-[#290df2] hover:shadow-[0_0_30px_rgba(24,0,173,0.4)] transition-all flex items-center gap-2 no-underline"
            >
              Our Services <ArrowRight className="w-4 h-4" />
            </a>
            
            {/* "Mesh AI" Link */}
            <a 
              href="/mesh-ai" 
              className="px-6 py-3 bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white font-semibold rounded-xl hover:opacity-90 hover:shadow-[0_0_30px_rgba(140,82,255,0.4)] transition-all flex items-center gap-2 no-underline"
            >
              <Bot className="w-4 h-4 text-white" /> Mesh AI
            </a>
          </div>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="platforms">
          
          {/* Box 1: Mesh AI */}
          <a 
            href="/mesh-ai"
            className="md:col-span-2 group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-[#ff5757]/40 overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[300px] shadow-[0_0_30px_rgba(140,82,255,0.05)] hover:shadow-[0_0_40px_rgba(255,87,87,0.15)] no-underline block"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ff5757]/20 to-[#8c52ff]/25 blur-[120px] rounded-full group-hover:scale-125 transition-transform duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#ff5757] to-[#8c52ff] flex items-center justify-center mb-6 shadow-lg shadow-[#8c52ff]/30">
                <Bot className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">
                Mesh AI Beta v0.1
              </h3>
              
              <p className="text-zinc-400 font-medium max-w-md leading-relaxed">
                Your intelligent ecosystem assistant. Accelerate workflows, manage digital assets, and enhance your creative projects with next-generation AI automation built right in.
              </p>
            </div>

            <div className="relative z-10 mt-8 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5757] to-[#8c52ff] flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
              <span>Learn More</span> 
              <ArrowRight className="w-4 h-4 text-[#8c52ff]" />
            </div>
          </a>

          {/* Box 2: TV */}
          <div className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Tv className="w-8 h-8 text-zinc-200" />
                <span className="text-[10px] bg-white/5 text-zinc-300 border border-white/10 px-2 py-1 rounded-md uppercase font-bold tracking-widest">Est. Q1 2027</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-2 tracking-tight">MeshTV</h3>
              <p className="text-zinc-400 font-medium leading-relaxed">
                A new way to watch indie films and shorts. MeshTV is a decentralized streaming platform that allows filmmakers to upload their content directly to the network, MeshTV will be available in 2027, but you can pre-sign up now to get early access, You can also sign up for the Pro Plan to get early access to MeshTV and other features.
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

      {/* Pop-up Free Trial Banner */}
      <FreeTrialBanner />
    </div>
  );
}