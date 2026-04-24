// import React, { useState } from "react";
// import "./Gallery.css";

// const Gallery = () => {
//   const [selectedFolder, setSelectedFolder] = useState(null);

//   // --- NEW: Client Projects Data (Added 'avatar' property) ---
//   const clientProjects = [
//     {
//       id: "c1",
//       name: "Sudheer Reddy",
//       avatar: "https://randomuser.me/api/portraits/men/32.jpg", // Client profile photo
//       cover: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
//       images: [
//         "https://images.homify.com/v1575251056/p/photo/image/3278753/Bedroom.jpg",
//         "https://images.woodenstreet.de/image/data%2FLooks%2F1.jpg",
//         "https://www.centuryply.com/assets/img/blog/30-11-22/imag1.jpg",
//         "https://media.istockphoto.com/id/1285572400/photo/vintage-terrace-with-nature-view-3d-render.jpg?s=612x612&w=0&k=20&c=iiLIkK1uuYJUJde6UJeT0hI-kBnkZVSpIZGu7cm05S4="
//       ],
//     },
//     {
//       id: "c2",
//       name: "Priya Sharma",
//       avatar: "https://randomuser.me/api/portraits/women/44.jpg", // Client profile photo
//       cover: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
//       images: [
//         "https://www.decorpot.com/images/1972745586modern-and-luxurious-living-room-interior-%20design-ideas_main.jpg",
//         "https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?cs=srgb&dl=pexels-houzlook-3926542.jpg&fm=jpg",
//         "https://w0.peakpx.com/wallpaper/535/281/HD-wallpaper-bathroom-modern-bathroom-interior-bright-bathroom-modern-bathroom.jpg"
//       ],
//     },
//     {
//       id: "c3",
//       name: "Amit Patel",
//       avatar: "https://randomuser.me/api/portraits/men/46.jpg", // Client profile photo
//       cover: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
//       images: [
//         "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg",
//         "https://w0.peakpx.com/wallpaper/1009/686/HD-wallpaper-bathrooms-eclectic-interior-modern-interior-green-bathroom-ideas-for-the-bathroom-eclectic-bathrooms-style.jpg",
//         "https://i.pinimg.com/736x/cd/8e/26/cd8e2620aee782e8865d8ea73a441955.jpg"
//       ],
//     }
//   ];

