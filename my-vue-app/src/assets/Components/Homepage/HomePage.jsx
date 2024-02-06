import Header from './Header'
import NewsTimeline from './News';
import ImageSlider from "./slidercomponents/ImageSlider";

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
      
   <NewsTimeline />
   
    </div>
  )
}

export default HomePage