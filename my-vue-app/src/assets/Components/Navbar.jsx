import { Navbar, Nav, } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import logo2 from '../images/logo2.png';
import logo from '../images/logo.png';
import { useState, useEffect, useRef } from 'react';
import {  Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Fade from '@mui/material/Fade';



const Navigator = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

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
    margin: '0px',
    padding: '0px',
    justifyContent: isMobileView ? 'center' : 'flex-start', // Center items for mobile view
    display: 'flex',
    flexDirection: isMobileView ? 'row' : 'row',
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
    fontSize:isMobileView ? '75%' : '100%', // Adjusted margin for spacing
  };
  
  

  const h1Style = {
    color: '#bcc4d6',
    fontSize: isMobileView ? '90%' : '150%', // Adjust the percentage accordingly
    cursor: 'pointer', // Add cursor pointer for better UX
  display: 'inline-block', // Ensures that the cursor pointer applies correctly
  };
  



  const [anchorEl, setAnchorEl] = useState(null);
 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Navbar style={headerStyle} expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img src={logo2} alt="Logo 2" style={imgStyle} />
        <img src={logo} alt="Fessa Logo" style={imgStyle} />
      </Navbar.Brand>
      <Link to="/" onClick={handleH1Click}>
        <h1 style={h1Style}>Faculty Of Educational Studies</h1>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={ulStyle} ref={navRef}>
        <Button color="inherit" style={aStyle} component={Link} to="/#home-header">
              Home
            </Button>
            <Button color="inherit" style={aStyle} component={Link} to="/resources">
              Resources
            </Button>
            <Button color="inherit" style={aStyle} component={Link} to="/Attendance">
              Attendance
            </Button>
          <Button
            color="inherit"
            style={aStyle}
            onClick={handleClick}
            aria-controls="extras-menu"
            aria-haspopup="true"
          >
            Extras
          </Button>
          <Menu
            id="extras-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ marginTop: '10px', }}
            PaperProps={{
              style: {
                background: '#17223A', // Add your desired background color here
              },
            }}
  TransitionComponent={Fade} // You can use Fade transition or any other transition component
  TransitionProps={{ timeout: 600 }}
          >
            <MenuItem component={Link} to="/Hall_of_Fame" onClick={handleClose} style={aStyle}>
              Hall of Fame
            </MenuItem>
            <MenuItem component={Link} to="/Explore" onClick={handleClose} style={aStyle}>
              Explore
            </MenuItem>
            <MenuItem component={Link} to="/Mech" onClick={handleClose} style={aStyle}>
              Merchandise
            </MenuItem>
            <MenuItem component={Link} to="/gallery" onClick={handleClose} style={aStyle}>
              Gallery
            </MenuItem>
          </Menu>
          <Button color="inherit" style={aStyle} component={Link} to="/about">
              About
            </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;
