// // src/components/home/Home.jsx
// import React from 'react';
// import './home.css';

// export default function Home() {
//   return (
//     <div className="home-container">
//       <header className="hero">
//         <div className="hero-content">
          
//           <h1 className="hero-title">
//             {/* <h3>Deeraj</h3> */}
//             Interior <span className="highlight">Studio</span>
//           </h1>
//           <p className="hero-subtitle">
//             Creating timeless spaces with soul, elegance and modern comfort
//           </p>
//           <div className="hero-buttons">
//             <button className="btn primary" onClick={() => (window.location.href = "/contact-us")}
//             >View Projects</button>
//             <button className="btn outline"  onClick={() => (window.location.href = "/contact-us")}>Get in Touch</button>
//           </div>
//         </div>
//       </header>

//       {/* About Section */}
//       <section className="about-section">
//         <div className="about-wrapper">
//           <div className="about-image-container">
//             <div
//               className="about-image"
//               style={{
//                 backgroundImage: `url('https://s3.ap-south-1.amazonaws.com/images.woodenstreet.de/image/data/blog-images/partition-design/wooden-living-room-partition.jpg')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}
//             ></div>
//           </div>
//           <div className="about-content">
//             <h2>ABOUT DEERAJ INTERIORS</h2>
//             <h1>Designing Dreams. Delivering Elegance</h1>
//             <p>
//               At Deeraj Interiors, we believe that every space has a story — and we're here to design it beautifully. With over 5 years of experience, we've transformed homes, offices, and commercial spaces into functional, aesthetic, and personalized environments that reflect the dreams of our clients.
//             </p>
//             <p>
//               From cozy 2BHK apartments to expansive villas, and from boutique offices to large-scale commercial interiors, our journey has been driven by word-of-mouth trust and design excellence. We've had the privilege to work with individual homeowners as well as renowned companies, bringing creativity, precision, and passion to every square foot.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us - Fade Carousel */}
//       <section className="why-choose-section">
//         <div className="why-wrapper">
//           <div className="why-content">
//             <h2>WHY CHOOSE US</h2>
//             <h1>Designed with Passion. Delivered with Precision</h1>

//             <p>
//               From concept to creation, our work speaks of trust, timelines, and tailored excellence. With 5+ years of word-of-mouth success, we now bring our promise to you online — better, faster, and more inspired than ever.
//             </p>

//            <button
//   className="btn primary explore-btn"
//   onClick={() => (window.location.href = "/contact-us")}
// >
//   EXPLORE OUR EDGE →
// </button>
//           </div>

//           <div className="why-image-slider">
//             <div className="slides">
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4cb0d?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438905-a9e3e6a5d6d8?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221710640-c0eaaa2adb66?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4f?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616594039964-ae1f457de8c1?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438930-7e6d5a8d8e0?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80')` }}></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Overview Section */}
//       <section className="services-section">
//         <div className="services-wrapper">
//           <h2>OUR DESIGN SERVICES</h2>
//           <p className="section-subtitle">
//             Everything you need. All under one roof.
//           </p>

//           <div className="services-grid">
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Bedroom Design</div>
//               <div className="service-hover-content">
//                 <p>Create a peaceful and restful sanctuary with our expert bedroom design services. From custom bed frames to luxurious bedding, we help you create a space that's both comfortable and stylish.</p>
//                 <button className="btn primary"    onClick={() => (window.location.href = "/contact-us")}
// >Know More</button>
//               </div>
//             </div>

//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Living Room Design</div>
//               <div className="service-hover-content">
//                 <p>Whether you're looking for a cozy space to relax with family or a stylish entertaining area for guests, we can create a living room that suits your lifestyle and reflects your personality.</p>
//                 <button className="btn primary"   onClick={() => (window.location.href = "/contact-us")}
//  >Know More</button>
//               </div>
//             </div>

