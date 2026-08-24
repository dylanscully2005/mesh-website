// src/pages/BusinessContacts.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Hexagon, 
  ArrowLeft, 
  Mail, 
  Building2, 
  Music, 
  Code2, 
  ShieldAlert, 
  Clock, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  HelpCircle,
  ExternalLink,
  Zap
} from 'lucide-react';

interface Department {
  id: string;
  name: string;
  email: string;
  icon: any;
  responseTime: string;
  description: string;
  suitableFor: string[];
}

export default function BusinessContacts() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [selectedDept, setSelectedDept] = useState<string>('general');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const departments: Department[] = [
    {
      id: 'general',
      name: 'General & User Support',
      email: 'support@meshservicesuk.com',
      icon: HelpCircle,
      responseTime: '< 24 Hours',
      description: 'For general user inquiries, account issues, app troubleshooting, and basic feature questions.',
      suitableFor: ['Account issues', 'Bug reports', 'General feedback', 'Billing inquiries'],
    },
    {
      id: 'artists',
      name: 'Artist & Label Relations',
      email: 'creators@meshservicesuk.com',
      icon: Music,
      responseTime: '1-2 Business Days',
      description: 'Dedicated support for verified creators, record labels, profile verification, and catalog setup.',
      suitableFor: ['Profile verification', 'Catalog distribution', 'Royalties & payouts', 'Creator studio help'],
    },
    {
      id: 'partnerships',
      name: 'Business & Partnerships',
      email: 'partnerships@meshservicesuk.com',
      icon: Building2,
      responseTime: '2-3 Business Days',
      description: 'Explore commercial partnerships, brand integrations, corporate inquiries, and platform expansion.',
      suitableFor: ['Brand sponsorships', 'Corporate deals', 'Cross-promotions', 'Investor relations'],
    },
    {
      id: 'developers',
      name: 'Developers & API Integration',
      email: 'devs@meshservicesuk.com',
      icon: Code2,
      responseTime: '1-2 Business Days',
      description: 'Technical support for developer integrations, Mesh Discord bot API keys, and custom webhooks.',
      suitableFor: ['API rate limits', 'Discord bot integration', 'Webhook setup', 'Developer docs support'],
    },
    {
      id: 'legal',
      name: 'Legal, Copyright & DMCA',
      email: 'legal@meshservicesuk.com',
      icon: ShieldAlert,
      responseTime: '< 12 Hours',
      description: 'Fast-track response for copyright take-down notices, DMCA claims, terms enforcement, and privacy.',
      suitableFor: ['DMCA take-downs', 'Copyright disputes', 'Privacy requests (GDPR)', 'Terms violations'],
    },
    {
      id: 'Beta Program',
      name: 'Beta Program & Feature Requests',
      email: 'applications@meshbetaprogram.co.uk',
      icon: Zap,
      responseTime: '1-2 Business Days',
      description: 'Exclusive access to new features, beta testing opportunities, and shaping the future of the platform.',
      suitableFor: ['Beta testing', 'Press inquiries', 'Official statements', "Feature requests"],
    },
  ];

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect to your backend/Supabase endpoint if needed
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-mesh-brand selection:text-white pb-20">
      
      {/* Minimal Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Hexagon fill="#1800ad" className="text-mesh-brand w-6 h-6" />
            <span className="text-base font-bold tracking-tight text-white">Mesh Services UK</span>
          </Link>
          <Link to="/" className="text-sm font-medium text-[#888] flex items-center gap-2 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-6xl mx-auto">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="px-3.5 py-1.5 rounded-full border border-[#6042ff]/30 bg-[#1800ad]/10 text-[#6042ff] text-xs font-bold uppercase tracking-widest mb-6 inline-flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#6042ff]" /> Department Directory
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Get in Touch with <span className="bg-gradient-to-r from-white via-zinc-200 to-[#6042ff] bg-clip-text text-transparent">Mesh</span>
          </h1>
          <p className="text-lg text-[#888] font-medium leading-relaxed">
            Find the exact department you need to get a faster response from the right member of our team.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {departments.map((dept) => {
            const Icon = dept.icon;
            const isCopied = copiedEmail === dept.email;

            return (
              <div 
                key={dept.id} 
                className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-[#6042ff]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1800ad]/20 border border-[#6042ff]/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#6042ff]" />
                    </div>
                    <span className="text-xs font-semibold text-zinc-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#6042ff]" /> {dept.responseTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{dept.name}</h3>
                  <p className="text-sm text-[#888] font-medium leading-relaxed mb-4">{dept.description}</p>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Best for:</span>
                    <ul className="flex flex-wrap gap-1.5">
                      {dept.suitableFor.map((item, idx) => (
                        <li key={idx} className="text-[11px] font-medium text-zinc-300 bg-zinc-900 border border-white/5 px-2 py-0.5 rounded">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  <a 
                    href={`mailto:${dept.email}`} 
                    className="text-xs font-semibold text-[#6042ff] hover:text-white transition-colors truncate flex items-center gap-1.5"
                  >
                    {dept.email}
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(dept.email)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all shrink-0"
                    title="Copy Email"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1800ad]/10 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>

            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#1800ad]/20 border border-[#6042ff]/30 rounded-full flex items-center justify-center mx-auto text-[#6042ff]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-white">Message Dispatched!</h2>
                <p className="text-[#888] max-w-md mx-auto font-medium">
                  Your inquiry has been routed directly to our <strong>{departments.find(d => d.id === selectedDept)?.name}</strong> team.
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-sm font-semibold text-[#6042ff] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Send a Direct Inquiry</h2>
                  <p className="text-sm text-[#888]">Fill out the form and select the target department to route your message.</p>
                </div>

                {/* Department Selection */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-zinc-400">Target Department</label>
                  <select 
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6042ff] focus:ring-1 focus:ring-[#6042ff] transition-all appearance-none"
                  >
                    {departments.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} ({d.email})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-zinc-400">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Dylan Scully"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#6042ff] focus:ring-1 focus:ring-[#6042ff] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-zinc-400">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#6042ff] focus:ring-1 focus:ring-[#6042ff] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-zinc-400">Subject</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Brief summary of your inquiry..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#6042ff] focus:ring-1 focus:ring-[#6042ff] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-zinc-400">Message</label>
                  <textarea 
                    rows={5}
                    required
                    placeholder="Provide as many details as possible so we can assist you quickly..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#6042ff] focus:ring-1 focus:ring-[#6042ff] transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#1800ad] hover:bg-[#6042ff] text-white font-bold py-4 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#1800ad]/25"
                >
                  <Send className="w-4 h-4" /> Route & Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Discord & Community Note */}

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-20 pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-600 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mesh Services UK. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            Run with purpose by Dylan Scully.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-500">
            <Link to="/bot" className="hover:text-zinc-200 transition-colors">Discord Bot</Link>
            <Link to="/beta" className="hover:text-zinc-200 transition-colors">Beta Program</Link>
            <Link to="/policies" className="hover:text-zinc-200 transition-colors">Terms & Privacy</Link>
            <Link to="/contacts" className="hover:text-zinc-200 transition-colors text-white">Contacts</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}