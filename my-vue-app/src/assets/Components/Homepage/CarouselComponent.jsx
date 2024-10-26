// CarouselComponent.js
import  { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { createClient } from 'contentful';
import './CarouselComponent.css'; // Import a CSS file for responsive styling

// Initialize Contentful client
const client = createClient({
  space: 'sh47g2wjl5b7', // replace with your space ID
  accessToken: '7FOOzS3QXoKpahm-axIEK0W4pAZ5whpoMrJjOHcaqJE' // replace with your access token
});

const CarouselComponent = () => {
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: 'carouselImage' }) // replace 'carouselImage' with your content type ID
      .then((response) => {
        const images = response.items.map((item) => item.fields.image.fields.file.url);
        setCarouselImages(images);
      })
      .catch(console.error);
  }, []);

  return (
    <Carousel autoplay>
      {carouselImages.map((url, index) => (
        <div key={index} className="carousel-slide">
          <img
            src={url}
            alt={`Carousel Image ${index + 1}`}
            className="carousel-image"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
