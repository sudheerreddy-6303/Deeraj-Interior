import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const folders = [
    { id: 1, name: "Diwali 2025", count: "12 Photos", cover: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Sankranti Celebrations", count: "8 Photos", cover: "https://i.pinimg.com/736x/e2/f3/9f/e2f39ff983a394c682549c65176a400d.jpg" },
    { id: 3, name: "Office Anniversary", count: "15 Photos", cover: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Dussehra Event", count: "20 Photos", cover: "https://i.pinimg.com/originals/a5/16/d1/a516d1980343dd723fe75eaa72739176.gif" },

    // New additions with related images
    { 
      id: 5, 
      name: "Modular Kitchens", 
      count: "Featured Designs", 
      cover: "https://media.designcafe.com/wp-content/uploads/2020/01/21001355/l-shape-modular-kitchen-designs-for-indian-homes.jpg" 
    },
    { 
      id: 6, 
      name: "Wardrobes", 
      count: "Custom Solutions", 
      cover: "https://dwella.in/cdn/shop/articles/36.png?v=1735575868" 
    },
    { 
      id: 7, 
      name: "TV Units", 
      count: "Modern Designs", 
      cover: "https://www.simpolo.com/_next/image?url=https%3A%2F%2Fsimpolo-web.s3.ap-south-1.amazonaws.com%2Fuploads%2Fmedia%2Fblogs%2Foxidize-smoke.jpg&w=3840&q=75&dpl=dpl_7u7cuhdRBVWzwx6YtiWu631xVKDM" 
    },
    { 
      id: 8, 
      name: "Office Spaces", 
      count: "Professional Interiors", 
      cover: "https://cdn.prod.website-files.com/66a08e07fa6352714fc1d6da/66a0af5c7b2aef75b6a961a0_HAM_3797-scaled.webp" 
    },
  ];

  return (
    <div className="gallery-page">
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-section-header gallery-text-center">
            <span className="gallery-eyebrow">Moments at Deeraj</span>
            <h2 className="gallery-heading-md">Our Work Gallery</h2>
            <p className="gallery-description-text">Explore our event celebrations and premium interior projects including kitchens, wardrobes, TV units, and office spaces.</p>
          </div>

          {!selectedFolder ? (
            <div className="gallery-folder-grid">
              {folders.map((folder) => (
                <div 
                  key={folder.id} 
                  className="gallery-folder-card"
                  onClick={() => setSelectedFolder(folder.name)}
                >
                  <div className="gallery-folder-cover">
                    <img src={folder.cover} alt={folder.name} />
                    <div className="gallery-folder-overlay">
                      <span>View Gallery ↗</span>
                    </div>
                  </div>
                  <div className="gallery-folder-info">
                    <h3>{folder.name}</h3>
                    <p>{folder.count}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="gallery-album-view">
              <button className="gallery-btn-outline gallery-mb-4" onClick={() => setSelectedFolder(null)}>
                ← Back to Folders
              </button>
              <h3 className="gallery-album-title">{selectedFolder}</h3>
              <div className="gallery-photo-placeholder-grid">
                <p>Images for {selectedFolder} will appear here... (Add your project photos in this grid)</p>
                {/* Example: Map through actual images array for the selected folder */}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;