import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { carAPI, testDriveAPI } from '../services/api';
import './ModelDetail.css';

const ModelDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    message: '',
  });

  useEffect(() => {
    fetchCarDetail();
  }, [id]);

  const fetchCarDetail = async () => {
    try {
      const response = await carAPI.getById(id);
      setCar(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching car details:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await testDriveAPI.create({
        ...formData,
        car_model: id,
      });
      alert('Test drive booked successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferred_date: '',
        preferred_time: '',
        message: '',
      });
    } catch (error) {
      alert('Error booking test drive');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!car) return <div className="loading">Car not found</div>;

  return (
    <div className="model-detail">
      <section className="detail-hero">
        <img src={car.hero_image} alt={car.name} />
        <div className="detail-hero-overlay">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {car.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {car.category}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="specs-section">
        <div className="container">
          <h2 className="section-title">SPECIFICATIONS</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <div className="spec-value">{car.horsepower}</div>
              <div className="spec-label">HORSEPOWER</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">{car.torque}</div>
              <div className="spec-label">NM TORQUE</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">{car.acceleration}</div>
              <div className="spec-label">0-100 KM/H</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">${car.price}</div>
              <div className="spec-label">STARTING PRICE</div>
            </div>
          </div>
        </div>
      </section>

      <section className="description-section">
        <div className="container">
          <h2 className="section-title">ABOUT THIS MODEL</h2>
          <p className="description-text">{car.description}</p>
        </div>
      </section>

      {car.gallery_images && car.gallery_images.length > 0 && (
        <section className="gallery-section">
          <div className="container">
            <h2 className="section-title">GALLERY</h2>
            <div className="gallery-grid">
              {car.gallery_images.map((img) => (
                <motion.div
                  key={img.id}
                  className="gallery-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={img.image} alt={car.name} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="test-drive-section">
        <div className="container">
          <h2 className="section-title">BOOK A TEST DRIVE</h2>
          <form onSubmit={handleSubmit} className="test-drive-form">
            <div className="form-row">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
              <input
                type="date"
                value={formData.preferred_date}
                onChange={(e) => setFormData({...formData, preferred_date: e.target.value})}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="time"
                value={formData.preferred_time}
                onChange={(e) => setFormData({...formData, preferred_time: e.target.value})}
                required
              />
            </div>
            <textarea
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="4"
            />
            <button type="submit" className="btn-primary">Book Test Drive</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ModelDetail;
