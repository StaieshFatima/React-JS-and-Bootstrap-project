// src/pages/AboutPage.jsx
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <>
      <div className="strip">
        <Navbar variant="dark" />
      </div>
      <About />
      <Footer />
    </>
  );
}

export default AboutPage;