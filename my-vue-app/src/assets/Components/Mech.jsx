import  { useState } from 'react';
import PropTypes from 'prop-types';
import { MdPhone } from 'react-icons/md';



const Accessories = ({ cards }) => {
  const containerStyle = {
    backgroundColor: 'rgb(17, 50, 91)',
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop:'90px',  // Adjust padding for smaller screens
    flexWrap: 'wrap',  // Allow cards to wrap to the next line on smaller screens
    minHeight:'84vh',
  };

  const cardStyle = {
    position: 'relative',
    width: '320px',
    height: '480px',
    background: '#191919',
    borderRadius: '20px',
    overflow: 'hidden',
    margin: '20px',  // Add margin between cards for better spacing on smaller screens
  };

  const beforeStyle = {
    content: '""',
    position: 'absolute',
    top: '-50%',
    width: '100%',
    height: '100%',
    background: 'grey',
    transform: 'skewY(345deg)',
    transition: '0.5s',
  };

  const imgBoxStyle = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20px',
    zIndex: '1',
  };

  const contentBoxStyle = {
    position: 'relative',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: '2',
  };

  const textStyle = {
    fontSize: '18px',
    color: 'white',
    letterSpacing: '1px',
  };

  const priceStyle = {
    ...textStyle,
    fontWeight: '700',
    fontSize: '24px',
  };
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handlePhoneClick = () => {
    // Toggle the visibility of the phone number
    setShowPhoneNumber(!showPhoneNumber);
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'gray',
    transition: '0.5s',
    margin: '0 10px',
    fontSize:'80%',
    marginTop:'10%',
  };
  const iconStyle = {
    fontSize: '2em',
    margin: '0 1%',
  };
  const cardHoverStyle = {
    ...cardStyle,
    boxShadow: '0 0 20px rgba(255, 206, 0, 0.8)',
  };
  const generateCard = (card, index) => (
    <div key={index} style={cardStyle}> onMouseOver={(e) => e.currentTarget.style = cardHoverStyle} onMouseOut={(e) => e.currentTarget.style = cardStyle}
      <div style={beforeStyle}></div>
      <div style={imgBoxStyle}>
        {index === 0 ?  <img src={'https://res.cloudinary.com/dgpxvazru/image/upload/v1703416133/Mech/lacoste%20white.png'} alt={`card-${index}`} style={{ height: '240px', width: 'auto' }} /> : null}
        {index === 1 ? <img src={'https://res.cloudinary.com/dgpxvazru/image/upload/v1703416133/Mech/lacoste%20blue.png'} alt={`card-${index}`} style={{ height: '231px', width: 'auto' }} /> : null}
        {index === 2 ? <img src={'https://res.cloudinary.com/dgpxvazru/image/upload/v1703788575/Mech/photo_2023-12-28_18-29-16_vmpat4.jpg'} alt={`card-${index}`} style={{ height: '231px', width: 'auto' }} /> : null}
      </div>
      <div style={contentBoxStyle}>
        <h3 style={{ ...textStyle, fontWeight: '500', textTransform: 'uppercase' }}>{card.title}</h3>
        <h2 style={priceStyle}>{card.price}</h2>
        <a href="tel:+233240877549" style={linkStyle} onClick={handlePhoneClick}>
            <MdPhone style={iconStyle} />
          </a>
          {showPhoneNumber && <span style={{ margin: '0 10px', color: 'white' }}>+233 322 190 745</span>}
      </div>
    </div>
  );

  return <div style={containerStyle}>{cards.map((card, index) => generateCard(card, index))}</div>;
};

Accessories.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Mech = () => {
  return (
    <div>
      {/* Your other components */}
      <Accessories
        cards={[
          {
            title: 'White Lacoste',
            price: '70 Cedis',
          },
          {
            title: 'Blue Lacoste',
            price: '70 Cedis',
          },
          {
            title: 'Diary And Pen',
            price: '45 Cedis',
          },
        ]}
      />
    </div>
  );
};

export default Mech;
