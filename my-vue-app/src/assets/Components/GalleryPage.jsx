

// GalleryPage.jsx

import { ImageList, ImageListItem } from '@mui/material';
import backgroundimg from '../images/backgroundimg.jpg'; // Import your local background image
import imageData from './imageData'; // Assuming you have an itemData array

const GalleryPage = () => {
  const componentStyle = {
    paddingTop: '90px',
    textAlign: 'center',
    backgroundImage: `url(${backgroundimg})`,
    backgroundPosition: 'center',
  };

  const buttonStyle = {
    alignItems: 'center',
    appearance: 'none',
    backgroundImage: 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%)',
    border: '0',
    borderRadius: '6px',
    boxShadow: 'rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, rgba(58, 65, 111, .5) 0 -3px 0 inset',
    boxSizing: 'border-box',
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: '"JetBrains Mono", monospace',
    height: '48px',
    justifyContent: 'center',
    lineHeight: '1',
    listStyle: 'none',
    overflow: 'hidden',
    paddingLeft: '16px',
    paddingRight: '16px',
    position: 'relative',
    textAlign: 'left',
    textDecoration: 'none',
    transition: 'box-shadow .15s, transform .15s',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    whiteSpace: 'nowrap',
    willChange: 'box-shadow, transform',
    fontSize: '18px',
  };

  return (
    <div style={componentStyle}>
      <ImageList
  sx={{ width: '100%', height: '100%' }}
  variant="quilted"
  cols={3}
  rowHeight={180}
>
  {imageData.map((item) => (
    <ImageListItem key={item.src} cols={item.cols || 1} rows={item.rows || 1}>
      <img
        src={item.src}  // Use item.src instead of item.img
        alt={item.caption}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>

      {/* Button with an anchor tag */}
      <a
        href="https://drive.google.com/drive/folders/1upSfAc1DWIGUjsuGTQCHsZ27rchWqciY?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={{ ...buttonStyle }}
          onClick={() => {
            // Add your button click logic here
          }}
        >
          Get More Images on Google Drive
        </button>
      </a>
    </div>
  );
};

export default GalleryPage;