//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Kitchen Design</div>
//               <div className="service-hover-content">
//                 <p>At Deeraj Interiors, we specialize in crafting kitchen interiors that are as beautiful as they are functional — thoughtfully designed to reflect your style and suit your everyday needs.</p>
//                 <button className="btn primary"   onClick={() => (window.location.href = "/contact-us")}
//  >Know More</button>
//               </div>
//             </div>

//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Home Office Design</div>
//               <div className="service-hover-content">
//                 <p>With more people working from home, it's important to have a functional and inspiring home office. Let us help you create a space that's both productive and stylish.</p>
//                 <button className="btn primary"    onClick={() => (window.location.href = "/contact-us")}
//  >Know More</button>
//               </div>
//             </div>

//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Bathroom Design</div>
//               <div className="service-hover-content">
//                 <p>Transform your bathroom into a spa-like retreat with our expert design services. From luxurious showers to elegant fixtures, we create a space that's both beautiful and functional.</p>
//                 <button className="btn primary"   onClick={() => (window.location.href = "/contact-us")}
//  >Know More</button>
//               </div>
//             </div>

//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Outdoor Living Design</div>
//               <div className="service-hover-content">
//                 <p>Extend your living space to the outdoors with our expert outdoor living design services. From cozy fire pits to luxurious outdoor kitchens, we help you create a space that's perfect for entertaining and relaxation.</p>
//                 <button className="btn primary"    onClick={() => (window.location.href = "/contact-us")}
//  >Know More</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section - Continuous Scroll with Background */}
//       <section className="testimonials-section" style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}>
//         <div className="testimonials-wrapper">
//           <h2 className="testimonials-title">Loved by Families Across the City.</h2>
          
//           <div className="testimonials-scroll-container">
//             <div className="testimonials-track">
//               {/* First set of testimonials */}
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Excellent</h3>
//                 <p className="testimonial-text">
//                   "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!"
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">R</div>
//                   <span>Rajesh</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Fantastic style</h3>
//                 <p className="testimonial-text">
//                   "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">N</div>
//                   <span>Nagadivya Goli</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Great teamwork</h3>
//                 <p className="testimonial-text">
//                   "Great teamwork! They offered a wide range of designs and executed everything perfectly on time."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">P</div>
//                   <span>P Karunakar</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Outstanding Service</h3>
//                 <p className="testimonial-text">
//                   "Professional team with amazing attention to detail. Our new kitchen is the heart of our home now."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">S</div>
//                   <span>Sunita Reddy</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Perfect Execution</h3>
//                 <p className="testimonial-text">
//                   "From design to execution, everything was flawless. Highly recommend Deeraj Interiors to everyone."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">A</div>
//                   <span>Arjun Mehta</span>
//                 </div>
//               </div>

//               {/* Duplicate set for continuous scroll */}
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Excellent</h3>
//                 <p className="testimonial-text">
//                   "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!"
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">R</div>
//                   <span>Rajesh</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Fantastic style</h3>
//                 <p className="testimonial-text">
//                   "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">N</div>
//                   <span>Nagadivya Goli</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Great teamwork</h3>
//                 <p className="testimonial-text">
//                   "Great teamwork! They offered a wide range of designs and executed everything perfectly on time."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">P</div>
//                   <span>P Karunakar</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Outstanding Service</h3>
//                 <p className="testimonial-text">
//                   "Professional team with amazing attention to detail. Our new kitchen is the heart of our home now."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">S</div>
//                   <span>Sunita Reddy</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Perfect Execution</h3>
//                 <p className="testimonial-text">
//                   "From design to execution, everything was flawless. Highly recommend Deeraj Interiors to everyone."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">A</div>
//                   <span>Arjun Mehta</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="cta-content">
//           <h2>Ready to transform your space?</h2>
//           <p>Let's create something beautiful together</p>
//           <button className="btn primary large">Start Your Project →</button>
//         </div>
//       </section>

