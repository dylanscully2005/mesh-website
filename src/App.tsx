// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Policies from './pages/Policies';
import Economics from './pages/Economics';
import Infrastructure from './pages/Infrastructure';
import Support from './pages/Support';
import About from './pages/About';
import Bot from './pages/Bot'; // <--- Import the Bot page
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
        <Route path="/bot" element={<Bot />} /> {/* <--- Add the route here */}
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}