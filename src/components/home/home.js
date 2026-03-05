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
// import React from 'react';
// import { useNavigate } from "react-router-dom";
// import './home.css';

// export default function Home() {

//   const navigate = useNavigate();
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
//           <button
//               className="btn primary"
//               onClick={() => navigate("/contact-us")}
//             >
//               View Projects
//             </button>
//              <button
//               className="btn outline"
//               onClick={() => navigate("/contact-us")}
//             >
//               Get in Touch
//             </button>
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
//               <button
//               className="btn primary explore-btn"
//               onClick={() => navigate("/contact-us")}
//             >
//               EXPLORE OUR EDGE →
//             </button>
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
//                    <button
//                   className="btn primary"
//                   onClick={() => navigate("/contact-us")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Living Room Design</div>
//               <div className="service-hover-content">
//                 <p>Whether you're looking for a cozy space to relax with family or a stylish entertaining area for guests, we can create a living room that suits your lifestyle and reflects your personality.</p>
//                 <button className="btn primary" onClick={() => navigate("/contact-us")}>Know More</button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Kitchen Design</div>
//               <div className="service-hover-content">
//                 <p>At Deeraj Interiors, we specialize in crafting kitchen interiors that are as beautiful as they are functional — thoughtfully designed to reflect your style and suit your everyday needs.</p>
//                 <button className="btn primary" onClick={() => navigate("/contact-us")}>Know More</button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Home Office Design</div>
//               <div className="service-hover-content">
//                 <p>With more people working from home, it's important to have a functional and inspiring home office. Let us help you create a space that's both productive and stylish.</p>
//                 <button className="btn primary" onClick={() => navigate("/contact-us")}>Know More</button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Bathroom Design</div>
//               <div className="service-hover-content">
//                 <p>Transform your bathroom into a spa-like retreat with our expert design services. From luxurious showers to elegant fixtures, we create a space that's both beautiful and functional.</p>
//                 <button className="btn primary" onClick={() => navigate("/contact-us")}>Know More</button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Outdoor Living Design</div>
//               <div className="service-hover-content">
//                 <p>Extend your living space to the outdoors with our expert outdoor living design services. From cozy fire pits to luxurious outdoor kitchens, we help you create a space that's perfect for entertaining and relaxation.</p>
//                 <button className="btn primary"onClick={() => navigate("/contact-us")}>Know More</button>
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
//           <button className="btn primary large" onClick={() => navigate("/contact-us")} >Start Your Project →</button>
//         </div>
//       </section>

//       {/* Contact/Footer Section */}
//       <footer className="contact-section">
//         <div className="contact-wrapper">
//           <h2 className="connect-title">CONNECT WITH US</h2>
//           <div className="footer-main-content">
//             {/* Left column: GIF + Map underneath */}
//             <div className="footer-gif-side">
//               <div className="company-gif-container">
//                 <img
//                   src="https://i.pinimg.com/originals/b7/38/e8/b738e85cad3d9aee9fa1ff15b6e4faaf.gif"
//                   alt="Our Design Philosophy in Motion"
//                   className="company-gif-image"
//                 />
//                 <p className="gif-caption">Our Design Philosophy in Motion</p>
//               </div>

//               {/* Google Map - placed under the GIF, left side relative to subscribe */}
//               <div className="map-container" style={{ marginTop: '20px' }}>
//                 <iframe
//                   title="Deeraj Interiors Location - Suchitra Circle, Hyderabad"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.314!2d78.478!3d17.5108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb999bffffffff%3A0x0!2zMTfCsDMwJzM5LjEiTiA3OMKwMjgnNDAuOCJF!5e0!3m2!1sen!2sin!4v1738944000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="320"
//                   style={{ border: 0, borderRadius: "10px" }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </div>

//             {/* Right column: Company info + Subscribe */}
//             <div className="footer-info-side">
//               <div className="company-info-block">
//                 <h1 className="company-name">DEERAJ INTERIORS</h1>
//                 <p className="company-address">
//                   PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br />
//                   SUCHITRA CIRCLE, PET BASHEERABAD,<br />
//                   HYDERABAD, TS 500067
//                 </p>
//                 <p className="company-phone">+91 90007 00930</p>
//               </div>

//               <div className="newsletter-box">
//                 <h3>Subscribe</h3>
//                 <p>
//                   Get 10% off your first purchase when you sign up for our newsletter!
//                 </p>
//                 <button className="btn primary"  onClick={() => navigate("/contact-us")} >SIGN UP</button>
//               </div>
//             </div>
//           </div>

//           <div className="footer-bottom">
//             <div className="legal-links">
//               <a href="/privacy-policy">Privacy Policy</a>
//               <span className="separator"> • </span>
//               <a href="/terms-and-conditions">Terms and Conditions</a>
//             </div>
//             <p className="copyright">
//               COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED
//             </p>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }







