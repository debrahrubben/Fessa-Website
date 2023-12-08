import React, { useState } from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
  const iconStyle = {
    fontSize: '2em',
    margin: '0 1%',
  };

  const footerStyle = {
    background: '#17223A',
    fontFamily: 'Play, sans-serif',
    textAlign: 'center',
  };

  const rowStyle = {
    width: '100%',
    margin: '1% 0%',
    padding: '0.6% 0%',
    color: 'gray',
    fontSize: '0.8em',
    justifyContent: 'center',
    display: 'inline-block',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'gray',
    transition: '0.5s',
    margin: '0 10px',
  };

  const ulStyle = {
    width: '100%',
  };

  const liStyle = {
    display: 'inline-block',
    margin: '0 30px',
  };

  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handlePhoneClick = () => {
    // Toggle the visibility of the phone number
    setShowPhoneNumber(!showPhoneNumber);
  };

  return (
    <footer style={footerStyle}>
      <div className="footer">
        <div className="row" style={rowStyle}>
          <a href="https://www.facebook.com/people/Faculty-of-Educational-Studies-Students-Association_FESSA_KNUST/61550762679826/?mibextid=ZbWKwL" style={linkStyle}><FaFacebook style={iconStyle} /></a>
          
          {/* Replace Instagram with Call */}
          <a href="tel:+233322190745" style={linkStyle} onClick={handlePhoneClick}>
            <MdPhone style={iconStyle} />
          </a>
          
          {showPhoneNumber && <span style={{ margin: '0 10px', color: 'white' }}>+233 322 190 745</span>}
          
          <a href="https://twitter.com/FessaKnust" style={linkStyle}><FaTwitter style={iconStyle} /></a>
          
          {/* Add Gmail icon and link */}
          <a href="mailto:fessa21@gmail.com" style={linkStyle}>
            <MdEmail style={iconStyle} />
          </a>
        </div>

        <div className="row" style={rowStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}><a href="#" style={linkStyle}>Kwame Nkrumah University of Science and Technology, Kumasi</a></li>
            <li style={liStyle}><a href="#" style={linkStyle}>Education Policy</a></li>
            <li style={liStyle}><a href="#" style={linkStyle}>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
