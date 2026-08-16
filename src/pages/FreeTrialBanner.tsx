import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, X, Gift, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FreeTrialBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    // Check if the user previously dismissed the banner
    const isDismissed = localStorage.getItem('mesh_trial_banner_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => setIsVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  // Live countdown targeting August 23, 23:59:00 GMT
  useEffect(() => {
    const targetDate = new Date('2026-08-23T23:59:00Z').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          expired: false,
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('mesh_trial_banner_dismissed', 'true');
  };

  if (!isVisible || timeLeft.expired) return null;

  return (
    <div className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-6 duration-500">
      <div className="relative bg-[#0a0a0d]/95 backdrop-blur-xl border border-white/15 p-6 rounded-3xl shadow-[0_0_40px_rgba(140,82,255,0.25)] text-white overflow-hidden">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-[-50%] left-[-20%] w-48 h-48 bg-[#ff5757]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-50%] right-[-20%] w-48 h-48 bg-[#8c52ff]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Banner Content */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ff5757] to-[#8c52ff] flex items-center justify-center shrink-0 shadow-lg shadow-[#8c52ff]/20 mt-1">
            <Gift className="w-6 h-6 text-white" />
          </div>

          <div className="pr-6 flex-1">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#ff5757] mb-1">
              <Sparkles className="w-3 h-3" /> Limited Time Offer
            </div>

            <h3 className="text-lg font-extrabold tracking-tight text-white mb-1">
              Try Mesh+ Free for 30 Days
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed font-medium mb-3">
              Unlock Offline listening to Mesh Music, 4K Mesh TV Streaming, and more with a 30-day free trial of Mesh+.
            </p>

            {/* Countdown Badge */}
            <div className="mb-4 p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-1.5 text-zinc-400 font-sans text-[11px] font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#ff5757]" /> Offer Ends (23 Aug 23:59 GMT):
              </div>
              <div className="flex items-center gap-1 text-white font-bold">
                <span className="bg-white/10 px-1.5 py-0.5 rounded text-[11px]">{timeLeft.days}d</span>:
                <span className="bg-white/10 px-1.5 py-0.5 rounded text-[11px]">{String(timeLeft.hours).padStart(2, '0')}h</span>:
                <span className="bg-white/10 px-1.5 py-0.5 rounded text-[11px]">{String(timeLeft.minutes).padStart(2, '0')}m</span>:
                <span className="bg-white/10 px-1.5 py-0.5 rounded text-[11px]">{String(timeLeft.seconds).padStart(2, '0')}s</span>
              </div>
            </div>

            <Link
              to="/mesh-plus"
              onClick={handleDismiss}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white font-bold text-xs rounded-xl hover:opacity-90 transition-opacity shadow-md"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}