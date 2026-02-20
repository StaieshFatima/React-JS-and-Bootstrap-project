import { skills } from '../data';

function Skills() {
  return (
    <div className="skills-page">
      <div className="container">

        
        <div className="skills-header">
          <p className="skills-tag">EXPERTISE</p>
          <h2 className="skills-title">Skills &amp; Specialisations</h2>
          <span className="skills-line"></span>
        </div>

      
        <div className="skills-grid row">
          {skills.map((skill) => (
            <div key={skill.id} className="col-md-4 col-sm-6 skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.title}</span>
                <span className="skill-percent">{skill.percent}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        
        <p className="skills-tagline">Through my lens, life becomes beautiful</p>

      </div>
    </div>
  );
}

export default Skills;
