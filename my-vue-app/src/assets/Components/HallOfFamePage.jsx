import Bernice from '../images/HallofFameImages/Bernice Afi Agbanyo.jpg'
import Kerker from '../images/HallofFameImages/Christian Kerker.jpg'
import Asare from '../images/HallofFameImages/Dennis Asare.jpg'
import Osei from '../images/HallofFameImages/Frimpong Eric Osei.jpg'
import Ampah from '../images/HallofFameImages/Jeremiah Ampah.jpg'
import Mintah from '../images/HallofFameImages/Kenseng Mintah vice.jpg'
import Bonsu from '../images/HallofFameImages/Kwame Bonsu.jpg'
import Umar from '../images/HallofFameImages/Mohammed Umar Nadra.jpg'
import Nartey from '../images/HallofFameImages/Naomi Nartey Mateykie.jpg'
import ezekiel from '../images/HallofFameImages/ezekiel.jpg'
import Rubben from '../images/HallofFameImages/Rubben.jpg'
import Grace from '../images/HallofFameImages/Grace Abena Bossman.jpg'


const HallOfFamePage = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: '90px',
    backgroundImage:
      'url("https://images.unsplash.com/photo-1615414047026-802692414b79?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundRepeat: 'repeat',
    
  };

  const cardData = [
    {
      id: 1,
      imageSrc: Asare,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Dennis Asare',
      role: 'President',
    },
    {
      id: 2,
      imageSrc: Ampah,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Jeremiah Ampah',
      role: 'Vice President',
    },
    {
      id: 3,
      imageSrc: Nartey,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Naomi Nartey Mateykie',
      role: 'General Secretary',
    },
    {
      id: 4,
      imageSrc: Osei,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Frimpong Eric Osei',
      role: 'Financial Secretary',
    },
    {
      id: 5,
      imageSrc: Umar,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Mohammed Umar Nadra',
      role: 'Organising Secretary',
    },
    {
      id: 6,
      imageSrc: Bernice,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Bernice Afi Agbanyo',
      role: 'Wocom',
    },
    {
      id: 7,
      imageSrc: Kerker,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Christian Kerker',
      role: 'Ex President 2023',
    },
    {
      id: 8,
      imageSrc: Mintah,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Kenseng Mintah',
      role: 'Ex Vice President 2023',
    },
    {
      id: 9,
      imageSrc: Bonsu,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Kwame Bonsu',
      role: 'Ex President 2022',
    },
    {
      id: 10,
      imageSrc: Grace,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Grace Abena Bossman',
      role: 'General Secretary 2022',
    },
    {
      id: 11,
      imageSrc: Rubben,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Rubben Debrah',
      role: 'Fessa Web Developer',
    },
    {
      id: 12,
      imageSrc: ezekiel,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Ezekiel',
      role: 'Fessa Web Developer',
    },

    // Add more card data as needed
  ];

  const imageFitStyle = {
    maxWidth: '100%',
    height: 'auto',
  };
  const quoteStyle = {
    marginTop: '5px', // Adjusted margin
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
    fontSize: '14px',
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
    padding: '0 15px',
    lineHeight: '1.4em',
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
    padding: '15px',
  };

  const h3Style = {
    margin: '0 0 5px',
    textTransform: 'uppercase',
    fontWeight: '400',
    textAlign: 'center', 
    marginTop: '30px',
    marginBottom: '20px',
     color:'white', 
     fontSize:'small',

  };

  const h3SpanStyle = {
    fontWeight: '800',
  };

  const h2Style = {
    color: 'white',
    position: 'relative',
    fontSize: '1.5rem', // Adjusted font size
    marginTop: '20px', // Adjusted margin top
    marginBottom: '10px', // Adjusted margin bottom
    textAlign: 'center',
    zIndex: 1, // Ensure the text is on top of the pseudo-element
  };
  
  const h2BackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent', // Adjust the background color and alpha as needed
    backdropFilter: 'blur(10px)', // Adjust the blur value as needed
    zIndex: -1,
  };
  


  return (
    <div style={containerStyle}>
      {/* Header for the first 3 cards */}
      <h2 style={h2Style}> <span style={h2BackgroundStyle}></span>Header for the First 3 Cards</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {cardData.slice(0, 6).map((card) => (
          <figure key={card.id} style={figureStyle}>
            <div style={imageStyle}>
              <img
                src={card.imageSrc}
                alt={`sample${card.id}`}
                style={{ ...imageFitStyle, width: '100%', height: '100%' }}
              />
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

      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {cardData.slice(6, 8).map((card) => (
          <figure key={card.id} style={figureStyle}>
            <div style={imageStyle}>
              <img
                src={card.imageSrc}
                alt={`sample${card.id}`}
                style={{ ...imageFitStyle, width: '100%', height: '100%' }}
              />
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

      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {cardData.slice(8, 10).map((card) => (
          <figure key={card.id} style={figureStyle}>
            <div style={imageStyle}>
              <img
                src={card.imageSrc}
                alt={`sample${card.id}`}
                style={{ ...imageFitStyle, width: '100%', height: '100%' }}
              />
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
    

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {cardData.slice(10, 12).map((card) => (
          <figure key={card.id} style={figureStyle}>
            <div style={imageStyle}>
              <img
                src={card.imageSrc}
                alt={`sample${card.id}`}
                style={{ ...imageFitStyle, width: '100%', height: '100%' }}
              />
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
    </div>
  );
};

export default HallOfFamePage;

