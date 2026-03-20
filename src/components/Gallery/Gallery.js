import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const folders = [
    {
      id: 1,
      name: "Office Spaces",
      cover:
        "https://cdn.prod.website-files.com/66a08e07fa6352714fc1d6da/66a0af5c7b2aef75b6a961a0_HAM_3797-scaled.webp",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      ],
    },
    {
      id: 2,
      name: "Retail Spaces",
      cover:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
      images: [
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
        "https://images.unsplash.com/photo-1507919984745-5c7e1c0b7c6a",
        "https://images.unsplash.com/photo-1481437156560-3205f6a55735",
      ],
    },
    {
      id: 3,
      name: "Hospitals",
      cover:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
      images: [
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
        "https://images.unsplash.com/photo-1580281657527-47e33e10c8b5",
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
      ],
    },
    {
      id: 4,
      name: "Schools",
      cover:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
      images: [
        "https://images.unsplash.com/photo-1509062522246-3755977927d7",
        "https://images.unsplash.com/photo-1600195077909-46e573870d99",
        "https://images.unsplash.com/photo-1588072432836-e10032774350",
      ],
    },
  ];

  return (
    <div className="gallery-page">
      <h2 className="gallery-title">Our Interior Projects</h2>

      {!selectedFolder ? (
        <div className="gallery-slider">
          {folders.map((folder) => (
            <div
              key={folder.id}
              className="gallery-slide-card"
              onClick={() => setSelectedFolder(folder)}
            >
              <img src={folder.cover} alt={folder.name} />
              <div className="gallery-slide-overlay">
                <h3>{folder.name}</h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="gallery-folder-view">
          <button
            className="gallery-back-btn"
            onClick={() => setSelectedFolder(null)}
          >
            ← Back
          </button>

          <h2>{selectedFolder.name}</h2>

          <div className="gallery-images-grid">
            {selectedFolder.images.map((img, index) => (
              <img key={index} src={img} alt="project" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;