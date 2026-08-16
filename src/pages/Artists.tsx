import { Music, Headphones, Coins, Upload, Play, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

// ==========================================
// 🎵 ADD & MANAGE YOUR ARTISTS HERE
// ==========================================
const ARTISTS = [
  {
    id: '1',
    name: 'FXDE',
    genre: 'Alternative',
    imageUrl: 'https://drive.google.com/file/d/1V3JIc0Apn9i1qWakXfyZVp0kKPjRA5Qz/view?usp=sharing',
    tracks: 0,
    profileUrl: '/artists/fxde',
  },
];

export default function MeshMusic() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 font-sans selection:bg-[#3b1df2] selection:text-white">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="w-20 h-20 bg-[#1800ad]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#3b1df2]/30">
          <Music className="w-10 h-10 text-[#3b1df2]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Mesh Music Artists</h1>
        <p className="text-xl text-zinc-400 leading-relaxed font-medium">
          Stop letting standard streaming platforms ruin your masters. Upload your raw WAVs and FLACs directly. We serve your audio exactly how you mixed it in the studio.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
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
          <h3 className="text-xl font-bold text-white mb-2">Quick Uploads</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Skip the distributors. Upload your tracks, set your metadata, and we will handle the rest.</p>
        </div>
      </div>

      {/* Featured Artists Grid */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Featured Artists</h2>
            <p className="text-zinc-400 text-sm">Discover creators streaming lossless audio on Mesh Music.</p>
          </div>
          <Link to="/mesh-plus" className="text-[#3b1df2] hover:text-[#5235f5] text-sm font-semibold mt-4 md:mt-0 flex items-center gap-1.5 transition-colors">
            <UserPlus className="w-4 h-4" /> Join as an Artist &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTISTS.map((artist) => (
            <Link
              key={artist.id}
              to={artist.profileUrl}
              className="bg-white/5 border border-white/10 rounded-3xl p-5 hover:border-[#3b1df2]/50 transition-all duration-300 group flex flex-col justify-between hover:bg-white/[0.07]"
            >
              <div>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-zinc-900">
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#3b1df2] text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#3b1df2] transition-colors">
                  {artist.name}
                </h3>
                <p className="text-zinc-400 text-xs font-medium mt-1">{artist.genre}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500">
                <span>{artist.tracks} Tracks</span>
                <span className="text-[#3b1df2] font-semibold group-hover:underline">Listen</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Link to="/mesh-plus" className="inline-block px-8 py-4 bg-[#1800ad] text-white font-bold rounded-2xl hover:bg-[#290df2] transition-colors shadow-lg shadow-[#1800ad]/20">
          Join the Creator Waitlist
        </Link>
      </div>

    </div>
  );
}