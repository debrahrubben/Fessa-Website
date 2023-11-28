
const News = () => {
  const newsData = [
    {
      imageSrc: 'https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg',
      altText: 'mixed vegetable salad in a mason jar.',
      title: 'This is the third news',
      description: [
        'Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer\'s market.',
       
      ]
    },
    {
      imageSrc: 'https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg',
      altText: 'mixed vegetable salad in a mason jar.',
      title: 'This is the second news',
      description: [
        'Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer\'s market.',
        
      ]
    },
    {
      imageSrc: 'https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg',
      altText: 'mixed vegetable salad in a mason jar.',
      title: 'This is the third news',
      description: [
        'Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer\'s market.',
       
      ]
    },
    
    // Add more news items as needed
  ];

  return (
    <div style={mainStyle} id="news-section">
      <h3 style={{color:'white', paddingLeft:'40px'}}>News</h3>
      <ul style={cardsStyle} className="cards">
        {newsData.map((newsItem, index) => (
          <li key={index} style={cardsItemStyle} className="cards_item">
            <div style={cardStyle} className="card">
              <div style={cardImageStyle} className="card_image">
                <img
                  src={newsItem.imageSrc}
                  alt={newsItem.altText}
                />
              </div>
              <div style={cardContentStyle} className="card_content">
                <h2 style={cardTitleStyle} className="card_title">
                  {newsItem.title}
                </h2>
                <div style={cardTextStyle} className="card_text">
                  {newsItem.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles remain the same

const mainStyle = {
  
  margin: '0 auto',
  background: 'rgb(17, 50, 91)',
};

const cardsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  listStyle: 'none',
  margin: '0',
  padding: '0',
};

const cardsItemStyle = {
  display: 'flex',
  padding: '1rem',
};

const cardImageStyle = {
  height: 'calc(13 * 1.2rem)',
  padding: '1.2rem 1.2rem 0',
  position: 'relative',
};

const cardContentStyle = {
  padding: '1.2rem',
};

const cardTitleStyle = {
  margin: '1.2rem 0',
  fontSize: '1.3em',
};

const cardTextStyle = {
  lineHeight: '1.2rem',
  backgroundColor:'white'
};

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '0.25rem',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  paddingLeft: '30px',
  background:
    'repeating-linear-gradient(#0000 0 calc(1.2rem - 1px), #66afe1 0 1.2rem) right bottom / 100% 100%, linear-gradient(red 0 0) 30px 0 / 2px 100% #fff',
  backgroundRepeat: 'no-repeat',
  lineHeight: '1.2rem',
  WebkitMask:
    'radial-gradient(circle .8rem at 2px 50%, #0000 98%, #000) 0 0 / 100% 2.4rem',
};

export default News;
