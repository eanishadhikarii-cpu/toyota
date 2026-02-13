import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            THE TOYOTA EXPERIENCE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Luxury, Performance, and Innovation Combined
          </motion.p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="experience-grid">
            <motion.div className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Premium Comfort</h2>
              <p>Experience unparalleled luxury with hand-crafted interiors, premium leather seats, and advanced climate control systems that adapt to your preferences.</p>
            </motion.div>

            <motion.div className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2>Thrilling Performance</h2>
              <p>Feel the power of precision-engineered engines delivering exhilarating acceleration and responsive handling on every journey.</p>
            </motion.div>

            <motion.div className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h2>Advanced Safety</h2>
              <p>Drive with confidence using Toyota Safety Sense with adaptive cruise control, lane departure alert, and pre-collision systems.</p>
            </motion.div>

            <motion.div className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h2>Connected Technology</h2>
              <p>Stay connected with intuitive infotainment systems, wireless charging, and seamless smartphone integration.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
