import{ Suspense } from 'react';
import { Link } from 'react-router-dom';
import './ResourcesPage.css';

function ResourcesPage() {
  return (
    <>
      <div className="box-container">
        <div className="box-item">
          <Suspense fallback={<LoadingBox />}>
            {renderFlipBox(
              'https://res.cloudinary.com/dgpxvazru/image/upload/v1703425767/level/level100_dqxgia.jpg',
              'Level 100',
              'Find all the electronic materials you need.',
              '/resources/level100'
            )}
          </Suspense>
        </div>
        <div className="box-item">
          <Suspense fallback={<LoadingBox />}>
            {renderFlipBox(
              'https://res.cloudinary.com/dgpxvazru/image/upload/v1703383163/level/level200_adgtxy.jpg',
              'Level 200',
              'Find all the electronic materials you need.',
              '/resources/level200'
            )}
          </Suspense>
        </div>
        <div className="box-item">
          <Suspense fallback={<LoadingBox />}>
            {renderFlipBox(
              'https://res.cloudinary.com/dgpxvazru/image/upload/v1703425768/level/level300_dmvwwe.jpg',
              'Level 300',
              'Find all the electronic materials you need.',
              '/resources/level300'
            )}
          </Suspense>
        </div>
        <div className="box-item">
          <Suspense fallback={<LoadingBox />}>
            {renderFlipBox(
              'https://res.cloudinary.com/dgpxvazru/image/upload/v1703425767/level/level400_rh8yg7.jpg',
              'Level 400',
              'Find all the electronic materials you need.',
              '/resources/level400'
            )}
          </Suspense>
        </div>
      </div>
    </>
  );
}

function renderFlipBox(imageUrl, header, description, linkTo) {
  return (
    <div className="flip-box">
      <div
        className="flip-box-front text-center "
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="inner color-white">
          <h3 className="flip-box-header">{header}</h3>
          <p>{description}</p>
          <img
            src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
            alt=""
            className="flip-box-img"
          />
        </div>
      </div>
      <div
        className="flip-box-back text-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="inner color-white">
          <h3 className="flip-box-header">{header}</h3>
          <p>{description}</p>
          <Link to={linkTo} className="flip-box-button">
            Access
          </Link>
        </div>
      </div>
    </div>
  );
}

function LoadingBox() {
  return (
    <div className="flip-box-loading">
      <p>Loading...</p>
    </div>
  );
}

export default ResourcesPage;
