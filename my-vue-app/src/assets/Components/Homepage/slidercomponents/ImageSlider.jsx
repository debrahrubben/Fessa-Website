import images from "./images";
import CustomSlider from "./custom.slider";
import { Skeleton } from 'antd';
import { Suspense } from 'react';

const ImageSlider = () => {
  return (
    <div className="App">
      <Suspense fallback={<Skeleton.Image active />}>
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} /> ;
        })}
      </CustomSlider>
      </Suspense>
    <div style={{textAlign:'center',}}>

</div>
    </div>
  )
}

export default ImageSlider