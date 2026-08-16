import { useState } from 'react';
import MeshAI from '../pages/MeshAI'; 

export default function ChatInputBar() {
  const [messageText, setMessageText] = useState('');
  const [isAiSidebarOpen, setIsAiSidebarOpen] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    // Intercept the /mesh command
    if (messageText.trim().toLowerCase().startsWith('/mesh')) {
      setIsAiSidebarOpen(true);
      setMessageText(''); // Clear standard chat input box
      return;
    }

    // Normal chat sending logic goes here...
    console.log("Sending message to standard Mesh server:", messageText);
    setMessageText('');
  };

  return (
    <div className="relative font-sans">
      
      {/* Standard Chat Input Form */}
      <form onSubmit={handleSendMessage} className="flex gap-2 p-4 bg-zinc-900 border-t border-white/10">
        <input 
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type a message or /mesh to summon AI..."
          className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1800ad]"
        />
        <button type="submit" className="px-6 py-3 bg-[#1800ad] text-white font-bold rounded-xl">Send</button>
      </form>

      {/* Slide-out AI Sidebar for Mesh+ Users */}
      {isAiSidebarOpen && (
        <div className="absolute bottom-[80px] right-4 w-[450px] h-[600px] bg-[#050505] border border-white/10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(24,0,173,0.3)] z-50 flex flex-col overflow-hidden">
          
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-4 border-b border-white/10 bg-white/5">
            <h3 className="text-lg font-bold text-white">Mesh AI Command Center</h3>
            <button 
              onClick={() => setIsAiSidebarOpen(false)}
              className="text-zinc-400 hover:text-white font-bold text-xl px-2"
            >
              &times;
            </button>
          </div>
          
          {/* Embed the custom AI Chat UI we built in Step 3 here */}
          <div className="flex-1 overflow-y-auto">
            {/* 
              We reuse the MeshAI component, but you may want to strip out 
              the min-h-screen classes in Step 3 so it fits perfectly in this container.
            */}
            <MeshAI />
          </div>
          
        </div>
      )}
    </div>
  );
}