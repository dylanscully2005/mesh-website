// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar'; // <--- 1. Import the global Navbar
import Home from './pages/Home';
import Policies from './pages/Policies';
import Economics from './pages/Economics';
import Infrastructure from './pages/Infrastructure';
import Support from './pages/Support';
import About from './pages/About';
import Bot from './pages/Bot'; 
import Jobs from './pages/jobs'; // Matches the lowercase 'jobs.tsx' in your image
import Artists from './pages/Artists';
import Studios from './pages/Studios';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      {/* 2. Place Navbar here so it appears on all pages */}
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/economics" element={<Economics />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/bot" element={<Bot />} />
        
        {/* Community & Ecosystem */}
        <Route path="/artists" element={<Artists />} /> 
        <Route path="/studios" element={<Studios />} /> 
        
        {/* Careers & Hiring */}
        <Route path="/jobs" element={<Jobs />} />

        {/* Admin & Operations Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}