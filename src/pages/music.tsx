import { Music, Headphones, Coins, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MeshMusic() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 font-sans selection:bg-[#3b1df2] selection:text-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="w-20 h-20 bg-[#1800ad]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#3b1df2]/30">
          <Music className="w-10 h-10 text-[#3b1df2]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Mesh Music Hub</h1>
        <p className="text-xl text-zinc-400 leading-relaxed font-medium">
          Stop letting standard streaming platforms ruin your masters. Upload your raw WAVs and FLACs directly. We serve your audio exactly how you mixed it in the studio.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <Headphones className="w-8 h-8 text-white mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Zero Compression</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Your fans hear what you hear. We stream lossless audio formats by default, preserving the exact dynamic range of your original bounce.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <Coins className="w-8 h-8 text-[#3b1df2] mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">The 70% Rule</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Creators keep 70% of their net revenue. No middle-men, no confusing royalty payouts. Straight from the listener to the artist.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <Upload className="w-8 h-8 text-white mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Direct Uploads</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Skip the distributors. Upload your tracks, set your metadata, and push instantly to your listeners on the Mesh network.</p>
        </div>
      </div>

      <div className="text-center">
        <Link to="/mesh-plus" className="inline-block px-8 py-4 bg-[#1800ad] text-white font-bold rounded-2xl hover:bg-[#290df2] transition-colors">
          Join the Creator Waitlist
        </Link>
      </div>
    </div>
  );
}