// src/pages/MeshBetaProgram.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { 
  Hexagon, 
  ArrowLeft, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Bug, 
  Send, 
  CheckCircle2, 
  Music, 
  Headphones, 
  Building2, 
  Code2,
  MessageSquare,
  Clock,
  Loader2,
  AlertCircle
} from 'lucide-react';

export default function MeshBetaProgram() {
  const [role, setRole] = useState<'artist' | 'listener' | 'label' | 'developer'>('artist');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    link: '',
    platform: 'web',
    country: 'uk',
    reason: '',
    agreeFeedback: false,
    agreeNDA: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: insertError } = await supabase
        .from('beta_submissions')
        .insert([
          {
            role: role,
            full_name: formData.fullName,
            email: formData.email,
            link: formData.link,
            platform_preference: formData.platform,
            country: formData.country,
            use_case: formData.reason,
            agree_feedback: formData.agreeFeedback,
            agree_nda: formData.agreeNDA,
          },
        ]);

      if (insertError) {
        if (insertError.code === '23505') {
          throw new Error('This email address has already been submitted for beta access.');
        }
        throw insertError;
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting beta form:', err);
      setError(err.message || 'Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const roleOptions = [
    { id: 'artist', label: 'Artist / Creator', icon: Music, desc: 'Testing creator studio & audio upload tools' },
    { id: 'listener', label: 'Listener / Fan', icon: Headphones, desc: 'Testing streaming playback & discovery' },
    { id: 'label', label: 'Label / Manager', icon: Building2, desc: 'Testing catalog & analytics management' },
    { id: 'developer', label: 'Developer / API', icon: Code2, desc: 'Testing integrations & Mesh Discord bot API' },
  ] as const;

  const benefits = [
    {
      icon: Zap,
      title: "First Access to Features",
      desc: "Get early access to upcoming features like lossless streaming tools, creator analytics, and new distribution channels."
    },
    {
      icon: MessageSquare,
      title: "Direct Founder Access",
      desc: "Join an exclusive private Discord channel to report bugs, request features, and chat directly with our dev team."
    },
    {
      icon: ShieldCheck,
      title: "Founder Beta Badge",
      desc: "Receive an exclusive 'Beta Pioneer' badge on your public Mesh profile that permanently stays on your account."
    },
    {
      icon: Bug,
      title: "Bounty & Feedback Perks",
      desc: "Active beta testers who catch critical bugs or submit top feedback earn early monetization perks and boost features."
    }
  ];

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
            <Sparkles className="w-3.5 h-3.5 text-[#6042ff]" /> Early Access
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Shape the Future of <span className="bg-gradient-to-r from-white via-zinc-200 to-[#6042ff] bg-clip-text text-transparent">Mesh</span>
          </h1>
          <p className="text-lg text-[#888] font-medium leading-relaxed">
            We are looking for dedicated artists, listeners, and developers to test upcoming platform features, report bugs, and give direct feedback to our team.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1800ad]/20 border border-[#6042ff]/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#6042ff]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-[#888] font-medium leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1800ad]/10 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>

            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#1800ad]/20 border border-[#6042ff]/30 rounded-full flex items-center justify-center mx-auto text-[#6042ff]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-white">Application Received!</h2>
                <p className="text-[#888] max-w-md mx-auto font-medium">
                  Thank you for applying to the Mesh Beta Program. We review applications in weekly batches and will reach out via email with your access invite.
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setError(null);
                    }}
                    className="text-sm font-semibold text-[#6042ff] hover:underline"
                  >
                    Submit another application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Apply for Beta Access</h2>
                  <p className="text-sm text-[#888]">Please fill out the form below. Slots are limited per phase.</p>
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Role Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-wider text-[#888]">I want to join as a:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {roleOptions.map((item) => {
                      const Icon = item.icon;
                      const isSelected = role === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setRole(item.id)}
                          className={`p-4 rounded-xl border text-left transition-all ${
                            isSelected 
                              ? 'bg-[#1800ad]/20 border-[#6042ff] text-white shadow-[0_0_20px_rgba(96,66,255,0.15)]' 
                              : 'bg-[#050505] border-white/10 text-[#888] hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-1">
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-[#6042ff]' : 'text-zinc-500'}`} />
                            <span className="font-bold text-white text-sm">{item.label}</span>
                          </div>
                          <p className="text-xs text-[#888] font-medium leading-normal pl-8">{item.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-zinc-400">Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Dylan Scully"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
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
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#6042ff] focus:ring-1 focus:ring-[#6042ff] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-zinc-400">
                      {role === 'artist' ? 'Spotify / Soundcloud Link' : role === 'developer' ? 'GitHub / Portfolio Link' : 'Social Media Link'}
                    </label>
                    <input 
                      type="url" 
                      placeholder="https://..."
                      value={formData.link}
                      onChange={(e) => setFormData({...formData, link: e.target.value})}
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#6042ff] focus:ring-1 focus:ring-[#6042ff] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-zinc-400">Primary Device / OS</label>
                      <select 
                        value={formData.platform}
                        onChange={(e) => setFormData({...formData, platform: e.target.value})}
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6042ff] focus:ring-1 focus:ring-[#6042ff] transition-all appearance-none"
                      >
                        <option value="web">Web Browser (Chrome / Safari / Firefox)</option>
                        <option value="android">Android</option>
                        <option value="macos">macOS Desktop</option>
                        <option value="windows">Windows Desktop</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-zinc-400">Country / Region</label>
                      <select 
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6042ff] focus:ring-1 focus:ring-[#6042ff] transition-all appearance-none"
                      >
                        <option value="uk">United Kingdom (UK)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-zinc-400">Why do you want to join the Mesh Beta?</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Tell us briefly how you intend to use Mesh or what features you are most excited to test..."
                      value={formData.reason}
                      onChange={(e) => setFormData({...formData, reason: e.target.value})}
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#6042ff] focus:ring-1 focus:ring-[#6042ff] transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        required
                        checked={formData.agreeFeedback}
                        onChange={(e) => setFormData({...formData, agreeFeedback: e.target.checked})}
                        className="mt-1 rounded bg-[#050505] border-white/20 text-[#6042ff] focus:ring-[#6042ff] focus:ring-offset-0 accent-[#6042ff]"
                      />
                      <span className="text-sm text-[#888] group-hover:text-zinc-300 transition-colors">
                        I agree to provide active feedback and report bugs during the testing period.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        required
                        checked={formData.agreeNDA}
                        onChange={(e) => setFormData({...formData, agreeNDA: e.target.checked})}
                        className="mt-1 rounded bg-[#050505] border-white/20 text-[#6042ff] focus:ring-[#6042ff] focus:ring-offset-0 accent-[#6042ff]"
                      />
                      <span className="text-sm text-[#888] group-hover:text-zinc-300 transition-colors">
                        I understand that unreleased features are subject to change and confidentiality rules.
                      </span>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#1800ad] hover:bg-[#6042ff] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#1800ad]/25"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Beta Application
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Timeline / FAQ Note */}
        <div className="mt-16 text-center max-w-xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-[#888] text-sm font-medium">
            <Clock className="w-4 h-4 text-[#6042ff]" />
            Applications are evaluated continuously. Invites sent out via email. Mesh Services UK Beta Program is currently only available to users in the united kingdom.
          </div>
          <p className="text-xs text-zinc-600">
            Have questions about the beta process? Contact our support team at <a href="mailto:applications@meshbetaprogram.co.uk" className="text-zinc-400 underline">applications@meshbetaprogram.co.uk</a>.
          </p>
        </div>

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
            <Link to="/beta" className="hover:text-zinc-200 transition-colors text-white">Beta Program</Link>
            <Link to="/policies" className="hover:text-zinc-200 transition-colors">Terms & Privacy</Link>
            <Link to="/support" className="hover:text-zinc-200 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}