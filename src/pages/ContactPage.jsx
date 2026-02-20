import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { companyInfo } from '../data';


function ContactPage({ company = companyInfo }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
  
      
        <Navbar variant="dark" />
    

   
      <div className="contact-us">
        <div className="container">
          <div className="contact-us-main">

          
            <div className="contact-us-top">
              <h3>CONTACT US</h3>
              <p>Get in Touch</p>
            </div>

          
            <div className="col-md-8 contact-us-left">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <input type="submit" value="Send" />
                {submitted && (
                  <p style={{ color: 'green', marginTop: '8px', fontSize: '14px' }}>
                    Message sent successfully!
                  </p>
                )}
              </form>
            </div>

          
            <div className="col-md-4 contact-us-right">
              <h3>{company.heading}</h3>
              {company.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
             <div className="image-sprit">
  <a href="https://www.facebook.com/share/1Fm1mQyHHa/" target="_blank" rel="noopener noreferrer">
    <span className="fa-icon"></span>
  </a>
  <a href="https://x.com/StaieshFatima" target="_blank" rel="noopener noreferrer">
    <span className="tw"></span>
  </a>
</div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>

    
      <div className="map">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.007583421!2d-73.97800349999999!3d40.7056308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1415253431785"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Office Location Map"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