//            {/* NEW: Contact/Footer Section */}
//       <footer className="contact-section">
//   <div className="contact-wrapper">
//     <h2 className="connect-title">CONNECT WITH US</h2>

//     <div className="footer-main-content">
//       {/* Left: GIF */}
//       <div className="footer-gif-side">
//         <div className="company-gif-container">
//           <img
//             src="https://i.pinimg.com/originals/b7/38/e8/b738e85cad3d9aee9fa1ff15b6e4faaf.gif"
//             alt="Our Design Philosophy in Motion"
//             className="company-gif-image"
//           />
//           <p className="gif-caption">Our Design Philosophy in Motion</p>
//         </div>
//       </div>

//       {/* Right: Company Info + Newsletter */}
//       <div className="footer-info-side">
//         <div className="company-info-block">
//           <h1 className="company-name">DEERAJ INTERIORS</h1>
//           <p className="company-address">
//             PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br />
//             SUCHITRA CIRCLE, PET BASHEERABAD,<br />
//             HYDERABAD, TS 500067
//           </p>
//           <p className="company-phone">+91 90007 00930</p>
//         </div>

// <div className="newsletter-box">

//   {/* Google Map */}
//   <div className="map-container">
//     <iframe
//       title="Deeraj Interiors Location"
//       src="https://www.google.com/maps?q=Suchitra%20Circle%20Hyderabad&output=embed"
//       width="100%"
//       height="180"
//       style={{ border: 0, borderRadius: "10px", marginBottom: "15px" }}
//       allowFullScreen=""
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//     ></iframe>
//   </div>

//   {/* Existing Content - Do Not Remove */}
//   <h3>Subscribe</h3>
//   <p>
//     Get 10% off your first purchase when you sign up for our newsletter!
//   </p>
//   <button className="btn primary">SIGN UP</button>

// </div>


//         <div className="newsletter-box">
//           <h3>Subscribe</h3>
//           <p>
//             Get 10% off your first purchase when you sign up for our newsletter!
//           </p>
//           <button className="btn primary">SIGN UP</button>
//         </div>
//       </div>
//     </div>

//     <div className="footer-bottom">
//       <div className="legal-links">
//         <a href="/privacy-policy">Privacy Policy</a>
//         <span className="separator"> • </span>
//         <a href="/terms-and-conditions">Terms and Conditions</a>
//       </div>
//       <p className="copyright">
//         COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED
//       </p>
//     </div>
//   </div>
// </footer>

//       {/* Remove the separate GIF section since it's now in the footer */}

//       {/* GIF Section at the very bottom */}
     
//     </div>
//   );
// }

