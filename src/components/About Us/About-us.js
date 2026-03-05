// import React from 'react';
import React, { useState } from 'react';
import './About-us.css';

const AboutUs = () => {
  const expertises = [
    { title: "Modular Kitchen Systems", desc: "Ergonomic, high-pressure laminate & acrylic finishes." },
    { title: "Smart Wardrobes", desc: "Floor-to-ceiling integration with intelligent lighting." },
    { title: "Corporate Workspaces", desc: "Performance-driven environments for modern teams." },
    { title: "Hospitality & Retail", desc: "Bespoke identity-driven interior execution." },
    { title: "Healthcare Interiors", desc: "Anti-bacterial, durable, and flow-optimized designs." },
    { title: "Institutional Design", desc: "Large-scale modular solutions for schools & hubs." }
  ];
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  const leaders = [
    {
      name: "Ms. Shanthi",
      role: "Founder & Managing Director",
      bio: "Ms. Shanthi leads Deeraj Interiors with a strong emphasis on structured operations, customer experience, and sustainable brand growth. She is committed to building a professionally managed modular manufacturing ecosystem that supports both residential homeowners and large-scale commercial developers. Her leadership focuses on discipline, systems, and long-term value creation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Mr. Sunder",
      role: "Director – Operations | Sales | Execution",
      bio: "Mr. Sunder plays a key role in driving sales growth while overseeing factory production, project execution, and quality control. With practical expertise in modular systems and site coordination, he ensures delivery timelines, finishing standards, and customer satisfaction are consistently maintained. His strength lies in aligning sales commitments with operational excellence.",
      image: "https://img.freepik.com/free-photo/businessman-with-his-arms-crossed-white-background_1368-6001.jpg?semt=ais_user_personalization&w=740&q=80"
    },
    {
      name: "Mr. Seshagiri Raju",
      role: "Advisory Director – Strategy | Expansion",
      bio: "Mr. Seshagiri Raju supports the organization in strategic planning, business expansion, and sales development initiatives. He contributes to growth planning, operational scalability, factory efficiency improvements, and strengthening market positioning. His strategic guidance enables Deeraj Interiors to expand with clarity, structure, and long-term vision.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="about-us-premium">
      {/* --- CINEMATIC HERO --- */}
      <section className="hero-viewport">
        <div className="hero-background-overlay"></div>
        <div className="hero-content-overlay">
          <div className="container">
            <div className="reveal-text">
              <span className="eyebrow">Established Excellence • Hyderabad</span>
              <h1 className="display-title">
                Crafting the <br /> 
                <span className="outline-text">Precision</span> Standard.
              </h1>
              <div className="hero-stats">
                <div className="stat-item"><strong>15k</strong> <span>sq.ft Factory</span></div>
                <div className="stat-sep"></div>
                <div className="stat-item"><strong>100+</strong> <span>Annual Projects</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE MANIFESTO --- */}
      <section className="section manifesto">
        <div className="container grid-manifesto">
          <div className="manifesto-label">
            <span className="vertical-text">SINCE 2024</span>
          </div>
          <div className="manifesto-content">
            <h2 className="heading-large">We bridge the gap between <span className="text-serif">Vision</span> and <span className="text-serif">Reality</span>.</h2>
            <p className="description-lead">
              Deeraj Interiors / Deeraj Modulars is not merely an interior firm. We are an 
              <strong> Industrial Execution Partner</strong>. By merging 15,000 sq.ft of 
              high-tech manufacturing with architectural design, we eliminate the 
              unpredictability of traditional contracting.
            </p>
          </div>
        </div>
      </section>

      {/* --- THE EXPERTISE (Bento Grid Style) --- */}
      {/* <section className="section bg-warm">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-md">Design Specialization</h2>
            <p>Technological precision across residential and commercial sectors.</p>
          </div>
          <div className="bento-grid">
            {expertises.map((item, i) => (
              <div key={i} className="bento-card">
                <div className="card-top">
                  <span className="card-index">0{i + 1}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
                <div className="card-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- STRATEGIC PILLARS --- */}
      <section className="section pillars">
        <div className="container">
          <div className="pillars-wrapper">
            <div className="pillar-image-box">
              <img src="https://t4.ftcdn.net/jpg/03/65/21/75/360_F_365217542_SqD0byWky3uWnd8NHDdxRF6j4mgzPKzh.jpg" alt="Factory Office" />
              <div className="experience-tag">Experience Center <br/><strong>Kompally</strong></div>
            </div>
            <div className="pillar-content">
                <div className="pillar-block">
                <h3>The Vision</h3>
                <p>To become the definitive execution partner for architects and developers across Telangana, recognized for radical transparency and industrial-grade finishing.</p>
              </div>
              <div className="pillar-block">
                <h3>The Mission</h3>
                <p>To scale craftsmanship. We aim to deliver 100+ quality-controlled projects annually while expanding our physical Experience Center footprint by 5 hubs every year.</p>
              </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP (Enhanced Editorial Style) --- */}
      <section className="leadership-editorial-section">
        <div className="container">
          <div className="leadership-header">
            <span className="eyebrow">The Visionaries</span>
            <h2 className="display-title-md">Executive Leadership</h2>
            <div className="accent-line"></div>
          </div>

          <div className="editorial-container">
            {leaders.map((leader, index) => (
              <div key={index} className={`editorial-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="editorial-image-wrap">
                  <div className="image-overlay-card">0{index + 1}</div>
                  <img src={leader.image} alt={leader.name} className="leader-img" />
                </div>
                <div className="editorial-text-wrap">
                  <h3 className="leader-name">{leader.name}</h3>
                  <span className="leader-designation">{leader.role}</span>
                  
                  <p className="leader-bio-text">{leader.bio}</p>
                  {/* <div className="leader-signature">Deeraj Interiors Execution Team</div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLOSING --- */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Build with Precision?</h2>
          <p>Join the 100+ homeowners and developers choosing structured execution.</p>
          <button className="btn-premium">Inquire About Your Project</button>
        </div>
      </section>
      {/* ================= WHATSAPP FLOAT ================= */}
<div className="whatsapp-container">

  <div
    className="whatsapp-float"
    onClick={() => setWhatsappOpen(!whatsappOpen)}
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
    />
  </div>

  {whatsappOpen && (
    <div className="whatsapp-popup">
      <h3>Start WhatsApp Chat</h3>

      <input type="text" placeholder="Your Name" id="wa-name" />
      <input type="text" placeholder="Project Type (Home / Office / Consultation)" id="wa-project" />
      <textarea placeholder="Your Message" id="wa-message"></textarea>

      <button
        onClick={() => {
          const name = document.getElementById("wa-name").value;
          const project = document.getElementById("wa-project").value;
          const message = document.getElementById("wa-message").value;

          const finalMessage =
            `Hello Deeraj Interiors,%0A%0A` +
            `Name: ${name}%0A` +
            `Project: ${project}%0A` +
            `Message: ${message}%0A%0A` +
            `I am interested in discussing my interior project.`;

          window.open(
            `https://wa.me/919000700930?text=${finalMessage}`,
            "_blank"
          );
        }}
      >
        Chat on WhatsApp
      </button>
    </div>
  )}
</div>
<footer className="di-footer">
  <div className="di-footer-container">
    <p className="di-footer-links">Privacy Policy | Terms and Conditions</p>
    <p className="di-footer-title"><strong>DEERAJ INTERIORS</strong></p>

    {/* Split Address Section */}
    <div className="di-footer-addresses">
      
      <div className="di-footer-address-card">
        <span className="di-footer-branch">Experiance Center</span>
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
    </div>
  );
};

export default AboutUs;