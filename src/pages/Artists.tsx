// src/pages/Artists.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Hexagon, 
  ArrowLeft, 
  Search, 
  Filter, 
  Music, 
  Users, 
  PlayCircle, 
  ArrowRight,
  Sparkles,
  MapPin,
  Mic2
} from 'lucide-react';

// Define the type so TypeScript doesn't complain about the empty array
type Artist = {
  id: string;
  name: string;
  genre: string;
  location: string;
  listeners: string;
  description: string;
  tags: string[];
  gradient: string;
};

// Emptied placeholder data
const ARTISTS: Artist[] = [];

const GENRES = ['All', 'Electronic', 'Indie Rock', 'Hip Hop', 'Acoustic / Folk', 'Jazz / Soul'];

export default function Artists() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArtists = ARTISTS.filter(artist => {
    const matchesGenre = selectedGenre === 'All' || artist.genre === selectedGenre;
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          artist.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-[#1800ad] selection:text-white">
      
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Hexagon fill="#1800ad" className="text-[#1800ad] w-6 h-6" />
            <span className="text-base font-bold tracking-tight text-white">Mesh Artists</span>
          </Link>
          <Link to="/" className="text-sm font-medium text-[#888] flex items-center gap-2 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        
        <section className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1800ad]/20 border border-[#3b1df2]/30 text-[#3b1df2] text-xs font-bold uppercase tracking-wider mb-6">
            <Music className="w-3.5 h-3.5" /> Featured Creators
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Discover independent talent.
          </h1>
          <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto leading-relaxed">
            Explore the musicians, producers, and performers building their communities and redefining digital sound on Mesh.
          </p>
        </section>

        <section className="scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Artist Directory</h2>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888]" />
              <input 
                type="text" 
                placeholder="Search artists or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-[#666] focus:outline-none focus:border-[#3b1df2] transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            <Filter className="w-4 h-4 text-[#888] shrink-0 mr-2" />
            {GENRES.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedGenre === genre 
                    ? 'bg-[#1800ad] text-white shadow-lg shadow-[#1800ad]/30' 
                    : 'bg-white/5 text-[#888] hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtists.length > 0 ? (
              filteredArtists.map((artist) => (
                <div 
                  key={artist.id} 
                  className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-[#3b1df2]/50 hover:bg-white/[0.07] transition-all group cursor-pointer flex flex-col"
                >
                  <div className={`h-32 w-full bg-gradient-to-br ${artist.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <Mic2 className="absolute bottom-4 right-4 w-8 h-8 text-white/30 group-hover:scale-110 group-hover:text-white/50 transition-all" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#3b1df2] transition-colors">
                        {artist.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-md bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
                        {artist.genre}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-[#888] mb-4 font-medium">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {artist.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> {artist.listeners} / mo
                      </span>
                    </div>

                    <p className="text-sm text-[#ccc] mb-6 leading-relaxed flex-1">
                      {artist.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {artist.tags.map((tag, i) => (
                        <span key={i} className="text-[11px] font-medium px-2 py-1 rounded-md bg-white/5 text-[#888] border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 h-10 rounded-xl bg-white/5 text-white font-bold text-xs hover:bg-[#1800ad] hover:border-[#1800ad] border border-white/10 transition-colors">
                      <PlayCircle className="w-4 h-4" /> Listen on Mesh
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full p-12 text-center rounded-2xl bg-white/5 border border-white/10">
                <Sparkles className="w-10 h-10 text-[#3b1df2] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">We are currently onboarding artists</h3>
                <p className="text-sm text-[#888]">The artist directory is empty right now, but our first wave of creators will be announced here soon.</p>
              </div>
            )}
          </div>
        </section>

        <div className="mt-24 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#1800ad]/30 via-[#050505] to-[#1800ad]/20 border border-[#3b1df2]/40 text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-md">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#3b1df2]" /> Are you an artist?
            </h3>
            <p className="text-sm text-[#888] leading-relaxed">
              Take control of your content. Claim your verified artist profile, stream in ultra-low latency, and monetize directly with your community.
            </p>
          </div>
          <a 
            href="mailto:creators@meshservicesuk.com"
            className="w-full md:w-auto shrink-0 h-11 px-8 rounded-xl bg-[#1800ad] text-white font-bold text-sm hover:bg-[#3b1df2] transition-colors shadow-lg shadow-[#1800ad]/20 flex items-center justify-center gap-2"
          >
            Apply for Verification <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </main>
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