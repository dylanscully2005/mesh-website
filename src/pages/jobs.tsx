import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Hexagon, 
  ArrowLeft, 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Search, 
  Sparkles, 
  HeartHandshake,
  Filter,
  Award,
  Users,
  Zap,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// Volunteer Roles Data
const VOLUNTEER_ROLES = [
  {
    id: 'vol-mod-1',
    title: 'Community Moderator',
    department: 'Community & Moderation',
    location: 'Remote (Global)',
    type: 'Volunteer / Flexible',
    description: 'Help keep our community spaces safe, welcoming, and active. Assist new members, moderate discussions, and provide direct feedback to our core team.',
    tags: ['Community', 'Moderation', 'Discord', 'Support']
  },
  {
    id: 'vol-dev-1',
    title: 'Open Source Frontend Developer',
    department: 'Engineering & Dev',
    location: 'Remote',
    type: 'Volunteer / Flexible',
    description: 'Contribute code to our open-source tools, UI components, and community projects using React, TypeScript, and Tailwind CSS.',
    tags: ['React', 'TypeScript', 'Tailwind', 'GitHub']
  },
  {
    id: 'vol-cur-1',
    title: 'Music & Content Curator',
    department: 'Content & Curation',
    location: 'Remote',
    type: 'Volunteer / Flexible',
    description: 'Discover and highlight talented indie artists, musicians, and video creators to feature on Mesh Music and Mesh TV showcase playlists.',
    tags: ['Music', 'Indie Content', 'Curation', 'Showcase']
  },
  {
    id: 'vol-qa-1',
    title: 'Beta Tester & QA Helper',
    department: 'Quality Assurance',
    location: 'Remote',
    type: 'Volunteer / Flexible',
    description: 'Get early access to upcoming features and platform updates. Test pre-release builds, report bugs, and give direct feedback on user experience.',
    tags: ['Testing', 'QA', 'Bug Reporting', 'UX']
  },
  {
    id: 'vol-evt-1',
    title: 'Community Event Host',
    department: 'Community & Moderation',
    location: 'Remote',
    type: 'Volunteer / Flexible',
    description: 'Organize and host online community events, gaming nights, listening parties, or live Q&A sessions for Mesh members.',
    tags: ['Events', 'Hosting', 'Social', 'Community']
  }
];

const DEPARTMENTS = ['All', 'Community & Moderation', 'Engineering & Dev', 'Content & Curation', 'Quality Assurance'];

const VOLUNTEER_BENEFITS = [
  {
    icon: Award,
    title: 'Portfolio & References',
    description: 'Gain real-world experience and receive verified references or LinkedIn recommendations for outstanding contributions.'
  },
  {
    icon: Sparkles,
    title: 'Early Access & Perks',
    description: 'Get exclusive first-look access to new features, internal testing builds, and unique community badges.'
  },
  {
    icon: Clock,
    title: '100% Flexible Time',
    description: 'No strict hours or mandatory commitments. Contribute whenever you have spare time and energy.'
  },
  {
    icon: Users,
    title: 'Direct Core Team Access',
    description: 'Work alongside core developers and platform creators, giving you a real voice in Mesh’s direction.'
  },
  {
    icon: HeartHandshake,
    title: 'Welcoming Network',
    description: 'Connect with a global network of passionate developers, moderators, music lovers, and creators.'
  },
  {
    icon: Zap,
    title: 'Learn & Grow Skills',
    description: 'Sharpen your skills in moderation, open-source development, event management, or curation.'
  }
];

const ONBOARDING_STEPS = [
  { step: '01', title: 'Express Interest', desc: 'Send us a brief email letting us know which volunteer role interests you.' },
  { step: '02', title: 'Quick Chat', desc: 'An informal chat on Discord or email to align on your interests and availability.' },
  { step: '03', title: 'Onboarding', desc: 'Receive community guidelines, contributor access, and introduction to the team.' },
  { step: '04', title: 'Start Contributing', desc: 'Dive in at your own pace with full support from experienced contributors.' }
];

