import { motion } from 'framer-motion';
import '../pages/Experience.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ABOUT TOYOTA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Legacy of Excellence Since 1937
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
              <h2>Our Heritage</h2>
              <p>Founded in 1937, Toyota has grown from a small Japanese automaker to the world's largest car manufacturer, known for quality and reliability.</p>
            </motion.div>

            <motion.div className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2>Global Presence</h2>
              <p>Operating in over 170 countries with manufacturing facilities worldwide, delivering vehicles that meet diverse customer needs.</p>
            </motion.div>

            <motion.div className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h2>Sustainability</h2>
              <p>Committed to environmental responsibility through hybrid technology, electric vehicles, and sustainable manufacturing practices.</p>
            </motion.div>

            <motion.div className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h2>Innovation</h2>
              <p>Continuously pushing boundaries with cutting-edge research in autonomous driving, hydrogen fuel cells, and mobility solutions.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
