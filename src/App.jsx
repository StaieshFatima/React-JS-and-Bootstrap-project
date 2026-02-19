// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';    
import SkillsPage from './pages/SkillsPage';
/**
 * App.jsx — Root component
 * Sets up React Router for multi-page navigation.
 * Routes:
 *   /         → Home (index.html equivalent)
 *   /work     → Work (work.html equivalent)
 *   /contact  → ContactPage (contact.html equivalent)
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about"   element={<AboutPage />} />
        <Route path="/skills"  element={<SkillsPage />} />  
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
