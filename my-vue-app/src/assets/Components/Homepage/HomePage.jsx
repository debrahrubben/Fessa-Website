
import Header from './Header';
import NewsTimeline from './News';
import CarouselComponent from './CarouselComponent';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="outer-container" style={{ backgroundColor: 'rgb(17, 50, 91)' }}>
        <div className="slider-container">
          <CarouselComponent />
        </div>
      </div>
      <NewsTimeline />
    </div>
  );
};

export default HomePage;
