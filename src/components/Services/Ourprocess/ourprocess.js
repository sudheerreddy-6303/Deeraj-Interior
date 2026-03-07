// import React, { useState, useEffect } from 'react';
// import './ourprocess.css';

// const OurTeam = () => {
//   // Your existing backgroundImages array remains unchanged
//   const backgroundImages = [
//     'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80&w=2400',
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [whatsappOpen, setWhatsappOpen] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => 
//         prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [backgroundImages.length]);

//   // New: Gallery images (high-quality examples of finished interiors)
//   const galleryImages = [
//   'https://cdn.mos.cms.futurecdn.net/es8trvdq6bW36hErkvPjUR.jpg',          // Elegant classic-modern living room
//   'https://media.architecturaldigest.com/photos/654bbb3c9ed5f5ade0d4b584/master/w_1024,c_limit/1_Jeff%2520Andrews%2520Design_PhotoCredit_Stephen%2520Busken.jpg', // Modern artistic living room
//   'https://media.architecturaldigest.com/photos/67bcc8747dfc89b75d51a6ab/16:9/w_2048,h_1152,c_limit/Kishani%20Perera_Point%20Dume%20Project_Photographer%20Anthony%20Barcelo.jpg', // Serene modern bedroom
//   'https://hips.hearstapps.com/hmg-prod/images/melanie-pounds-neutral-bedroom-veranda-best-minimalist-bedrooms-2022-1646414533.jpeg', // Luxe neutral bedroom
//   'https://planner5d.com/blog/content/images/2022/11/luxury-kitchen-ideas.jpg', // Bright luxury kitchen
//   'https://sola-images.s3.us-west-2.amazonaws.com/wp-content/uploads/2024/10/01125250/Trendspotting_FEATURED.jpg', // Dark modern luxury kitchen
//   'https://cdn.decorilla.com/online-decorating/wp-content/uploads/2024/08/Home-office-trends-2025-by-Decorilla-1024x683.jpg?width=900', // Classic elegant home office
//   'https://thumbs.dreamstime.com/b/elegant-bathroom-showcases-natural-materials-spa-like-atmosphere-beautiful-forest-view-luxurious-featuring-freestanding-378319762.jpg' // Spa-like luxury bathroom
// ];

//   return (
//     <div className="our-team-container">

//       {/* Hero Section - unchanged */}
//       <section className="hero-section">
//         <div className="hero-background-container">
//           {backgroundImages.map((image, index) => (
//             <div 
//               key={index}
//               className={`hero-background-image ${index === currentImageIndex ? 'active' : ''}`}
//               style={{ backgroundImage: `url(${image})` }}
//             />
//           ))}
//         </div>
        
//         <div className="hero-image-overlay">
//           <div className="hero-content">
//             <h2>Transform your home or office with Deeraj Interiors</h2>
//             <p>Schedule a meeting to discuss your needs and vision</p>
//           </div>
          
//           <div className="image-indicators-container">
//             <div className="image-indicators">
//               {backgroundImages.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
//                   onClick={() => setCurrentImageIndex(index)}
//                   aria-label={`Go to image ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
          
//           <div className="image-counter">
//             {currentImageIndex + 1} / {backgroundImages.length}
//           </div>
//         </div>
//       </section>

//       {/* New: Gallery Section – added right before OUR PROCESS */}
//       <section className="gallery-section">
//         <div className="gallery-wrapper">
//           <h2 className="gallery-title">Inspiration from Our Recent Projects</h2>
//           <p className="gallery-subtitle">See the kind of transformations we create for our clients</p>
          
//           <div className="gallery-grid">
//             {galleryImages.map((img, index) => (
//               <div key={index} className="gallery-item">
//                 <img 
//                   src={img} 
//                   alt={`Interior design example ${index + 1}`} 
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section – unchanged, but now comes after gallery */}
//       <section className="process-section">
//         <div className="process-wrapper">
//           {/* Left side – Icons + Arrows */}
//    <div className="process-visual">
//   <h2 className="process-title">OUR PROCESS</h2>
//   <div className="steps-container">
    
