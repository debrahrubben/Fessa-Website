import images from "./images";
import CustomSlider from "./custom.slider";
import { Skeleton } from 'antd';
import { Suspense } from 'react';

const ImageSlider = () => {
  return (
    <Suspense fallback={<Skeleton.Image active />}>
    <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} /> ;
        })}
      </CustomSlider>
    </div> </Suspense>
  )
}

export default ImageSlider