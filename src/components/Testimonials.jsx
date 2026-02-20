import { useState } from 'react';
import { testimonials } from '../data';

function StarRating({ rating }) {
  return (
    <div className="testimonial-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'star star--filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-heading">What Clients Say</h2>

        <div className="testimonial-slider">
          <button className="testimonial-arrow" onClick={prev}>&#8592;</button>

          <div className="testimonial-card">
            <StarRating rating={t.rating} />
            <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.name.charAt(0)}</div>
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>
          </div>

          <button className="testimonial-arrow" onClick={next}>&#8594;</button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot${i === active ? ' testimonial-dot--active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;