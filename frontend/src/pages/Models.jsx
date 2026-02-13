import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { carAPI } from '../services/api';
import './Models.css';

const Models = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [loading, setLoading] = useState(true);

  const categories = ['ALL', 'SUV', 'SEDAN', 'HYBRID', 'SPORTS'];

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await carAPI.getAll();
      setCars(response.data.results || response.data);
      setFilteredCars(response.data.results || response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cars:', error);
      setLoading(false);
    }
  };

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'ALL') {
      setFilteredCars(cars);
    } else {
      setFilteredCars(cars.filter(car => car.category === category));
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="models-page">
      <section className="models-hero">
        <div className="container">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OUR MODELS
          </motion.h1>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the perfect Toyota for your journey
          </motion.p>
        </div>
      </section>

      <section className="models-content">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => handleFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              className="models-grid"
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  className="car-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Link to={`/models/${car.id}`}>
                    <div className="car-image">
                      <img src={car.hero_image || '/images/placeholder.jpg'} alt={car.name} />
                      <div className="car-overlay">
                        <button className="btn-primary">Explore Model</button>
                      </div>
                    </div>
                    <div className="car-info">
                      <span className="car-category">{car.category}</span>
                      <h3 className="car-name">{car.name}</h3>
                      <div className="car-specs">
                        <span>{car.horsepower} HP</span>
                        <span className="price">From ${car.price}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Models;