//     <div className="step-item">
//       {/* Wrapped emoji in a span */}
//       <div className="step-icon consultation"><span>💬</span></div>
//       <p className="step-label">CONSULTATION</p>
//       <p className="step-desc">Schedule a meeting to discuss your needs and vision</p>
//     </div>

//     <div className="arrow">→</div>

//     <div className="step-item">
//       <div className="step-icon design"><span>✏️</span></div>
//       <p className="step-label">DESIGN</p>
//       <p className="step-desc">Receive a tailored design plan and proposal</p>
//     </div>

//     <div className="arrow">→</div>

//     <div className="step-item">
//       <div className="step-icon execution"><span>🔨</span></div>
//       <p className="step-label">EXECUTION</p>
//       <p className="step-desc">Watch as our team brings the design to life</p>
//     </div>

//     <div className="arrow curved">↪</div>

//     <div className="step-item">
//       <div className="step-icon reveal"><span>🏠</span></div>
//       <p className="step-label">REVEAL</p>
//       <p className="step-desc">Enjoy your newly transformed and personalized space</p>
//     </div>

//   </div>
// </div>

//           {/* Right side – Text description */}
//           <div className="process-description">
//             <h3>Where Vision Meets Execution</h3>
//             <p>
//               At Deeraj Interiors, every project begins with understanding you. 
//               We've simplified our process into four clear steps that ensure your 
//               interior journey is seamless, personalized, and truly inspired.
//             </p>
//             <button className="find-out-more-btn">FIND OUT MORE</button>
//           </div>
//         </div>


//                 {/* Added Questions section – placed at the very end */}
//         <div className="questions-section">
//           <h3>Frequently Asked Questions</h3>
//           <div className="questions-list">
//             <div className="question-item">
//               <h4>1. Greeting and Introduction</h4>
//               <p>Thank you for considering Deeraj Interiors. We are excited to learn about your space and help bring your vision to life. Let’s start with a quick overview of what you're looking for.We offer a range of interior design services including residential design, commercial design, and e-design.</p>
//             </div>

//             <div className="question-item">
//               <h4>2. Understanding Your Requirements
// </h4>
//               <p>Can you tell us more about the space? Is it a 2BHK, 3BHK, villa, or commercial area?



// What’s your main goal for the interior—comfort, luxury, functionality, or a specific theme?



// Do you have any preferences in colors, materials, or design styles (modern, traditional, minimal, etc.)?



// How do you plan to use the space daily? This helps us plan storage and layout effectively.</p>
//             </div>

//             <div className="question-item">
//               <h4>3. Design Ideas and Suggestions</h4>
//               <p>Based on your input, we can propose some layout options, laminate selections, lighting styles, and modular fittings.



// We usually work with materials like marine plywood, high-gloss laminates, acrylic, and PU finishes for a durable and stylish outcome.



// Here are a few reference photos or 3D designs we've done before that might match your style.</p>
//             </div>

//             <div className="question-item">
//               <h4>
// 4. Budget Discussion


// </h4>
//               <p>Do you have a tentative budget in mind for this project?



// We can suggest packages based on that, and we’ll always ensure transparency with material quality and pricing.



// Our pricing varies depending on finishes and customisation, but we can always work out the best within your budget.</p>
//             </div>

//             <div className="question-item">
//               <h4>5. Questions and Feedback</h4>
//               <p>Do you have any specific concerns or ideas you'd like us to explore further?



// We’re here to make sure every corner of your home reflects your personality and fits your lifestyle.

// </p>
//             </div>




     

//             <div className="question-item">
//               <h4>6. Closing and Next Steps</h4>
//               <p>Thank you for sharing your ideas. We’ll now create a proposal/3D design and share it within [X] days.



// Please feel free to call or WhatsApp us if you think of anything else you'd like to include.</p>
//             </div>
//                 <div className="question-item">
//             <h4>7. Timeline and Execution</h4>
//  <p>Once the design is finalized, our work generally takes 30-45 days for completion, depending on the site condition and scale.



// We follow a clear process: Design , Approval ,Material Selection , Manufacturing ,Site Installation , Final Handover.

