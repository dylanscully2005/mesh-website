// src/pages/MeshPlus.tsx
import { useState } from 'react';
import { 
  MonitorPlay, 
  HardDrive, 
  Phone, 
  MessageSquare, 
  Server, 
  CheckCircle2, 
  WifiOff, 
  Bot, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function MeshPlus() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // Your actual Stripe Payment Links
  const stripeMonthlyLink = 'https://buy.stripe.com/7sYaEXd5A6c34p4bGW7N601';
  const stripeAnnualLink = 'https://buy.stripe.com/cNieVd7Lg57Z8FkdP47N600';

  const currentStripeLink = billingCycle === 'monthly' ? stripeMonthlyLink : stripeAnnualLink;

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden flex flex-col items-center pt-32 pb-24 px-6 font-sans selection:bg-[#ff5757] selection:text-white">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#1100a8] rounded-full mix-blend-screen filter blur-[128px] opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#8c52ff] rounded-full mix-blend-screen filter blur-[128px] opacity-40 pointer-events-none"></div>

      {/* Main Neon Title */}
      <h1 className="relative z-10 text-6xl md:text-7xl font-extrabold text-white mb-8 tracking-tight [text-shadow:0_0_20px_rgba(255,255,255,1),_0_0_40px_rgba(255,255,255,0.6)]">
        Mesh+
      </h1>

      {/* Cards Container */}
      <div className="relative z-10 flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch mb-16">
        
        {/* Left Card: Mesh Standard */}
        <div className="w-full md:w-1/2 flex flex-col rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2 hover:bg-white/10">
          
          {/* Header */}
          <div className="mb-8 border-b border-white/10 pb-8">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
              Mesh Standard
            </h2>
            <p className="text-[#a6a6a6] font-medium">The essential tools for everyday creators.</p>
          </div>
          
          {/* Features List */}
          <div className="flex-1 mb-10">
            <ul className="space-y-5 text-[#d9d9d9] font-medium text-base">
              <li className="flex items-center gap-4">
                <MonitorPlay className="w-5 h-5 text-[#a6a6a6] shrink-0" /> HD Streaming & Mesh Music Access
              </li>
              <li className="flex items-center gap-4">
                <HardDrive className="w-5 h-5 text-[#a6a6a6] shrink-0" /> Limited File Upload Size
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#a6a6a6] shrink-0" /> Voice calls
              </li>
              <li className="flex items-center gap-4">
                <MessageSquare className="w-5 h-5 text-[#a6a6a6] shrink-0" /> Direct Messages
              </li>
              <li className="flex items-center gap-4">
                <Server className="w-5 h-5 text-[#a6a6a6] shrink-0" /> Servers
              </li>
            </ul>
          </div>

          {/* Button */}
          <button className="w-full bg-white/10 text-white font-bold text-lg py-4 px-8 rounded-full hover:bg-white/20 transition-colors border border-white/10">
            Free Forever
          </button>
        </div>

        {/* Right Card: Mesh+ (Premium) */}
        <div className="w-full md:w-1/2 rounded-[2rem] bg-gradient-to-br from-[#ff5757] to-[#8c52ff] p-[2px] shadow-[0_0_40px_rgba(140,82,255,0.3)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(255,87,87,0.4)] group">
          
          {/* Inner card background */}
          <div className="h-full w-full flex flex-col rounded-[calc(2rem-2px)] bg-[#050505]/90 backdrop-blur-xl p-8 md:p-10">
            
            {/* Header */}
            <div className="mb-6 border-b border-white/10 pb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff5757] to-[#8c52ff] [text-shadow:0_0_20px_rgba(255,255,255,0.3)]">
                  Mesh+
                </h2>
                
                {/* Billing Toggle Switch */}
                <div className="inline-flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-xl">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      billingCycle === 'monthly' ? 'bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white shadow' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('annual')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      billingCycle === 'annual' ? 'bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white shadow' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Annual
                  </button>
                </div>
              </div>
              <p className="text-[#a6a6a6] font-medium text-sm">The ultimate, unrestricted experience.</p>
            </div>
            
            {/* Features List */}
            <div className="flex-1 mb-8">
              <ul className="space-y-5 text-white font-semibold text-base">
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#ff5757] shrink-0" /> Everything on Mesh Standard
                </li>
                <li className="flex items-center gap-4">
                  <HardDrive className="w-5 h-5 text-[#ff7575] shrink-0" /> Bigger File Upload Size
                </li>
                <li className="flex items-center gap-4">
                  <WifiOff className="w-5 h-5 text-[#d064b8] shrink-0" /> Offline Listening on MeshMusic
                </li>
                <li className="flex items-center gap-4">
                  <Bot className="w-5 h-5 text-[#a859e0] shrink-0" /> Access to Mesh AI (Beta)
                </li>
                <li className="flex items-start gap-4">
                  <Sparkles className="w-5 h-5 text-[#8c52ff] shrink-0 mt-0.5" /> 
                  <span className="leading-snug">Early Access to New Features & Subscription features</span>
                </li>
              </ul>
            </div>

            {/* Active Stripe Checkout Button */}
            <a 
              href={currentStripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 group-hover:opacity-90 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] [text-shadow:0_0_10px_rgba(255,255,255,0.8)] flex items-center justify-center gap-2 text-center"
            >
              <span>Subscribe ({billingCycle === 'monthly' ? 'Monthly' : 'Annual'})</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Neon Text */}
      <footer className="border-t border-white/5 mt-20 pt-10 pb-6 w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-600 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mesh Services UK. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            if you want to edit or view your subscription please visit <a href="https://billing.stripe.com/p/login/cNieVd7Lg57Z8FkdP47N600" className="text-[#ff5757] hover:underline">Stripe Billing</a>
            <span className="hidden md:inline"> | </span>
            For any questions regarding Mesh+, please contact <a href="mailto:subscriptions@meshservicesuk.com" className="text-[#ff5757] hover:underline">subscriptions@meshservicesuk.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}