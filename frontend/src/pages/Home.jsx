import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { carAPI } from '../services/api';
import { Link } from 'react-router-dom';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const performanceRef = useRef(null);
  const [featuredCars, setFeaturedCars] = useState([]);

  useEffect(() => {
    carAPI.getAll().then(res => {
      const cars = res.data.results || res.data;
      setFeaturedCars(cars.slice(0, 3));
    }).catch(err => console.error(err));

    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3,
      });

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.6,
      });

      gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out',
        delay: 0.9,
      });

      gsap.to('.scroll-indicator', {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'power1.inOut',
      });

      const stats = document.querySelectorAll('.stat-number');
      stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        ScrollTrigger.create({
          trigger: stat,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(stat, {
              innerText: target,
              duration: 2,
              snap: { innerText: 1 },
              ease: 'power2.out',
            });
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <div className="hero-video-container">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content container">
          <h1 className="hero-title">DRIVE THE FUTURE</h1>
          <p className="hero-subtitle">Toyota Performance Redefined</p>
          <div className="hero-cta">
            <button className="btn-primary">Explore Models</button>
            <button className="btn-secondary">Book Test Drive</button>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>SCROLL</span>
        </div>
      </section>

      <section className="performance-section" ref={performanceRef}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ENGINEERED FOR EXCELLENCE
          </motion.h2>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number" data-target="382">0</div>
              <div className="stat-label">HORSEPOWER</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="4">0</div>
              <div className="stat-label">0-100 KM/H (SEC)</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="500">0</div>
              <div className="stat-label">NM TORQUE</div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-models">
        <div className="container">
          <h2 className="section-title">FEATURED MODELS</h2>
          <div className="models-grid">
            {featuredCars.map((car, index) => (
              <motion.div 
                key={car.id}
                className="model-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={`/models/${car.id}`}>
                  <div className="model-image">
                    <img src={car.hero_image} alt={car.name} />
                    <div className="model-overlay">
                      <button className="btn-primary">Explore</button>
                    </div>
                  </div>
                  <h3 className="model-name">{car.name}</h3>
                  <p className="model-price">From ${car.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