// </p>
//             </div>
//           </div>
        
//  <div className="cta-wrapper">
//             <button className="contact-btn">Schedule Your Free Consultation Today</button>
//           </div>
//         </div>
//       </section>
//        <footer className="company-page-footer">
//         <div className="company-footer-content">
//           <p className="company-footer-brand">DEERAJ INTERIORS</p>
//           <p className="company-footer-address">
//             PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR, <br />
//             SUCHITRA CIRCLE, PET BASHEERABAD, HYDERABAD, TS 500067
//           </p>
//           <p className="company-footer-contact">+91 9000700930</p>
//         </div>
//       </footer>
//       {/* ================= WHATSAPP FLOAT ================= */}
// <div className="whatsapp-container">

//   <div
//     className="whatsapp-float"
//     onClick={() => setWhatsappOpen(!whatsappOpen)}
//   >
//     <img
//       src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//       alt="WhatsApp"
//     />
//   </div>

//   {whatsappOpen && (
//     <div className="whatsapp-popup">
//       <h3>Start WhatsApp Chat</h3>

//       <input type="text" placeholder="Your Name" id="wa-name" />
//       <input type="text" placeholder="Project Type (Home / Office / Consultation)" id="wa-project" />
//       <textarea placeholder="Your Message" id="wa-message"></textarea>

//       <button
//         onClick={() => {
//           const name = document.getElementById("wa-name").value;
//           const project = document.getElementById("wa-project").value;
//           const message = document.getElementById("wa-message").value;

//           const finalMessage =
//             `Hello Deeraj Interiors,%0A%0A` +
//             `Name: ${name}%0A` +
//             `Project: ${project}%0A` +
//             `Message: ${message}%0A%0A` +
//             `I am interested in discussing my interior project.`;

//           window.open(
//             `https://wa.me/919000700930?text=${finalMessage}`,
//             "_blank"
//           );
//         }}
//       >
//         Chat on WhatsApp
//       </button>
//     </div>
//   )}
// </div>

//     </div>
//   );
// };

// export default OurTeam;


// import React, { useState, useEffect } from 'react';
// import './ourprocess.css';

// const OurTeam = () => {
//   const backgroundImages = [
//     'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2400',
//     'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80&w=2400',
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [whatsappOpen, setWhatsappOpen] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => 
//         prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2500);

//     return () => clearInterval(interval);
//   }, [backgroundImages.length]);

//   const galleryImages = [
//     'https://cdn.mos.cms.futurecdn.net/es8trvdq6bW36hErkvPjUR.jpg',
//     'https://media.architecturaldigest.com/photos/654bbb3c9ed5f5ade0d4b584/master/w_1024,c_limit/1_Jeff%2520Andrews%2520Design_PhotoCredit_Stephen%2520Busken.jpg',
//     'https://media.architecturaldigest.com/photos/67bcc8747dfc89b75d51a6ab/16:9/w_2048,h_1152,c_limit/Kishani%20Perera_Point%20Dume%20Project_Photographer%20Anthony%20Barcelo.jpg',
//     'https://hips.hearstapps.com/hmg-prod/images/melanie-pounds-neutral-bedroom-veranda-best-minimalist-bedrooms-2022-1646414533.jpeg',
//     'https://planner5d.com/blog/content/images/2022/11/luxury-kitchen-ideas.jpg',
//     'https://sola-images.s3.us-west-2.amazonaws.com/wp-content/uploads/2024/10/01125250/Trendspotting_FEATURED.jpg',
//     'https://cdn.decorilla.com/online-decorating/wp-content/uploads/2024/08/Home-office-trends-2025-by-Decorilla-1024x683.jpg?width=900',
//     'https://thumbs.dreamstime.com/b/elegant-bathroom-showcases-natural-materials-spa-like-atmosphere-beautiful-forest-view-luxurious-featuring-freestanding-378319762.jpg'
//   ];

