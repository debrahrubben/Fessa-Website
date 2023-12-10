

import { useState } from 'react';
import { ImageList, ImageListItem, Dialog, DialogContent, Button } from '@mui/material';
import backgroundimg from '../images/backgroundimg.jpg';
import imageData from './imageData';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const componentStyle = {
    paddingTop: '78px',
    textAlign: 'center',
    backgroundImage: `url(${backgroundimg})`,
    backgroundPosition: 'center',
  };

  return (
    <div style={componentStyle}>
       <h1 style={{ textAlign: 'center',  color:'white', fontSize:'large' }}>
        Gallery
      </h1>
      <ImageList sx={{ width: '500', height: '450' }} variant="quilted" cols={3} rowHeight={180}>
        {imageData.map((item) => (
          <ImageListItem key={item.src} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              src={item.src}
              alt={item.caption}
              loading="lazy"
              onClick={() => openModal(item.src)}
              style={{ cursor: 'pointer' }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Modal */}
      <Dialog open={Boolean(selectedImage)} onClose={closeModal} maxWidth="md">
        <DialogContent>
          <img src={selectedImage} alt="Maximized" style={{ width: '100%', height: 'auto' }} />
        </DialogContent>
      </Dialog>

      {/* Button with an anchor tag */}
      <a
        href="https://drive.google.com/drive/folders/1upSfAc1DWIGUjsuGTQCHsZ27rchWqciY?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="contained" style={{ marginTop: 'px', marginBottom:'7px', }}>
          Get More Images on Google Drive
        </Button>
      </a>
    </div>
  );
};

export default GalleryPage;