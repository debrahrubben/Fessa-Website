import Header from './Header'
import { Suspense } from 'react';
import { lazy } from "react";
const NewsTimeline = lazy(() => import("./News"));
const ImageSlider = lazy(()=> import('./slidercomponents/ImageSlider')); 
import { Skeleton } from 'antd';

const HomePage = () => {
  return (
    <div>
         <Header />
      <div className="outer-container" style={{backgroundColor:'rgb(17, 50, 91)'}} >
        <div className="slider-container">
        <Suspense fallback={<Skeleton.Image active />}>
          <ImageSlider /> 
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<Skeleton.Image active  paragraph={{ rows: 4,}} />}>
      <NewsTimeline />
      </Suspense>
   
   
    </div>
  )
}

export default HomePage