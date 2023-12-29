import images from "./images";
import CustomSlider from "./custom.slider";


const ImageSlider = () => {
  return (
    <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
    <div style={{textAlign:'center',}}>

</div>
    </div>
  )
}

export default ImageSlider