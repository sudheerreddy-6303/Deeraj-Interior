import React, { useState } from 'react';
import './Company-story.css';

export default function CompanyStory() {
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  return (
    <div className="deeraj-about-wrapper">
      {/* Hero: Immersive Visual Experience */}
      <div
        className="deeraj-about-hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=2000')`,
        }}
      >
        <div className="deeraj-about-hero-content">
          <span className="deeraj-about-fade-up">Premium Interior Design</span>
          <h1 className="deeraj-about-fade-up">Where Vision Meets Artistry</h1>
          <p className="deeraj-about-tagline deeraj-about-fade-up">Elegance Redefined.</p>
        </div>
      </div>

      {/* Intro: The Brand Narrative */}
      <section className="deeraj-about-intro">
        <div className="deeraj-about-badge">The Deeraj Standard</div>
        <h2>Crafting Timeless Narratives</h2>

        <div className="deeraj-about-grid">
          <div className="deeraj-about-text">
            <p className="deeraj-about-lead">
              At <strong>Deeraj Interiors</strong>, we don’t just fill rooms; we compose environments.
              We believe every architectural shell holds a unique narrative waiting to be told
              through texture, light, and form.
            </p>
            <p>
              With a <strong>half-decade legacy</strong> of design excellence, we have mastered
              the art of transforming the conceptual into the tangible. Whether it is the
              intimate sanctuary of a private villa or the high-performance atmosphere of
              a corporate headquarters, our journey is defined by a "precision-first" philosophy.
            </p>
            <p>
              Our growth has been fueled by the most powerful endorsement: the
              <strong> unwavering trust</strong> of our clients. From bespoke residential
              retreats to sophisticated commercial landscapes, we bring a signature blend
              of creative soul and technical rigor to every square foot.
            </p>
          </div>
          <div className="deeraj-about-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000"
              alt="Luxury Interior Detail – Marble, Wood & Ambient Lighting"
              className="deeraj-about-floating-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="deeraj-about-vm-section">
        <div className="deeraj-about-vm-grid">

          <div
            className="deeraj-about-card deeraj-about-vision-card"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.75)), url('https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2022/07/featured-image-inspiration-and-ideas-1400x933.jpg')`,
            }}
          >
            <div className="deeraj-about-card-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>
              To become India’s most trusted design house, recognized for
              thoughtful, timeless, and culturally resonant living solutions.
            </p>
          </div>

          <div
            className="deeraj-about-card deeraj-about-mission-card"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.75)), url('https://thearchitectsdiary.com/wp-content/uploads/2025/10/Indian-Living-13-1024x682.jpg')`,
            }}
          >
            <div className="deeraj-about-card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To elevate everyday living through personalized design that
              harmonizes luxury, comfort, and uncompromising functionality.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="deeraj-about-cta">
        <div className="deeraj-about-video-bg">
          <video
            autoPlay
            muted={true}
            loop
            playsInline
            preload="auto"
            className="deeraj-about-bg-video"
          >
            <source src="/videos/luxury-living-bg.mp4" type="video/mp4" />
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
              alt="Luxury Interior Design Fallback"
            />
          </video>
          <div className="deeraj-about-video-overlay"></div>
        </div>

        <div className="deeraj-about-cta-content">
          <h2>Ready to Begin Your Story?</h2>
          <p>Deeraj Interiors — Where We Design Lives.</p>
          <a 
            href="https://wa.me/919000700930?text=Hello%20Deeraj%20Interiors,%20I%20am%20interested%20in%20starting%20my%20interior%20project." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="deeraj-about-btn"
          >
            Start Your Project
          </a>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="deeraj-about-footer">
        <div className="deeraj-about-footer-inner">
          <p className="deeraj-about-brand">DEERAJ INTERIORS</p>
          <p className="deeraj-about-address">
            PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR, <br />
            SUCHITRA CIRCLE, PET BASHEERABAD, HYDERABAD, TS 500067
          </p>
          <p className="deeraj-about-contact">+91 9000700910 / 9000700930</p>
        </div>
      </footer> */}


      {/* ================= WHATSAPP FLOAT ================= */}
      <div className="deeraj-wa-wrapper">

        <div
          className="deeraj-wa-float"
          onClick={() => setWhatsappOpen(!whatsappOpen)}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </div>

        {whatsappOpen && (
          <div className="deeraj-wa-popup">
            <h3>Start WhatsApp Chat</h3>

            <input type="text" placeholder="Your Name" id="drj-wa-name" />
            <input type="text" placeholder="Project Type (2BHK / Kitchen / Office)" id="drj-wa-project" />
            <textarea placeholder="Your Message" id="drj-wa-message"></textarea>

            <button
              onClick={() => {
                const name = document.getElementById("drj-wa-name").value;
                const project = document.getElementById("drj-wa-project").value;
                const message = document.getElementById("drj-wa-message").value;

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
        <span className="di-footer-branch">Main Branch</span>
        <p>
          PLOT 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br/>
          SUCHITRA CIRCLE, PET BASHEERABAD,<br/>
          HYDERABAD, TS 500067
        </p>
      </div>

      <div className="di-footer-address-card">
        <span className="di-footer-branch">Second Branch</span>
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
}