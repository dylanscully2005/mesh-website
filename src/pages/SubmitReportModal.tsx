// src/components/SubmitReportModal.tsx
import { useState, useEffect } from 'react';
import type { SyntheticEvent } from 'react';
import { supabase } from '@/supabaseClient';
import { logErrorToSupabase } from '@/lib/logger';
import { 
  X, 
  AlertCircle, 
  CheckCircle2, 
  Loader2, 
  Sparkles, 
  Send,
  Bug,
  User,
  CreditCard,
  HelpCircle
} from 'lucide-react';

interface SubmitReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEmail?: string;
}

export default function SubmitReportModal({ 
  isOpen, 
  onClose, 
  defaultEmail = '' 
}: SubmitReportModalProps) {
  const [email, setEmail] = useState<string>(defaultEmail);
  const [category, setCategory] = useState<string>('Bug');
  const [description, setDescription] = useState<string>('');
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync defaultEmail when modal opens
  useEffect(() => {
    if (isOpen) {
      if (defaultEmail) setEmail(defaultEmail);
      setIsSuccess(false);
      setErrorMessage(null);
    }
  }, [isOpen, defaultEmail]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email || !description.trim()) {
      setErrorMessage('Please provide both an email address and a description.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('user_reports').insert([
        {
          user_email: email,
          category: category,
          description: description.trim(),
          status: 'open',
        },
      ]);

      if (error) throw error;

      setIsSuccess(true);
      setDescription('');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to submit report. Please try again.';
      setErrorMessage(message);
      // Log failure to Supabase error_logs table
      logErrorToSupabase(err, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    { id: 'Bug', label: 'Bug Report', icon: Bug },
    { id: 'Account', label: 'Account Issue', icon: User },
    { id: 'Billing', label: 'Billing / Subscription', icon: CreditCard },
    { id: 'General', label: 'General Feedback', icon: HelpCircle },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-lg bg-[#0a0a0c] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-60 h-60 bg-[#ff4d6d]/15 rounded-full mix-blend-screen blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-60 h-60 bg-[#b857e6]/15 rounded-full mix-blend-screen blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success View */}
        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Report Submitted</h3>
            <p className="text-sm text-zinc-400 max-w-xs mb-6 leading-relaxed">
              Thank you for letting us know! Our support team has received your report and is looking into it.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl text-sm transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Form View */
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#ff4d6d]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#b857e6]">Support Request</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-1">Submit a Report</h2>
            <p className="text-xs text-zinc-400 mb-6">
              Encountered a issue or need help with your account? Send a report directly to our team.
            </p>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category Options */}
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-2">Issue Category</label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isSelected = category === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setCategory(cat.id)}
                        className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs font-semibold transition-all text-left ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#ff4d6d]/20 to-[#b857e6]/20 border-[#b857e6] text-white'
                            : 'bg-zinc-900/50 border-white/5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[#ff4d6d]' : 'text-zinc-500'}`} />
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">Your Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#b857e6] transition-colors"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder="Please describe what happened or what you need help with..."
                  className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#b857e6] transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] text-white font-bold rounded-xl hover:opacity-90 disabled:opacity-50 transition-opacity text-sm flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Report
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}