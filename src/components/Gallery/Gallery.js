import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const folders = [
    { id: 1, name: "Diwali 2025", count: "12 Photos", cover: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Sankranti Celebrations", count: "8 Photos", cover: "https://i.pinimg.com/736x/e2/f3/9f/e2f39ff983a394c682549c65176a400d.jpg" },
    { id: 3, name: "Office Anniversary", count: "15 Photos", cover: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Dussehra Event", count: "20 Photos", cover: "https://i.pinimg.com/originals/a5/16/d1/a516d1980343dd723fe75eaa72739176.gif" },
  ];

  return (
    <div className="gallery-page">
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-section-header gallery-text-center">
            <span className="gallery-eyebrow">Moments at Deeraj</span>
            <h2 className="gallery-heading-md">Event Gallery</h2>
            <p className="gallery-description-text">Explore our factory celebrations and site completion events.</p>
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
                <p>Images for {selectedFolder} will appear here...</p>
                {/* Map through your actual images here */}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;