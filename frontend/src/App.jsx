import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Models from './pages/Models';
import ModelDetail from './pages/ModelDetail';
import Experience from './pages/Experience';
import Technology from './pages/Technology';
import About from './pages/About';
import Contact from './pages/Contact';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  
  useSmoothScroll();

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/:id" element={<ModelDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
