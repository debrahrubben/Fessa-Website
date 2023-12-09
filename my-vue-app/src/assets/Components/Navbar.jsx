import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import logo2 from '../images/logo2.png';
import logo from '../images/logo.png';
import { NavLink} from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';


const Navigator = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
 const handleH1Click = () => {
    // Navigate to the home screen when the h1 element is clicked
    navigate('/');
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };


    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  const ulStyle = {
    listStyle: 'none',
    margin: 0,
    padding: '2px 0px 0px 10px',
    
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
    backgroundColor: scrolling ? 'rgba(23, 34, 58, 0.5)' : '#17223A',
    backdropFilter: scrolling ? 'blur(10px)' : 'none',
    boxShadow: scrolling ? '0 0 25px 0 black' : 'none',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    transition: 'background-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s',
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
   padding:'0px',
    color: 'white',
  };
  
  const dropdownItemStyle = {
    color: '#17223A',
  };
  const h1Style = {
    color: '#bcc4d6',
    fontSize: isMobileView ? '90%' : '150%', // Adjust the percentage accordingly
    cursor: 'pointer', // Add cursor pointer for better UX
  display: 'inline-block', // Ensures that the cursor pointer applies correctly
  };
  

  
  const activeLinkStyle = {
    backgroundColor: 'rgba(172, 30, 30, 0.1)', // Adjust the background color for active links
    // Add any other styles you want for active links
  };
  
  return (
    <Navbar style={headerStyle} expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img src={logo2} alt="Logo 2" style={imgStyle} />
        <img src={logo} alt="Fessa Logo" style={imgStyle} />
      </Navbar.Brand>
      <Link to="/" onClick={handleH1Click}>
        <h1 style={h1Style}>Faculty Of Education</h1>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={ulStyle} ref={navRef}>
          <Link smooth to="/#home-header" style={aStyle}>
            Home
          </Link>
          <NavLink to="/resources" style={aStyle}>Resources</NavLink>
          <NavLink to="/gallery" style={aStyle}>Gallery</NavLink>
          <NavLink to="/" style={aStyle} onClick={handleDropdownToggle}  activeStyle={activeLinkStyle} >
            <NavDropdown
               title="Extras" 
              id="basic-nav-dropdown"
              style={dropdownStyle}
              show={isDropdownOpen}
              onHide={() => setIsDropdownOpen(false)}
              
            >
              <NavDropdown.Item as={LinkContainer} to="/Hall_of_Fame" style={dropdownItemStyle}>
  <NavLink to="/Hall_of_Fame"  style={{ ...dropdownItemStyle, ...activeLinkStyle }}>Hall of Fame</NavLink>
</NavDropdown.Item>


<NavDropdown.Item as={LinkContainer} to="/your_way_around" style={dropdownItemStyle}>
  <NavLink to="/extras" style={dropdownItemStyle}>Explore</NavLink>
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