//   // --- EXISTING: Interior Types Data ---
//   const folders = [
//     {
//       id: 1,
//       name: "Bedrooms",
//       cover: "https://www.craftedbeds.co.uk/cdn/shop/articles/c6229643564835.57f4204983b16.jpg?v=1654414798",
//       images: [
//         "https://w0.peakpx.com/wallpaper/923/149/HD-wallpaper-modern-bedroom-design-stylish-interior-gray-bedroom-large-bed-gray-stylish-curtains-modern-interiors.jpg",
//         "https://images.homify.com/v1575251056/p/photo/image/3278753/Bedroom.jpg",
//         "https://www.customfurnish.com/blogs/wp-content/uploads/2025/05/Bedroom_-3.webp",
//         "https://i.pinimg.com/736x/73/01/88/730188a4d66c214b1fd3de77b7cad96b.jpg",
//         "https://images.homify.com/v1569995885/p/photo/image/3216186/10000.jpg",
//         "https://www.shutterstock.com/shutterstock/videos/1102500237/thumb/1.jpg?ip=x480",
//         "https://ansainteriors.com/wp-content/uploads/2020/08/ultra-chic-bedroom-interior-design.jpg",
//         "https://i.pinimg.com/736x/50/be/91/50be911cc33bec7246321d9cd0303c6a.jpg",
//         "https://www.nobroker.in/blog/wp-content/uploads/2023/04/luxury-bedroom-interior-design.webp",
//         "https://i.ytimg.com/vi/LTMV9SbBDbI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCimtLeQdzuT_4v24DIESuJ8Yzgcg",
//         "https://w0.peakpx.com/wallpaper/546/472/HD-wallpaper-bedroom-project-modern-interior-design-stylish-interior-design-bedroom-golden-3d-elements-on-the-wall-black-wall-in-the-bedroom.jpg",
//         "https://www.carpentry.sg/wp-content/uploads/2022/11/luxury-marble-interior-bedroom-with-galvanised-metal-support-1024x731.jpg",
//       ],
//     },
//     {
//       id: 2,
//       name: "Living Rooms",
//       cover: "https://i.pinimg.com/originals/82/2f/d3/822fd3a227370187957ecef8ee6f2f0e.jpg",
//       images: [
//         "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop&q=80",
//         "https://www.decorpot.com/images/1972745586modern-and-luxurious-living-room-interior-%20design-ideas_main.jpg",
//         "https://img.freepik.com/premium-photo/3d-rendering-luxury-modern-living-room-with-leather-sofa_105762-833.jpg",
//         "https://images.woodenstreet.de/image/data%2FLooks%2F1.jpg",
//         "https://www.asenseinterior.com/assets/uploads/5b82ebc80c339a72260f95f44effd051.webp",
//         "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?cs=srgb&dl=pexels-pixabay-276724.jpg&fm=jpg",
//         "https://img.freepik.com/premium-photo/interior-design-3d-illustration-living-room_252025-140950.jpg",
//         "https://img.freepik.com/premium-photo/illustration-living-room-interior_252025-157798.jpg",
//         "https://www.asenseinterior.com/assets/uploads/627d37c1e040220ba214d240f21fd0f0.webp",
//         "https://cdn.home-designing.com/wp-content/uploads/2018/11/luxury-living-room-interiors.jpg",
//         "https://media.designcafe.com/wp-content/uploads/2020/02/21010329/modern-living-room-design-ideas.jpg",
//         "https://i.pinimg.com/736x/31/6f/c0/316fc08a70b70bec8be281f65624eb65.jpg"
//       ],
//     },
//     {
//       id: 3,
//       name: "Kitchens",
//       cover: "https://cdn.dribbble.com/userupload/25083802/file/original-8d7570347e4086d6629a505a1ceb6f0b.gif",
//       images: [
//         "https://www.centuryply.com/assets/img/blog/30-11-22/imag1.jpg",
//         "https://www.d2rinteriors.com/images/modular1.jpg",
//         "https://i.ytimg.com/vi/naFL9ddp9Ps/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD33NshS4iMZJngiOdk1972q-OFmw",
//         "https://i.pinimg.com/736x/e2/1f/03/e21f037d0093db6c395274b0856a4c17.jpg",
//         "https://thearchitectsdiary.com/wp-content/uploads/2024/09/01-Design-Manish-Manglaw.png",
//         "https://i.ytimg.com/vi/Kqaly89f1dk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAOmGRCsBS1_qaN9Q5CDkqIGkQ1Uw",
//         "https://www.decorpot.com/images/mobile-kitchen.jpg",
//         "https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?cs=srgb&dl=pexels-houzlook-3926542.jpg&fm=jpg",
//         "https://www.wedezinestudio.com/blogs/wp-content/uploads/2025/05/kitchendesign11.webp",
//         "https://i.pinimg.com/736x/e4/00/64/e4006494575fa671deeed9941dcb2831.jpg",
//         "https://www.asenseinterior.com/assets/mediafile/luxury_modern_kitchen_designs.webp",
//         "https://www.premierkitchens.net.au/wp-content/uploads/Modern-luxury-kitchen-renovation-sydney-black-cabinetry-calacatta-stone-ilve-oven-fisher-paykel-vintec-bosch-02-846x564.jpg"
//       ],
//     },
//     {
//       id: 4,
//       name: "Home Offices",
//       cover: "https://viveedinteriors.com/wp-content/uploads/2021/10/1_new_condo.gif",
//       images: [
//         "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e9739945710967.583ab84d265f2.jpg",
//         "https://studiocamouflage.in/wp-content/uploads/2023/07/SCF_44.webp",
//         "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg",
//         "https://www.wedezinestudio.com/blogs/wp-content/uploads/2025/05/office99.webp",
//         "https://www.vlitefurnitech.com/wp-content/uploads/2024/06/Office-interior-design-1.webp",
//         "https://www.customfurnish.com/blogs/wp-content/uploads/2025/09/900-variation-brown_and_white-1-min.png",
//         "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/05/23163145/modern-office-interior-design-with-partition-plants.jpg",
//         "https://media.istockphoto.com/id/1479587535/photo/eco-friendly-open-plan-modern-office-interior-with-meeting-room-wooden-meeting-table-yellow.jpg?s=612x612&w=0&k=20&c=_ECheLlQXPrgvcffXv6hOehCxrrpBLkio-Y5x4TYnIE=",
//         "https://hughesmarino.com/inland-empire/wp-content/uploads/sites/27/open-ceiling-office-space.jpg",
//         "https://www.decorilla.com/online-decorating/wp-content/uploads/2025/04/Luxury-office-by-Decorilla-office-interior-decorators-Barbara-C-1024x792.jpg",
//         "https://maisoninterior.vn/en/wp-content/uploads/2025/05/luxury-office-interior-design-37.jpg",
//         "https://images.pexels.com/photos/33342702/pexels-photo-33342702/free-photo-of-modern-luxury-office-interior-design-with-open-workspace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       ],
//     },
//     {
//       id: 5,
//       name: "Bathrooms",
//       cover: "https://w0.peakpx.com/wallpaper/152/689/HD-wallpaper-stylish-bathroom-interior-gray-stylish-design-modern-interior-project.jpg",
//       images: [
//         "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80",
//         "https://ansainteriors.com/wp-content/uploads/2022/03/top-interior-designer-delhi.jpg",
//         "https://www.shutterstock.com/shutterstock/videos/3440713113/thumb/1.jpg?ip=x480",
//         "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?cs=srgb&dl=pexels-christa-grover-977018-1910472.jpg&fm=jpg",
//         "https://media.gettyimages.com/id/1308619159/video/modern-minimalist-bathroom-autumn-background-concept.jpg?s=640x640&k=20&c=IIg3JW7ACzrrOcA9W1hJ2M4DVDKuaEhpmQiO4kHi2hk=",
//         "https://img.freepik.com/free-photo/small-bathroom-with-modern-style-ai-generated_23-2150694878.jpg",
//         "https://w0.peakpx.com/wallpaper/1009/686/HD-wallpaper-bathrooms-eclectic-interior-modern-interior-green-bathroom-ideas-for-the-bathroom-eclectic-bathrooms-style.jpg",
//         "https://w0.peakpx.com/wallpaper/535/281/HD-wallpaper-bathroom-modern-bathroom-interior-bright-bathroom-modern-bathroom.jpg",
//         "https://w0.peakpx.com/wallpaper/152/689/HD-wallpaper-stylish-bathroom-interior-gray-stylish-design-modern-interior-project.jpg",
//         "https://i.pinimg.com/736x/0e/32/30/0e323041caa0676660cf0a43553c5e45.jpg",
//         "https://png.pngtree.com/thumb_back/fh260/background/20250506/pngtree-modern-bathroom-design-with-minimalist-features-and-natural-elements-image_17256575.jpg",
//         "https://plus.unsplash.com/premium_photo-1675744019180-8c7cda9af3e2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0aCUyMHR1YnxlbnwwfHwwfHx8MA%3D%3D"
//       ],
//     },
//     {
//       id: 6,
//       name: "Outdoor Livings",
//       cover: "https://media.istockphoto.com/id/1285572400/photo/vintage-terrace-with-nature-view-3d-render.jpg?s=612x612&w=0&k=20&c=iiLIkK1uuYJUJde6UJeT0hI-kBnkZVSpIZGu7cm05S4=",
//       images: [
//         "https://media.istockphoto.com/id/1285572400/photo/vintage-terrace-with-nature-view-3d-render.jpg?s=612x612&w=0&k=20&c=iiLIkK1uuYJUJde6UJeT0hI-kBnkZVSpIZGu7cm05S4=",
//         "https://dkorinteriors.com/wp-content/uploads/2022/04/Indoor-Outdoor-Living-Space-Dkor-Interiors-5.jpg",
//         "https://media.istockphoto.com/id/1285572400/photo/vintage-terrace-with-nature-view-3d-render.jpg?s=612x612&w=0&k=20&c=iiLIkK1uuYJUJde6UJeT0hI-kBnkZVSpIZGu7cm05S4=",
//         "https://www.mountainliving.com/content/uploads/2023/05/z/n/outdoor-5.jpg",
//         "https://i.pinimg.com/736x/cd/8e/26/cd8e2620aee782e8865d8ea73a441955.jpg",
//         "https://d1b9sdpix36q7o.cloudfront.net/blog-content/blog/wp-content/uploads/2023/07/Sterling_Grove_Calistoga_Patio_7739_conversion1.jpg"
//       ],
//     },
//   ];

