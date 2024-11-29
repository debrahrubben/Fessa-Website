  import { useEffect, useState } from "react";
  import { Button } from '@mui/material';
  import { createClient } from 'contentful';
  import './galleryheight.css';

  const client = createClient({
    space: 'sh47g2wjl5b7', // Replace with your space ID
    accessToken: '7FOOzS3QXoKpahm-axIEK0W4pAZ5whpoMrJjOHcaqJE', // Replace with your access token
  });

  function GalleryPage() {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    const styles = {
      container: { width: '100%', maxWidth: '1024px' },
      title: { textAlign: 'center', color: 'rgb(188, 196, 214)' },
    };

    useEffect(() => {
      client
        .getEntries({ content_type: 'galleryImage' }) // Replace with your content type ID
        .then((response) => {
          const imageUrls = response.items.map((item) => item.fields.image.fields.file.url);
          setImages(imageUrls);
        })
        .catch((err) => {
          console.error("Error fetching images:", err);
          setError("Failed to load images. Please try again later.");
        });
    }, []);

    return (
      <main className="main" style={{ backgroundColor: 'rgb(17, 50, 91)', paddingTop: '120px' }}>
        <div className="container" style={styles.container}>
          <h1 className="title" style={styles.title}>Gallery</h1>
        </div>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        <div className="container" style={styles.container}>
          <div className="gallery">
            {images.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image"
                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
              />
            ))}
          </div>
        </div>

        <div className="container" style={{ textAlign: 'center' }}>
          <a
            href="https://drive.google.com/drive/folders/1upSfAc1DWIGUjsuGTQCHsZ27rchWqciY?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" style={{ marginTop: '60px' }}>
              Get More Images on Google Drive
            </Button>
          </a>
        </div>
      </main>
    );
  }

  export default GalleryPage;
