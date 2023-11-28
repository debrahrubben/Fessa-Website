import images from "./data/images";

import CustomSlider from "./components/custom.slider";



const ImageSlider = () => {
  return (
    <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
    </div>
  )
}

export default ImageSlider