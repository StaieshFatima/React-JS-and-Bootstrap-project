import photo from '../assets/staiesh.jpg';
function About() {
  const stats = [
    { value: '3+',  label: 'YEARS EXPERIENCE' },
    { value: '50+', label: 'PROJECTS COMPLETED' },
    { value: '10+', label: 'COUNTRIES VISITED' },
    { value: '5',   label: 'AWARDS WON' },
  ];

  return (
    <div className="about-page">
      <div className="container">

        <div className="about-section-header">
          <p className="about-section-tag">ABOUT ME</p>
          <h2 className="about-section-title">The Story Behind the Lens</h2>
          <span className="about-section-line"></span>
        </div>

        <div className="about-page-inner row">

          <div className="col-md-5 about-photo-col">
            <div className="about-photo-wrapper">
              <img
                src={photo}
                alt="Staiesh Fatima"
                className="about-photo"
              />
            </div>
          </div>

          <div className="col-md-7 about-bio-col">
            <h2 className="about-name">Staiesh Fatima</h2>
            <p className="about-role">VISUAL STORYTELLER &amp; PHOTOGRAPHER</p>

            <p className="about-bio">
              With a passion for freezing fleeting moments in time, I bring a distinctive
              eye to every frame. My work spans portraits, landscapes, and commercial
              assignments, always chasing the perfect interplay of light, shadow, and
              human emotion.
            </p>
            <p className="about-bio">
              Every photograph I take is a conversation between me and the world —
              an honest, unfiltered exchange that I invite you to be part of.
            </p>

            <div className="about-stats row">
              {stats.map((stat) => (
                <div key={stat.label} className="col-6 about-stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;