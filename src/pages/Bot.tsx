// src/pages/Bot.tsx
import { Link } from 'react-router-dom';
import { 
  Hexagon, ArrowLeft, Bot as BotIcon, ShieldCheck, Flag, 
  Trophy, Video, Coins, Terminal, LayoutDashboard, 
  ShieldAlert, Scale, Server, FileCheck2, Plus
} from 'lucide-react';

export default function Bot() {
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
            <Link to="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link>
            <span className="text-white">Mesh Bot</span>
            <Link to="/economics" className="hover:text-white transition-colors">Economics</Link>
            <Link to="/policies" className="hover:text-white transition-colors">Compliance</Link>
          </div>
          <Link to="/" className="text-sm font-medium text-[#888] flex items-center gap-2 hover:text-white transition-colors md:hidden">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-start mt-12 mb-20">
          <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#888] text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
            <BotIcon className="w-3 h-3 text-mesh-brand" /> Enterprise Automation
          </div>
          
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tighter mb-6 leading-[1.05] text-white max-w-4xl">
            Total server control. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#1800ad]">Zero compromises.</span>
          </h1>
          
          <p className="text-lg text-[#888] max-w-2xl mb-10 font-medium leading-relaxed">
            The Mesh Bot is a broadcast-ready automation engine. From managing competitive FIA racing leagues to deploying enterprise-grade phishing shields, it is the ultimate infrastructure for serious communities.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="px-6 py-3 bg-[#5865F2] text-white font-bold rounded-lg hover:bg-[#4752C4] transition-colors flex items-center gap-2">
              <Plus className="w-5 h-5" /> Add to Discord
            </a>
            <a href="#dashboard" className="px-6 py-3 bg-[#111] border border-white/10 text-white font-semibold rounded-lg hover:bg-[#1a1a1a] transition-colors flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4 text-[#888]" /> Web Dashboard
            </a>
          </div>
        </div>

        {/* 🏎️ The F1 Sim Racing Suite */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6">
            <Flag className="w-8 h-8 text-mesh-brand" />
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">The F1 Sim Racing Suite</h2>
              <p className="text-[#888] font-medium mt-1">A complete automation engine for competitive 2026 FIA racing leagues.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Stewards Triage */}
            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-mesh-brand/50 transition-colors">
              <Scale className="w-6 h-6 text-mesh-brand mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">FIA Stewards Triage</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-4">
                Drivers use <code className="text-white bg-white/10 px-1 rounded">/report-incident</code> to submit video evidence. Stewards review interactive cards in private channels and issue NFA, +3s, +5s, or +10s penalties with automated public bulletins.
              </p>
            </div>

            {/* Race RSVP */}
            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-colors">
              <Terminal className="w-6 h-6 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Auto-Promoter Cron Jobs</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-4">
                Dynamic timestamp RSVPs localized to each driver's time zone. Exactly 2 hours before the race, our cron job automatically promotes Reserve drivers to empty grid slots and sends DM alerts.
              </p>
            </div>

            {/* Standings */}
            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-colors">
              <Trophy className="w-6 h-6 text-[#F59E0B] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Dynamic Standings</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-4">
                <code className="text-white bg-white/10 px-1 rounded">/league log-race</code> awards 2026-accurate points. If a post-race time penalty is issued, the bot automatically recalculates finish times and shifts live WDC/WCC points.
              </p>
            </div>

            {/* Broadcaster Tools */}
            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-colors lg:col-span-2">
              <Video className="w-6 h-6 text-[#61DAFB] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Media & Broadcaster Integration</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-4">
                Generate commentator dossiers with <code className="text-white bg-white/10 px-1 rounded">/f1media press-kit</code> highlighting title clinch scenarios. Drop ASCII timing towers into chat, or use <code className="text-white bg-white/10 px-1 rounded">/f1media obs-feed</code> to output a clean JSON data stream directly into your OBS/vMix overlays.
              </p>
            </div>

            {/* Economy */}
            <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-[#4ADE80]/50 transition-colors">
              <Coins className="w-6 h-6 text-[#4ADE80] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Economy & Betting</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-4">
                Community members wager virtual Mesh Coins on race winners. The moment an admin logs the official race result, the bot instantly calculates odds, pays out the pool, and issues DM receipts.
              </p>
            </div>

          </div>
        </div>

        {/* 🛡️ Security & Moderation */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6">
            <ShieldAlert className="w-8 h-8 text-[#EF4444]" />
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Enterprise Security & Moderation</h2>
              <p className="text-[#888] font-medium mt-1">Mathematical permission structures and automated threat eradication.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-10 rounded-2xl bg-gradient-to-br from-[#EF4444]/10 to-[#0A0A0A] border border-[#EF4444]/20">
              <ShieldCheck className="w-8 h-8 text-[#EF4444] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Automated Phishing Shield</h3>
              <p className="text-[#888] font-medium leading-relaxed mb-6">
                Continuously scans chat against a regex database of Nitro scams and account-stealing URLs. Malicious links are instantly eradicated, the user is kicked, and an appeal/security DM is dispatched. Users can also run <code className="text-[#EF4444] bg-[#EF4444]/10 px-2 py-1 rounded">/scan</code> to audit their own account's Risk Score (0-100).
              </p>
            </div>

            <div className="p-10 rounded-2xl bg-[#0A0A0A] border border-white/10">
              <Scale className="w-8 h-8 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Strict Hierarchy Protection</h3>
              <p className="text-[#888] font-medium leading-relaxed mb-6">
                Prefix commands bypass easily spoofed role names. The bot mathematically compares role hierarchy positions before executing punishments—ensuring a junior moderator physically cannot ban a senior admin. API safeguards prevent native Discord permission crashes.
              </p>
            </div>
          </div>
        </div>

        {/* 🌐 Web Dashboard & Core Architecture */}
        <div id="dashboard" className="p-10 rounded-2xl bg-gradient-to-br from-[#1800ad] to-[#0d0066] border border-mesh-brand relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 scroll-mt-32">
          
          <div className="relative z-10 flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-8 h-8 text-white" />
              <h3 className="text-3xl font-bold text-white tracking-tight">Express.js Administration</h3>
            </div>
            <p className="text-white/80 font-medium leading-relaxed mb-6">
              The bot runs a live Web Dashboard on port 3000. Server owners log in via secure Discord OAuth2 to toggle the Anti-Scam Shield, manage modules, and update the <code className="bg-black/30 px-2 py-1 rounded">settings.json</code> database in real-time.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white font-medium text-sm">
                <FileCheck2 className="w-4 h-4 text-mesh-cyan" /> 
                <strong>Crash-Proof Loader:</strong> activeSystems array compartmentalizes modules.
              </div>
              <div className="flex items-center gap-3 text-white font-medium text-sm">
                <FileCheck2 className="w-4 h-4 text-mesh-cyan" /> 
                <strong>GDPR Engine:</strong> Auto-scrubs users and generates Certificates of Erasure.
              </div>
            </div>
          </div>
          
          {/* Abstract visual */}
          <div className="relative z-10 hidden md:block w-full max-w-sm">
            <div className="bg-black/40 backdrop-blur-md border border-white/20 p-6 rounded-xl font-mono text-xs text-[#61DAFB] leading-loose shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
              </div>
              <p>const loader = new MeshLoader();</p>
              <p>await loader.initWebDashboard(3000);</p>
              <p>await loader.mount('f1_engine');</p>
              <p className="text-[#10B981]">✔ All modules operational.</p>
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