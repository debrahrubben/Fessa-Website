import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

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
    
    justifyContent: 'center', // Center the icons horizontally,
    display: 'inline-block',
  };
  

  const linkStyle = {
    textDecoration: 'none',
    color: 'gray',
    transition: '0.5s',
    margin: '0 10px', // Adjust the margin as needed
  };
  
  

  const ulStyle = {
    width: '100%',
  };

  const liStyle = {
    display: 'inline-block',
    margin: '0 30px',
  };

  const mediaQueryStyle = {
    textAlign: 'left',
    padding: '5%',
     color: 'grey',
     fontSize: '30%'
  };


  return (
    <footer style={footerStyle}>
      <div className="footer">
        <div className="row" style={rowStyle}>
          <a href="#" style={linkStyle}><FaFacebook style={iconStyle} /></a>
          <a href="#" style={linkStyle}><FaInstagram style={iconStyle} /></a>
          <a href="#" style={linkStyle}><FaYoutube style={iconStyle} /></a>
          <a href="#" style={linkStyle}><FaTwitter style={iconStyle} /></a>
        </div>

        <div className="row" style={rowStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}><a href="#" style={linkStyle}>Contact us</a></li>
            <li style={liStyle}><a href="#" style={linkStyle}>Education Policy</a></li>
            <li style={liStyle}><a href="#" style={linkStyle}>Privacy Policy</a></li>
            <li style={liStyle}><a href="#" style={linkStyle}>Kumasi </a></li>
            <li style={liStyle}><a href="#" style={linkStyle}>Opportunites</a></li>
          </ul>
        </div>

        <div className="row" style={mediaQueryStyle}>
          Faculty Of Education Copyright © 2023  || Designed By: Guy and Rubben
        </div>
      </div>
    </footer>
  );
};

export default Footer;
