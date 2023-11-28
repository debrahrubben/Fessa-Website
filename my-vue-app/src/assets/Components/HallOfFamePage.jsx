

const HallOfFamePage = () => {
    const containerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingTop: '90px',
      
      backgroundImage: 'url("https://images.unsplash.com/photo-1615414047026-802692414b79?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // Replace with the path to your background image
      backgroundSize: 'cover', // Adjust as needed
      backgroundRepeat: 'no-repeat', // Adjust as needed
    };
  const cardData = [
    {
      id: 1,
      imageSrc: 'https://media.istockphoto.com/id/508957700/photo/ethnic-father-helping-her-daughter-learn-art.jpg?s=1024x1024&w=is&k=20&c=4twshK0nxGHtPos-cjGeDWvD5JmlGwzK-E1mjMRsxJk=',
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Ingredia Nutrisha',
      role: 'Artist',
    },
    {
      id: 2,
      imageSrc: 'https://media.istockphoto.com/id/1364643477/photo/boy-looking-at-book-shyly-covering-mouth-with-hand.jpg?s=1024x1024&w=is&k=20&c=xoj-vcgShbmGLMK__WzIsS-zzakV61J8nV8TH6AXH0E=',
      quote: "I don't need to compromise on my principles because they don't have the slightest bearing on what happens to me anyway.",
      name: 'Valentino Morose',
      role: 'Engineer',
    },
    {
      id: 3,
      imageSrc: 'https://media.istockphoto.com/id/950609102/photo/girl-solving-mathematical-addition.jpg?s=612x612&w=0&k=20&c=hIOWKbDapOX0leF6wwRkSYeqJggAuEYTLdY-KHf1je4=',
      quote: "That's the problem with nature, something's always stinging you or oozing mucous all over you. Let's go and watch TV.",
      name: 'Natalya Undergrowth',
      role: 'Sales Assistant',
    },
    // Add more card data as needed
  ];
  const imageFitStyle = {
    maxWidth: '100%', // Ensure image doesn't exceed container width
    height: 'auto', // Maintain aspect ratio
  };
  

  const figureStyle = {
    fontFamily: "'Raleway', Arial, sans-serif",
    position: 'relative',
    overflow: 'hidden',
    margin: '10px',
    minWidth: '220px',
    maxWidth: '310px',
    width: '100%',
    background: 'rgb(17, 50, 91)',
    color: '#bcc4d6',
    textAlign: 'center',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.15)',
    fontSize: '14px', // Adjusted font size
    marginRight: '10px',
  };

  const imageStyle = {
    position: 'relative',
    borderBottom: '4px solid #34495e',
    zIndex: '1',
  };

  const imagePStyle = {
    fontWeight: '500',
    margin: '0',
    padding: '0 15px', // Adjusted padding
    lineHeight: '1.4em', // Adjusted line height
    position: 'absolute',
    top: '50%',
    width: '100%',
    color: '#ffffff',
    transform: 'translateY(-50%)',
    opacity: '0',
    fontStyle: 'italic',
  };

  const figcaptionStyle = {
    backgroundColor: 'rgb(17, 50, 91)',
    padding: '15px', // Adjusted padding
  };

  const h3Style = {
    margin: '0 0 5px',
    textTransform: 'uppercase',
    fontWeight: '400',
  };

  const h3SpanStyle = {
    fontWeight: '800',
  };

  const quoteStyle = {
    marginTop: '5px', // Adjusted margin
  };

  return (
    <div style={containerStyle}>
      {cardData.map((card) => (
        <figure key={card.id} style={figureStyle}>
          <div style={imageStyle}>
            <img src={card.imageSrc} alt={`sample${card.id}` }   style={{ ...imageFitStyle, width: '100%', height: '100%' }} />
            <p style={imagePStyle}>{card.quote}</p>
          </div>
          <figcaption style={figcaptionStyle}>
            <h3 style={h3Style}>
              {card.name}
              <span style={h3SpanStyle}> {card.role}</span>
            </h3>
            <p style={quoteStyle}>{card.quote}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default HallOfFamePage;
