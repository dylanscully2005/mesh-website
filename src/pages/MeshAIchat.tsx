import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Send, Lock, User, Bot, ArrowRight, LogOut } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// Initialized directly with your API key
const aiClient = new GoogleGenAI({ 
  apiKey: 'AQ.Ab8RN6KTre4SeWXwlJ8dVvbihHHsyiMOC57pXeHguFJfkX8GJg' 
});

export default function MeshAIchat() {
  const [isVerified, setIsVerified] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [verifiedUsername, setVerifiedUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Chat States
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    { role: 'assistant', content: 'Hello! I am Mesh AI, your ecosystem co-pilot. How can I assist your workflow today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  // Check if already verified in local storage on load
  useEffect(() => {
    const savedUser = localStorage.getItem('mesh_ai_verified_username');
    if (savedUser) {
      setVerifiedUsername(savedUser);
      setIsVerified(true);
    }
  }, []);

  // Verify user against Supabase database receipt submissions
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const queryVal = emailOrUsername.trim();

    try {
      const { data, error } = await supabase
        .from('receipt_submissions')
        .select('*')
        .or(`email.ilike.${queryVal},username.ilike.${queryVal}`);

      if (error) {
        throw error;
      }

      if (data && data.length > 0) {
        const userRecord = data[0];
        const displayName = userRecord.username || userRecord.email || queryVal;
        setVerifiedUsername(displayName);
        setIsVerified(true);
        localStorage.setItem('mesh_ai_verified_username', displayName);
      } else {
        setErrorMessage('No matching activated account or receipt found for this email/username. Please submit your receipt first.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Verification failed. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('mesh_ai_verified_username');
    setIsVerified(false);
    setEmailOrUsername('');
    setVerifiedUsername('');
  };

  // Handle sending messages to Google Gemini AI
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || chatLoading) return;

    const userText = inputMessage.trim();
    setInputMessage('');
    setMessages((prev) => [...prev, { role: 'user', content: userText }]);
    setChatLoading(true);

    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-3.5-flash', // Updated to the latest frontier flash tier model
        contents: [
          ...messages.map(m => ({ 
            role: m.role === 'user' ? 'user' : 'model', 
            parts: [{ text: m.content }] 
          })), 
          { role: 'user', parts: [{ text: userText }] }
        ],
        config: {
          systemInstruction: 'You are Mesh AI, an advanced, sleek ecosystem assistant powering Mesh+ channels, music, studios, and apps.',
        }
      });

      const aiReply = response.text || 'I am processing your ecosystem request.';
      setMessages((prev) => [...prev, { role: 'assistant', content: aiReply }]);
    } catch (err: any) {
      console.error('AI Error:', err);
      setMessages((prev) => [...prev, { role: 'assistant', content: `Sorry, I encountered an error: ${err.message || 'Unknown error'}` }]);
    } finally {
      setChatLoading(false);
    }
  };

  // 1. VERIFICATION GATE
  if (!isVerified) {
    return (
      <div className="min-h-screen bg-[#050505] text-white pt-28 px-4 flex flex-col items-center justify-center font-sans">
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(255,77,109,0.3)]">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Unlock{' '}
              <span className="bg-gradient-to-r from-[#ff4d6d] via-[#c256e8] to-[#536dfe] bg-clip-text text-transparent">
                Mesh AI
              </span>
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
              Enter your registered email or username to verify your Mesh+ activation
            </p>
          </div>

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-xs leading-relaxed">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">
                Email or Username
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  required
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  placeholder="your-email@mesh.com or username"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#b857e6] transition-colors text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] text-white font-bold rounded-2xl hover:opacity-90 transition-opacity shadow-lg shadow-[#ff4d6d]/20 text-sm disabled:opacity-50 mt-2 flex items-center justify-center gap-2"
            >
              {loading ? 'Verifying Account...' : 'Access Mesh AI'} <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. UNLOCKED CHAT INTERFACE
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 px-4 pb-8 flex flex-col items-center font-sans">
      <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-3xl flex flex-col h-[80vh] shadow-[0_10px_40px_-10px_rgba(255,77,109,0.2)] overflow-hidden">
        
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-extrabold text-sm flex items-center gap-2">
                Mesh AI <span className="text-zinc-400 font-normal">/ {verifiedUsername}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </h2>
              <p className="text-xs text-zinc-400">MeshAI [Beta] V0.1</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs font-semibold hover:bg-red-500/20 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" /> End Session
          </button>
        </div>

        {/* Message Stream Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                msg.role === 'user' 
                  ? 'bg-gradient-to-r from-[#b857e6] to-[#536dfe] text-white' 
                  : 'bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] text-white'
              }`}>
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-[#b857e6]/20 border border-[#b857e6]/30 text-white rounded-tr-none'
                  : 'bg-white/5 border border-white/10 text-zinc-200 rounded-tl-none'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {chatLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] flex items-center justify-center text-white shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white/5 border border-white/10 text-zinc-400 rounded-2xl px-4 py-3 text-sm rounded-tl-none animate-pulse">
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* Chat Input Bar */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-black/40 flex items-center gap-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask Mesh AI anything about your workflows, channels, or projects..."
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#b857e6] transition-colors"
          />
          <button
            type="submit"
            disabled={chatLoading || !inputMessage.trim()}
            className="p-3 bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] text-white rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-50 shrink-0"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}