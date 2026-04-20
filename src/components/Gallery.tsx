// filepath: src/components/Gallery.tsx
import './Gallery.css';

interface Photo {
  caption: string;
}


import benChadwickImg from '../assets/ben-chadwick.jpg';

const photos: (Photo & { imgSrc?: string })[] = [
  { caption: "Ben in his natural habitat", imgSrc: benChadwickImg },
  { caption: "The legendary 2019 gym session" },
  { caption: "Ben showing off his technique" },
  { caption: "After a particularly potent day" },
];

const Gallery = () => {
  return (
    <section id="gallery">
      <h2>📸 Photo Gallery</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            {photo.imgSrc ? (
              <img src={photo.imgSrc} alt={photo.caption} className="gallery-photo" />
            ) : (
              <div className="photo-placeholder">📸</div>
            )}
            <p>{photo.caption}</p>
          </div>
        ))}
      </div>
      <p className="photo-note">* Photos available upon request. Viewer discretion advised.</p>
    </section>
  );
};

export default Gallery;