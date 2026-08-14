import { Link } from 'react-router-dom';
import { Hexagon, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans flex flex-col items-center justify-center selection:bg-mesh-brand selection:text-white px-6 text-center">
      <Hexagon fill="#1800ad" className="text-mesh-brand w-16 h-16 mb-8 animate-pulse" />
      <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">404</h1>
      <h2 className="text-2xl font-bold text-white mb-6">Frequency Not Found</h2>
      <p className="text-[#888] max-w-md mx-auto mb-10 font-medium">
        The page you are looking for doesn't exist, has been moved, or is currently offline, Contact a mesh support agent if you believe this is an error.
      </p>
      <Link to="/" className="px-6 py-3 bg-white text-[#1800ad] font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
        <Home className="w-5 h-5" /> Return to Home
      </Link>
    </div>
  );
}