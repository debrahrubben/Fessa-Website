import  { useState } from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';
import { Button,} from 'antd';
import CustomModal from './Modal';
import { Link } from 'react-router-dom';

const Footer = () => {
  const iconStyle = {
    fontSize: '2em',
    margin: '0 1%',
  };

  const footerStyle = {
    background: '#17223A',
    fontFamily: 'Play, sans-serif',
    textAlign: 'center',
    marginTop: 'auto',

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
    fontSize:'80%'
  };

  const ulStyle = {
    width: '100%',
  };

  const liStyle = {
    display: 'block',
    margin: '0 10px',
  };

  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handlePhoneClick = () => {
    // Toggle the visibility of the phone number
    setShowPhoneNumber(!showPhoneNumber);
  };

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const handleAcademicCalendarClick = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    const pdfFilePath = 'https://drive.google.com/file/d/1hMFDdBwS7m3yZINJVixo1T41lWeitdqc/view?usp=sharing';
    window.open(pdfFilePath, '_blank');
  };
  const handleTimeTableClick = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    const pdfFilePath = 'https://drive.google.com/file/d/12vilp-57__YRAzEACLY1px48ArRvw1j5/view?usp=drivesdk';
    window.open(pdfFilePath, '_blank');
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
            

           <li style={liStyle}><Button type="primary" onClick={showModal} style={{ background: 'rgb(17, 50, 91)' }}>
              <span className="material-icons" style={{ fontSize: '1.1em', marginRight: '5px' }}>school</span>
              Access Student Portal / Virtual classroom
            </Button></li><CustomModal open={open} handleOk={handleOk} handleCancel={handleCancel} loading={loading} />
      
            <li style={{...liStyle, fontSize:'150%',}} ><a href="#" style={linkStyle} onClick={handleAcademicCalendarClick}>Academic Calendar</a></li>
            <li style={{...liStyle, fontSize:'150%',}} ><a href="#" style={linkStyle} onClick={handleTimeTableClick}>Undergraduate Time Table</a></li>
          <Link to="/affiliate-colleges" style={{...linkStyle, fontSize:'140%',}}>
            Affiliate Colleges
          </Link>
            <li style={{...liStyle, fontSize:'150%',}} ><a href="https://www.facebook.com/profile.php?id=61550739763548&mibextid=2JQ9oc" style={linkStyle}>FESSA News Hub</a></li>

          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
