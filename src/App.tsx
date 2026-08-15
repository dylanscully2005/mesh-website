// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Policies from './pages/Policies';
import Economics from './pages/payouts';
import Infrastructure from './pages/Infrastructure';
import Support from './pages/Support';
import About from './pages/About';
import MeshPlus from './pages/MeshPlus';
import MeshAI from './pages/MeshAI';
import Ourservices from './pages/Ourservices';

// Individual Service Information Pages
import MeshAIService from './pages/mesh-ai';
import MeshSocialApp from './pages/mesh-social-app';
import StatusPage from './pages/StatusPage';
import MeshMusic from './pages/music';
import MeshTV from './pages/tv';

import Jobs from './pages/jobs';
import Artists from './pages/Artists';
import Studios from './pages/Studios';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/mesh-plus" element={<MeshPlus />} />
        <Route path="/mesh-ai" element={<MeshAI />} />
        <Route path="/ourservices" element={<Ourservices />} />
        
        {/* Individual Service Information Routes */}
        <Route path="/services/music" element={<MeshMusic />} />
        <Route path="/services/tv" element={<MeshTV />} />
        <Route path="/services/mesh-ai" element={<MeshAIService />} />
        <Route path="/services/mesh-social-app" element={<MeshSocialApp />} />
        <Route path="/services/Status" element={<StatusPage />} />
        
        
        {/* Network Status Route */}
        <Route path="/status" element={<StatusPage />} />

        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/payouts" element={<Economics />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        
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