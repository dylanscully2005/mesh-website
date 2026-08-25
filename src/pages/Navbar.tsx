// src/pages/Navbar.tsx
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hexagon, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Automatically close the menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Optional: Hide the main navbar on Admin pages
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  // The main links for your site
  const navLinks = [
    { name: 'Home', path: '/Home' },
    { name: 'Updates', path: '/updates' },
    { name: "Admin", path: '/admin' },
    { name: 'Mesh+', path: '/mesh-plus' },
    { name: 'MeshAI', path: '/mesh-ai' },
    { name: 'MeshAI Chat', path: '/MeshAIchat' },
    { name: 'Submit Receipt', path: '/submit-receipt' },
    { name: 'Our Services', path: '/ourservices' },
    { name: 'Artists', path: '/artists' },
    { name: 'Studios', path: '/studios' },
    { name: 'About', path: '/about' },
    { name: 'How do we do it?', path: '/infrastructure' },
    { name: 'Payouts', path: '/payouts' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Customer Portal', path: '/customer-portal' },
    { name: 'Beta Program', path: '/beta' },
    { name: 'Business Contacts', path: '/business-contacts' },
    { name: 'Support', path: '/support' },
    { name: 'Policies', path: '/policies' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Hexagon fill="#1800ad" className="text-[#1800ad] w-6 h-6" />
          <span className="text-base font-bold tracking-tight text-white">Mesh Global Services</span>
        </Link>

        {/* Unified Dropdown Menu Trigger (PC & Mobile) */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all shadow-sm group"
          >
            {isOpen ? <X className="w-4 h-4 text-[#ff4d6d]" /> : <Menu className="w-4 h-4 text-[#888] group-hover:text-white transition-colors" />}
            <span className="text-xs font-bold uppercase tracking-wider">Menu</span>
            <ChevronDown className={`w-3.5 h-3.5 text-[#888] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Panel */}
          {isOpen && (
            <div className="absolute right-0 mt-3 w-72 bg-[#050505]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(255,77,109,0.25)] py-3 px-2 max-h-[75vh] overflow-y-auto z-[101] animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                      location.pathname === link.path 
                        ? 'bg-gradient-to-r from-[#ff4d6d]/20 to-[#b857e6]/20 text-white border border-[#b857e6]/30 font-bold' 
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {location.pathname === link.path && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d]"></span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}