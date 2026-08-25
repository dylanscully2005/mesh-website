// src/pages/Updates.tsx
import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Search, 
  Megaphone, 
  Calendar, 
  ArrowLeft,
  Filter,
  ShieldAlert,
  Wrench,
  Zap,
  Info
} from 'lucide-react';

interface UpdateItem {
  id: string;
  title: string;
  content: string;
  category: string;
  author_email: string;
  created_at: string;
}

export default function Updates() {
  const [updates, setUpdates] = useState<UpdateItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Feature', 'Maintenance', 'Security', 'General'];

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/updates?select=*&order=created_at.desc`,
        {
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
        }
      );

      if (!response.ok) {
        setUpdates([]);
        return;
      }

      setUpdates((await response.json()) as UpdateItem[]);
    } catch {
      setUpdates([]);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Feature':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Zap className="w-3 h-3" /> Feature
          </span>
        );
      case 'Maintenance':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Wrench className="w-3 h-3" /> Maintenance
          </span>
        );
      case 'Security':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
            <ShieldAlert className="w-3 h-3" /> Security
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#b857e6]/10 text-[#b857e6] border border-[#b857e6]/20">
            <Info className="w-3 h-3" /> General
          </span>
        );
    }
  };

  const filteredUpdates = updates.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white font-sans relative overflow-hidden flex flex-col">
      {/* Ambient Background Glows */}
      <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-[#ff4d6d]/10 rounded-full mix-blend-screen blur-[150px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-[#b857e6]/10 rounded-full mix-blend-screen blur-[150px] pointer-events-none" />

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-[#050505]/60 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff4d6d] to-[#b857e6] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h2 className="font-bold text-xl tracking-tight">
            Mesh<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d6d] to-[#b857e6]">Updates</span>
          </h2>
        </div>

        <a 
          href="/" 
          className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to App
        </a>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12 z-10">
        
        {/* Page Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 text-xs font-semibold text-zinc-400">
            <Megaphone className="w-3.5 h-3.5 text-[#ff4d6d]" /> What's New
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Platform Updates & Changelog
          </h1>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            Stay up to date with the latest features, improvements, and system maintenance announcements across Mesh.
          </p>
        </div>

        {/* Controls Bar (Search & Category Filters) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-zinc-900/40 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
          
          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search updates..."
              className="w-full bg-zinc-800/60 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#b857e6] transition-colors"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <Filter className="w-4 h-4 text-zinc-500 mr-1 shrink-0 hidden md:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] text-white shadow-md'
                    : 'bg-zinc-800/40 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Content Feed */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-zinc-900/30 border border-white/5 rounded-3xl p-6 animate-pulse">
                <div className="h-4 bg-zinc-800 rounded w-1/4 mb-4" />
                <div className="h-6 bg-zinc-800 rounded w-3/4 mb-3" />
                <div className="h-4 bg-zinc-800 rounded w-full mb-2" />
                <div className="h-4 bg-zinc-800 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : filteredUpdates.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/20 border border-white/5 rounded-3xl">
            <Megaphone className="w-10 h-10 text-zinc-600 mx-auto mb-3 opacity-50" />
            <h3 className="text-lg font-bold text-zinc-300 mb-1">No updates found</h3>
            <p className="text-xs text-zinc-500">
              {searchQuery ? 'Try adjusting your search query or filters.' : 'Check back later for new releases!'}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredUpdates.map((item) => (
              <article 
                key={item.id}
                className="bg-zinc-900/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  {getCategoryBadge(item.category)}
                  
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>
                      {new Date(item.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h2>

                <div className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap font-normal">
                  {item.content}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Mesh Global Services. All rights reserved.
      </footer>
    </div>
  );
}