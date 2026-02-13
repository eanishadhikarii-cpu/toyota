import { motion } from 'framer-motion';
import { useState } from 'react';
import '../pages/Experience.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting Toyota! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CONTACT US
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in Touch with Toyota
          </motion.p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="contact-content">
            <motion.div className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Visit Us</h2>
              <p><strong>Headquarters:</strong><br/>1 Toyota Way<br/>Toyota City, Aichi 471-8571<br/>Japan</p>
              <p><strong>Phone:</strong> +1-800-GO-TOYOTA</p>
              <p><strong>Email:</strong> info@toyota.com</p>
              <p><strong>Hours:</strong><br/>Mon-Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 4:00 PM</p>
            </motion.div>

            <motion.form className="contact-form" onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Send a Message</h2>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
              <textarea 
                placeholder="Your Message" 
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
