import './ResourcesPage.css';

export default function ResourcesPage() {
  return (
    <>
    <div className="box-container">
  <div className="box-item">
    {renderFlipBox(
      'https://res.cloudinary.com/dgpxvazru/image/upload/v1703425767/level/level100_dqxgia.jpg',
      'Level 100',
      'Find all the electronic materials you need.',
      'https://drive.google.com/drive/folders/1gEn4tBZeH2rFAo9hv2JfuMCqXC1EavJO?usp=drive_link',
      '/resources/level100',
    )}
  </div>
  <div className="box-item">
    {renderFlipBox(
      'https://res.cloudinary.com/dgpxvazru/image/upload/v1703383163/level/level200_adgtxy.jpg',
      'Level 200',
      'Find all the electronic materials you need.',
      'https://drive.google.com/drive/folders/1--_HIn58bDlEJc09HPVQnDOPgdchb2xP?usp=drive_link',
      '/resources/level200'
    )}
  </div>
  <div className="box-item">
    {renderFlipBox(
      'https://res.cloudinary.com/dgpxvazru/image/upload/v1703425768/level/level300_dmvwwe.jpg',
      'Level 300',
      'Find all the electronic materials you need.',
      'https://drive.google.com/drive/folders/1-1vTnCxjYiiE-pxC56BWYBfPbxHkbaLK?usp=drive_link',
      '/resources/level300'
    )}
  </div>
  <div className="box-item">
    {renderFlipBox(
     'https://res.cloudinary.com/dgpxvazru/image/upload/v1703425767/level/level400_rh8yg7.jpg',
      'Level 400',
      'Find all the electronic materials you need.',
      'https://drive.google.com/drive/folders/1--vTmpI3yNo8sRF8SXtmC35eJsawpB9y?usp=drive_link',
      '/resources/level400'
    )}
  </div>
</div>

    </>
  );
}


function renderFlipBox(imageUrl, header, description, link) {
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

          <a href={link} className="flip-box-button">Access</a>

          <Link to={linkTo} className="flip-box-button">Access</Link>

        </div>
      </div>
    </div>
  );
}