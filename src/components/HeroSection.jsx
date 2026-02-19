// src/components/HeroSection.jsx
import Navbar from './Navbar';
import { heroData } from '../data';

/**
 * HeroSection component
 * Renders the full-page header with background image and hero text.
 * Props:
 *   - heading: string (hero headline text)
 */
function HeroSection({ heading = heroData.heading }) {
  return (
    <div className="header" id="home">
      <div className="container">
        {/* Navbar embedded inside hero for the home page */}
        <Navbar variant="light" />

        {/* Hero headline */}
        <h1>
          {heading}
        </h1>

        {/* Decorative dot divider */}
        <span className="a"></span>
      </div>
    </div>
  );
}

export default HeroSection;
