import { Brain, Sparkles, History, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MeshAIService() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 font-sans selection:bg-[#ff5757] selection:text-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="w-20 h-20 bg-[#ff5757]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#ff5757]/30">
          <Brain className="w-10 h-10 text-[#ff5757]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Mesh AI</h1>
        <p className="text-xl text-zinc-400 leading-relaxed font-medium">
          Your intelligent co-pilot. Catch up on missed chats in seconds, instantly translate languages, and query your server's deep lore without ever leaving the interface.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <History className="w-8 h-8 text-[#ff5757] mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Catch Me Up</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Instantly generate bulleted summaries of everything you missed in a channel while you were offline.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <Sparkles className="w-8 h-8 text-[#8c52ff] mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Knowledge Oracle</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Ask complex questions about your server history and get precise answers drawn from logs.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <MessageSquare className="w-8 h-8 text-white mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Smart Drafting</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Rewrite text, translate foreign messages, and draft explanations on the fly.</p>
        </div>
      </div>

      <div className="text-center">
        <Link to="/mesh-plus" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white font-bold rounded-2xl hover:opacity-90 transition-opacity">
          Unlock with Mesh+ <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}