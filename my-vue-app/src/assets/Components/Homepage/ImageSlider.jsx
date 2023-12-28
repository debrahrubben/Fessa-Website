import images from "./Sliderimages/images";
import CustomSlider from "./slidercomponents/custom.slider";
import Externalsite from "./Externalsite";



const ImageSlider = () => {
  return (
    <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
    <div style={{textAlign:'center',}}>
<Externalsite></Externalsite>
</div>
    </div>
  )
}

export default ImageSlider