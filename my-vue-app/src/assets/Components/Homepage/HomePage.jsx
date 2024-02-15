import Header from './Header'
import NewsTimeline from './News'
import ImageSlider from './slidercomponents/ImageSlider'

const HomePage = () => {
  return (
    <div>
         <Header />
      <div className="outer-container" style={{backgroundColor:'rgb(17, 50, 91)'}} >
        <div className="slider-container">
          <ImageSlider /> 
        </div>
      </div>
      <NewsTimeline />
   
   
    </div>
  )
}

export default HomePage