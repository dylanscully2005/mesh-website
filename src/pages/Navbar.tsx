// src/pages/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hexagon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Automatically close the mobile menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Optional: Hide the main navbar on Admin pages
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  // The main links for your site
  const navLinks = [
    { name: 'Home', path: '/Home' },
    { name: 'Mesh+', path: '/mesh-plus' },
    { name: 'MeshAI', path: '/mesh-ai' },
    { name: 'Artists', path: '/artists' },
    { name: 'Studios', path: '/studios' },
    { name: 'About', path: '/about' },
    { name: 'How do we do it?', path: '/infrastructure' },
    { name: 'Payouts', path: '/payouts' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Support', path: '/support' },
    { name: "Policies", path: '/policies' },

  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Hexagon fill="#1800ad" className="text-[#1800ad] w-6 h-6" />
          <span className="text-base font-bold tracking-tight text-white">Mesh Global Services</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path ? 'text-white' : 'text-[#888] hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-[#888] hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl">
          <div className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-base font-medium transition-colors ${
                  location.pathname === link.path ? 'text-[#3b1df2]' : 'text-[#888] hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}