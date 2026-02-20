import { useEffect } from 'react';


function ProjectModal({ project, imageMap, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
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