//   return (
//     <div className="ourprocess-container">
//       {/* Hero Section */}
//       <section className="ourprocess-hero-section">
//         <div className="ourprocess-hero-bg-wrap">
//           {backgroundImages.map((image, index) => (
//             <div 
//               key={index}
//               className={`ourprocess-hero-bg-img ${index === currentImageIndex ? 'ourprocess-active' : ''}`}
//               style={{ backgroundImage: `url(${image})` }}
//             />
//           ))}
//         </div>
        
//         <div className="ourprocess-hero-overlay">
//           <div className="ourprocess-hero-content">
//             <h2>Transform your home or office with Deeraj Interiors</h2>
//             <p>Schedule a meeting to discuss your needs and vision</p>
//           </div>
//           <div className="ourprocess-indicators-wrap">
//             <div className="ourprocess-indicators">
//               {backgroundImages.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`ourprocess-indicator-dot ${index === currentImageIndex ? 'ourprocess-active' : ''}`}
//                   onClick={() => setCurrentImageIndex(index)}
//                   aria-label={`Go to image ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="ourprocess-img-counter">
//             {currentImageIndex + 1} / {backgroundImages.length}
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       {/* <section className="ourprocess-gallery-section">
//         <div className="ourprocess-gallery-wrap">
//           <h2 className="ourprocess-gallery-title">Inspiration from Our Recent Projects</h2>
//           <p className="ourprocess-gallery-subtitle">See the kind of transformations we create for our clients</p>
//           <div className="ourprocess-gallery-grid">
//             {galleryImages.map((img, index) => (
//               <div key={index} className="ourprocess-gallery-item">
//                 <img src={img} alt={`Interior design example ${index + 1}`} loading="lazy" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Process Section */}
//       <section className="ourprocess-steps-section">
//         <div className="ourprocess-process-wrap">
//           {/* Left side – Icons + Arrows */}
//           <div className="ourprocess-process-visual">
//             <h2 className="ourprocess-process-title">OUR PROCESS</h2>
            
//             <div className="ourprocess-steps-container">
//               {/* TOP ROW */}
//               <div className="ourprocess-steps-row">
//                 <div className="ourprocess-step-item">
//                   <div className="ourprocess-step-icon ourprocess-icon-consultation"><span>💬</span></div>
//                   <p className="ourprocess-step-label">CONSULTATION</p>
//                   <p className="ourprocess-step-desc">Schedule a meeting to discuss your needs and vision</p>
//                 </div>
                
//                 <div className="ourprocess-step-arrow">→</div>
                
//                 <div className="ourprocess-step-item">
//                   <div className="ourprocess-step-icon ourprocess-icon-design"><span>✏️</span></div>
//                   <p className="ourprocess-step-label">DESIGN</p>
//                   <p className="ourprocess-step-desc">Receive a tailored design plan and proposal</p>
//                 </div>

//                 <div className="ourprocess-step-arrow ourprocess-outside-arrow">→</div>
//               </div>

//               {/* MIDDLE ROW (Curved Arrow) */}
//               <div className="ourprocess-steps-row ourprocess-return-arrow-row">
//                 <div className="ourprocess-step-arrow ourprocess-curved-arrow">⤵</div>
//               </div>

//               {/* BOTTOM ROW */}
//               <div className="ourprocess-steps-row">
//                 <div className="ourprocess-step-item">
//                   <div className="ourprocess-step-icon ourprocess-icon-execution"><span>🔨</span></div>
//                   <p className="ourprocess-step-label">EXECUTION</p>
//                   <p className="ourprocess-step-desc">Watch as our team brings the design to life</p>
//                 </div>
                
//                 <div className="ourprocess-step-arrow ourprocess-invisible">→</div>
                
//                 <div className="ourprocess-step-item">
//                   <div className="ourprocess-step-icon ourprocess-icon-reveal"><span>🏠</span></div>
//                   <p className="ourprocess-step-label">REVEAL</p>
//                   <p className="ourprocess-step-desc">Enjoy your newly transformed and personalized space</p>
//                 </div>
                
//                 <div className="ourprocess-step-arrow ourprocess-invisible">→</div>
//               </div>
//             </div>
//           </div>