//  {/* Updated Testimonials */}
//       <section className="testimonials-section" style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}>
//         <div className="testimonials-wrapper">
//           <h2 className="testimonials-title">Loved by Families Across the City.</h2>

//           <div className="testimonials-horizontal-container">
//             {(() => {
//               const cards = [];
//               const total = testimonials.length;
//               let idx1 = currentPair % total;
//               let idx2 = (currentPair + 1) % total;

//               cards.push(testimonials[idx1]);

//               if (total > 1) {
//                 cards.push(testimonials[idx2]);
//               }

//               return cards.map((item, index) => (
//                 <div key={index} className="testimonial-horizontal-card">
//                   <div className="testimonial-left">
//                     <div className="avatar-circle">
//                       <img 
//                         src={item.avatar} 
//                         alt={item.name} 
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'cover',
//                           borderRadius: '15%'
//                         }}
//                       />
//                     </div>
//                     <div className="testimonial-name-below">
//                       {item.name}
//                     </div>
//                   </div>

//                   <div className="testimonial-right">
//                     <div className="stars">
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                     </div>

//                     <h3 className="testimonial-rating">
//                       {item.rating}
//                     </h3>

//                     <p className="testimonial-text">
//                       "{item.text}"
//                     </p>

//                     <div className="testimonial-address">
//                       {item.address}
//                     </div>
//                   </div>
//                 </div>
//               ));
//             })()}
//           </div>

//           {/* Navigation dots */}
//           <div className="testimonial-dots">
//             {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
//               <span
//                 key={index}
//                 className={`dot ${index === Math.floor(currentPair / 2) ? 'active' : ''}`}
//                 onClick={() => setCurrentPair(index * 2)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>




//  const testimonials = [
//     {
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
//       rating: "Excellent",
//       text: "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!",
//       name: "Rajesh",
//       address: "Kukatpally, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces",
//       rating: "Fantastic style",
//       text: "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now.",
//       name: "Nagadivya Goli",
//       address: "Gachibowli, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces",
//       rating: "Outstanding",
//       text: "Very professional team. They understood our requirements perfectly and delivered the 3BHK exactly on time with premium finishes.",
//       name: "Srinivas Reddy",
//       address: "Madhapur, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",
//       rating: "Highly Recommended",
//       text: "Best interior designers in Hyderabad! Great attention to detail, excellent communication and value for money.",
//       name: "Priya Sharma",
//       address: "Jubilee Hills, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop&crop=faces",
//       rating: "Perfect Execution",
//       text: "From 3D design to final handover — everything was flawless. Our modular kitchen is a dream now. Thank you team!",
//       name: "Anjali Mehta",
//       address: "Banjara Hills, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces",
//       rating: "Superb Work",
//       text: "We were worried about renovating our old house, but Deeraj Interiors made it look completely modern and spacious. Super happy!",
//       name: "Karthik Rao",
//       address: "Ameerpet, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=faces",
//       rating: "Elegant & Functional",
//       text: "They created a beautiful yet practical living + dining space for our family. Guests keep asking who did the interiors!",
//       name: "Meghana Varma",
//       address: "Manikonda, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=300&h=300&fit=crop&crop=faces",
//       rating: "Top Class",
//       text: "Premium materials, clean workmanship, and on-time completion. Our office cabin looks like a high-end corporate setup now.",
//       name: "Vikram Singh",
//       address: "Hitech City, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=faces",
//       rating: "Beyond Expectations",
//       text: "We just wanted minor changes but they suggested better ideas that completely transformed our 2BHK. Truly impressive!",
//       name: "Lakshmi Iyer",
//       address: "Uppal, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces",
//       rating: "Creative & Reliable",
//       text: "Loved the creative wall panels and lighting concepts. Team was very patient and completed everything within budget.",
//       name: "Harsha Vardhan",
//       address: "Secunderabad, Hyderabad"
//     }
//   ];




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import './home.css';

// const testimonials = [
//   {
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
//     rating: "Excellent",
//     text: "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!",
//     name: "Rajesh",
//     address: "Kukatpally, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces",
//     rating: "Fantastic style",
//     text: "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now.",
//     name: "Nagadivya Goli",
//     address: "Gachibowli, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces",
//     rating: "Outstanding",
//     text: "Very professional team. They understood our requirements perfectly and delivered the 3BHK exactly on time with premium finishes.",
//     name: "Srinivas Reddy",
//     address: "Madhapur, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",
//     rating: "Highly Recommended",
//     text: "Best interior designers in Hyderabad! Great attention to detail, excellent communication and value for money.",
//     name: "Priya Sharma",
//     address: "Jubilee Hills, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop&crop=faces",
//     rating: "Perfect Execution",
//     text: "From 3D design to final handover — everything was flawless. Our modular kitchen is a dream now. Thank you team!",
//     name: "Anjali Mehta",
//     address: "Banjara Hills, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces",
//     rating: "Superb Work",
//     text: "We were worried about renovating our old house, but Deeraj Interiors made it look completely modern and spacious. Super happy!",
//     name: "Karthik Rao",
//     address: "Ameerpet, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=faces",
//     rating: "Elegant & Functional",
//     text: "They created a beautiful yet practical living + dining space for our family. Guests keep asking who did the interiors!",
//     name: "Meghana Varma",
//     address: "Manikonda, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=300&h=300&fit=crop&crop=faces",
//     rating: "Top Class",
//     text: "Premium materials, clean workmanship, and on-time completion. Our office cabin looks like a high-end corporate setup now.",
//     name: "Vikram Singh",
//     address: "Hitech City, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=faces",
//     rating: "Beyond Expectations",
//     text: "We just wanted minor changes but they suggested better ideas that completely transformed our 2BHK. Truly impressive!",
//     name: "Lakshmi Iyer",
//     address: "Uppal, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces",
//     rating: "Creative & Reliable",
//     text: "Loved the creative wall panels and lighting concepts. Team was very patient and completed everything within budget.",
//     name: "Harsha Vardhan",
//     address: "Secunderabad, Hyderabad"
//   }
// ];

