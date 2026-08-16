import { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabaseClient';
import { Send, Lock, LogOut, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// Safely pull from Vite environment variables with multi-name support
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY || '';
const selectedModel = import.meta.env.VITE_GEMINI_MODEL || 'gemini-3.7-flash';

const aiClient = new GoogleGenAI({ apiKey });

const getGeminiResponse = async (userText: string, currentMessages: Array<{ role: 'user' | 'assistant'; content: string }>) => {
  const modelCandidates = Array.from(new Set([
    selectedModel,
    'gemini-3.7-flash',
    'gemini-3.5-flash',
    'gemini-2.5-flash-lite'
  ]));

  let lastError: any = null;

  for (const modelName of modelCandidates) {
    try {
      return await aiClient.models.generateContent({
        model: modelName,
        contents: [
          ...currentMessages.map((m) => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
          })),
          { role: 'user', parts: [{ text: userText }] }
        ],
        config: {
          systemInstruction: 'You are Mesh AI, an advanced, sleek ecosystem assistant powering Mesh+ channels, music, studios, and apps. Be concise, highly intelligent, and format your responses cleanly.'
        }
      });
    } catch (error: any) {
      const message = error?.message || String(error || 'Unknown error');
      lastError = error;

      if (!/404|NOT_FOUND|not found|no longer available/i.test(message)) {
        throw error;
      }
    }
  }

  throw lastError || new Error('No available Gemini model returned a successful response.');
};

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
  
  // Auto-scroll reference
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatLoading]);

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

    if (!apiKey) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Error: API key is missing. Please check your .env file and ensure VITE_GEMINI_API_KEY is set, then restart your dev server.' }]);
      return;
    }

    const userText = inputMessage.trim();
    setInputMessage('');
    setMessages((prev) => [...prev, { role: 'user', content: userText }]);
    setChatLoading(true);

    try {
      const response = await getGeminiResponse(userText, messages);

      const aiReply = response.text || 'I am processing your ecosystem request.';
      setMessages((prev) => [...prev, { role: 'assistant', content: aiReply }]);
    } catch (err: any) {
      console.error('AI Error:', err);
      setMessages((prev) => [...prev, { role: 'assistant', content: `Sorry, I encountered an error: ${err.message || 'Unknown error'}` }]);
    } finally {
      setChatLoading(false);
    }
  };

  // 1. VERIFICATION GATE (Full Screen Redesign)
  if (!isVerified) {
    return (
      <div className="h-screen w-full bg-[#050505] text-white flex flex-col items-center justify-center font-sans overflow-hidden relative">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#ff4d6d]/20 rounded-full mix-blend-screen blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#b857e6]/20 rounded-full mix-blend-screen blur-[150px] pointer-events-none"></div>

        <div className="w-full max-w-md z-10 p-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-tr from-[#ff4d6d] to-[#b857e6] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(184,87,230,0.4)]">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-3">
              Mesh<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d6d] to-[#b857e6]">AI</span>
            </h1>
            <p className="text-sm text-zinc-400">
              Verify your Mesh+ activation to access the ecosystem co-pilot.
            </p>
          </div>

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm leading-relaxed text-center">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleVerify} className="space-y-5">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-[#b857e6] transition-colors">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type="text"
                required
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                placeholder="Enter email or username..."
                className="w-full bg-zinc-900/50 border border-white/10 rounded-3xl pl-14 pr-6 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#b857e6] focus:bg-zinc-900/80 transition-all text-base backdrop-blur-md"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-white text-black font-bold rounded-3xl hover:bg-zinc-200 transition-colors shadow-lg text-base disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? 'Verifying...' : 'Continue'} 
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. UNLOCKED CHAT INTERFACE (Full Screen Gemini Style)
  return (
    <div className="h-screen w-full bg-[#050505] text-white flex flex-col font-sans relative overflow-hidden">
      
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#050505]/80 backdrop-blur-md z-20 absolute top-0 w-full border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff4d6d] to-[#b857e6] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h2 className="font-bold text-lg tracking-tight flex items-center gap-2">
            Mesh<span className="text-zinc-400 font-medium">AI</span>
            <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] uppercase font-bold tracking-wider text-zinc-400 ml-2">Beta</span>
          </h2>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-zinc-500 hidden md:block">
            {verifiedUsername}
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/10 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors"
          >
            <LogOut className="w-4 h-4 text-zinc-400" /> <span className="hidden md:inline">Log out</span>
          </button>
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 overflow-y-auto scroll-smooth pt-24 pb-40 px-4 md:px-0">
        <div className="max-w-3xl mx-auto space-y-8">
          {messages.map((msg, index) => (
            <div key={index} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              
              {/* User Bubble */}
              {msg.role === 'user' && (
                <div className="bg-zinc-800 text-zinc-100 rounded-[2rem] rounded-tr-xl px-6 py-4 max-w-[85%] text-base leading-relaxed">
                  {msg.content}
                </div>
              )}

              {/* AI Response */}
              {msg.role === 'assistant' && (
                <div className="flex items-start gap-5 max-w-[95%]">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ff4d6d] to-[#b857e6] flex items-center justify-center shrink-0 mt-1 shadow-[0_0_15px_rgba(184,87,230,0.3)]">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-zinc-200 text-base leading-relaxed py-1 space-y-4">
                    {msg.content}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Loading State */}
          {chatLoading && (
            <div className="flex items-start gap-5 w-full justify-start">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ff4d6d] to-[#b857e6] flex items-center justify-center shrink-0 mt-1 shadow-[0_0_15px_rgba(184,87,230,0.3)] animate-pulse">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 animate-pulse text-base leading-relaxed py-1 font-medium">
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Bottom Input Area */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#050505] via-[#050505] to-transparent pt-10 pb-6 px-4 md:px-0">
        <div className="max-w-3xl mx-auto w-full">
          <form 
            onSubmit={handleSendMessage} 
            className="relative flex items-end bg-zinc-900 border border-white/10 rounded-3xl p-2 shadow-2xl focus-within:bg-zinc-800 focus-within:border-white/20 transition-all duration-300"
          >
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
              placeholder="Ask Mesh AI anything..."
              className="flex-1 max-h-40 min-h-[56px] bg-transparent resize-none outline-none text-white placeholder-zinc-500 px-5 py-4 text-base overflow-y-auto custom-scrollbar"
              rows={1}
            />
            <button
              type="submit"
              disabled={chatLoading || !inputMessage.trim()}
              className="p-3 m-1 bg-white text-black rounded-2xl hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:bg-zinc-800 disabled:text-zinc-500 shrink-0 h-12 w-12 flex items-center justify-center"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <div className="text-center mt-3">
            <span className="text-xs text-zinc-500">Mesh AI can make mistakes. Consider verifying important information.</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}