//           {/* Right side – Text description */}
//           <div className="ourprocess-desc-block">
//             <h3>Where Vision Meets Execution</h3>
//             <p>
//               At Deeraj Interiors, every project begins with understanding you. 
//               We've simplified our process into four clear steps that ensure your 
//               interior journey is seamless, personalized, and truly inspired.
//             </p>
//             <button className="ourprocess-find-more-btn">FIND OUT MORE</button>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="ourprocess-faq-section">
//           <h3>Frequently Asked Questions</h3>
//           <div className="ourprocess-faq-list">
//             <div className="ourprocess-faq-item">
//               <h4>1. Greeting and Introduction</h4>
//               <p>Thank you for considering Deeraj Interiors. We are excited to learn about your space and help bring your vision to life. Let’s start with a quick overview of what you're looking for.We offer a range of interior design services including residential design, commercial design, and e-design.</p>
//             </div>
//             <div className="ourprocess-faq-item">
//               <h4>2. Understanding Your Requirements</h4>
//               <p>Can you tell us more about the space? Is it a 2BHK, 3BHK, villa, or commercial area? What’s your main goal for the interior—comfort, luxury, functionality, or a specific theme? Do you have any preferences in colors, materials, or design styles (modern, traditional, minimal, etc.)? How do you plan to use the space daily? This helps us plan storage and layout effectively.</p>
//             </div>
//             <div className="ourprocess-faq-item">
//               <h4>3. Design Ideas and Suggestions</h4>
//               <p>Based on your input, we can propose some layout options, laminate selections, lighting styles, and modular fittings. We usually work with materials like marine plywood, high-gloss laminates, acrylic, and PU finishes for a durable and stylish outcome. Here are a few reference photos or 3D designs we've done before that might match your style.</p>
//             </div>
//             <div className="ourprocess-faq-item">
//               <h4>4. Budget Discussion</h4>
//               <p>Do you have a tentative budget in mind for this project? We can suggest packages based on that, and we’ll always ensure transparency with material quality and pricing. Our pricing varies depending on finishes and customisation, but we can always work out the best within your budget.</p>
//             </div>
//             <div className="ourprocess-faq-item">
//               <h4>5. Questions and Feedback</h4>
//               <p>Do you have any specific concerns or ideas you'd like us to explore further? We’re here to make sure every corner of your home reflects your personality and fits your lifestyle.</p>
//             </div>
//             <div className="ourprocess-faq-item">
//               <h4>6. Closing and Next Steps</h4>
//               <p>Thank you for sharing your ideas. We’ll now create a proposal/3D design and share it within [X] days. Please feel free to call or WhatsApp us if you think of anything else you'd like to include.</p>
//             </div>
//             <div className="ourprocess-faq-item">
//               <h4>7. Timeline and Execution</h4>
//               <p>Once the design is finalized, our work generally takes 30-45 days for completion, depending on the site condition and scale. We follow a clear process: Design , Approval ,Material Selection , Manufacturing ,Site Installation , Final Handover.</p>
//             </div>
//           </div>
//           <div className="ourprocess-cta-wrap">
//             <button className="ourprocess-contact-btn">Schedule Your Free Consultation Today</button>
//           </div>
//         </div>
//       </section>

//      <footer className="di-footer">
//   <div className="di-footer-container">
//     <p className="di-footer-links">Privacy Policy | Terms and Conditions</p>
//     <p className="di-footer-title"><strong>DEERAJ INTERIORS</strong></p>

//     {/* Split Address Section */}
//     <div className="di-footer-addresses">
      
//       <div className="di-footer-address-card">
//         <span className="di-footer-branch">experience center</span>
//         <p>
//           PLOT 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br/>
//           SUCHITRA CIRCLE, PET BASHEERABAD,<br/>
//           HYDERABAD, TS 500067
//         </p>
//       </div>

//       <div className="di-footer-address-card">
//         <span className="di-footer-branch">Modular Factory</span>
//         <p>
//           PLOT 205, BESIDE HYPOTHETICAL PLAZA,<br/>
//           JUBILEE HILLS CHECKPOST,<br/>
//           HYDERABAD, TS 500033
//         </p>
//       </div>

