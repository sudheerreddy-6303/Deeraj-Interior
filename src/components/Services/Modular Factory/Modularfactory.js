import React, { useState, useEffect } from 'react';
import './Modularfactory.css';

const ModularFactory = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    projectType: '',
    volume: '',
    phone: '',
    whatsapp: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' | 'error' | 'info'

  // Auto-hide messages after 5 seconds
  useEffect(() => {
    let timer;
    if (submitMessage && messageType === 'success') {
      timer = setTimeout(() => {
        setSubmitMessage('');
        setMessageType('');
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [submitMessage, messageType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('Sending request...');
    setMessageType('info');

    try {
      // 1. Prepare Web3Forms payload
      const payload = {
        ...formData,
        access_key: "b75e6346-5c1b-4ee9-a55a-6b029b706e57", 
        subject: "New B2B Collaboration Request - Deeraj Modulars",
        from_name: "Modular Factory Landing Page"
      };

      // 2. Send the request to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Collaboration request submitted successfully! We will contact you soon.');
        setMessageType('success');
        
        // Reset form
        setFormData({
          name: '', company: '', projectType: '', volume: '', phone: '', whatsapp: ''
        });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('Failed to send request. Please try again later.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const processSteps = [
    { id: 1, title: "Design", desc: "Measurements & Layout", num: "01" },
    { id: 2, title: "Materials", desc: "Material & Finish selection", num: "02" },
    { id: 3, title: "Machining", desc: "Precision CNC cutting", num: "03" },
    { id: 4, title: "Finishing", desc: "Edge banding & surface", num: "04" },
    { id: 5, title: "Assembly", desc: "Hardware & fitting", num: "05" },
    { id: 6, title: "Dispatch", desc: "Final QC & secure packing", num: "06" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ar. Rajesh Kumar",
      designation: "Principal Architect – RK Designs",
      project: "Residential Villa Project",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Deeraj Interiors executed our modular kitchen and wardrobe work exactly as per our drawings. The factory finish and alignment were impressive. Their team maintained proper coordination throughout the project."
    },
    {
      id: 2,
      name: "Mr. Srinivas Reddy",
      designation: "Project Director – XYZ Constructions",
      project: "45 Flat Apartment Project",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "We partnered with Deeraj Interiors for modular kitchen job work across multiple units. Their factory production helped us maintain timeline discipline and consistent quality across all flats."
    },
    {
      id: 3,
      name: "Ms. Sneha Sharma",
      designation: "Interior Designer – SS Studio",
      project: "Premium 3BHK Project",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "I prefer working with Deeraj Interiors for modular execution because they respect design intent and deliver clean finishing. Their white-label support is also very professional."
    }
  ];

  return (
    <div className="mf-page-wrapper">
      {/* 1. Hero Section */}
      <section className="mf-hero-section">
        <div className="mf-hero-overlay">
          <div className="mf-container mf-text-center">
            <span className="mf-hero-eyebrow">B2B Modular Manufacturing</span>
            <h1 className="mf-hero-title">Execution Partner for Architects & Builders</h1>
            <p className="mf-hero-subtitle">
              Deeraj Modulars operates a state-of-the-art modular manufacturing facility in Hyderabad, built to deliver precision, consistency, and premium finish for modern kitchens, wardrobes, and bespoke furniture.
            </p>
            <div className="mf-hero-actions">
              <button className="mf-btn-primary" onClick={() => document.getElementById('partner-form').scrollIntoView({behavior: 'smooth'})}>
                Schedule Collaboration Meeting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mf-stats-section">
        <div className="mf-container">
          <div className="mf-stats-grid">
            <div className="mf-stat-card">
              <h3>15,000+</h3>
              <p>Sq.Ft Production Area</p>
            </div>
            <div className="mf-stat-card">
              <h3>50+</h3>
              <p>Skilled Technicians</p>
            </div>
            <div className="mf-stat-card">
              <h3>1000</h3>
              <p>Sets Monthly Capacity</p>
            </div>
            <div className="mf-stat-card">
              <h3>Advanced</h3>
              <p>Machinery</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Factory Capabilities Gallery */}
      <section className="mf-capabilities-section">
        <div className="mf-container">
          <div className="mf-section-header">
            <h2>State-of-the-Art Production</h2>
            <p>Our factory process reduces on-site mess, improves accuracy, and ensures every module is made with strict quality checks before installation.</p>
          </div>
          <div className="mf-cap-grid">
            <div className="mf-cap-item">
              <img src="https://xprocnc.com/wp-content/uploads/2025/05/cnc-router-for-wood-1024x1024.png" alt="Precision Cutting" />
              <div className="mf-cap-content">
                <h4>Precision Machining</h4>
                <p>Advanced CNC routers ensuring zero-error panel cutting.</p>
              </div>
            </div>
            <div className="mf-cap-item">
              <img src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800" alt="Edge Banding" />
              <div className="mf-cap-content">
                <h4>Perfect Finishing</h4>
                <p>Uniform edge banding and seamless panel alignment.</p>
              </div>
            </div>
            <div className="mf-cap-item">
              <img src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800" alt="Quality Check" />
              <div className="mf-cap-content">
                <h4>Quality Assurance</h4>
                <p>Multiple-stage checks and controlled assembly conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Partner With Us */}
      <section className="mf-benefits-section">
        <div className="mf-container">
          <div className="mf-section-header">
            <h2>Why Partner With Us</h2>
            <p>Whether it’s a single premium residence or a large-scale apartment project, we manage the production seamlessly.</p>
          </div>
          <div className="mf-benefits-grid">
            {[
              { title: "Factory-Based Production", desc: "Reduces on-site mess and minimizes execution time.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { title: "Accurate Execution", desc: "Built strictly according to your architectural drawings.", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
              { title: "Bulk Project Capability", desc: "Equipped to handle 500+ modular sets per month.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
              { title: "White-Label Support", desc: "We execute under your brand name with complete confidentiality.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            ].map((benefit, i) => (
              <div key={i} className="mf-benefit-card">
                <svg className="mf-svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                </svg>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Manufacturing Process */}
      <section className="mf-process-section">
        <div className="mf-container">
          <h2 className="mf-section-title mf-text-center">Our Standardized Workflow</h2>
          <div className="mf-process-wrapper">
            {processSteps.map((step, index) => (
              <div key={step.id} className="mf-process-step">
                <div className="mf-process-num">{step.num}</div>
                <h4 className="mf-process-title">{step.title}</h4>
                <p className="mf-process-desc">{step.desc}</p>
                {index < processSteps.length - 1 && <div className="mf-process-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Materials Showcase */}
      <section className="mf-materials-section">
        <div className="mf-container">
          <div className="mf-materials-content">
            
            <div className="mf-materials-text">
              <span className="mf-section-eyebrow">Quality Assured</span>
              <h2>Premium Materials & Finishes</h2>
              <p>We offer material and finish combinations based on budget and performance requirements.</p>
              
              <ul className="mf-material-list">
                {[
                  "BWP Plywood Calibrated Core",
                  "High-Gloss & Matte Laminates",
                  "Seamless Acrylic Surfaces",
                  "Premium PU & Veneer Finishes",
                  "High-End Hardware & Fitting Integrations"
                ].map((item, index) => (
                  <li key={index}>
                    <span className="mf-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mf-materials-images-collage">
              <div className="mf-image-card mf-card-back">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" alt="Premium Finishes" />
                <div className="mf-card-overlay">
                  <span className="mf-card-label">Laminates</span>
                </div>
              </div>

              <div className="mf-image-card mf-card-middle">
                <img src="https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&q=80&w=800" alt="Wood Veneer" />
                <div className="mf-card-overlay">
                  <span className="mf-card-label">Wood Veneer</span>
                </div>
              </div>
              
              <div className="mf-image-card mf-card-front">
                <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" alt="Acrylic Finish Kitchen" />
                <div className="mf-card-overlay">
                  <span className="mf-card-label">Acrylic Finish</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="mf-testimonials-section">
        <div className="mf-container">
          <h2 className="mf-section-title mf-text-center">Trusted by Industry Professionals</h2>
          <div className="mf-testimonial-grid">
            {testimonials.map((test) => (
              <div key={test.id} className="mf-testimonial-card">
                <div className="mf-quote-mark">"</div>
                <div className="mf-test-header">
                  <img src={test.image} alt={test.name} />
                  <div className="mf-stars">★★★★★</div>
                </div>
                <p className="mf-test-quote">{test.quote}</p>
                <div className="mf-test-author">
                  <h4>{test.name}</h4>
                  <p className="mf-designation">{test.designation}</p>
                  <p className="mf-project">({test.project})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Partner With Us Form */}
      <section id="partner-form" className="mf-form-section">
        <div className="mf-container">
          <div className="mf-form-wrapper">
            <div className="mf-form-info">
              <h2>Become an Businesss Partner</h2>
              <p>Let’s collaborate and build better spaces together. Join forces with Deeraj Modulars for reliable, white-label manufacturing.</p>
              
              <div className="mf-target-audience">
                <span>For Architects</span>
                <span>For Builders</span>
                <span>For Designers</span>
                <span>For Associates</span>
              </div>

              <div className="mf-contact-details">
                <p>📍 <strong>Visit Us:</strong> Experience the difference in build quality at our Hyderabad factory.</p>
                <p>📞 <strong>Consultation:</strong> Book a site visit or factory tour via WhatsApp or Phone.</p>
              </div>
            </div>
            
            <form className="mf-contact-form" onSubmit={handleSubmit}>
              <h3>Submit Project Inquiry</h3>
              <div className="mf-form-group mf-full-width">
                <label>Name / Contact Person</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" required />
              </div>
              <div className="mf-form-group mf-full-width">
                <label>Firm / Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Enter company name" required />
              </div>
              <div className="mf-form-group">
                <label>Project Type</label>
                <input type="text" name="projectType" value={formData.projectType} onChange={handleInputChange} placeholder="e.g., Villa, 45 Flats" required />
              </div>
              <div className="mf-form-group">
                <label>Expected Volume</label>
                <input type="text" name="volume" value={formData.volume} onChange={handleInputChange} placeholder="e.g., 10 Kitchens" required />
              </div>
              <div className="mf-form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91" required />
              </div>
              <div className="mf-form-group">
                <label>WhatsApp Number</label>
                <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} placeholder="+91" required />
              </div>

              {/* Status Message Display */}
              {submitMessage && (
                <div className="mf-full-width" style={{
                  padding: '10px', 
                  borderRadius: '4px', 
                  backgroundColor: messageType === 'success' ? '#dcfce7' : messageType === 'error' ? '#fee2e2' : '#e0f2fe',
                  color: messageType === 'success' ? '#166534' : messageType === 'error' ? '#991b1b' : '#075985',
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}>
                  {submitMessage}
                </div>
              )}

              <button 
                type="submit" 
                className="mf-btn-primary mf-btn-full"
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? 'Sending Request...' : 'Request Collaboration'}
              </button>
            </form>
          </div>
        </div>
        <footer className="di-footer">
  <div className="di-footer-container">
    <p className="di-footer-links">Privacy Policy | Terms and Conditions</p>
    <p className="di-footer-title"><strong>DEERAJ INTERIORS</strong></p>

    {/* Split Address Section */}
    <div className="di-footer-addresses">
      
      <div className="di-footer-address-card">
        <span className="di-footer-branch">Experience Center</span>
        <p>
          PLOT 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br/>
          SUCHITRA CIRCLE, PET BASHEERABAD,<br/>
          HYDERABAD, TS 500067
        </p>
      </div>

      <div className="di-footer-address-card">
        <span className="di-footer-branch">Modular Factory</span>
        <p>
          PLOT 205, BESIDE HYPOTHETICAL PLAZA,<br/>
          JUBILEE HILLS CHECKPOST,<br/>
          HYDERABAD, TS 500033
        </p>
      </div>

    </div>

    <p className="di-footer-phone">+91 9000700910 / 9000700930</p>

    <p className="di-footer-copy">
      COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED.
    </p>
  </div>
</footer>
      </section>
    </div>
  );
};

export default ModularFactory;