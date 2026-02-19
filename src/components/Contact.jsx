import { useState } from 'react';
import { contactInfo } from '../data';


function Contact({ info = contactInfo }) {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-main">
          <h3>Get in touch</h3>
          <div className="row contact-top">

            <div className="col-md-4 contact-left">
              <h3>Office</h3>
              <p>{info.name}</p>
              <p>{info.address1}</p>
              <p>{info.phone}</p>
              <p>
                email :{' '}
                <a href={info.emailHref}>{info.email}</a>
              </p>
            </div>

            <div className="col-md-4 contact-left">
              <h4>Social</h4>
              <ul>
                {info.socialLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-4 contact-left">
              <h5>SAY HELLO TO US</h5>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  className="textbox"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <br />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <br />
                <input type="submit" value="submit" />
                {submitted && (
                  <p style={{ color: 'green', marginTop: '8px', fontSize: '14px' }}>
                    Message sent!
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
