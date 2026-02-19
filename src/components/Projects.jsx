// src/components/Projects.jsx
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { projects } from '../data';

// Import all project images statically so Vite bundles them
import imgD from '../assets/D.jfif';
import imgSea from '../assets/MOUNTAIN SERENITY.jfif';
import imgWork from '../assets/work.jpg';
import imgCard from '../assets/sea.jpg';
import imgFace from '../assets/GOLDEN HOUR DRIVE.jfif';
import imgCar from '../assets/FAITHFUL COMPANION.jfif';
import imgGl from '../assets/URBAN GEOMETRY.jfif';
import imgOldman from '../assets/STREET PHOTOGRAPHY.webp';
import imgCat from '../assets/still life.jpg';

const imageMap = {
  D: imgD,
  sea: imgSea,
  work: imgWork,
  card: imgCard,
  face: imgFace,
  car: imgCar,
  gl: imgGl,
  oldman: imgOldman,
  cat: imgCat,
};

/**
 * ProjectCard component
 * Props:
 *   - project: project data object
 *   - imageMap: image lookup map
 *   - onOpen: function(project)
 */
// Filter categories — each project can belong to one or more
const FILTERS = ['ALL', 'LANDSCAPE', 'SEASCAPE', 'LIFE', 'AUTOMOTIVE', 'ANIMAL', 'ARCHITECTURE', 'STREET', 'COMMERCIAL'];

function ProjectCard({ project, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="gallery-card"
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="gallery-card-inner">
        <img
          src={imageMap[project.image]}
          alt={project.title}
          className="gallery-img"
        />
        <div className={`gallery-overlay${hovered ? ' visible' : ''}`}>
          <div className="gallery-overlay-text">
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
/**
 * Projects component
 * Renders the main portfolio grid exactly matching the original HTML layout.
 */
function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activeProject, setActiveProject] = useState(null);

  const filtered = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category.toUpperCase() === activeFilter);

  return (
    <div className="gallery-section">

      {/* Filter buttons */}
      <div className="gallery-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn${activeFilter === f ? ' active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Uniform 3-column grid */}
      <div className="gallery-grid">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setActiveProject}
          />
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          imageMap={imageMap}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}

export default Projects;
