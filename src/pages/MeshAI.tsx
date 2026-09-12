import { 
  Sparkles, 
  History, 
  Brain, 
  Wand2, 
  Zap, 
  ArrowRight,
  Play,
  Tv
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MeshAI() {
  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden flex flex-col items-center pt-32 font-sans selection:bg-[#ff5757] selection:text-white">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-[#8c52ff] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#ff5757] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-16 px-6">
        
        {/* Exclusive Badge */}
        <div className="px-4 py-1.5 rounded-full border border-[#8c52ff]/30 bg-gradient-to-r from-[#ff5757]/10 to-[#8c52ff]/10 text-white text-xs font-bold tracking-widest uppercase mb-8 flex items-center gap-2 shadow-[0_0_20px_rgba(140,82,255,0.2)]">
          <Sparkles className="w-3 h-3 text-[#ff5757]" />
          Subscribe to Mesh+ for Unlimited Access to Mesh AI in Mesh Social App or MeshAI App.
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.05] text-white">
          Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5757] to-[#8c52ff] [text-shadow:0_0_30px_rgba(140,82,255,0.3)]">Mesh AI.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
          Tired of scrolling through walls of text? Catch up on missed chats in seconds, query your server's deep lore instantly, and let your AI co-pilot handle the heavy lifting.
        </p>

        <Link to="/mesh-plus">
          <button className="group relative px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff5757] to-[#8c52ff] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            Upgrade to Mesh+ today and chat smarter <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>

      {/* VIDEO SECTION 1: Official Promo */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mb-24 group px-6">
        <div className="flex items-center justify-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
          <Play className="w-3.5 h-3.5 text-[#ff5757]" /> Mesh AI is Out Now! <span className="text-zinc-600">|</span> Watch the Official Promo
        </div>

        {/* Glowing border effect behind video 1 */}
        <div className="absolute inset-6 bg-gradient-to-r from-[#ff5757] to-[#8c52ff] rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
        
        {/* Video Container 1 */}
        <div className="relative bg-[#050505] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            controls
            /* poster="/mesh-ai-thumbnail.jpg" */
          >
            {/* PUT YOUR FIRST VIDEO FILE IN "public" */}
            <source src="/MeshAIStandalone.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-6 mb-24">
        
        {/* Feature 1: Catch Me Up */}
        <div className="group relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ff5757]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5757]/5 blur-[100px] rounded-full group-hover:bg-[#ff5757]/10 transition-colors"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#ff5757]/10 flex items-center justify-center mb-6 border border-[#ff5757]/20">
              <History className="w-7 h-7 text-[#ff5757]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Complete Privacy Control</h3>
            <p className="text-[#ff5757] font-semibold mb-4 text-sm tracking-wide uppercase">Control Your Data Using Our AI to protect it.</p>
            <p className="text-zinc-400 font-medium leading-relaxed">
              Our AI helps you manage your data privacy settings and ensures that your information is protected at all times, Using Mesh AI you can see what we store of your data and where it is held! 
            </p>
          </div>
        </div>

        {/* Feature 2: Server Knowledge Oracle */}
        <div className="group relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[#8c52ff]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8c52ff]/5 blur-[100px] rounded-full group-hover:bg-[#8c52ff]/10 transition-colors"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#8c52ff]/10 flex items-center justify-center mb-6 border border-[#8c52ff]/20">
              <Brain className="w-7 h-7 text-[#8c52ff]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">MeshAI can Help you code!</h3>
            <p className="text-[#8c52ff] font-semibold mb-4 text-sm tracking-wide uppercase">Mesh AI for Developers</p>
            <p className="text-zinc-400 font-medium leading-relaxed">
              Mesh AI can help you code faster and more efficiently by providing intelligent suggestions and automating repetitive tasks, This is an exclusive Version for Developers if you would like access to this please contact us at <a href="mailto:support@meshservicesuk.com" className="text-[#ff5757] hover:underline">support@meshservicesuk.com</a>
            </p>
          </div>
        </div>

        {/* Feature 3: Smart Drafting */}
        <div className="group relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 overflow-hidden transition-all duration-300 flex flex-col justify-between">
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
              <Wand2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">MeshAI Smart Drafting</h3>
            <p className="text-zinc-300 font-semibold mb-4 text-sm tracking-wide uppercase">An intelligent co-pilot built directly into your chat.</p>
            <p className="text-zinc-400 font-medium leading-relaxed">
              Helps users rewrite text, instantly translate foreign language messages in international servers, or draft long explanations on the fly without ever leaving the Mesh interface.
            </p>
          </div>
        </div>

        {/* Feature 4: Zero-Lag */}
        <div className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/30 overflow-hidden transition-all duration-300 flex flex-col justify-between">
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff5757] to-[#8c52ff] flex items-center justify-center mb-6 shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Zero-Lag, Human-Like Chat</h3>
            <p className="text-zinc-300 font-semibold mb-4 text-sm tracking-wide uppercase">The Pitch: Powered by world-class foundation models.</p>
            <p className="text-zinc-400 font-medium leading-relaxed">
              Offers deep conversational context, quick reasoning, and fluid interaction natively embedded into the Mesh+ interface. Your AI doesn't just respond; it understands the room.
            </p>
          </div>
        </div>

      </div>

      {/* VIDEO SECTION 2: Deep Dive / Walkthrough */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mb-20 group px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#8c52ff] mb-3">
            <Tv className="w-3.5 h-3.5" /> MeshAI v0.1 
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            MeshAI Powered By Gemini 3.7
          </h2>
        </div>

        {/* Glowing border effect behind video 2 */}
        <div className="absolute inset-6 bg-gradient-to-r from-[#8c52ff] to-[#ff5757] rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-300"></div>
        
        {/* Video Container 2 */}
        <div className="relative bg-[#050505] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            controls
            /* poster="/mesh-ai-demo-thumbnail.jpg" */
          >
            {/* PUT YOUR SECOND VIDEO FILE IN "public" AND RENAME BELOW */}
            <source src="/mesh-ai-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 w-full mt-10 pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-600 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mesh Services UK. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            Run with purpose by Dylan Scully.
            <span className="hidden md:inline"> | </span>
            For any questions regarding MeshAI, please contact <a href="mailto:it@meshservicesuk.com" className="text-[#ff5757] hover:underline">it@meshservicesuk.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}