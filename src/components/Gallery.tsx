// filepath: src/components/Gallery.tsx
import './Gallery.css';

interface Photo {
  caption: string;
}

const photos: Photo[] = [
  { caption: "Ben in his natural habitat" },
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
            <div className="photo-placeholder">📸</div>
            <p>{photo.caption}</p>
          </div>
        ))}
      </div>
      <p className="photo-note">* Photos available upon request. Viewer discretion advised.</p>
    </section>
  );
};

export default Gallery;