//   return (
//     <div className="gallery-page">
//       {!selectedFolder ? (
//         <>
//           {/* SECTION 1: Client Projects */}
//           <div className="gallery-section">
//             <h2 className="gallery-title">Our Happy Clients</h2>
//             <div className="gallery-grid">
//               {clientProjects.map((client) => (
//                 <div
//                   key={client.id}
//                   className="gallery-card"
//                   onClick={() => setSelectedFolder(client)}
//                   role="button"
//                   tabIndex={0}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") {
//                       e.preventDefault();
//                       setSelectedFolder(client);
//                     }
//                   }}
//                 >
//                   <img src={client.cover} alt={`${client.name} residence`} loading="lazy" />
                  
//                   {/* Added client-overlay class and avatar image */}
//                   <div className="gallery-overlay client-overlay">
//                     <img 
//                       src={client.avatar} 
//                       alt={`${client.name} profile`} 
//                       className="client-avatar" 
//                       loading="lazy" 
//                     />
//                     <h3>{client.name}</h3>
//                   </div>

//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* SECTION 2: Types of Interiors */}
//           <div className="gallery-section">
//             <h2 className="gallery-title">Types Of Interiors</h2>
//             <div className="gallery-grid">
//               {folders.map((folder) => (
//                 <div
//                   key={folder.id}
//                   className="gallery-card"
//                   onClick={() => setSelectedFolder(folder)}
//                   role="button"
//                   tabIndex={0}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") {
//                       e.preventDefault();
//                       setSelectedFolder(folder);
//                     }
//                   }}
//                 >
//                   <img src={folder.cover} alt={`${folder.name} cover`} loading="lazy" />
//                   <div className="gallery-overlay">
//                     <h3>{folder.name}</h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       ) : (
//         // DETAIL VIEW (Used for both Client Projects and Interior Types)
//         <div className="gallery-folder-view">
//           <button
//             className="gallery-back-btn"
//             onClick={() => setSelectedFolder(null)}
//           >
//             ← Back to Gallery
//           </button>