// src/components/home/Home.jsx
import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            {/* <h3>Deeraj</h3> */}
            Interior <span className="highlight">Studio</span>
          </h1>
          <p className="hero-subtitle">
            Creating timeless spaces with soul, elegance and modern comfort
          </p>
          <div className="hero-buttons">
            <button className="btn primary" onClick={() => (window.location.href = "/contact-us")}>
              View Projects
            </button>
            <button className="btn outline" onClick={() => (window.location.href = "/contact-us")}>
              Get in Touch
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <div className="about-wrapper">
          <div className="about-image-container">
            <div
              className="about-image"
              style={{
                backgroundImage: `url('https://s3.ap-south-1.amazonaws.com/images.woodenstreet.de/image/data/blog-images/partition-design/wooden-living-room-partition.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          </div>
          <div className="about-content">
            <h2>ABOUT DEERAJ INTERIORS</h2>
            <h1>Designing Dreams. Delivering Elegance</h1>
            <p>
              At Deeraj Interiors, we believe that every space has a story — and we're here to design it beautifully. With over 5 years of experience, we've transformed homes, offices, and commercial spaces into functional, aesthetic, and personalized environments that reflect the dreams of our clients.
            </p>
            <p>
              From cozy 2BHK apartments to expansive villas, and from boutique offices to large-scale commercial interiors, our journey has been driven by word-of-mouth trust and design excellence. We've had the privilege to work with individual homeowners as well as renowned companies, bringing creativity, precision, and passion to every square foot.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Fade Carousel */}
      <section className="why-choose-section">
        <div className="why-wrapper">
          <div className="why-content">
            <h2>WHY CHOOSE US</h2>
            <h1>Designed with Passion. Delivered with Precision</h1>
            <p>
              From concept to creation, our work speaks of trust, timelines, and tailored excellence. With 5+ years of word-of-mouth success, we now bring our promise to you online — better, faster, and more inspired than ever.
            </p>
            <button
              className="btn primary explore-btn"
              onClick={() => (window.location.href = "/contact-us")}
            >
              EXPLORE OUR EDGE →
            </button>
          </div>
          <div className="why-image-slider">
            <div className="slides">
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4cb0d?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438905-a9e3e6a5d6d8?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221710640-c0eaaa2adb66?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4f?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616594039964-ae1f457de8c1?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438930-7e6d5a8d8e0?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80')` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-section">
        <div className="services-wrapper">
          <h2>OUR DESIGN SERVICES</h2>
          <p className="section-subtitle">
            Everything you need. All under one roof.
          </p>
          <div className="services-grid">
            <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="service-title">Bedroom Design</div>
              <div className="service-hover-content">
                <p>Create a peaceful and restful sanctuary with our expert bedroom design services. From custom bed frames to luxurious bedding, we help you create a space that's both comfortable and stylish.</p>
                <button className="btn primary" onClick={() => (window.location.href = "/contact-us")}>Know More</button>
              </div>
            </div>
            <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="service-title">Living Room Design</div>
              <div className="service-hover-content">
                <p>Whether you're looking for a cozy space to relax with family or a stylish entertaining area for guests, we can create a living room that suits your lifestyle and reflects your personality.</p>
                <button className="btn primary" onClick={() => (window.location.href = "/contact-us")}>Know More</button>
              </div>
            </div>
            <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="service-title">Kitchen Design</div>
              <div className="service-hover-content">
                <p>At Deeraj Interiors, we specialize in crafting kitchen interiors that are as beautiful as they are functional — thoughtfully designed to reflect your style and suit your everyday needs.</p>
                <button className="btn primary" onClick={() => (window.location.href = "/contact-us")}>Know More</button>
              </div>
            </div>
            <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="service-title">Home Office Design</div>
              <div className="service-hover-content">
                <p>With more people working from home, it's important to have a functional and inspiring home office. Let us help you create a space that's both productive and stylish.</p>
                <button className="btn primary" onClick={() => (window.location.href = "/contact-us")}>Know More</button>
              </div>
            </div>
            <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="service-title">Bathroom Design</div>
              <div className="service-hover-content">
                <p>Transform your bathroom into a spa-like retreat with our expert design services. From luxurious showers to elegant fixtures, we create a space that's both beautiful and functional.</p>
                <button className="btn primary" onClick={() => (window.location.href = "/contact-us")}>Know More</button>
              </div>
            </div>
            <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="service-title">Outdoor Living Design</div>
              <div className="service-hover-content">
                <p>Extend your living space to the outdoors with our expert outdoor living design services. From cozy fire pits to luxurious outdoor kitchens, we help you create a space that's perfect for entertaining and relaxation.</p>
                <button className="btn primary" onClick={() => (window.location.href = "/contact-us")}>Know More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Continuous Scroll with Background */}
      <section className="testimonials-section" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="testimonials-wrapper">
          <h2 className="testimonials-title">Loved by Families Across the City.</h2>
         
          <div className="testimonials-scroll-container">
            <div className="testimonials-track">
              {/* First set of testimonials */}
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <h3 className="testimonial-rating">Excellent</h3>
                <p className="testimonial-text">
                  "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">R</div>
                  <span>Rajesh</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <h3 className="testimonial-rating">Fantastic style</h3>
                <p className="testimonial-text">
                  "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">N</div>
                  <span>Nagadivya Goli</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <h3 className="testimonial-rating">Great teamwork</h3>
                <p className="testimonial-text">
                  "Great teamwork! They offered a wide range of designs and executed everything perfectly on time."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">P</div>
                  <span>P Karunakar</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <h3 className="testimonial-rating">Outstanding Service</h3>
                <p className="testimonial-text">
                  "Professional team with amazing attention to detail. Our new kitchen is the heart of our home now."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">S</div>
                  <span>Sunita Reddy</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <h3 className="testimonial-rating">Perfect Execution</h3>
                <p className="testimonial-text">
                  "From design to execution, everything was flawless. Highly recommend Deeraj Interiors to everyone."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">A</div>
                  <span>Arjun Mehta</span>
                </div>
              </div>
              {/* Duplicate set for continuous scroll */}
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <h3 className="testimonial-rating">Excellent</h3>
                <p className="testimonial-text">
                  "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">R</div>
                  <span>Rajesh</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <h3 className="testimonial-rating">Fantastic style</h3>
                <p className="testimonial-text">
                  "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">N</div>
                  <span>Nagadivya Goli</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <h3 className="testimonial-rating">Great teamwork</h3>
                <p className="testimonial-text">
                  "Great teamwork! They offered a wide range of designs and executed everything perfectly on time."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">P</div>
                  <span>P Karunakar</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <h3 className="testimonial-rating">Outstanding Service</h3>
                <p className="testimonial-text">
                  "Professional team with amazing attention to detail. Our new kitchen is the heart of our home now."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">S</div>
                  <span>Sunita Reddy</span>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <h3 className="testimonial-rating">Perfect Execution</h3>
                <p className="testimonial-text">
                  "From design to execution, everything was flawless. Highly recommend Deeraj Interiors to everyone."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">A</div>
                  <span>Arjun Mehta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to transform your space?</h2>
          <p>Let's create something beautiful together</p>
          <button className="btn primary large">Start Your Project →</button>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer className="contact-section">
        <div className="contact-wrapper">
          <h2 className="connect-title">CONNECT WITH US</h2>
          <div className="footer-main-content">
            {/* Left column: GIF + Map underneath */}
            <div className="footer-gif-side">
              <div className="company-gif-container">
                <img
                  src="https://i.pinimg.com/originals/b7/38/e8/b738e85cad3d9aee9fa1ff15b6e4faaf.gif"
                  alt="Our Design Philosophy in Motion"
                  className="company-gif-image"
                />
                <p className="gif-caption">Our Design Philosophy in Motion</p>
              </div>

              {/* Google Map - placed under the GIF, left side relative to subscribe */}
              <div className="map-container" style={{ marginTop: '20px' }}>
                <iframe
                  title="Deeraj Interiors Location - Suchitra Circle, Hyderabad"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.314!2d78.478!3d17.5108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb999bffffffff%3A0x0!2zMTfCsDMwJzM5LjEiTiA3OMKwMjgnNDAuOCJF!5e0!3m2!1sen!2sin!4v1738944000000!5m2!1sen!2sin"
                  width="100%"
                  height="320"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right column: Company info + Subscribe */}
            <div className="footer-info-side">
              <div className="company-info-block">
                <h1 className="company-name">DEERAJ INTERIORS</h1>
                <p className="company-address">
                  PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br />
                  SUCHITRA CIRCLE, PET BASHEERABAD,<br />
                  HYDERABAD, TS 500067
                </p>
                <p className="company-phone">+91 90007 00930</p>
              </div>

              <div className="newsletter-box">
                <h3>Subscribe</h3>
                <p>
                  Get 10% off your first purchase when you sign up for our newsletter!
                </p>
                <button className="btn primary">SIGN UP</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="legal-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <span className="separator"> • </span>
              <a href="/terms-and-conditions">Terms and Conditions</a>
            </div>
            <p className="copyright">
              COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}