//     </div>

//     <p className="di-footer-phone">+91 9000700910 / 9000700930</p>

//     <p className="di-footer-copy">
//       COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED.
//     </p>
//   </div>
// </footer>

//       {/* WhatsApp Float */}
//       <div className="ourprocess-wa-container">
//         <div className="ourprocess-wa-float" onClick={() => setWhatsappOpen(!whatsappOpen)}>
//           <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
//         </div>
//         {whatsappOpen && (
//           <div className="ourprocess-wa-popup">
//             <h3>Start WhatsApp Chat</h3>
//             <input type="text" placeholder="Your Name" id="ourprocess-wa-name" />
//             <input type="text" placeholder="Project Type (Home / Office / Consultation)" id="ourprocess-wa-project" />
//             <textarea placeholder="Your Message" id="ourprocess-wa-message"></textarea>
//             <button
//               onClick={() => {
//                 const name = document.getElementById("ourprocess-wa-name").value;
//                 const project = document.getElementById("ourprocess-wa-project").value;
//                 const message = document.getElementById("ourprocess-wa-message").value;
//                 const finalMessage = `Hello Deeraj Interiors,%0A%0AName: ${name}%0AProject: ${project}%0AMessage: ${message}%0A%0AI am interested in discussing my interior project.`;
//                 window.open(`https://wa.me/919000700930?text=${finalMessage}`, "_blank");
//               }}
//             >
//               Chat on WhatsApp
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OurTeam;




import React, { useState, useEffect } from 'react';
import './ourprocess.css';

