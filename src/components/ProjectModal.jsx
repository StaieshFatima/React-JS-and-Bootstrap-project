// src/components/ProjectModal.jsx
import { useEffect } from 'react';

/**
 * ProjectModal component
 * Renders a lightbox popup for project details.
 * Props:
 *   - project: { image, title, popupText } | null
 *   - imageMap: { [key]: imageModule }
 *   - onClose: function
 */
function ProjectModal({ project, imageMap, onClose }) {
  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const imageSrc = imageMap[project.image];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className="image-top">
          <img src={imageSrc} alt={project.title} />
          <p>{project.popupText}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
