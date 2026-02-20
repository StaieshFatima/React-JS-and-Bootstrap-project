import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data';

function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top-inner">

          <div className="footer-logo">Graphica</div>

          <nav className="footer-nav">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.path} className="footer-nav-link">
                {link.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          <button className="footer-back-top" onClick={scrollToTop}>
            ↑ BACK TO TOP
          </button>

        </div>

        <div className="footer-divider"></div>

        <p className="footer-copyright">
          &copy; 2026 Graphica. All rights reserved. &nbsp;·&nbsp; Built with React &amp; Bootstrap
        </p>

      </div>
    </footer>
  );
}

export default Footer;
