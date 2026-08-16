import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Receipt, Mail, User, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SubmitReceipt() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      // Insert email, username, and transaction_id into the 'receipt_submissions' table
      const { error } = await supabase
        .from('receipt_submissions')
        .insert([
          { 
            email: email.trim(), 
            username: username.trim(),
            transaction_id: transactionId.trim(), 
            status: 'pending' 
          }
        ]);

      if (error) {
        throw error;
      }

      setSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to submit receipt. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 px-4 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(255,77,109,0.3)]">
        
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <Receipt className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            Activate{' '}
            <span className="bg-gradient-to-r from-[#ff4d6d] via-[#c256e8] to-[#536dfe] bg-clip-text text-transparent">
              Mesh+
            </span>
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Submit your account info and receipt ID for activation
          </p>
        </div>

        {success ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-lg">Receipt Submitted!</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              We have recorded your username, email, and transaction ID. Our team will verify and activate your Mesh+ account shortly.
            </p>
            <button
              onClick={() => { setSuccess(false); setTransactionId(''); setEmail(''); setUsername(''); }}
              className="text-xs font-bold text-[#ff4d6d] hover:underline block mx-auto pt-2"
            >
              Submit another receipt
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-xs">
                {errorMessage}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">
                Username / Handle (including #0000)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="meshuser123"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#b857e6] transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your-email@mesh.com"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#b857e6] transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">
                Receipt ID
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                  <Sparkles className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  required
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="e.g. TXN-984729384"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#b857e6] transition-colors text-sm font-mono"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] text-white font-bold rounded-2xl hover:opacity-90 transition-opacity shadow-lg shadow-[#ff4d6d]/20 text-sm disabled:opacity-50 mt-2 flex items-center justify-center gap-2"
            >
              {loading ? 'Submitting...' : 'Submit Receipt for Activation'} <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
<p className="text-xs text-zinc-500 mt-4 text-center">
          By submitting, you agree to our <a href="/policies" className="text-[#b857e6] hover:underline">Terms & Policies</a>. To find your receipt ID or transaction ID, check your email confirmation or payment receipt from the platform you purchased Mesh+ from.
        </p>
      </div>
      <div className="text-xs text-zinc-600 mt-6 text-center">
        © {new Date().getFullYear()} Mesh Services UK. All rights reserved.
      </div>
      <div className="text-xs text-zinc-600 mt-2 text-center">
        For support, contact <a href="mailto:support@meshservices.com" className="text-[#b857e6] hover:underline">support@meshservices.com</a>
      </div>
    </div>
  );
}