import React, { useState, useEffect } from 'react';
import './form.css';

const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    spaceType: '',
    budget: '',
    preferredDate: '',
    preferredTime: '',
    projectDescription: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ✅ Auto close after 5 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Form Submitted:', data);

      setSubmittedName(formData.name);
      setIsSubmitted(true);

      setFormData({
        name: '',
        phone: '',
        spaceType: '',
        budget: '',
        preferredDate: '',
        preferredTime: '',
        projectDescription: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      phone: '',
      spaceType: '',
      budget: '',
      preferredDate: '',
      preferredTime: '',
      projectDescription: ''
    });
    setIsSubmitted(false);
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  if (isSubmitted) {
    return (
      <div className="bf-confirmation-container">
        <div className="bf-confirmation-card">
          <h1>You're Booked! 🎉</h1>
          <p>Thank you, <strong>{submittedName}</strong>.</p>
          <p>Our team will WhatsApp you within 24 hours to confirm your slot.</p>

          <div className="bf-inspiration-link">
            Browse our recent projects for inspiration →
          </div>

          <p className="bf-team-sign">— The Deeraj Interiors Team</p>

          <button
            onClick={() => setIsSubmitted(false)}
            className="bf-book-another-btn"
          >
            Book Another Slot
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bf-wrapper">
      <div className="bf-image-container">
        <img
          src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg"
          alt="Luxury Interior"
          className="bf-image"
        />

        <button className="bf-close-btn" onClick={handleClose}>×</button>

        <div className="bf-logo-container">
          <div className="bf-logo">
            <img
              src="https://img1.wsimg.com/isteam/ip/e7e3142b-3f26-4173-bc29-b2315178edb8/DI%20logo%20(2).png/:/rs=h:96,cg:true,m/qt=q:95"
              alt="Deeraj Interiors Logo"
              style={{ height: '36px', width: 'auto' }}
            />
          </div>
        </div>
      </div>

      <div className="bf-content">
        <div className="bf-header">
          <h2>Tell Us About Your Space</h2>
          <p>We’ll reach out within 24 hours to confirm your slot.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="bf-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="bf-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 90007 00910"
            />
          </div>

          <div className="bf-group">
            <label>Type of Space *</label>
            <select name="spaceType" value={formData.spaceType} onChange={handleChange} required>
              <option value="">Select space type</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="Villa">Villa</option>
              <option value="Office">Office</option>
            </select>
          </div>

          <div className="bf-group">
            <label>Budget Range *</label>
            <select name="budget" value={formData.budget} onChange={handleChange} required>
              <option value="">Select budget range</option>
              <option value="3-7L">₹3–7L</option>
              <option value="7-15L">₹7–15L</option>
              <option value="15-30L">₹15–30L</option>
              <option value="30L+">₹30L+</option>
            </select>
          </div>

          <div className="bf-date-time-group">
            <div className="bf-date-group bf-group">
              <label>Preferred Date *</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="bf-time-group bf-group">
              <label>Preferred Time *</label>
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="bf-group">
            <label>One line about your project</label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Modern 3BHK with luxury kitchen..."
              rows="2"
            />
          </div>

          <button type="submit" className="bf-submit-btn">
            Book Free Consultation
          </button>

          <p className="bf-note">
            * Budget helps us serve you better with relevant options.
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;