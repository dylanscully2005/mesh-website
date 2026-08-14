// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Policies from './pages/Policies';
import Economics from './pages/Economics';
import Infrastructure from './pages/Infrastructure';
import Support from './pages/Support';
import About from './pages/About';
import Bot from './pages/Bot'; 
import Jobs from './pages/jobs'; // <--- 1. Added Jobs page import
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/economics" element={<Economics />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/bot" element={<Bot />} />
        
        {/* Careers & Hiring */}
        <Route path="/jobs" element={<Jobs />} /> {/* <--- 2. Added /jobs route */}

        {/* Admin & Operations Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}