export default function Jobs() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  // Toggle card expansion
  const toggleJobExpand = (id: string) => {
    setExpandedJobId(prevId => (prevId === id ? null : id));
  };

  // Filter volunteer positions based on department & search input
  const filteredJobs = VOLUNTEER_ROLES.filter(job => {
    const matchesDept = selectedDept === 'All' || job.department === selectedDept;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-[#1800ad] selection:text-white">
      
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Hexagon fill="#1800ad" className="text-[#1800ad] w-6 h-6" />
            <span className="text-base font-bold tracking-tight text-white">Mesh Community</span>
          </Link>
          <Link to="/" className="text-sm font-medium text-[#888] flex items-center gap-2 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1800ad]/20 border border-[#3b1df2]/30 text-[#3b1df2] text-xs font-bold uppercase tracking-wider mb-6">
            <HeartHandshake className="w-3.5 h-3.5" /> Volunteer Opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Build and shape Mesh alongside us.
          </h1>
          <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto leading-relaxed">
            Mesh is powered by a community of passionate volunteers. Whether you want to moderate discussions, contribute code, curate music, or test new builds, there’s a place for you.
          </p>
        </section>

        {/* Benefits & Culture Grid */}
        <section className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Why Volunteer With Us?</h2>
            <p className="text-sm text-[#888]">Contribute on your own terms while building skills and working with a supportive community.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VOLUNTEER_BENEFITS.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3b1df2]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#1800ad]/20 flex items-center justify-center text-[#3b1df2] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-[#888] leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Volunteer Roles Board Section */}
        <section id="open-roles" className="scroll-mt-32">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 text-[#3b1df2] font-bold text-sm mb-1 uppercase tracking-wider">
                <Briefcase className="w-4 h-4" /> Open Positions
              </div>
              <h2 className="text-3xl font-bold text-white">Volunteer Roles</h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888]" />
              <input 
                type="text" 
                placeholder="Search roles or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-[#666] focus:outline-none focus:border-[#3b1df2] transition-colors"
              />
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            <Filter className="w-4 h-4 text-[#888] shrink-0 mr-2" />
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedDept === dept 
                    ? 'bg-[#1800ad] text-white shadow-lg shadow-[#1800ad]/30' 
                    : 'bg-white/5 text-[#888] hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Volunteer Role Listings */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;

                return (
                  <div 
                    key={job.id} 
                    onClick={() => toggleJobExpand(job.id)}
                    className={`p-6 md:p-8 rounded-2xl bg-white/5 border transition-all cursor-pointer group ${
                      isExpanded 
                        ? 'border-[#3b1df2]/60 bg-white/[0.08] shadow-lg shadow-[#1800ad]/10' 
                        : 'border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                    }`}
                  >
                    {/* Header Summary */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-[#3b1df2] transition-colors">
                            {job.title}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#1800ad]/20 border border-[#3b1df2]/30 text-[#3b1df2] text-xs font-bold">
                            {job.department}
                          </span>
                        </div>

                        {/* Metadata summary */}
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-medium text-[#888]">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#3b1df2]" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                            <Clock className="w-3.5 h-3.5 text-emerald-400" />
                            {job.type}
                          </span>
                        </div>
                      </div>

                      {/* Expand Toggle Button */}
                      <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                        <span className="text-xs font-semibold text-[#888] group-hover:text-white transition-colors flex items-center gap-1.5">
                          {isExpanded ? 'Hide Details' : 'View Details'}
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-[#3b1df2]" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#888] group-hover:text-white" />
                          )}
                        </span>
                      </div>

                    </div>

                    {/* Expandable Description and Details */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-white/10 transition-all">
                        <p className="text-sm text-[#ccc] mb-6 leading-relaxed max-w-3xl">
                          {job.description}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          {/* Skill Tags */}
                          <div className="flex flex-wrap gap-2">
                            {job.tags.map((tag, i) => (
                              <span key={i} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-[#aaa] border border-white/10">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Express Interest Button (stop propagation prevents click from collapsing card) */}
                          <a 
                            href={`mailto:careers@meshservicesuk.com?subject=Volunteer%20Interest:%20${encodeURIComponent(job.title)}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-xl bg-[#1800ad] text-white font-bold text-xs hover:bg-[#3b1df2] transition-colors shadow-lg shadow-[#1800ad]/20 shrink-0 self-start sm:self-auto"
                          >
                            Express Interest <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    )}

                  </div>
                );
              })
            ) : (
              <div className="p-12 text-center rounded-2xl bg-white/5 border border-white/10">
                <Briefcase className="w-10 h-10 text-[#888] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">No volunteer roles found</h3>
                <p className="text-sm text-[#888]">Try adjusting your search criteria or selecting another department.</p>
              </div>
            )}
          </div>
        </section>

        {/* Onboarding Process */}
        <section className="mt-28 mb-20 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">How Getting Involved Works</h2>
            <p className="text-sm text-[#888]">We make joining simple and hassle-free so you can start contributing right away.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ONBOARDING_STEPS.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-black/40 border border-white/5 relative">
                <span className="text-3xl font-extrabold text-[#3b1df2]/40 block mb-2">{item.step}</span>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-[#888] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* General Application Fallback Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#1800ad]/30 via-[#050505] to-[#1800ad]/20 border border-[#3b1df2]/40 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-3">Have another idea on how to help?</h3>
          <p className="text-sm text-[#888] mb-8 leading-relaxed max-w-xl mx-auto">
            We are always open to community-driven ideas! If you have skills in design, video editing, translation, or community organizing, reach out and let us know.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:careers@meshservicesuk.com?subject=General%20Application"
              className="w-full sm:w-auto h-11 px-8 rounded-xl bg-white text-black font-bold text-sm hover:bg-[#ededed] transition-colors flex items-center justify-center gap-2"
            >
              Send General Application <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="mailto:Legal@meshservicesuk.com"
              className="w-full sm:w-auto h-11 px-6 rounded-xl bg-white/5 text-white font-bold text-sm hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center"
            >
              Legal & Verification Enquiries
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}