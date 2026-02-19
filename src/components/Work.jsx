import { useState } from 'react';
import { projects } from '../data';

import imgD      from '../assets/D.jfif';
import imgSea    from '../assets/MOUNTAIN SERENITY.jfif';
import imgWork   from '../assets/work.jpg';
import imgCard   from '../assets/sea.jpg';
import imgFace   from '../assets/GOLDEN HOUR DRIVE.jfif';
import imgCar    from '../assets/FAITHFUL COMPANION.jfif';
import imgGl     from '../assets/URBAN GEOMETRY.jfif';
import imgOldman from '../assets/STREET PHOTOGRAPHY.webp';
import imgCat    from '../assets/still life.jpg';

const imageMap = {
  D:      imgD,
  sea:    imgSea,
  work:   imgWork,
  card:   imgCard,
  face:   imgFace,
  car:    imgCar,
  gl:     imgGl,
  oldman: imgOldman,
  cat:    imgCat,
};

const allCategories = ['ALL', ...new Set(projects.map((p) => p.category))];

function Work() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [modal, setModal] = useState(null);

  const filtered =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="work-page">

    
      <div className="work-page-header">
        <p className="work-page-tag">PORTFOLIO</p>
        <h2 className="work-page-title">My Work</h2>
        <span className="work-page-line"></span>
      </div>

 
      <div className="work-filters">
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`work-filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <div className="work-gallery-grid">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="work-gallery-card"
            onClick={() => setModal(project)}
          >
            <div className="work-gallery-inner">
              <img
                src={imageMap[project.image]}
                alt={project.title}
                className="work-gallery-img"
              />
              <div className="work-gallery-overlay">
                <div className="work-gallery-text">
                  <p className="work-overlay-category">{project.category}</p>
                  <h3 className="work-overlay-title">{project.title}</h3>
                  <p className="work-overlay-desc">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      {modal && (
        <div className="work-modal-overlay" onClick={() => setModal(null)}>
          <div className="work-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="work-modal-close" onClick={() => setModal(null)}>
              &times;
            </button>
            <img
              src={imageMap[modal.image]}
              alt={modal.title}
              className="work-modal-img"
            />
            <p className="work-modal-category">{modal.category}</p>
            <h3 className="work-modal-title">{modal.title}</h3>
            <p className="work-modal-desc">{modal.description}</p>
            <p className="work-modal-text">{modal.popupText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Work;
