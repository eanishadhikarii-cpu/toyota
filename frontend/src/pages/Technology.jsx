import { motion } from 'framer-motion';
import '../pages/Experience.css';

const Technology = () => {
  return (
    <div className="technology-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ADVANCED TECHNOLOGY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovation That Drives the Future
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
              <h2>Hybrid Technology</h2>
              <p>Leading the way in hybrid innovation with efficient powertrains that combine electric motors and gasoline engines for optimal performance and fuel economy.</p>
            </motion.div>

            <motion.div className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2>Autonomous Driving</h2>
              <p>Advanced driver assistance systems with adaptive cruise control, lane keeping assist, and automated parking for a safer driving experience.</p>
            </motion.div>

            <motion.div className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h2>Smart Connectivity</h2>
              <p>Seamless integration with your digital life through Apple CarPlay, Android Auto, and Toyota's connected services app.</p>
            </motion.div>

            <motion.div className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h2>Electric Future</h2>
              <p>Pioneering electric vehicle technology with long-range batteries, fast charging capabilities, and zero-emission driving.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
