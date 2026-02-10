import React from 'react';
import './Company-story.css';

export default function CompanyStory() {
  return (
    <div className="company-story-container">
      {/* Hero: Immersive Visual Experience */}
      <div
        className="company-hero-section"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=2000')`,
        }}
      >
        <div className="company-hero-content">
          <span className="company-fade-in-up">Premium Interior Design</span>
          <h1 className="company-fade-in-up">Where Vision Meets Artistry</h1>
          <p className="company-tagline company-fade-in-up">Elegance Redefined.</p>
        </div>
      </div>

      {/* Intro: The Brand Narrative */}
      <section className="company-intro-section">
        <div className="company-section-badge">The Deeraj Standard</div>
        <h2>Crafting Timeless Narratives</h2>

        <div className="company-intro-grid">
          <div className="company-intro-text">
            <p className="company-lead-text">
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
          <div className="company-intro-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000"
              alt="Luxury Interior Detail – Marble, Wood & Ambient Lighting"
              className="company-floating-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="company-vision-mission-section">
        <div className="company-vision-mission-grid">
          {/* Vision Card */}
          <div
            className="company-card company-vision-card"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.75)), url('https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2022/07/featured-image-inspiration-and-ideas-1400x933.jpg')`,
            }}
          >
            <div className="company-card-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>
              To become India’s most trusted design house, recognized for
              thoughtful, timeless, and culturally resonant living solutions.
            </p>
          </div>

          {/* Mission Card */}
          <div
            className="company-card company-mission-card"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.75)), url('https://thearchitectsdiary.com/wp-content/uploads/2025/10/Indian-Living-13-1024x682.jpg')`,
            }}
          >
            <div className="company-card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To elevate everyday living through personalized design that
              harmonizes luxury, comfort, and uncompromising functionality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA: Call to Action with Video Background */}
      <section className="company-cta-section">
        {/* Background Video */}
        <div className="company-video-background">
          <video
            autoPlay
            muted={true}
            loop
            playsInline
            preload="auto"
            className="company-background-video"
          >
            <source
              src="/videos/luxury-living-bg.mp4"
              type="video/mp4"
            />
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Luxury Interior Design Fallback"
            />
          </video>
          <div className="company-video-overlay"></div>
        </div>

        <div className="company-cta-content">
          <h2>Ready to Begin Your Story?</h2>
          <p>Deeraj Interiors — Where We Design Lives.</p>
          <a href="/contact-us" className="company-cta-button">Start Your Project</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="company-page-footer">
        <div className="company-footer-content">
          <p className="company-footer-brand">DEERAJ INTERIORS</p>
          <p className="company-footer-address">
            PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR, <br />
            SUCHITRA CIRCLE, PET BASHEERABAD, HYDERABAD, TS 500067
          </p>
          <p className="company-footer-contact">+91 9000700930</p>
        </div>
      </footer>
    </div>
  );
}