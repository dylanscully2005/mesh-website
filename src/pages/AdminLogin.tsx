// src/pages/AdminLogin.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hexagon, Lock, ShieldCheck, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // Login successful! Send them to the command center
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 selection:bg-mesh-brand selection:text-white">
      
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-10">
          <Hexagon fill="#1800ad" className="text-mesh-brand w-12 h-12 mb-4" />
          <h1 className="text-3xl font-bold text-white tracking-tight">Mesh Operations Dashboard</h1>
          <p className="text-[#888] font-medium mt-2 flex items-center gap-2 text-sm">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" /> If you are having issues logging in, please contact the Mesh team.
          </p>
        </div>

        <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-2xl shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-5">
            
            {error && (
              <div className="p-3 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/20 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                <p className="text-sm text-[#EF4444] font-bold">{error}</p>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#888] uppercase tracking-wider mb-2">Admin Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-mesh-brand transition-colors"
                placeholder="Email Address"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#888] uppercase tracking-wider mb-2">Passcode</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-mesh-brand transition-colors"
                placeholder="••••••••••••"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3 mt-4 bg-white text-[#1800ad] text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : (
                <><Lock className="w-4 h-4" /> Login</>
              )}
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
}