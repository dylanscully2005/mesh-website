// src/components/Navbar.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Hexagon fill="#1800ad" className="text-mesh-brand w-6 h-6" />
          <span className="text-base font-bold tracking-tight text-white">Mesh Services UK</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]">
          <Link to="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link>
          <Link to="/economics" className="hover:text-white transition-colors">Economics</Link>
          <Link to="/about" className="hover:text-white transition-colors">Our Vision</Link>
          <Link to="/bot" className="hover:text-white transition-colors">Mesh Bot</Link>
          <Link to="/support" className="hover:text-white transition-colors">Support</Link>
          <Link to="/policies" className="hover:text-white transition-colors">Compliance</Link>
        </div>

        {/* Desktop Launch App Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://app.meshservicesuk.com" className="bg-white text-black px-4 py-1.5 rounded-md text-sm font-bold hover:bg-gray-200 transition-colors">
            Launch App
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-base font-medium text-[#888]">
          <Link to="/infrastructure" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Infrastructure</Link>
          <Link to="/economics" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Economics</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Our Vision</Link>
          <Link to="/bot" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Mesh Bot</Link>
          <Link to="/support" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Support</Link>
          <Link to="/policies" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Compliance</Link>
          <a href="https://meshservicesuk.com" className="w-full text-center bg-white text-black py-3 rounded-md font-bold mt-2">
            Launch App
          </a>
        </div>
      )}
    </nav>
  );
}