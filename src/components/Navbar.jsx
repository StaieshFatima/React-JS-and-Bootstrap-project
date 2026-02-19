// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoB from '../assets/logo-b.png';
import logoW from '../assets/nob.png';
import iconImg from '../assets/icon.png';
import { navLinks } from '../data';

/**
 * Navbar component
 * Props:
 *   - variant: 'light' (home page with hero) | 'dark' (work/contact pages with strip)
 */
function Navbar({ variant = 'light' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const isActive = (path) => location.pathname === path;

  return (
    <div className={variant === 'dark' ? 'strip' : ''}>
      <div className="container">
        <div className="header-main">
          {/* Logo */}
          <div className={variant === 'dark' ? 'logo-w' : 'logo'}>
            <Link to="/">
              <img
                src={variant === 'dark' ? logoW : logoB}
                alt="Photographica Logo"
              />
            </Link>
          </div>

          {/* Mobile hamburger icon */}
          <span className="menu" onClick={toggleMenu}>
            <img src={iconImg} alt="Menu" />
          </span>

          <div className="clear"></div>

          {/* Navigation links */}
          <div className="header-right">
            <ul className={`res${menuOpen ? ' open' : ''}`}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={isActive(link.path) ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
