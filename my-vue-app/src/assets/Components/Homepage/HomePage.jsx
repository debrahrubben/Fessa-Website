import Header from './Header'
import { Suspense } from 'react';
import { lazy } from "react";
const NewsTimeline = lazy(() => import("./News"));
const ImageSlider = lazy(()=> import('./slidercomponents/ImageSlider'));

const HomePage = () => {
  return (
    <div>
         <Header />
      <div className="outer-container" style={{backgroundColor:'rgb(17, 50, 91)'}} >
        <div className="slider-container">
        <Suspense fallback={<h1>Loading . . .</h1>}>
          <ImageSlider /> 
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<h1>Loading . . .</h1>}>
      <NewsTimeline />
      </Suspense>
   
   
    </div>
  )
}

export default HomePage