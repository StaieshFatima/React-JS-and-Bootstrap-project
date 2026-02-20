import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';    
import SkillsPage from './pages/SkillsPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about"   element={<AboutPage />} />
        <Route path="/skills"  element={<SkillsPage />} />  
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
