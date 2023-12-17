import { useEffect, useRef } from "react";
import { Button } from '@mui/material';

function GalleryPage() {
    const styles = {
        container: {
          width: '100%',
          maxWidth: '1024px',
          padding: '0 1em',
          margin: '3em auto',
        },
        
        title: {
          textAlign: 'center',
         paddingTop:'40px',
          color:'rgb(188, 196, 214)',
        }
      };
  const galleryRef = useRef();

  useEffect(() => {
    if (window && galleryRef.current) {
      window.cloudinary
        .galleryWidget({
          container: galleryRef.current,
          cloudName: "dgpxvazru", // Replace this with your Cloudinary cloud name
          aspectRatio: "16:9",
          mediaAssets: [
            { tag: "fessa", transformation: { crop: "fill" } },
          ],
        })
        .render();
    }
  }, []);

  return (
    <main className="main" style={{backgroundColor:'rgb(17, 50, 91)'}}>
    <div className="container" style={styles.container}>
        <h1 className="title" style={styles.title}>
          Gallery
        </h1>
      </div>

      <div className="container" style={styles.container}>
        <div ref={galleryRef} />
      </div>

      <div className="container" style={{textAlign:'center'}}>
      <a
        href="https://drive.google.com/drive/folders/1upSfAc1DWIGUjsuGTQCHsZ27rchWqciY?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="contained" style={{ marginBottom:'7px', }}>
          Get More Images on Google Drive
        </Button>
      </a>
    </div>
    </main>
  );
}

export default GalleryPage;
