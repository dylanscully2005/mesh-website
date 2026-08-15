import { Film, PlayCircle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MeshTV() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 font-sans selection:bg-white selection:text-black">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-zinc-300 text-xs font-bold uppercase tracking-widest mb-8">
          Est. Q1 2027
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">MeshTV</h1>
        <p className="text-xl text-zinc-400 leading-relaxed font-medium">
          A new way to watch indie films and shorts. MeshTV is a decentralized streaming platform that puts control back in the hands of the filmmakers.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all">
          <Film className="w-8 h-8 text-zinc-200 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Decentralized Delivery</h3>
          <p className="text-zinc-400 leading-relaxed">By utilizing decentralized nodes, we ensure high-quality 4K playback globally without the heavy server costs, allowing us to pass the savings onto creators.</p>
        </div>
        <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all">
          <Shield className="w-8 h-8 text-zinc-200 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Anti-Algorithm</h3>
          <p className="text-zinc-400 leading-relaxed">We don't feed your watch history to data brokers, and we don't bury your films under algorithmic slop. Content is surfaced organically and transparently.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-10 text-center">
        <PlayCircle className="w-12 h-12 text-white mx-auto mb-4 opacity-50" />
        <h2 className="text-2xl font-bold text-white mb-4">Early Access via Mesh+</h2>
        <p className="text-zinc-400 mb-8 max-w-lg mx-auto">MeshTV will be available in 2027, but Pro Plan subscribers will get exclusive early beta access to the platform.</p>
        <Link to="/mesh-plus" className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-colors">
          Pre-Sign Up for Pro
        </Link>
      </div>
    </div>
  );
}