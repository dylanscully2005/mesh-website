import { CreditCard, Receipt, ArrowLeft, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

// ==========================================
// 🔗 STRIPE URL CONFIGURATION
// ==========================================
// If you are using a Stripe No-Code Customer Portal link, paste it here.
// Otherwise, this button should trigger your backend endpoint to generate a portal session.
const STRIPE_PORTAL_LINK = "https://billing.stripe.com/p/login/cNieVd7Lg57Z8FkdP47N600"; 
// ==========================================

export default function CustomerPortal() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white flex flex-col font-sans relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#ff4d6d]/10 rounded-full mix-blend-screen blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#b857e6]/10 rounded-full mix-blend-screen blur-[150px] pointer-events-none"></div>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-[#050505]/50 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff4d6d] to-[#b857e6] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h2 className="font-bold text-xl tracking-tight">
            Mesh<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d6d] to-[#b857e6]">Portal</span>
          </h2>
        </div>
        
        <a 
          href="/" 
          className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to App
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 z-10">
        <div className="w-full max-w-lg">
          
          {/* Title Area */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Manage Your Subscription
            </h1>
            <p className="text-zinc-400 text-base">
              Update your payment methods, download receipts, and manage your Mesh+ subscription securely via Stripe.
            </p>
          </div>

          {/* Action Cards */}
          <div className="space-y-4">
            
            {/* Stripe Portal Button */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-[#b857e6]/50 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#b857e6]/10 flex items-center justify-center border border-[#b857e6]/20 group-hover:scale-105 transition-transform">
                  <CreditCard className="w-6 h-6 text-[#b857e6]" />
                </div>
                <ShieldCheck className="w-5 h-5 text-green-400 opacity-80" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Billing & Subscription</h3>
              <p className="text-sm text-zinc-400 mb-6 line-clamp-2">
                Powered by Stripe. Securely update your credit card, cancel, or change your active plan.
              </p>

              <a 
                href={STRIPE_PORTAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                Open Stripe Portal <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Submit Receipt Fallback / Extra Option */}
            <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-6 backdrop-blur-md hover:bg-zinc-900/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center border border-white/5">
                  <Receipt className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Manual Verification</h3>
                  <p className="text-xs text-zinc-500">Already paid but need access?</p>
                </div>
              </div>
              
              <a 
                href="/submit-receipt" 
                className="mt-4 w-full py-3 bg-zinc-800 text-white font-medium rounded-xl hover:bg-zinc-700 transition-colors flex items-center justify-center text-sm"
              >
                Submit Receipt
              </a>
            </div>

          </div>

          {/* Footer Note */}
          <div className="text-center mt-10 text-xs text-zinc-600 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" /> 
            Subscriptions are securely managed by Stripe. We do not store your payment information.
          </div>

        </div>
      </main>

    </div>
  );
}