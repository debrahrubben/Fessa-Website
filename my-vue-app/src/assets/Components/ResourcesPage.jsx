import './ResourcesPage.css';
import level100Image from '../images/level100.avif';
import level200Image from '../images/level200.jpg';
import level300Image from '../images/level300.avif';
import level400Image from '../images/level400.avif';



function ResourcesPage() {
  return (
    <>
    <div className="box-container">
  <div className="box-item">
    {renderFlipBox(
      level100Image,
      'Level 100',
      'Find all the electronic materials you need.',
      'https://drive.google.com/drive/folders/1gEn4tBZeH2rFAo9hv2JfuMCqXC1EavJO?usp=drive_link'
    )}
  </div>
  <div className="box-item">
    {renderFlipBox(
      level200Image,
      'Level 200',
      'Find all the electronic materials you need.',
      'https://drive.google.com/drive/folders/1--_HIn58bDlEJc09HPVQnDOPgdchb2xP?usp=drive_link'
    )}
  </div>
  <div className="box-item">
    {renderFlipBox(
      level300Image,
      'Level 300',
      'Find all the electronic materials you need.',
      'https://drive.google.com/drive/folders/1-1vTnCxjYiiE-pxC56BWYBfPbxHkbaLK?usp=drive_link'
    )}
  </div>
  <div className="box-item">
    {renderFlipBox(
      level400Image,
      'Level 400',
      'Find all the electronic materials you need.',
      'https://drive.google.com/drive/folders/1--vTmpI3yNo8sRF8SXtmC35eJsawpB9y?usp=drive_link'
    )}
  </div>
</div>

    </>
  );
}

function renderFlipBox(imageUrl, header, description, link) {
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
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
