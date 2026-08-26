import { useState } from 'react';
import { 
  ShieldCheck, 

  MessageSquare, 
  PhoneCall, 
  Server, 
  Music, 
  Tv, 
  Palette, 
  Bot, 
  Download, 
  Smartphone, 
  Monitor, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  Globe, 
  ExternalLink,
  Sliders,
  KeyRound,
  Zap,
  ChevronRight
} from 'lucide-react';

export default function MeshSocialApp() {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  // Download Handler Placeholder
  const handleDownload = (platform: string, fileUrl: string) => {
    // You can replace 'fileUrl' with your actual hosted link or public folder path
    if (fileUrl === '#') {
      setDownloadNotice(`Please attach your ${platform} installer file URL in the code!`);
      setTimeout(() => setDownloadNotice(null), 4000);
    } else {
      window.location.href = fileUrl;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#ff4d6d] selection:text-white pb-20">
      
      {/* Toast Notification for Download Placeholder */}
      {downloadNotice && (
        <div className="fixed top-6 right-6 z-50 bg-amber-500/20 border border-amber-500/50 text-amber-200 px-5 py-3 rounded-2xl backdrop-blur-lg shadow-2xl flex items-center gap-3 animate-fade-in">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-medium">{downloadNotice}</span>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section className="relative pt-16 pb-20 px-6 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#ff4d6d]/20 to-[#b857e6]/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#b857e6] mb-6">
          <ShieldCheck className="w-4 h-4 text-[#ff4d6d]" />
          Developed by Mesh Global Services
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
          Private, Uncompromising <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4d6d] to-[#b857e6]">
            Social Connection.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-zinc-400 text-base md:text-lg leading-relaxed mb-10">
          Connect with communities without worrying about your personal data being sold, tracked, or used for targeted advertisements.
        </p>

        {/* Hero Download CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#download-section"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] text-white font-bold rounded-2xl hover:opacity-95 transition-all shadow-lg shadow-[#ff4d6d]/25 flex items-center justify-center gap-3 group"
          >
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            Get Mesh App
          </a>
          <a
            href="#privacy-section"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-white/10 text-zinc-300 font-semibold rounded-2xl hover:bg-zinc-800 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            Privacy Guarantee
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </a>
        </div>
      </section>

      {/* --- DOWNLOAD ATTACHMENT SECTION --- */}
      <section id="download-section" className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-white/10 pb-8">
            <div>
              <span className="text-xs font-bold text-[#ff4d6d] uppercase tracking-widest">Official Releases</span>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-1">Download Mesh Social App</h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md">
              Choose your platform below to download the latest builds for mobile and desktop devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Android Card */}
            <div className="bg-zinc-950/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#ff4d6d]/50 transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 border border-emerald-500/30 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Android APK
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Android Build</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  Direct `.apk` package for Android smartphones and tablets. Fast installation, no telemetry.
                </p>
              </div>

              {/* ATTACH YOUR ANDROID FILE URL HERE */}
              <button
                onClick={() => handleDownload('Android', '/downloads/mesh-social-android.apk')} 
                className="w-full py-3.5 bg-zinc-900 border border-white/10 rounded-xl font-semibold text-sm hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Android APK
              </button>
            </div>

            {/* Desktop Card */}
            <div className="bg-zinc-950/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#b857e6]/50 transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b857e6]/20 to-[#ff4d6d]/20 border border-[#b857e6]/30 flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-[#b857e6]" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#b857e6]/10 text-[#b857e6] border border-[#b857e6]/20">
                  Desktop App
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Desktop Client</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  Installer for Windows and macOS. Includes background call audio and multi-server dashboard support.
                </p>
              </div>

              {/* ATTACH YOUR DESKTOP FILE URL HERE */}
              <button
                onClick={() => handleDownload('Desktop', '/downloads/mesh-social-desktop-setup.exe')} 
                className="w-full py-3.5 bg-zinc-900 border border-white/10 rounded-xl font-semibold text-sm hover:bg-[#b857e6] hover:text-white hover:border-[#b857e6] transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Desktop Installer
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* --- PRIVACY & CONTROLS SECTION --- */}
      <section id="privacy-section" className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#ff4d6d] uppercase tracking-widest">Privacy First Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">Built to Guard Your Personal Data</h2>
          <p className="text-zinc-400 text-sm md:text-base">
            Mesh Social App implements strict system architecture controls to guarantee your data stays your data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Strict Data Processing */}
          <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">Strict Data Processing Care</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Enforces systems to handle data with extreme caution, minimizing breach risks at the trade-off of reducing unnecessary account personalization.
            </p>
          </div>

          {/* Usage Analytics OFF */}
          <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
              <Sliders className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">Usage Analytics (OFF by Default)</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Analytics are strictly opt-in. Even when turned on, basic usage metrics exclude usernames, User IDs, and email addresses entirely.
            </p>
          </div>

          {/* Account Security 2FA */}
          <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
              <KeyRound className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold mb-2">Two-Factor Authentication (2FA)</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              User-enabled two-factor authentication provides an additional cryptographic layer of account protection.
            </p>
          </div>

        </div>

        {/* Granular Permission Controls Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Message Controls */}
          <div className="bg-zinc-900/30 border border-white/10 rounded-3xl p-6">
            <h3 className="text-base font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#ff4d6d]" /> Message Controls
            </h3>
            <p className="text-xs text-zinc-400 mb-4">Restrict who is authorized to send direct messages to your inbox:</p>
            <div className="grid grid-cols-2 gap-2">
              {['Everybody', 'Server Members', 'Friends Only', 'Nobody'].map((opt, idx) => (
                <div key={idx} className="bg-zinc-950/60 border border-white/5 rounded-xl px-3 py-2 text-xs text-zinc-300 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b857e6]" />
                  {opt}
                </div>
              ))}
            </div>
          </div>

          {/* Add Controls */}
          <div className="bg-zinc-900/30 border border-white/10 rounded-3xl p-6">
            <h3 className="text-base font-bold mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#b857e6]" /> Friend Request Controls
            </h3>
            <p className="text-xs text-zinc-400 mb-4">Determine who can send friend requests or view your profile:</p>
            <div className="grid grid-cols-2 gap-2">
              {['Everyone', 'Friends of Friends', 'Server Members', 'Nobody'].map((opt, idx) => (
                <div key={idx} className="bg-zinc-950/60 border border-white/5 rounded-xl px-3 py-2 text-xs text-zinc-300 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff4d6d]" />
                  {opt}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- SOCIAL FEATURES SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#b857e6] uppercase tracking-widest">Communication Suite</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Core Social Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Direct Messages */}
          <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff4d6d]/20 to-purple-500/20 border border-[#ff4d6d]/30 flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-[#ff4d6d]" />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Direct Messages</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Add users via unique username and message directly, strictly governed by your customized privacy settings.
            </p>
          </div>

          {/* Voice Calls */}
          <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              Coming Soon
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center mb-6">
              <PhoneCall className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">2. Voice Calls</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Powered by WebRTC upon full release. Calls are strictly unrecorded and never listened to, appearing only in chat logs.
            </p>
          </div>

          {/* User Created Servers */}
          <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#b857e6]/20 to-blue-500/20 border border-[#b857e6]/30 flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-[#b857e6]" />
            </div>
            <h3 className="text-xl font-bold mb-3">3. User Created Servers</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Build community servers equipped with permission roles, real-time message feeds, typing indicators, and voice channels.
            </p>
          </div>

        </div>
      </section>

      {/* --- MESH CONTENT ECOSYSTEM --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-zinc-900/30 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-[#ff4d6d] uppercase tracking-widest">Entertainment & Ecosystem</span>
            <h2 className="text-3xl font-extrabold mt-1">Mesh Content</h2>
            <p className="text-zinc-400 text-xs md:text-sm mt-2">
              Integrated entertainment and customization platforms built right inside the Mesh client.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Mesh Partners */}
            <div className="bg-zinc-950/60 border border-white/5 rounded-2xl p-5">
              <Globe className="w-6 h-6 text-blue-400 mb-3" />
              <h4 className="font-bold text-sm mb-1">Mesh Partners</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Connect with verified partners. Zero data is shared when navigating to partner sites.
              </p>
            </div>

            {/* Theme Store */}
            <div className="bg-zinc-950/60 border border-white/5 rounded-2xl p-5">
              <Palette className="w-6 h-6 text-pink-400 mb-3" />
              <h4 className="font-bold text-sm mb-1">Mesh Theme Store</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Customize your app using credits earned by keeping up streaks with Mesh+.
              </p>
            </div>

            {/* Mesh Music */}
            <div className="bg-zinc-950/60 border border-white/5 rounded-2xl p-5">
              <Music className="w-6 h-6 text-emerald-400 mb-3" />
              <h4 className="font-bold text-sm mb-1">Mesh Music</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Stream curated, ad-free music from indie artists. Offline streaming available with Mesh+.
              </p>
            </div>

            {/* MeshTV */}
            <div className="bg-zinc-950/60 border border-white/5 rounded-2xl p-5">
              <Tv className="w-6 h-6 text-purple-400 mb-3" />
              <h4 className="font-bold text-sm mb-1">MeshTV</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                On-app TV streaming platform for watching and subscribing to indie animation studios.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- MESH AI COMPANION SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-gradient-to-r from-purple-900/30 via-zinc-900 to-pink-900/30 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold mb-3">
                <Bot className="w-4 h-4" /> Beta v0.9
              </div>
              <h2 className="text-3xl font-extrabold">Mesh AI Companion Bot</h2>
              <p className="text-zinc-400 text-xs md:text-sm mt-1">
                Powered by <span className="text-white font-bold">Gemini 3.5 Flash</span>. Scheduled for full v1.0 release on <span className="text-[#ff4d6d] font-bold">10/09/26</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-zinc-950/50 border border-white/5 p-4 rounded-xl">
              <Zap className="w-4 h-4 text-amber-400 mb-2" />
              <h5 className="text-xs font-bold">Fast Responses</h5>
              <p className="text-[11px] text-zinc-500 mt-1">Instant inference speed</p>
            </div>

            <div className="bg-zinc-950/50 border border-white/5 p-4 rounded-xl">
              <Sparkles className="w-4 h-4 text-purple-400 mb-2" />
              <h5 className="text-xs font-bold">Image Generation</h5>
              <p className="text-[11px] text-zinc-500 mt-1">Generative visual creation</p>
            </div>

            <div className="bg-zinc-950/50 border border-white/5 p-4 rounded-xl">
              <Bot className="w-4 h-4 text-blue-400 mb-2" />
              <h5 className="text-xs font-bold">Persona Prompts</h5>
              <p className="text-[11px] text-zinc-500 mt-1">Coming in v1.5</p>
            </div>

            <div className="bg-zinc-950/50 border border-white/5 p-4 rounded-xl">
              <ExternalLink className="w-4 h-4 text-emerald-400 mb-2" />
              <h5 className="text-xs font-bold">Code & Doc Export</h5>
              <p className="text-[11px] text-zinc-500 mt-1">Coming in v1.5</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 text-center text-zinc-500 text-xs">
        <p>© 2026 Mesh Global Services. Founded & operated by Dylan Scully. All rights reserved.</p>
      </footer>

    </div>
  );
}