// export default function Home() {
//   const navigate = useNavigate();
//   const [currentPair, setCurrentPair] = React.useState(0);
//   const [whatsappOpen, setWhatsappOpen] = useState(false);

//   // Helper function to open WhatsApp with pre-filled message
//   const openWhatsApp = (message) => {
//     const phone = "919000700930";
//     const encodedMessage = encodeURIComponent(message);
//     window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPair((prev) => (prev + 2) % testimonials.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="home-container">
//       <header className="hero">
//         <div className="hero-content">
//           <h1 className="hero-title-home">
//             {/* <h3>Deeraj</h3> */}
//             Interior <span className="highlight">Studio</span>
//           </h1>
//           <p className="hero-subtitle">
//             Creating timeless spaces with soul, elegance and modern comfort
//           </p>
//           <div className="hero-buttons">
//             <button
//               className="btn primary"
//               onClick={() => navigate("/portfolio/our-project")}
//             >
//               View Projects
//             </button>
//             <button
//               className="btn outline"
//               onClick={() => openWhatsApp("Hello Deeraj Interiors! I visited your website and would like to discuss my interior project.")}
//             >
//               Get in Touch
//             </button>
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
//             <button
//               className="btn primary explore-btn"
//               onClick={() => openWhatsApp("Hi Deeraj team! I'm interested in knowing more about your unique edge and recent work. Can we discuss?")}
//             >
//               EXPLORE OUR EDGE →
//             </button>
//           </div>
//           <div className="why-image-slider">
//   <div className="slides">
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     {/* <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4cb0d?auto=format&fit=crop&w=1200&q=80')` }}></div> */}
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438905-a9e3e6a5d6d8?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221710640-c0eaaa2adb66?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4f?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616594039964-ae1f457de8c1?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210491893-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}></div> 
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585153490-8d2a2280d648?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438930-7e6d5a8d8e0?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?auto=format&fit=crop&w=1200&q=80')` }}></div> 
   
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80')` }}></div>
    
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4cb0d?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438905-a9e3e6a5d6d8?auto=format&fit=crop&w=1200&q=80')` }}></div>

//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616594039964-ae1f457de8c1?auto=format&fit=crop&w=1200&q=80')` }}></div>

//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
  
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80')` }}></div>
    
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80')` }}></div>
   
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}></div>
    
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}></div>
    
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221710640-c0eaaa2adb66?auto=format&fit=crop&w=1200&q=80')` }}></div>
   
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4f?auto=format&fit=crop&w=1200&q=80')` }}></div>
   
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438930-7e6d5a8d8e0?auto=format&fit=crop&w=1200&q=80')` }}></div>
//   </div>
// </div>
//         </div>
//       </section>

