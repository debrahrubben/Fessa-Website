import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import logo2 from '../images/logo2.png';
import logo from '../images/logo.png';
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { LinkContainer } from 'react-router-bootstrap';


const Navigator = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const ulStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: isMobileView ? 'row' : 'row',
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const headerStyle = {
    backgroundColor: '#17223A',
    boxShadow: '0 0 25px 0 black',
    
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  };
  
  const imgStyle = {
    height: isMobileView ? '42px' : '60px', // Adjust the height for mobile view
  };
  

  const aStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '15px', // Adjusted margin for spacing
  };
  
  const dropdownStyle = {
    marginLeft: '15px', // Adjusted margin for spacing
    color: 'white',
  };
  
  const dropdownItemStyle = {
    color: '#17223A',
  };
  

  
  return (
    <Navbar style={headerStyle} expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img src={logo2} alt="Logo 2" style={imgStyle} />
        <img src={logo} alt="Fessa Logo" style={imgStyle} />
      </Navbar.Brand>
      <h1 style={{ color: '#bcc4d6', fontSize: '150%', paddingLeft: 'auto' }}>Faculty Of Education</h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={ulStyle} ref={navRef}>
          <Link smooth to="/#home-header" style={aStyle}>
            Home
          </Link>
          <Link smooth to="/#news-section" style={aStyle}>
            News
          </Link>
          <NavLink to="/resources" style={aStyle}>Resources</NavLink>
          <NavLink to="/gallery" style={aStyle}>Gallery</NavLink>
          <NavLink to="/" style={aStyle} onClick={handleDropdownToggle} >
            <NavDropdown
               title="Extras" 
              id="basic-nav-dropdown"
              style={dropdownStyle}
              show={isDropdownOpen}
              onHide={() => setIsDropdownOpen(false)}
              
            >
              <NavDropdown.Item as={LinkContainer} to="/Hall_of_Fame" style={dropdownItemStyle}>
  <NavLink to="/Hall_of_Fame" style={dropdownItemStyle}>Hall of Fame</NavLink>
</NavDropdown.Item>


<NavDropdown.Item as={LinkContainer} to="/your_way_around" style={dropdownItemStyle}>
  <NavLink to="/extras" style={dropdownItemStyle}>Your Way Around</NavLink>
</NavDropdown.Item>



<NavDropdown.Item as={LinkContainer} to="/accessories" style={dropdownItemStyle}>
  <NavLink to="/accessories" style={dropdownItemStyle}>Merchandise</NavLink>
</NavDropdown.Item>
            </NavDropdown>
          </NavLink>
          <NavLink to="/about" style={aStyle}>About</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;
