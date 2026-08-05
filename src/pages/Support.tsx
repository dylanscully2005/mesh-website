// src/pages/Support.tsx
import { Link } from 'react-router-dom';
import { Hexagon, ArrowLeft, Mail, Clock, FileQuestion, MessageSquare, AlertCircle } from 'lucide-react';

export default function Support() {
  const faqs = [
    {
      question: "How do I upload lossless audio?",
      answer: "Log into the Mesh Web App and navigate to the Creator Portal. We natively support .WAV and .FLAC files. Maximum file size per track is 150MB."
    },
    {
      question: "When are the 70% revenue splits paid out?",
      answer: "We operate on a standard Net-30 payout cycle. Earnings generated in January will be cleared and deposited into your connected bank or PayPal account by the end of February."
    },
    {
      question: "Why was my track submission rejected?",
      answer: "Tracks are typically rejected for three reasons: poor audio quality (clipping/distortion), incorrect metadata, or suspected copyright infringement. Check your email for a detailed breakdown from our moderation team."
    },
    {
      question: "How do I completely delete my data?",
      answer: "Head to Settings > Privacy & Data Care in the app. Clicking 'Delete Account' will instantly purge your profile and listening history from our active databases."
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
        
        {/* Header */}
        <div className="mb-16">
          <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#888] text-xs font-bold uppercase tracking-widest mb-6 inline-flex items-center gap-2">
            <MessageSquare className="w-3 h-3 text-mesh-brand" /> Help Center
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            How can we help you?
          </h1>
          <p className="text-lg text-[#888] max-w-2xl font-medium">
            Find answers to common questions about the Mesh Audio Hub, payouts, and infrastructure, or reach out to our team directly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* FAQ Section (Left Side) */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
              <FileQuestion className="w-6 h-6 text-mesh-brand" /> Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-colors">
                  <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                  <p className="text-[#888] font-medium leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Box (Right Side) */}
          <div className="lg:w-[400px]">
            <div className="sticky top-32 p-8 rounded-2xl bg-gradient-to-br from-[#1800ad]/10 to-[#0A0A0A] border border-mesh-brand/30">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Contact Support</h2>
              <p className="text-[#888] text-sm mb-8 font-medium">
                Can't find what you're looking for? Our UK-based operations team is ready to assist you.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1800ad]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#6042ff]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#888] font-bold uppercase tracking-wider mb-1">Email Us</div>
                    <a href="mailto:support@meshservicesuk.com" className="text-white font-semibold hover:text-[#6042ff] transition-colors">
                      support@meshservicesuk.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#888] font-bold uppercase tracking-wider mb-1">Operating Hours</div>
                    <div className="text-white font-medium">Mon - Fri, 9:00 AM - 5:00 PM (GMT)</div>
                    <div className="text-[#888] text-sm mt-1">Please allow up to 24 hours for a response.</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-mesh-brand flex-shrink-0 mt-0.5" />
                <div className="text-sm text-[#888] font-medium">
                  For legal inquiries, DMCA takedowns, or GDPR requests, please review our <Link to="/policies" className="text-white font-bold hover:underline">Compliance Docs</Link> first.
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}