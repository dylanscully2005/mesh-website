import React from 'react';
import { Check } from 'lucide-react';

interface ThankYouProps {
  planName?: string;
  billingCycle?: 'Monthly' | 'Yearly' | string;
  nextChargeDate?: string; // Optional custom string override
  portalUrl?: string;
  homeUrl?: string;
  supportUrl?: string;
}

export const ThankYou: React.FC<ThankYouProps> = ({
  planName = "Mesh+ Pro Access",
  billingCycle = "Monthly",
  nextChargeDate,
  portalUrl = "https://meshservicesuk.co.uk/customer-portal",
  homeUrl = "https://meshservicesuk.co.uk/Home",
  supportUrl = "https://meshservicesuk.co.uk/support",
}) => {

  // Auto-detect and calculate the next billing charge date based on cycle
  const getFormattedNextChargeDate = (): string => {
    if (nextChargeDate) return nextChargeDate;

    const date = new Date();
    const isYearly = billingCycle.toLowerCase().includes('year');

    if (isYearly) {
      date.setFullYear(date.getFullYear() + 1);
    } else {
      date.setMonth(date.getMonth() + 1);
    }

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const calculatedNextCharge = getFormattedNextChargeDate();

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center shadow-2xl">
        
        {/* Success Icon */}
        <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-emerald-500/20">
          <Check className="h-8 w-8" strokeWidth={2.5} />
        </div>

        {/* Heading & Message */}
        <h1 className="text-2xl font-bold tracking-tight mb-2">You're officially a member!</h1>
        <p className="text-zinc-400 text-sm mb-6">
          Thank you for your purchase. Your membership is now active, and a receipt has been sent to your email address by our payment Provider OneLink.
        </p>

        {/* Membership Summary Box */}
        <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4 mb-8 text-left space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Membership</span>
            <span className="font-medium text-zinc-200">{planName}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Status</span>
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400 text-xs bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Active
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Billing Cycle</span>
            <span className="font-medium text-zinc-200">{billingCycle}</span>
          </div>
          <div className="flex justify-between text-sm pt-2 border-t border-zinc-800/60">
            <span className="text-zinc-500">Next Charge</span>
            <span className="font-medium text-indigo-400">{calculatedNextCharge}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            href={portalUrl}
            className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-4 rounded-xl transition duration-150 ease-in-out shadow-lg shadow-indigo-600/20 text-center"
          >
            Go to Customer Portal
          </a>

          <a
            href={homeUrl}
            className="block w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white font-medium py-3 px-4 rounded-xl border border-zinc-700/50 transition duration-150 ease-in-out text-center"
          >
            Return to Home Page
          </a>
        </div>

        {/* Support Link */}
        <p className="text-xs text-zinc-500 mt-6">
          Need help?{' '}
          <a href={supportUrl} className="text-zinc-400 hover:text-zinc-200 underline underline-offset-2">
            Contact our support team
          </a>
        </p>

      </div>
    </div>
  );
};

export default ThankYou;