//       {/* Our Products Section */}
//       <section className="products-section">
//         <div className="products-wrapper">
//           <h2>OUR PRODUCTS</h2>
//           <p className="section-subtitle">
//             Premium ready-to-use interior products crafted with quality & style
//           </p>
//           <div className="products-grid">
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/81irP73vuqL.jpg')` }}
//               ></div>
//               <h3>Book Shelf</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/H600000035_2?fit=fit&wid=1200&hei=900')` }}
//               ></div>
//               <h3>Book Shelf</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/51Oht6zQFML._AC_UF894,1000_QL80_.jpg')` }}
//               ></div>
//               <h3>Modern Center Table</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71tFMmZr3dL._AC_UF894,1000_QL80_.jpg')` }}
//               ></div>
//               <h3>Printed Melamine Dinner Plate</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71R33gKo8hL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg')` }}
//               ></div>
//               <h3>Flower Vase</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/91FtfQJ-hfL._AC_UF894,1000_QL80_.jpg')` }}
//               ></div>
//               <h3>Classic Wall Art</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/dbfff93e-7141-4777-84dc-9b7220c66674.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}
//               ></div>
//               <h3>Green Aluminium Deer Sculpture</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/03870a4f-9af8-4a26-b94f-10f922dd6a01.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}
//               ></div>
//               <h3>Decoration Leaf</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71yIOkGTTIL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg')` }}
//               ></div>
//               <h3>Beautiful Wall Mirror</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://salsify-ecdn.com/images/0de564332f8386e2f3c73905415624e8.jpg')` }}
//               ></div>
//               <h3>Gold Aluminium Face Sculpture</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/b3b53ac2-4451-48a4-b85e-ffff6650c5c0.__CR0,0,800,600_PT0_SX800_V1___.jpg')` }}
//               ></div>
//               <h3>Black Alloy Metal Floral Shape</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/7f63a722-0f87-4268-9127-9667b2109201.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}
//               ></div>
//               <h3>Gold Aluminium Antique Leaf</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//           </div>
//           <div className="products-cta">
//             <button
//               className="btn primary explore-btn"
//               onClick={() => window.open(`https://id.vyaparify.com/deeraj-interiors`, "_blank")}
//             >
//               View All Products →
//             </button>
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
//                 <button
//                   className="btn primary"
//                   onClick={() => openWhatsApp("Hello! I'm interested in your Bedroom Design services. Can we discuss possibilities?")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Living Room Design</div>
//               <div className="service-hover-content">
//                 <p>Whether you're looking for a cozy space to relax with family or a stylish entertaining area for guests, we can create a living room that suits your lifestyle and reflects your personality.</p>
//                 <button
//                   className="btn primary"
//                   onClick={() => openWhatsApp("Hi! Looking to redesign my Living Room. Interested in your designs.")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Kitchen Design</div>
//               <div className="service-hover-content">
//                 <p>At Deeraj Interiors, we specialize in crafting kitchen interiors that are as beautiful as they are functional — thoughtfully designed to reflect your style and suit your everyday needs.</p>
//                 <button
//                   className="btn primary"
//                   onClick={() => openWhatsApp("Hello! Interested in your modular Kitchen design services. Can we talk?")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Home Office Design</div>
//               <div className="service-hover-content">
//                 <p>With more people working from home, it's important to have a functional and inspiring home office. Let us help you create a space that's both productive and stylish.</p>
//                 <button
//                   className="btn primary"
//                   onClick={() => openWhatsApp("Hi! I need help designing a Home Office. Interested in your work.")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Bathroom Design</div>
//               <div className="service-hover-content">
//                 <p>Transform your bathroom into a spa-like retreat with our expert design services. From luxurious showers to elegant fixtures, we create a space that's both beautiful and functional.</p>
//                 <button
//                   className="btn primary"
//                   onClick={() => openWhatsApp("Hello! Looking to redesign my Bathroom. Can we discuss your services?")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Outdoor Living Design</div>
//               <div className="service-hover-content">
//                 <p>Extend your living space to the outdoors with our expert outdoor living design services. From cozy fire pits to luxurious outdoor kitchens, we help you create a space that's perfect for entertaining and relaxation.</p>
//                 <button
//                   className="btn primary"
//                   onClick={() => openWhatsApp("Hi! Interested in Outdoor Living / Terrace design. Let's talk!")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Updated Testimonials - Horizontal Cards with Dots */}
//       <section className="testimonials-section" style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}>
//         <div className="testimonials-wrapper">
//           <h2 className="testimonials-title-home">Loved by Families Across the City.</h2>
//           <div className="testimonials-horizontal-container">
//             {(() => {
//               const cards = [];
//               const total = testimonials.length;
//               let idx1 = currentPair % total;
//               let idx2 = (currentPair + 1) % total;
//               cards.push(testimonials[idx1]);
//               if (total > 1) {
//                 cards.push(testimonials[idx2]);
//               }
//               return cards.map((item, index) => (
//                 <div key={index} className="testimonial-horizontal-card">
//                   <div className="testimonial-left">
//                     <div className="avatar-circle">
//                       <img
//                         src={item.avatar}
//                         alt={item.name}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'cover',
//                           borderRadius: '15%'
//                         }}
//                       />
//                     </div>
//                     <div className="testimonial-name-below">
//                       {item.name}
//                     </div>
//                   </div>
//                   <div className="testimonial-right">
//                     <div className="stars">
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                     </div>
//                     <h3 className="testimonial-rating">
//                       {item.rating}
//                     </h3>
//                     <p className="testimonial-text">
//                       "{item.text}"
//                     </p>
//                     <div className="testimonial-address">
//                       {item.address}
//                     </div>
//                   </div>
//                 </div>
//               ));
//             })()}
//           </div>
//           {/* Navigation dots */}
//           <div className="testimonial-dots">
//             {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
//               <span
//                 key={index}
//                 className={`dot ${index === Math.floor(currentPair / 2) ? 'active' : ''}`}
//                 onClick={() => setCurrentPair(index * 2)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact/Footer Section */}
//       <footer className="contact-section">
//         <div className="contact-wrapper">
//           <h2 className="connect-title">CONNECT WITH US</h2>
//           <div className="footer-main-content">
//             {/* Left column: GIF + Map underneath */}
//             <div className="footer-gif-side">
//               <div className="company-gif-container">
//                 <img
//                   src="https://i.pinimg.com/originals/b7/38/e8/b738e85cad3d9aee9fa1ff15b6e4faaf.gif"
//                   alt="Our Design Philosophy in Motion"
//                   className="company-gif-image"
//                 />
//                 <p className="gif-caption">Our Design Philosophy in Motion</p>
//               </div>
//               {/* Google Map */}
//               <div className="map-container" style={{ marginTop: '20px' }}>
//                 <iframe
//                   title="Deeraj Interiors Location - Suchitra Circle, Hyderabad"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.314!2d78.478!3d17.5108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb999bffffffff%3A0x0!2zMTfCsDMwJzM5LjEiTiA3OMKwMjgnNDAuOCJF!5e0!3m2!1sen!2sin!4v1738944000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="320"
//                   style={{ border: 0, borderRadius: "10px" }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </div>
//             {/* Right column: Company info + Subscribe */}
//             <div className="footer-info-side">
//               <div className="company-info-block">
//                 <h1 className="company-name">DEERAJ INTERIORS</h1>
//                 <p className="company-address">
//                   PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br />
//                   SUCHITRA CIRCLE, PET BASHEERABAD,<br />
//                   HYDERABAD, TS 500067
//                 </p>
//                 <p className="company-phone">+91 90007 00910 / 90007 00930</p>
//               </div>
//               <div className="newsletter-box">
//                 <h3>Subscribe</h3>
//                 <p>
//               Design your dream home with elegance and style
// Contact now and enjoy 10% savings on your first booking!
//                 </p>
//                 {/* <button className="btn primary" onClick={() => navigate("/contact-us")}>
//                   SIGN UP
//                 </button> */}
//               </div>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <div className="legal-links">
//               <a href="/privacy-policy">Privacy Policy</a>
//               <span className="separator"> • </span>
//               <a href="/terms-and-conditions">Terms and Conditions</a>
//             </div>
//             <p className="copyright">
//               COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* WhatsApp Floating Button + Popup */}
//       <div className="whatsapp-container">
//         {/* Floating Button */}
//         <div
//           className="whatsapp-float"
//           onClick={() => setWhatsappOpen(!whatsappOpen)}
//         >
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//             alt="WhatsApp"
//           />
//         </div>
//         {/* Popup */}
//         {whatsappOpen && (
//           <div className="whatsapp-popup">
//             <h3>Start WhatsApp Chat</h3>
//             <input type="text" placeholder="Your Name" id="wa-name" />
//             <input type="text" placeholder="Project Type (2BHK / Kitchen / Office)" id="wa-project" />
//             <textarea placeholder="Your Message" id="wa-message"></textarea>
//             <button
//               onClick={() => {
//                 const name = document.getElementById("wa-name").value;
//                 const project = document.getElementById("wa-project").value;
//                 const message = document.getElementById("wa-message").value;
//                 const finalMessage =
//                   `Hello Deeraj Interiors,%0A%0A` +
//                   `Name: ${name}%0A` +
//                   `Project: ${project}%0A` +
//                   `Message: ${message}%0A%0A` +
//                   `I am interested in discussing my interior project.`;
//                 window.open(
//                   `https://wa.me/919000700930?text=${finalMessage}`,
//                   "_blank"
//                 );
//               }}
//             >
//               Chat on WhatsApp
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './home.css';