//           <h2 className="folder-title">{selectedFolder.name}</h2>

//           <div className="gallery-images-grid">
//             {selectedFolder.images.map((img, index) => (
//               <div key={index} className="gallery-image-wrapper">
//                 <img
//                   src={img}
//                   alt={`${selectedFolder.name} project ${index + 1}`}
//                   loading="lazy"
//                 />
//                 <span className="image-number">{index + 1}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;







import React, { useState } from "react";
import { FaUserCircle } from 'react-icons/fa'; // Added: Import User Icon
import "./Gallery.css";

const Gallery = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);

  // --- UPDATED: Data (removed avatar URLs) ---
  const clientProjects = [
    {
      id: "c1",
      name: "Sudheer Reddy",
      cover: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://images.homify.com/v1575251056/p/photo/image/3278753/Bedroom.jpg",
        "https://images.woodenstreet.de/image/data%2FLooks%2F1.jpg",
        "https://www.centuryply.com/assets/img/blog/30-11-22/imag1.jpg",
        "https://media.istockphoto.com/id/1285572400/photo/vintage-terrace-with-nature-view-3d-render.jpg?s=612x612&w=0&k=20&c=iiLIkK1uuYJUJde6UJeT0hI-kBnkZVSpIZGu7cm05S4="
      ],
    },
    {
      id: "c2",
      name: "Priya Sharma",
      cover: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://www.decorpot.com/images/1972745586modern-and-luxurious-living-room-interior-%20design-ideas_main.jpg",
        "https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?cs=srgb&dl=pexels-houzlook-3926542.jpg&fm=jpg",
        "https://w0.peakpx.com/wallpaper/535/281/HD-wallpaper-bathroom-modern-bathroom-interior-bright-bathroom-modern-bathroom.jpg"
      ],
    },
    {
      id: "c3",
      name: "Amit Patel",
      cover: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg",
        "https://w0.peakpx.com/wallpaper/1009/686/HD-wallpaper-bathrooms-eclectic-interior-modern-interior-green-bathroom-ideas-for-the-bathroom-eclectic-bathrooms-style.jpg",
        "https://i.pinimg.com/736x/cd/8e/26/cd8e2620aee782e8865d8ea73a441955.jpg"
      ],
    }
  ];

  const folders = [
    {
      id: 1,
      name: "Bedrooms",
      cover: "https://www.craftedbeds.co.uk/cdn/shop/articles/c6229643564835.57f4204983b16.jpg?v=1654414798",
      images: [
        "https://w0.peakpx.com/wallpaper/923/149/HD-wallpaper-modern-bedroom-design-stylish-interior-gray-bedroom-large-bed-gray-stylish-curtains-modern-interiors.jpg",
        "https://images.homify.com/v1575251056/p/photo/image/3278753/Bedroom.jpg",
        "https://www.customfurnish.com/blogs/wp-content/uploads/2025/05/Bedroom_-3.webp",
        "https://i.pinimg.com/736x/73/01/88/730188a4d66c214b1fd3de77b7cad96b.jpg",
        "https://images.homify.com/v1569995885/p/photo/image/3216186/10000.jpg",
        "https://www.shutterstock.com/shutterstock/videos/1102500237/thumb/1.jpg?ip=x480",
        "https://ansainteriors.com/wp-content/uploads/2020/08/ultra-chic-bedroom-interior-design.jpg",
        "https://i.pinimg.com/736x/50/be/91/50be911cc33bec7246321d9cd0303c6a.jpg",
        "https://www.nobroker.in/blog/wp-content/uploads/2023/04/luxury-bedroom-interior-design.webp",
        "https://i.ytimg.com/vi/LTMV9SbBDbI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCimtLeQdzuT_4v24DIESuJ8Yzgcg",
        "https://w0.peakpx.com/wallpaper/546/472/HD-wallpaper-bedroom-project-modern-interior-design-stylish-interior-design-bedroom-golden-3d-elements-on-the-wall-black-wall-in-the-bedroom.jpg",
        "https://www.carpentry.sg/wp-content/uploads/2022/11/luxury-marble-interior-bedroom-with-galvanised-metal-support-1024x731.jpg",
      ],
    },
    {
      id: 2,
      name: "Living Rooms",
      cover: "https://i.pinimg.com/originals/82/2f/d3/822fd3a227370187957ecef8ee6f2f0e.jpg",
      images: [
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop&q=80",
        "https://www.decorpot.com/images/1972745586modern-and-luxurious-living-room-interior-%20design-ideas_main.jpg",
        "https://img.freepik.com/premium-photo/3d-rendering-luxury-modern-living-room-with-leather-sofa_105762-833.jpg",
        "https://images.woodenstreet.de/image/data%2FLooks%2F1.jpg",
        "https://www.asenseinterior.com/assets/uploads/5b82ebc80c339a72260f95f44effd051.webp",
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?cs=srgb&dl=pexels-pixabay-276724.jpg&fm=jpg",
        "https://img.freepik.com/premium-photo/interior-design-3d-illustration-living-room_252025-140950.jpg",
        "https://img.freepik.com/premium-photo/illustration-living-room-interior_252025-157798.jpg",
        "https://www.asenseinterior.com/assets/uploads/627d37c1e040220ba214d240f21fd0f0.webp",
        "https://cdn.home-designing.com/wp-content/uploads/2018/11/luxury-living-room-interiors.jpg",
        "https://media.designcafe.com/wp-content/uploads/2020/02/21010329/modern-living-room-design-ideas.jpg",
        "https://i.pinimg.com/736x/31/6f/c0/316fc08a70b70bec8be281f65624eb65.jpg"
      ],
    },
    {
      id: 3,
      name: "Kitchens",
      cover: "https://cdn.dribbble.com/userupload/25083802/file/original-8d7570347e4086d6629a505a1ceb6f0b.gif",
      images: [
        "https://www.centuryply.com/assets/img/blog/30-11-22/imag1.jpg",
        "https://www.d2rinteriors.com/images/modular1.jpg",
        "https://i.ytimg.com/vi/naFL9ddp9Ps/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD33NshS4iMZJngiOdk1972q-OFmw",
        "https://i.pinimg.com/736x/e2/1f/03/e21f037d0093db6c395274b0856a4c17.jpg",
        "https://thearchitectsdiary.com/wp-content/uploads/2024/09/01-Design-Manish-Manglaw.png",
        "https://i.ytimg.com/vi/Kqaly89f1dk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAOmGRCsBS1_qaN9Q5CDkqIGkQ1Uw",
        "https://www.decorpot.com/images/mobile-kitchen.jpg",
        "https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?cs=srgb&dl=pexels-houzlook-3926542.jpg&fm=jpg",
        "https://www.wedezinestudio.com/blogs/wp-content/uploads/2025/05/kitchendesign11.webp",
        "https://i.pinimg.com/736x/e4/00/64/e4006494575fa671deeed9941dcb2831.jpg",
        "https://www.asenseinterior.com/assets/mediafile/luxury_modern_kitchen_designs.webp",
        "https://www.premierkitchens.net.au/wp-content/uploads/Modern-luxury-kitchen-renovation-sydney-black-cabinetry-calacatta-stone-ilve-oven-fisher-paykel-vintec-bosch-02-846x564.jpg"
      ],
    },
    {
      id: 4,
      name: "Home Offices",
      cover: "https://viveedinteriors.com/wp-content/uploads/2021/10/1_new_condo.gif",
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e9739945710967.583ab84d265f2.jpg",
        "https://studiocamouflage.in/wp-content/uploads/2023/07/SCF_44.webp",
        "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg",
        "https://www.wedezinestudio.com/blogs/wp-content/uploads/2025/05/office99.webp",
        "https://www.vlitefurnitech.com/wp-content/uploads/2024/06/Office-interior-design-1.webp",
        "https://www.customfurnish.com/blogs/wp-content/uploads/2025/09/900-variation-brown_and_white-1-min.png",
        "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/05/23163145/modern-office-interior-design-with-partition-plants.jpg",
        "https://media.istockphoto.com/id/1479587535/photo/eco-friendly-open-plan-modern-office-interior-with-meeting-room-wooden-meeting-table-yellow.jpg?s=612x612&w=0&k=20&c=_ECheLlQXPrgvcffXv6hOehCxrrpBLkio-Y5x4TYnIE=",
        "https://hughesmarino.com/inland-empire/wp-content/uploads/sites/27/open-ceiling-office-space.jpg",
        "https://www.decorilla.com/online-decorating/wp-content/uploads/2025/04/Luxury-office-by-Decorilla-office-interior-decorators-Barbara-C-1024x792.jpg",
        "https://maisoninterior.vn/en/wp-content/uploads/2025/05/luxury-office-interior-design-37.jpg",
        "https://images.pexels.com/photos/33342702/pexels-photo-33342702/free-photo-of-modern-luxury-office-interior-design-with-open-workspace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
    },
    {
      id: 5,
      name: "Wardrobes",
      cover: "https://i.pinimg.com/736x/c3/56/d9/c356d90952bdbe0bde96672e4906a6c7.jpg",
      images: [
        "https://b2532561.smushcdn.com/2532561/wp-content/uploads/2022/06/Modern-Wardrobe-Design-in-Bhubaneswar-4-scaled.jpg?lossy=2&strip=0&webp=1",
        "https://cpimg.tistatic.com/11090298/b/4/Custom-Designed-Wardrobe-With-Overhead-Storage-Sliding-Doors..jpg",
        "https://www.vevadesigns.in/blog/wp-content/uploads/2025/05/wordroob1.webp",
        "https://media.istockphoto.com/id/1419085349/photo/wardrobe-sliding-doors.jpg?s=612x612&w=0&k=20&c=qoDeGZgFe_u9XKQQWHd-o2YYyZODeS-0N5mSR_Z6ZRw=",
        "https://st.hzcdn.com/simgs/f431d3ac088b776b_9-9049/home-design.jpg",
        "https://www.abrinterior.com/sites/default/files/design-gallery/Bedroom-Interior---19.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2023/10/351681022/JK/PP/MD/76093172/modular-wardrobe-design-service-500x500.jpg",
        "https://images.woodenstreet.de/image/data/Modular%20wardrobe%20Design/luminor-white-hinged-modular-wardrobe.jpg",
        "https://image.made-in-china.com/365f3j00RyDLjAOwPkYJ/Professional-Customization-Bedroom-Wardrobe-Design-Modern-Home-Bedroom-Furniture-Sliding-Door-Wooden-Clothes-Wardrobe.webp",
        "https://i.pinimg.com/736x/da/39/07/da39073cce76cec6f3ccd4735fd69195.jpg",
        "https://woodencherry.com/wp-content/uploads/2025/10/WB-16.webp",
        "https://i.pinimg.com/236x/9f/e1/27/9fe12710a9074805d3ee8f4069b47dcd.jpg"
      ],
    },
    {
      id: 6,
      name: "Outdoor Livings",
      cover: "https://media.istockphoto.com/id/1285572400/photo/vintage-terrace-with-nature-view-3d-render.jpg?s=612x612&w=0&k=20&c=iiLIkK1uuYJUJde6UJeT0hI-kBnkZVSpIZGu7cm05S4=",
      images: [
        "https://media.istockphoto.com/id/1285572400/photo/vintage-terrace-with-nature-view-3d-render.jpg?s=612x612&w=0&k=20&c=iiLIkK1uuYJUJde6UJeT0hI-kBnkZVSpIZGu7cm05S4=",
        "https://dkorinteriors.com/wp-content/uploads/2022/04/Indoor-Outdoor-Living-Space-Dkor-Interiors-5.jpg",
        "https://media.istockphoto.com/id/1285572400/photo/vintage-terrace-with-nature-view-3d-render.jpg?s=612x612&w=0&k=20&c=iiLIkK1uuYJUJde6UJeT0hI-kBnkZVSpIZGu7cm05S4=",
        "https://www.mountainliving.com/content/uploads/2023/05/z/n/outdoor-5.jpg",
        "https://i.pinimg.com/736x/cd/8e/26/cd8e2620aee782e8865d8ea73a441955.jpg",
        "https://d1b9sdpix36q7o.cloudfront.net/blog-content/blog/wp-content/uploads/2023/07/Sterling_Grove_Calistoga_Patio_7739_conversion1.jpg"
      ],
    },
  ];


  return (
    <div className="gallery-page">
      {!selectedFolder ? (
        <>
          <div className="gallery-section">
            <h2 className="gallery-title">Our Happy Clients</h2>
            <div className="gallery-grid">
              {clientProjects.map((client) => (
                <div
                  key={client.id}
                  className="gallery-card"
                  onClick={() => setSelectedFolder(client)}
                >
                  <img src={client.cover} alt={`${client.name} residence`} loading="lazy" />
                  
                  {/* UPDATED: Client Icon replaces Avatar Image */}
                  <div className="gallery-overlay client-overlay">
                    <div className="client-icon">
                      <FaUserCircle />
                    </div>
                    <h3>{client.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-section">
            <h2 className="gallery-title">Types Of Interiors</h2>
            <div className="gallery-grid">
              {folders.map((folder) => (
                <div
                  key={folder.id}
                  className="gallery-card"
                  onClick={() => setSelectedFolder(folder)}
                >
                  <img src={folder.cover} alt={`${folder.name} cover`} loading="lazy" />
                  <div className="gallery-overlay">
                    <h3>{folder.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="gallery-folder-view">
          <button className="gallery-back-btn" onClick={() => setSelectedFolder(null)}>
            ← Back to Gallery
          </button>
          <h2 className="folder-title">{selectedFolder.name}</h2>
          <div className="gallery-images-grid">
            {selectedFolder.images.map((img, index) => (
              <div key={index} className="gallery-image-wrapper">
                <img src={img} alt={`${selectedFolder.name} ${index + 1}`} loading="lazy" />
                <span className="image-number">{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;