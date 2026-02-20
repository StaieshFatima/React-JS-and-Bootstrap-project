import Navbar from './Navbar';
import { heroData } from '../data';


function HeroSection({ heading = heroData.heading }) {
  return (
    <div className="header" id="home">
      <div className="container">
        <Navbar variant="light" />

        <h1>
          {heading}
        </h1>

        <span className="a"></span>
      </div>
    </div>
  );
}

export default HeroSection;