const testimonials = [
  {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
    rating: "Excellent",
    text: "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!",
    name: "Rajesh",
    address: "Kukatpally, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces",
    rating: "Fantastic style",
    text: "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now.",
    name: "Nagadivya Goli",
    address: "Gachibowli, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces",
    rating: "Outstanding",
    text: "Very professional team. They understood our requirements perfectly and delivered the 3BHK exactly on time with premium finishes.",
    name: "Srinivas Reddy",
    address: "Madhapur, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",
    rating: "Highly Recommended",
    text: "Best interior designers in Hyderabad! Great attention to detail, excellent communication and value for money.",
    name: "Priya Sharma",
    address: "Jubilee Hills, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop&crop=faces",
    rating: "Perfect Execution",
    text: "From 3D design to final handover — everything was flawless. Our modular kitchen is a dream now. Thank you team!",
    name: "Anjali Mehta",
    address: "Banjara Hills, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces",
    rating: "Superb Work",
    text: "We were worried about renovating our old house, but Deeraj Interiors made it look completely modern and spacious. Super happy!",
    name: "Karthik Rao",
    address: "Ameerpet, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=faces",
    rating: "Elegant & Functional",
    text: "They created a beautiful yet practical living + dining space for our family. Guests keep asking who did the interiors!",
    name: "Meghana Varma",
    address: "Manikonda, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=300&h=300&fit=crop&crop=faces",
    rating: "Top Class",
    text: "Premium materials, clean workmanship, and on-time completion. Our office cabin looks like a high-end corporate setup now.",
    name: "Vikram Singh",
    address: "Hitech City, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=faces",
    rating: "Beyond Expectations",
    text: "We just wanted minor changes but they suggested better ideas that completely transformed our 2BHK. Truly impressive!",
    name: "Lakshmi Iyer",
    address: "Uppal, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces",
    rating: "Creative & Reliable",
    text: "Loved the creative wall panels and lighting concepts. Team was very patient and completed everything within budget.",
    name: "Harsha Vardhan",
    address: "Secunderabad, Hyderabad"
  }
];

