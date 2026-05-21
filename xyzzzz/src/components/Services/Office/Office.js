// Office.js
import React, { useState } from 'react';
import './Office.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaintBrush,
  faSitemap,
  faUserCheck,
  faLaptopCode,
  faLeaf,
  faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons';

const Office = () => {
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  return (
    <section className="drj-off-section">
      {/* Hero section with background image */}
      <div 
        className="drj-off-hero-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000')`,
        }}
      >
        <div className="drj-off-hero-overlay">
          <div className="drj-off-container drj-off-hero-content">
            <h1 className="drj-off-main-title">Office & Commercial Interiors</h1>
            <div className="drj-off-intro">
              <h2>Creating Workplaces That Inspire Success</h2>
              <p>
                Your workplace is more than just a location—it's a reflection of your brand, values, and culture. 
                We design office and commercial spaces that blend aesthetics with functionality, foster collaboration 
                and productivity, and leave lasting impressions on clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="drj-off-approach-wrapper">
        <div className="drj-off-container">
          <div className="drj-off-approach">
            <h3>Our Approach to Corporate Interiors</h3>
            <div className="drj-off-approach-grid">
              <div className="drj-off-approach-item">
                <div className="drj-off-approach-icon">
                  <FontAwesomeIcon icon={faPaintBrush} />
                </div>
                <h4>BRAND-CENTRIC DESIGN</h4>
                <p>Every detail aligns with your brand's identity and vision.</p>
              </div>
              <div className="drj-off-approach-item">
                <div className="drj-off-approach-icon">
                  <FontAwesomeIcon icon={faSitemap} />
                </div>
                <h4>SMART SPACE PLANNING</h4>
                <p>Efficient layouts to maximize workflow and collaboration.</p>
              </div>
              <div className="drj-off-approach-item">
                <div className="drj-off-approach-icon">
                  <FontAwesomeIcon icon={faUserCheck} />
                </div>
                <h4>ERGONOMIC & COMFORTABLE</h4>
                <p>Furniture and setups that prioritize health and well-being.</p>
              </div>
              <div className="drj-off-approach-item">
                <div className="drj-off-approach-icon">
                  <FontAwesomeIcon icon={faLaptopCode} />
                </div>
                <h4>MODERN TECHNOLOGY INTEGRATION</h4>
                <p>Seamless incorporation of AV systems, lighting, and automation.</p>
              </div>
              <div className="drj-off-approach-item">
                <div className="drj-off-approach-icon">
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <h4>SUSTAINABILITY IN DESIGN</h4>
                <p>Eco-friendly materials and energy-efficient solutions.</p>
              </div>
              <div className="drj-off-approach-item">
                <div className="drj-off-approach-icon">
                  <FontAwesomeIcon icon={faClipboardCheck} />
                </div>
                <h4>TURNKEY EXECUTION</h4>
                <p>End-to-end project management ensuring on-time delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Projects Section */}
      <div className="drj-off-projects-wrapper">
  <div className="drj-off-container">
    <div className="drj-off-projects">
      <h3>Our Services</h3>
      <div className="drj-off-gallery-grid">
        
        {/* NEW HOME INTERIOR CARD */}
        <div className="drj-off-gallery-item">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" alt="Home Interiors" />
          <div className="drj-off-caption">
            <h4>Home Interiors</h4>
            <p>Cozy, personalized living spaces tailored to your lifestyle and preferences.</p>
          </div>
        </div>

        {/* NEW COMMERCIAL SPACE INTERIOR CARD */}
        <div className="drj-off-gallery-item">
          <img src="https://plus.unsplash.com/premium_photo-1670315264879-59cc6b15db5f?auto=format&fit=crop&q=80&w=800" alt="Commercial Space Interiors" />
          <div className="drj-off-caption">
            <h4>Commercial Space Interiors</h4>
            <p>Functional and aesthetic designs for businesses to enhance productivity and brand image.</p>
          </div>
        </div>

        {/* NEW SCHOOL INTERIOR CARD */}
        <div className="drj-off-gallery-item">
          <img src="https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?auto=format&fit=crop&q=80&w=800" alt="School Interiors" />
          <div className="drj-off-caption">
            <h4>School Interiors</h4>
            <p>Engaging learning environments that foster creativity and comfort for students and staff.</p>
          </div>
        </div>

        {/* NEW RESTAURANT INTERIOR CARD */}
        <div className="drj-off-gallery-item">
          <img src="https://plus.unsplash.com/premium_photo-1664298026480-c72cc46eab84?auto=format&fit=crop&q=80&w=800" alt="Restaurant Interiors" />
          <div className="drj-off-caption">
            <h4>Restaurant Interiors</h4>
            <p>Inviting dining spaces that elevate the culinary experience and ambiance.</p>
          </div>
        </div>

        {/* NEW ARCHITECT & INTERIOR SERVICES CARD */}
        <div className="drj-off-gallery-item">
          <img src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&q=80&w=800" alt="Architect & Interior Services" />
          <div className="drj-off-caption">
            <h4>Architect & Interior Services</h4>
            <p>Comprehensive design solutions from concept to completion for seamless integration.</p>
          </div>
        </div>

        {/* NEW ONLINE RETAIL SALES CARD */}
        <div className="drj-off-gallery-item">
          <img src="https://images.unsplash.com/photo-1648824572347-6edd9a108e28?auto=format&fit=crop&q=80&w=800" alt="Online Retail Showrooms" />
          <div className="drj-off-caption">
            <h4>Online Retail Showrooms</h4>
            <p>Virtual and physical setups optimized for e-commerce display and customer engagement.</p>
          </div>
        </div>

        <div className="drj-off-gallery-item">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Corporate Offices" />
          <div className="drj-off-caption">
            <h4>Corporate Offices</h4>
            <p>Executive cabins, open workspaces, conference rooms, and reception areas.</p>
          </div>
        </div>

        <div className="drj-off-gallery-item">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Start-up Spaces" />
          <div className="drj-off-caption">
            <h4>Start-up Spaces</h4>
            <p>Vibrant, creative designs that inspire innovation and team collaboration.</p>
          </div>
        </div>

        <div className="drj-off-gallery-item">
          <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800" alt="Retail Stores & Showrooms" />
          <div className="drj-off-caption">
            <h4>Retail Stores & Showrooms</h4>
            <p>Customer-focused layouts that drive engagement, traffic, and sales.</p>
          </div>
        </div>

        <div className="drj-off-gallery-item">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" alt="Hospitality Spaces" />
          <div className="drj-off-caption">
            <h4>Hospitality Spaces</h4>
            <p>Cafés, lounges, and luxury lobbies with warm, inviting atmospheres.</p>
          </div>
        </div>

        <div className="drj-off-gallery-item">
          <img src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800" alt="Co-Working Hubs" />
          <div className="drj-off-caption">
            <h4>Co-Working Hubs</h4>
            <p>Flexible, modern setups designed to cater to diverse professionals.</p>
          </div>
        </div>

        {/* NEW 6TH CARD ADDED HERE */}
        <div className="drj-off-gallery-item">
          <img src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800" alt="Boardrooms & Conference Centers" />
          <div className="drj-off-caption">
            <h4>Boardrooms & Conference Centers</h4>
            <p>State-of-the-art meeting spaces equipped for high-level decision making.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

      {/* Popular Styles (NOW LEFT/RIGHT LAYOUT) */}
      <div className="drj-off-popular-styles-wrapper">
        <div className="drj-off-container">
          <div className="drj-off-popular-styles">
            <h2>Popular Design Styles for Corporate Spaces</h2>
            
            <div className="drj-off-styles-layout">
              <div className="drj-off-styles-left">
                <ol>
                  <li><strong>Modern Minimalist</strong> – Clean, sleek designs with open layouts.</li>
                  <li><strong>Industrial Corporate Chic</strong> – High-end finishes with sophisticated color palettes.</li>
                  <li><strong>Luxury</strong> – Raw textures, exposed elements, and urban appeal.</li>
                  <li><strong>Biophilic Design</strong> – Integrating greenery for a refreshing, natural vibe.</li>
                  <li><strong>Tech-Driven Workspaces</strong> – Smart automation, adaptable furniture, and digital collaboration zones.</li>
                </ol>
              </div>
              
              <div className="drj-off-styles-right">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
                  alt="Modern Minimalist Corporate Office"
                  className="drj-off-styles-image"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="drj-off-why-choose-wrapper">
        <div className="drj-off-container">
          <div className="drj-off-why-choose-us">
            <h2>WHY CHOOSE US FOR YOUR CORPORATE INTERIORS? 2026</h2>
            <div className="drj-off-why-grid">
              <div className="drj-off-why-item">
                <img src="https://images.unsplash.com/photo-1498409785966-ab341407de6e?auto=format&fit=crop&q=80&w=800" alt="Experience Across Industries" />
                <div className="drj-off-why-caption">
                  <h3>Experience Across Industries</h3>
                  <p>From IT to retail, hospitality, and healthcare.</p>
                </div>
              </div>
              <div className="drj-off-why-item">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Time & Budget Adherence" />
                <div className="drj-off-why-caption">
                  <h3>Time & Budget Adherence</h3>
                  <p>Designs delivered without compromising deadlines or costs.</p>
                </div>
              </div>
              <div className="drj-off-why-item">
                <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800" alt="Turnkey Solutions" />
                <div className="drj-off-why-caption">
                  <h3>Turnkey Solutions</h3>
                  <p>From concept to execution, we handle it all.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Button */}
      <div className="drj-off-quote-wrapper">
        <div className="drj-off-container">
          <div className="drj-off-quote-section">
            <button className="drj-off-quote-btn">REQUEST FOR A QUOTE</button>
          </div>
        </div>
      </div>

      {/* Footer */}
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
          <img src="https://img.magnific.com/premium-vector/facebook-app-icon-social-media-logo-vector-illustration-meta_277909-402.jpg?semt=ais_hybrid&w=740&q=80" alt="Facebook" style={{ width: '28px', height: '28px' }} />
        </a>

        {/* Instagram */}
        <a href="#" style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
          <img src="https://img.magnific.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg?semt=ais_hybrid&w=740&q=80" alt="Instagram" style={{ width: '28px', height: '28px' }} />
        </a>

        {/* Twitter / X */}
        <a href="https://www.linkedin.com/company/deerajinteriors/posts/?feedView=all" style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" style={{ width: '28px', height: '28px' }} />
        </a>

        {/* Google */}
        <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LMoozClIyyk2YLRSNagwTkpOskwyM01KSk5NSTMxtDKosDCxTEkxMDa3MEk1MrdMNvUSTMlITS1KzFLIzCtJLcrMLyoGADtiFx8&q=dheeraj+interiors&oq=deerajinteriors&gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg7Mg8IARAuGA0YrwEYxwEYgAQyDQgCEAAYhgMYgAQYigUyDQgDEAAYhgMYgAQYigUyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDUxODRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
          <img src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg" alt="Google" style={{ width: '28px', height: '28px' }} />
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

      {/* ================= WHATSAPP FLOAT ================= */}
      <div className="drj-off-wa-container">
        <div className="drj-off-wa-float" onClick={() => setWhatsappOpen(!whatsappOpen)}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </div>

        {whatsappOpen && (
          <div className="drj-off-wa-popup">
            <h3>Start WhatsApp Chat</h3>
            <input type="text" placeholder="Your Name" id="drj-off-wa-name" />
            <input type="text" placeholder="Project Type (Office / Commercial)" id="drj-off-wa-project" />
            <textarea placeholder="Your Message" id="drj-off-wa-message"></textarea>
            <button
              onClick={() => {
                const name = document.getElementById("drj-off-wa-name").value;
                const project = document.getElementById("drj-off-wa-project").value;
                const message = document.getElementById("drj-off-wa-message").value;

                const finalMessage = `Hello Deeraj Interiors,%0A%0AName: ${name}%0AProject: ${project}%0AMessage: ${message}%0A%0AI am interested in discussing my office/commercial interior project.`;

                window.open(`https://wa.me/919000700930?text=${finalMessage}`, "_blank");
              }}
            >
              Chat on WhatsApp
            </button>
          </div>
        )}
      </div>
      {/* ── NEW: Phone Call Floating Button ── */}
     {/* ── Phone Call Floating Button ── */}
{/* <div className="home-phone-container">
  <a 
    href="/contact-us" 
    className="home-phone-float"
    title="Contact Us / Call"
  >
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20.9999 15.46C20.1199 15.46 19.2499 15.3 18.4099 15.06C18.1199 14.99 17.8099 15.05 17.5799 15.29L15.4099 18.12C12.2499 16.67 7.32988 11.79 5.87988 8.61998L8.70988 6.41998C8.95988 6.16998 9.01988 5.85998 8.94988 5.58998C8.69988 4.74998 8.53988 3.87998 8.53988 2.99998C8.53988 2.44998 8.08988 1.99998 7.53988 1.99998H4.49988C3.94988 1.99998 3.49988 2.44998 3.49988 2.99998C3.49988 13.28 10.7199 20.5 20.9999 20.5C21.5499 20.5 21.9999 20.05 21.9999 19.5V16.46C21.9999 15.91 21.5499 15.46 20.9999 15.46Z" 
        fill="#ffffff"
      />
    </svg>
  </a>
</div> */}
    </section>
    
  );
};

export default Office;