const OurTeam = () => {
  const backgroundImages = [
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2400',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2400',
    'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=2400',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=2400',
    'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&q=80&w=2400',
    'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&q=80&w=2400',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2400',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=2400',
    'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=2400',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=2400',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2400',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2400',
    'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80&w=2400',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const galleryImages = [
    'https://cdn.mos.cms.futurecdn.net/es8trvdq6bW36hErkvPjUR.jpg',
    'https://media.architecturaldigest.com/photos/654bbb3c9ed5f5ade0d4b584/master/w_1024,c_limit/1_Jeff%2520Andrews%2520Design_PhotoCredit_Stephen%2520Busken.jpg',
    'https://media.architecturaldigest.com/photos/67bcc8747dfc89b75d51a6ab/16:9/w_2048,h_1152,c_limit/Kishani%20Perera_Point%20Dume%20Project_Photographer%20Anthony%20Barcelo.jpg',
    'https://hips.hearstapps.com/hmg-prod/images/melanie-pounds-neutral-bedroom-veranda-best-minimalist-bedrooms-2022-1646414533.jpeg',
    'https://planner5d.com/blog/content/images/2022/11/luxury-kitchen-ideas.jpg',
    'https://sola-images.s3.us-west-2.amazonaws.com/wp-content/uploads/2024/10/01125250/Trendspotting_FEATURED.jpg',
    'https://cdn.decorilla.com/online-decorating/wp-content/uploads/2024/08/Home-office-trends-2025-by-Decorilla-1024x683.jpg?width=900',
  ];

  return (
    <div className="our-team-container">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background-container">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`hero-background-image ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>

        <div className="hero-image-overlay">
          <div className="hero-content">
            <h2>Transform your home or office with Deeraj Interiors</h2>
            <p>Schedule a meeting to discuss your needs and vision</p>
          </div>

          <div className="image-indicators-container">
            <div className="image-indicators">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="image-counter">
            {currentImageIndex + 1} / {backgroundImages.length}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="gallery-section">
        <div className="gallery-wrapper">
          <h2 className="gallery-title">Inspiration from Our Recent Projects</h2>
          <p className="gallery-subtitle">See the kind of transformations we create for our clients</p>

          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={img}
                  alt={`Interior design example ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section – Horizontal Zigzag / Snake style */}
      <section className="process-section">
        <div className="process-wrapper">

          <div className="process-visual">
            <h2 className="process-title">OUR PROCESS</h2>

            <div className="steps-timeline horizontal-zigzag">

              <div className="timeline-step step-1">
                <div className="step-circle consultation">
                  <span>💬</span>
                </div>
                <p className="step-label">CONSULTATION</p>
                <p className="step-desc">Schedule a meeting to discuss your needs and vision</p>
              </div>

              <div className="timeline-step step-2">
                <div className="step-circle design">
                  <span>✏️</span>
                </div>
                <p className="step-label">DESIGN</p>
                <p className="step-desc">Receive a tailored design plan and proposal</p>
              </div>

              <div className="timeline-step step-3">
                <div className="step-circle execution">
                  <span>🔨</span>
                </div>
                <p className="step-label">EXECUTION</p>
                <p className="step-desc">Watch as our team brings the design to life</p>
              </div>

              <div className="timeline-step step-4">
                <div className="step-circle reveal">
                  <span>🏠</span>
                </div>
                <p className="step-label">REVEAL</p>
                <p className="step-desc">Enjoy your newly transformed and personalized space</p>
              </div>

            </div>
          </div>

          {/* Right side description */}
          <div className="process-description">
            {/* <h3>Where Vision Meets Execution</h3>
            <p>
              At Deeraj Interiors, every project begins with understanding you.
              We've simplified our process into four clear steps that ensure your
              interior journey is seamless, personalized, and truly inspired.
            </p>
            <button className="find-out-more-btn">FIND OUT MORE</button> */}
          </div>

        </div>

        {/* Questions section */}
        <div className="questions-section">
          <h3>Frequently Asked Questions</h3>
          <div className="questions-list">
            <div className="question-item">
              <h4>1. Greeting and Introduction</h4>
              <p>Thank you for considering Deeraj Interiors. We are excited to learn about your space and help bring your vision to life. Let’s start with a quick overview of what you're looking for.We offer a range of interior design services including residential design, commercial design, and e-design.</p>
            </div>

            <div className="question-item">
              <h4>2. Understanding Your Requirements</h4>
              <p>Can you tell us more about the space? Is it a 2BHK, 3BHK, villa, or commercial area? What’s your main goal for the interior—comfort, luxury, functionality, or a specific theme? Do you have any preferences in colors, materials, or design styles (modern, traditional, minimal, etc.)? How do you plan to use the space daily? This helps us plan storage and layout effectively.</p>
            </div>

            <div className="question-item">
              <h4>3. Design Ideas and Suggestions</h4>
              <p>Based on your input, we can propose some layout options, laminate selections, lighting styles, and modular fittings. We usually work with materials like marine plywood, high-gloss laminates, acrylic, and PU finishes for a durable and stylish outcome. Here are a few reference photos or 3D designs we've done before that might match your style.</p>
            </div>

            <div className="question-item">
              <h4>4. Budget Discussion</h4>
              <p>Do you have a tentative budget in mind for this project? We can suggest packages based on that, and we’ll always ensure transparency with material quality and pricing. Our pricing varies depending on finishes and customisation, but we can always work out the best within your budget.</p>
            </div>

            <div className="question-item">
              <h4>5. Questions and Feedback</h4>
              <p>Do you have any specific concerns or ideas you'd like us to explore further? We’re here to make sure every corner of your home reflects your personality and fits your lifestyle.</p>
            </div>

            <div className="question-item">
              <h4>6. Closing and Next Steps</h4>
              <p>Thank you for sharing your ideas. We’ll now create a proposal/3D design and share it within [X] days. Please feel free to call or WhatsApp us if you think of anything else you'd like to include.</p>
            </div>

            <div className="question-item">
              <h4>7. Timeline and Execution</h4>
              <p>Once the design is finalized, our work generally takes 30-45 days for completion, depending on the site condition and scale. We follow a clear process: Design , Approval ,Material Selection , Manufacturing ,Site Installation , Final Handover.</p>
            </div>
          </div>

          <div className="cta-wrapper">
            <button className="contact-btn">Schedule Your Free Consultation Today</button>
          </div>
        </div>
      </section>

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

      {/* WhatsApp Float */}
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

    </div>
  );
};

export default OurTeam;