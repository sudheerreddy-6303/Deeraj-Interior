// Office.js
import React from 'react';
import './Office.css';

// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaintBrush,
  faSitemap,
  faUserCheck,
  faLaptopCode,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons';

const Office = () => {
  return (
    <section className="office-section">
      {/* Hero section with background image */}
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000')`, // ← Replace if you want a different one
        }}
      >
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1 className="main-title">Office & Commercial Interiors</h1>
            <div className="intro">
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

      <div className="container">
        {/* Approach Section with Icons */}
        <div className="approach">
          <h3>Our Approach to Corporate Interiors</h3>
          <div className="approach-grid">
            <div className="approach-item">
              <div className="approach-icon">
                <FontAwesomeIcon icon={faPaintBrush} />
              </div>
              <h4>BRAND-CENTRIC DESIGN</h4>
              <p>Every detail aligns with your brand's identity and vision.</p>
            </div>
            <div className="approach-item">
              <div className="approach-icon">
                <FontAwesomeIcon icon={faSitemap} />
              </div>
              <h4>SMART SPACE PLANNING</h4>
              <p>Efficient layouts to maximize workflow and collaboration.</p>
            </div>
            <div className="approach-item">
              <div className="approach-icon">
                <FontAwesomeIcon icon={faUserCheck} />
              </div>
              <h4>ERGONOMIC & COMFORTABLE</h4>
              <p>Furniture and setups that prioritize health and well-being.</p>
            </div>
            <div className="approach-item">
              <div className="approach-icon">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <h4>MODERN TECHNOLOGY INTEGRATION</h4>
              <p>Seamless incorporation of AV systems, lighting, and automation.</p>
            </div>
            <div className="approach-item">
              <div className="approach-icon">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h4>SUSTAINABILITY IN DESIGN</h4>
              <p>Eco-friendly materials and energy-efficient solutions.</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects">
          <h3>TYPES OF OFFICE & COMMERCIAL PROJECTS WE HANDLE</h3>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
                alt="Corporate Offices"
              />
              <div className="caption">
                <h4>Corporate Offices</h4>
                <p>Executive cabins, open workspaces, conference rooms, and reception areas.</p>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"
                alt="Start-up Spaces"
              />
              <div className="caption">
                <h4>Start-up Spaces</h4>
                <p>Vibrant, creative designs that inspire innovation.</p>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                alt="Retail Stores & Showrooms"
              />
              <div className="caption">
                <h4>Retail Stores & Showrooms</h4>
                <p>Customer-focused layouts that drive engagement and sales.</p>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800"
                alt="Hospitality Spaces"
              />
              <div className="caption">
                <h4>Hospitality Spaces</h4>
                <p>Cafés, lounges, and lobbies with inviting atmospheres.</p>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
                alt="Co-Working Hubs"
              />
              <div className="caption">
                <h4>Co-Working Hubs</h4>
                <p>Flexible, modern setups to cater to diverse professionals.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Styles */}
        <div className="popular-styles">
          <h2>Popular Design Styles for Corporate Spaces</h2>
          <div className="styles-content">
            <ol>
              <li><strong>Modern Minimalist</strong> – Clean, sleek designs with open layouts.</li>
              <li><strong>Industrial Corporate Chic</strong> – High-end finishes with sophisticated color palettes.</li>
              <li><strong>Luxury</strong> – Raw textures, exposed elements, and urban appeal.</li>
              <li><strong>Biophilic Design</strong> – Integrating greenery for a refreshing, natural vibe.</li>
              <li><strong>Tech-Driven Workspaces</strong> – Smart automation, adaptable furniture, and digital collaboration zones.</li>
            </ol>
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
              alt="Modern Minimalist Corporate Office"
              className="styles-image"
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-us">
          <h2>WHY CHOOSE US FOR YOUR CORPORATE INTERIORS? 2025</h2>
          <div className="why-grid">
            <div className="why-item">
              <img
                src="https://images.unsplash.com/photo-1498409785966-ab341407de6e?auto=format&fit=crop&q=80&w=800"
                alt="Experience Across Industries"
              />
              <div className="why-caption">
                <h3>Experience Across Industries</h3>
                <p>From IT to retail, hospitality, and healthcare.</p>
              </div>
            </div>

            <div className="why-item">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Time & Budget Adherence"
              />
              <div className="why-caption">
                <h3>Time & Budget Adherence</h3>
                <p>Designs delivered without compromising deadlines or costs.</p>
              </div>
            </div>

            <div className="why-item">
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800"
                alt="Turnkey Solutions"
              />
              <div className="why-caption">
                <h3>Turnkey Solutions</h3>
                <p>From concept to execution, we handle it all.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Button */}
        <div className="quote-section">
          <button className="quote-btn">REQUEST FOR A QUOTE</button>
        </div>

        {/* Footer */}
        <footer className="office-footer">
          <p>Privacy Policy | Terms and Conditions</p>
          <p><strong>DEERAJ INTERIORS</strong></p>
          <p>PLOT 119, ABOVE RELIANCE TRENDS FOOTWEAR, SUCHITRA CIRCLE, PET BASHEERABAD, HYDERABAD, TS 500067</p>
          <p>+91 9000700930</p>
          <p>COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </section>
  );
};

export default Office;