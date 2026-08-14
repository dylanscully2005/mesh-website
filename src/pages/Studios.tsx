// src/pages/Studios.tsx
import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { 

  Search, 
  Filter, 
  Building2, 
  ArrowRight,
  Globe,
  MapPin,
  Link
} from 'lucide-react';

// Define the type so TypeScript doesn't complain about the empty array
type Studio = {
  id: string;
  name: string;
  focus: string;
  location: string;
  members: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  color: string;
  bg: string;
};

// Emptied placeholder data
const STUDIOS: Studio[] = [];

const FOCUS_AREAS = ['All', 'Animation & VFX', 'Game Development', 'Music Label', 'Podcasting', 'Open Source / Tech'];

export default function Studios() {
  const [selectedFocus, setSelectedFocus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudios = STUDIOS.filter(studio => {
    const matchesFocus = selectedFocus === 'All' || studio.focus === selectedFocus;
    const matchesSearch = studio.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          studio.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFocus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-[#1800ad] selection:text-white">
      
   

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        
        <section className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1800ad]/20 border border-[#3b1df2]/30 text-[#3b1df2] text-xs font-bold uppercase tracking-wider mb-6">
            <Building2 className="w-3.5 h-3.5" /> Partner Collectives
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Creative powerhouses, built on Mesh.
          </h1>
          <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto leading-relaxed">
            Discover the independent labels, dev teams, and animation houses utilizing Mesh infrastructure to collaborate and share their work globally.
          </p>
        </section>

        <section className="scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Studio Directory</h2>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888]" />
              <input 
                type="text" 
                placeholder="Search studios or tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-[#666] focus:outline-none focus:border-[#3b1df2] transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            <Filter className="w-4 h-4 text-[#888] shrink-0 mr-2" />
            {FOCUS_AREAS.map((focus) => (
              <button
                key={focus}
                onClick={() => setSelectedFocus(focus)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedFocus === focus 
                    ? 'bg-[#1800ad] text-white shadow-lg shadow-[#1800ad]/30' 
                    : 'bg-white/5 text-[#888] hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {focus}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudios.length > 0 ? (
              filteredStudios.map((studio) => {
                const Icon = studio.icon;
                return (
                  <div 
                    key={studio.id} 
                    className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3b1df2]/50 hover:bg-white/[0.07] transition-all group cursor-pointer flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-xl ${studio.bg} flex items-center justify-center ${studio.color} border border-white/5`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
                        {studio.focus}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#3b1df2] transition-colors">
                      {studio.name}
                    </h3>

                    <div className="flex items-center gap-4 text-xs text-[#888] mb-4 font-medium">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {studio.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5" /> {studio.members} Members
                      </span>
                    </div>

                    <p className="text-sm text-[#ccc] mb-8 leading-relaxed flex-1">
                      {studio.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {studio.tags.map((tag, i) => (
                        <span key={i} className="text-[11px] font-medium px-2 py-1 rounded-md bg-black/40 text-[#888] border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 h-10 rounded-xl bg-[#1800ad]/20 text-[#3b1df2] font-bold text-xs hover:bg-[#1800ad] hover:text-white transition-colors">
                      View Studio Profile <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )
              })
            ) : (
              <div className="col-span-full p-12 text-center rounded-2xl bg-white/5 border border-white/10">
                <Building2 className="w-10 h-10 text-[#3b1df2] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">Partnerships are opening soon</h3>
                <p className="text-sm text-[#888]">We are reviewing our first wave of partner studios. If you run a collective, register below.</p>
              </div>
            )}
          </div>
        </section>

        <div className="mt-24 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-md">
            <h3 className="text-2xl font-bold text-white mb-2">Bring your collective to Mesh</h3>
            <p className="text-sm text-[#888] leading-relaxed">
              Register your studio or agency to access enterprise-grade infrastructure, bulk streaming nodes, and priority directory placement.
            </p>
          </div>
          <a 
            href="mailto:partnerships@meshservicesuk.com"
            className="w-full md:w-auto shrink-0 h-11 px-8 rounded-xl bg-white text-black font-bold text-sm hover:bg-[#ededed] transition-colors flex items-center justify-center gap-2"
          >
            Register Studio <ArrowRight className="w-4 h-4" />
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