export default function Home() {
  const navigate = useNavigate();
  const [currentPair, setCurrentPair] = React.useState(0);
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  // Helper function to open WhatsApp with pre-filled message
  const openWhatsApp = (message) => {
    const phone = "919000700930";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPair((prev) => (prev + 2) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <header className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-hero-title-home">
            Interior <span className="home-highlight">Studio</span>
          </h1>
          <p className="home-hero-subtitle">
            Creating timeless spaces with soul, elegance and modern comfort
          </p>
          <div className="home-hero-buttons">
            <button
              className="home-btn home-primary"
              onClick={() => navigate("/portfolio/our-project")}
            >
              View Projects
            </button>
            <button
              className="home-btn home-outline"
              onClick={() => openWhatsApp("Hello Deeraj Interiors! I visited your website and would like to discuss my interior project.")}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="home-about-section">
        <div className="home-about-wrapper">
          <div className="home-about-image-container">
            <div
              className="home-about-image"
              style={{
                backgroundImage: `url('https://s3.ap-south-1.amazonaws.com/images.woodenstreet.de/image/data/blog-images/partition-design/wooden-living-room-partition.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          </div>
          <div className="home-about-content">
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
      <section className="home-why-choose-section">
        <div className="home-why-wrapper">
          <div className="home-why-content">
            <h2>WHY CHOOSE US</h2>
            <h1>Designed with Passion. Delivered with Precision</h1>
            <p>
              From concept to creation, our work speaks of trust, timelines, and tailored excellence. With 5+ years of word-of-mouth success, we now bring our promise to you online — better, faster, and more inspired than ever.
            </p>
            <button
              className="home-btn home-primary home-explore-btn"
              onClick={() => openWhatsApp("Hi Deeraj team! I'm interested in knowing more about your unique edge and recent work. Can we discuss?")}
            >
              EXPLORE OUR EDGE →
            </button>
          </div>
          <div className="home-why-image-slider">
            <div className="home-slides">
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438905-a9e3e6a5d6d8?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221710640-c0eaaa2adb66?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4f?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616594039964-ae1f457de8c1?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210491893-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}></div> 
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585153490-8d2a2280d648?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438930-7e6d5a8d8e0?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?auto=format&fit=crop&w=1200&q=80')` }}></div> 
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4cb0d?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438905-a9e3e6a5d6d8?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616594039964-ae1f457de8c1?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221710640-c0eaaa2adb66?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4f?auto=format&fit=crop&w=1200&q=80')` }}></div>
              <div className="home-slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438930-7e6d5a8d8e0?auto=format&fit=crop&w=1200&q=80')` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      {/* <section className="home-products-section">
        <div className="home-products-wrapper">
          <h2>OUR PRODUCTS</h2>
          <p className="home-section-subtitle">
            Premium ready-to-use interior products crafted with quality & style
          </p>
          <div className="home-products-grid">
            <div className="home-product-card">
              <div
                className="home-product-image"
                style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/81irP73vuqL.jpg')` }}
              ></div>
              <h3>Book Shelf</h3>
              <button
                className="home-btn home-primary home-small"
                onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
              >
                View in Store →
              </button>
            </div>
            <div className="home-product-card">
              <div
                className="home-product-image"
                style={{ backgroundImage: `url('https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/H600000035_2?fit=fit&wid=1200&hei=900')` }}
              ></div>
              <h3>Book Shelf</h3>
              <button
                className="home-btn home-primary home-small"
                onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
              >
                View in Store →
              </button>
            </div>
            <div className="home-product-card">
              <div
                className="home-product-image"
                style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/51Oht6zQFML._AC_UF894,1000_QL80_.jpg')` }}
              ></div>
              <h3>Modern Center Table</h3>
              <button
                className="home-btn home-primary home-small"
                onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
              >
                View in Store →
              </button>
            </div>
            <div className="home-product-card">
              <div
                className="home-product-image"
                style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71tFMmZr3dL._AC_UF894,1000_QL80_.jpg')` }}
              ></div>
              <h3>Printed Melamine Dinner Plate</h3>
              <button
                className="home-btn home-primary home-small"
                onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
              >
                View in Store →
              </button>
            </div>
            <div className="home-product-card">
              <div
                className="home-product-image"
                style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71R33gKo8hL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg')` }}
              ></div>
              <h3>Flower Vase</h3>
              <button
                className="home-btn home-primary home-small"
                onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
              >
                View in Store →
              </button>
            </div>
            <div className="home-product-card">
              <div
                className="home-product-image"
                style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/91FtfQJ-hfL._AC_UF894,1000_QL80_.jpg')` }}
              ></div>
              <h3>Classic Wall Art</h3>
              <button
                className="home-btn home-primary home-small"
                onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
              >
                View in Store →
              </button>
            </div>
            <div className="home-product-card">
              <div
                className="home-product-image"
                style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/dbfff93e-7141-4777-84dc-9b7220c66674.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}
              ></div>
              <h3>Green Aluminium Deer Sculpture</h3>
              <button
                className="home-btn home-primary home-small"
                onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
              >
                View in Store →
              </button>
            </div>
            <div className="home-product-card">
              <div
                className="home-product-image"
                style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/03870a4f-9af8-4a26-b94f-10f922dd6a01.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}
              ></div>
              <h3>Decoration Leaf</h3>
              <button
                className="home-btn home-primary home-small"
                onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
              >
                View in Store →
              </button>
            </div>
            <div className="home-product-card">
              <div
                className="home-product-image"
                style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71yIOkGTTIL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg')` }}
              ></div>
              <h3>Beautiful Wall Mirror</h3>
              <button
                className="home-btn home-primary home-small"
                onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
              >
                View in Store →
              </button>
            </div>
            <div className="home-product-card">
              <div
                className="home-product-image"
                style={{ backgroundImage: `url('https://salsify-ecdn.com/images/0de564332f8386e2f3c73905415624e8.jpg')` }}
              ></div>
              <h3>Gold Aluminium Face Sculpture</h3>
              <button
                className="home-btn home-primary home-small"
                onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
              >
                View in Store →
              </button>
            </div>
            <div className="home-product-card">
              <div
                className="home-product-image"
                style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/b3b53ac2-4451-48a4-b85e-ffff6650c5c0.__CR0,0,800,600_PT0_SX800_V1___.jpg')` }}
              ></div>
              <h3>Black Alloy Metal Floral Shape</h3>
              <button
                className="home-btn home-primary home-small"
                onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
              >
                View in Store →
              </button>
            </div>
            <div className="home-product-card">
              <div
                className="home-product-image"
                style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/7f63a722-0f87-4268-9127-9667b2109201.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}
              ></div>
              <h3>Gold Aluminium Antique Leaf</h3>
              <button
                className="home-btn home-primary home-small"
                onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
              >
                View in Store →
              </button>
            </div>
          </div>
          <div className="home-products-cta">
            <button
              className="home-btn home-primary home-explore-btn"
              onClick={() => window.open(`https://id.vyaparify.com/deeraj-interiors`, "_blank")}
            >
              View All Products →
            </button>
          </div>
        </div>
      </section> */}

      {/* Services Overview Section */}
      <section className="home-services-section">
        <div className="home-services-wrapper">
          <h2>OUR DESIGN SERVICES</h2>
          <p className="home-section-subtitle">
            Everything you need. All under one roof.
          </p>
          <div className="home-services-grid">
            <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="home-service-title">Bedroom Design</div>
              <div className="home-service-hover-content">
                <p>Create a peaceful and restful sanctuary with our expert bedroom design services. From custom bed frames to luxurious bedding, we help you create a space that's both comfortable and stylish.</p>
                <button
                  className="home-btn home-primary"
                  onClick={() => openWhatsApp("Hello! I'm interested in your Bedroom Design services. Can we discuss possibilities?")}
                >
                  Know More
                </button>
              </div>
            </div>
            <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="home-service-title">Living Room Design</div>
              <div className="home-service-hover-content">
                <p>Whether you're looking for a cozy space to relax with family or a stylish entertaining area for guests, we can create a living room that suits your lifestyle and reflects your personality.</p>
                <button
                  className="home-btn home-primary"
                  onClick={() => openWhatsApp("Hi! Looking to redesign my Living Room. Interested in your designs.")}
                >
                  Know More
                </button>
              </div>
            </div>
            <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="home-service-title">Kitchen Design</div>
              <div className="home-service-hover-content">
                <p>At Deeraj Interiors, we specialize in crafting kitchen interiors that are as beautiful as they are functional — thoughtfully designed to reflect your style and suit your everyday needs.</p>
                <button
                  className="home-btn home-primary"
                  onClick={() => openWhatsApp("Hello! Interested in your modular Kitchen design services. Can we talk?")}
                >
                  Know More
                </button>
              </div>
            </div>
            <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="home-service-title">Home Office Design</div>
              <div className="home-service-hover-content">
                <p>With more people working from home, it's important to have a functional and inspiring home office. Let us help you create a space that's both productive and stylish.</p>
                <button
                  className="home-btn home-primary"
                  onClick={() => openWhatsApp("Hi! I need help designing a Home Office. Interested in your work.")}
                >
                  Know More
                </button>
              </div>
            </div>
            <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="home-service-title">Bathroom Design</div>
              <div className="home-service-hover-content">
                <p>Transform your bathroom into a spa-like retreat with our expert design services. From luxurious showers to elegant fixtures, we create a space that's both beautiful and functional.</p>
                <button
                  className="home-btn home-primary"
                  onClick={() => openWhatsApp("Hello! Looking to redesign my Bathroom. Can we discuss your services?")}
                >
                  Know More
                </button>
              </div>
            </div>
            <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="home-service-title">Outdoor Living Design</div>
              <div className="home-service-hover-content">
                <p>Extend your living space to the outdoors with our expert outdoor living design services. From cozy fire pits to luxurious outdoor kitchens, we help you create a space that's perfect for entertaining and relaxation.</p>
                <button
                  className="home-btn home-primary"
                  onClick={() => openWhatsApp("Hi! Interested in Outdoor Living / Terrace design. Let's talk!")}
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Testimonials - Horizontal Cards with Dots */}
      <section className="home-testimonials-section" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="home-testimonials-wrapper">
          <h2 className="home-testimonials-title-home">Loved by Families Across the City.</h2>
          <div className="home-testimonials-horizontal-container">
            {(() => {
              const cards = [];
              const total = testimonials.length;
              let idx1 = currentPair % total;
              let idx2 = (currentPair + 1) % total;
              cards.push(testimonials[idx1]);
              if (total > 1) {
                cards.push(testimonials[idx2]);
              }
              return cards.map((item, index) => (
                <div key={index} className="home-testimonial-horizontal-card">
                  <div className="home-testimonial-left">
                    <div className="home-avatar-circle">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '15%'
                        }}
                      />
                    </div>
                    <div className="home-testimonial-name-below">
                      {item.name}
                    </div>
                  </div>
                  <div className="home-testimonial-right">
                    <div className="home-stars">
                      <span className="home-star">★</span>
                      <span className="home-star">★</span>
                      <span className="home-star">★</span>
                      <span className="home-star">★</span>
                      <span className="home-star">★</span>
                    </div>
                    <h3 className="home-testimonial-rating">
                      {item.rating}
                    </h3>
                    <p className="home-testimonial-text">
                      "{item.text}"
                    </p>
                    <div className="home-testimonial-address">
                      {item.address}
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>
          {/* Navigation dots */}
          <div className="home-testimonial-dots">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
              <span
                key={index}
                className={`home-dot ${index === Math.floor(currentPair / 2) ? 'home-active' : ''}`}
                onClick={() => setCurrentPair(index * 2)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer className="home-contact-section">
        <div className="home-contact-wrapper">
          <h2 className="home-connect-title">CONNECT WITH US</h2>
          <div className="home-footer-main-content">
            {/* Left column: GIF + Map underneath */}
            <div className="home-footer-gif-side">
              <div className="home-company-gif-container">
                <img
                  src="https://i.pinimg.com/originals/b7/38/e8/b738e85cad3d9aee9fa1ff15b6e4faaf.gif"
                  alt="Our Design Philosophy in Motion"
                  className="home-company-gif-image"
                />
                <p className="home-gif-caption">Our Design Philosophy in Motion</p>
              </div>
              {/* Google Map */}
              <div className="home-map-container" style={{ marginTop: '20px' }}>
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
            <div className="home-footer-info-side">
              <div className="home-company-info-block">
                <h1 className="home-company-name">DEERAJ INTERIORS</h1>
                <p className="home-company-address">
                  PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br />
                  SUCHITRA CIRCLE, PET BASHEERABAD,<br />
                  HYDERABAD, TS 500067
                </p>
                <p className="home-company-phone">+91 90007 00910 / 90007 00930</p>
              </div>
              <div className="home-newsletter-box">
                <h3>Subscribe</h3>
                <p>
                  Design your dream home with elegance and style<br />
                  Contact now and enjoy 10% savings on your first booking!
                </p>
              </div>
            </div>
          </div>
          {/* <div className="home-footer-bottom">
            <div className="home-legal-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <span className="home-separator"> • </span>
              <a href="/terms-and-conditions">Terms and Conditions</a>
            </div>
            <p className="home-copyright">
              COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED
            </p>
          </div> */}
        </div>
      </footer>

      {/* WhatsApp Floating Button + Popup */}
      <div className="home-whatsapp-container">
        {/* Floating Button */}
        <div
          className="home-whatsapp-float"
          onClick={() => setWhatsappOpen(!whatsappOpen)}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </div>
        {/* Popup */}
        {whatsappOpen && (
          <div className="home-whatsapp-popup">
            <h3>Start WhatsApp Chat</h3>
            <input type="text" placeholder="Your Name" id="wa-name" />
            <input type="text" placeholder="Project Type (2BHK / Kitchen / Office)" id="wa-project" />
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
        <span className="di-footer-branch">experience Center</span>
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
}