// src/pages/SkillsPage.jsx
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

function SkillsPage() {
  return (
    <>
      <div className="strip">
        <Navbar variant="dark" />
      </div>
      <Skills />
      <Footer />
    </>
  );
}

export default SkillsPage;