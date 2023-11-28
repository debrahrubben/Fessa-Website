import Header from './Homepage/Header'
import News from './Homepage/News'
import ImageSlider from "./Homepage/ImageSlider";

const HomePage = () => {

  
  return (
    <div>
         <Header />
             {/* Image Slider */}
      <div className="outer-container" style={{backgroundColor:'rgb(17, 50, 91)'}} >
        <div className="slider-container">
          <ImageSlider /> {/* This is where ImageSlider component should be placed */}
        </div> {/* end of slider-container */}
      </div> {/* end of outer-container */}
   <News />
    </div>
  )
}

export default HomePage