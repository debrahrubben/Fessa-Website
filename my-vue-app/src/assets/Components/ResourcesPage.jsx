import './ResourcesPage.css';

function ResourcesPage() {
  return (
    <>
    <div className="box-container">
      <div className="box-item">
        {renderFlipBox(
          'https://img.freepik.com/premium-photo/pencil-pot-books-desk-math-class_23-2148201038.jpg?w=900',
          'Level 100',
          'Find all the electronic materials you need.',
          'https://drive.google.com/drive/folders/1gEn4tBZeH2rFAo9hv2JfuMCqXC1EavJO?usp=drive_link'
        )}
      </div>
      <div className="box-item">
        {renderFlipBox(
          'https://images.unsplash.com/photo-1537202108838-e7072bad1927?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'Level 200',
          'Find all the electronic materials you need.',
          'https://drive.google.com/drive/folders/1--_HIn58bDlEJc09HPVQnDOPgdchb2xP?usp=drive_link'
        )}
      </div>
      <div className="box-item">
        {renderFlipBox(
          'https://img.freepik.com/premium-photo/learning-studying-pile-books-conceptual-background_643825-5077.jpg?w=360',
          'Level 300',
          'Find all the electronic materials you need.',
          'https://drive.google.com/drive/folders/1-1vTnCxjYiiE-pxC56BWYBfPbxHkbaLK?usp=drive_link'
        )}
      </div>
      <div className="box-item">
        {renderFlipBox(
          'https://img.freepik.com/free-photo/close-up-colorful-books-pile_23-2149082169.jpg?w=360&t=st=1700494591~exp=1700495191~hmac=1fc1e0f253ef3873b2008b54b060099fc7a6c87064450dfc71b237157d82ea68',
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
