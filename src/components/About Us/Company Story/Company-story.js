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
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=2000')`,
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
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.75)), url('https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg')`,
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

 {/* Contact/Footer Section */}
<footer className="di-footer" style={{
  backgroundColor: '#1a1a1a',
  color: '#ffffff'
}}>
  <div className="di-footer-container">

    {/* Company Logo */}
    {/* <div style={{ textAlign: 'center', marginBottom: '30px' }}>
      <img 
        src="https://img1.wsimg.com/isteam/ip/e7e3142b-3f26-4173-bc29-b2315178edb8/DI%20logo%20(2).png/:/rs=w:559,h:192,cg:true,m/cr=w:559,h:192/qt=q:95" 
        alt="Deeraj Interiors Logo" 
        style={{ 
          maxWidth: '220px', 
          height: 'auto'
        }} 
      />
    </div> */}

    {/* Addresses Section */}
    <div className="di-footer-addresses" style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '30px',
      marginBottom: '40px'
    }}>
      
      <div className="di-footer-address-card">
        <span className="di-footer-branch" style={{ 
          color: '#ff6600', 
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          Suchitra Experience Center
        </span>
        <p style={{ marginTop: '10px', color: '#ffffff' }}>
          PLOT 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br/>
          SUCHITRA CIRCLE, PET BASHEERABAD,<br/>
          HYDERABAD, TS 500067
        </p>
        <p style={{ marginTop: '12px', color: '#ffcc80', fontWeight: 'bold' }}>
          📞 +91 9000700930
        </p>
      </div>

      <div className="di-footer-address-card">
        <span className="di-footer-branch" style={{ 
          color: '#ff6600', 
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          Medchal Modular Factory
        </span>
        <p style={{ marginTop: '10px', color: '#ffffff' }}>
          Pudur Medchal,<br/>
          5 Minutes From ORR Exit No:06,<br/>
          HYDERABAD, TS 500033
        </p>
        <p style={{ marginTop: '12px', color: '#ffcc80', fontWeight: 'bold' }}>
          📞 +91 9000700910
        </p>
      </div>

      <div className="di-footer-address-card">
        <span className="di-footer-branch" style={{ 
          color: '#ff6600', 
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          Nanakramguda, Hitech City Experience Center
        </span>
        <p style={{ marginTop: '10px', color: '#ffffff' }}>
          1st Floor, Pavani Encore,<br/>
          342/P Narsingi - Nanakramguda Service Road,<br/>
          Adj to Nanakramguda Tollgate,<br/>
          Telangana 500075
        </p>
        <p style={{ marginTop: '12px', color: '#ffcc80', fontWeight: 'bold' }}>
          📞 +91 9014300930
        </p>
      </div>
    </div>

    {/* Social Media Icons - Correct Brand Icons */}
    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
        
        {/* Facebook */}
        <a href="#" style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" style={{ width: '28px', height: '28px' }} />
        </a>

        {/* Instagram */}
        <a href="#" style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" style={{ width: '28px', height: '28px' }} />
        </a>

        {/* Twitter / X */}
        <a href="https://www.linkedin.com/company/deerajinteriors/posts/?feedView=all" style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" style={{ width: '28px', height: '28px' }} />
        </a>

        {/* Google */}
        <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LMoozClIyyk2YLRSNagwTkpOskwyM01KSk5NSTMxtDKosDCxTEkxMDa3MEk1MrdMNvUSTMlITS1KzFLIzCtJLcrMLyoGADtiFx8&q=dheeraj+interiors&oq=deerajinteriors&gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg7Mg8IARAuGA0YrwEYxwEYgAQyDQgCEAAYhgMYgAQYigUyDQgDEAAYhgMYgAQYigUyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDUxODRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" style={{ width: '28px', height: '28px' }} />
        </a>

        {/* YouTube */}
        <a href="https://www.youtube.com/@Deeraj_Interiors" style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/3840px-YouTube_full-color_icon_%282017%29.svg.png" alt="YouTube" style={{ width: '30px', height: '22px' }} />
        </a>

      </div>
    </div>

    <p className="di-footer-links" style={{ 
      color: '#cccccc', 
      textAlign: 'center',
      fontWeight: '500',
      marginBottom: '15px'
    }}>
      Privacy Policy | Terms and Conditions
    </p>
    
    <p className="di-footer-title" style={{ 
      color: '#ff6600', 
      textAlign: 'center',
      margin: '10px 0 20px 0',
      fontWeight: 'bold',
      fontSize: '1.45rem'
    }}>
      DEERAJ INTERIORS
    </p>

    <p className="di-footer-copy" style={{ 
      color: '#aaaaaa', 
      textAlign: 'center',
      fontWeight: '500'
    }}>
      COPYRIGHT © DEERAJ TECHNOLOGIES PRIVATE LIMITED - ALL RIGHTS RESERVED.
    </p>

  </div>
</footer>

    </div>
  );
}