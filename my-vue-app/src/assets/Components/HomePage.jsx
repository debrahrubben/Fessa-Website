import  { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import logo2 from '../images/logo2.png';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Navigator = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const navRef = useRef(null);

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
    height: isMobileView ? '42px' : '60px',
  };

  const aStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '15px',
  };

  const dropdownStyle = {
    padding: '0px',
    color: 'white',
  };

  const dropdownItemStyle = {
    color: '#17223A',
  };

  const h1Style = {
    color: '#bcc4d6',
    fontSize: isMobileView ? '90%' : '150%',
    cursor: 'pointer',
    display: 'inline-block',
  };

  const activeLinkStyle = {
    backgroundColor: 'rgba(172, 30, 30, 0.1)',
  };

  return (
    <Navbar style={headerStyle} expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img src={logo2} alt="Logo 2" style={imgStyle} />
        <img src={logo} alt="Fessa Logo" style={imgStyle} />
      </Navbar.Brand>
      <Link to="/" >
        <h1 style={h1Style}>Faculty Of Education</h1>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={ulStyle} ref={navRef}>
          <Link smooth to="/#home-header" style={aStyle}>
            Home
          </Link>
          <NavLink to="/resources" style={aStyle}>
            Resources
          </NavLink>
          <NavLink to="/gallery" style={aStyle}>
            Gallery
          </NavLink>
          <NavLink to="/" style={aStyle} onClick={() => setIsDropdownOpen(!isDropdownOpen)} activeStyle={activeLinkStyle}>
            <NavDropdown title="Extras" id="basic-nav-dropdown" style={dropdownStyle} show={isDropdownOpen}>
              <NavDropdown.Item as={LinkContainer} to="/Hall_of_Fame" style={dropdownItemStyle}>
                <NavLink to="/Hall_of_Fame" style={{ ...dropdownItemStyle, ...activeLinkStyle }}>
                  Hall of Fame
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item as={LinkContainer} to="/your_way_around" style={dropdownItemStyle}>
                <NavLink to="/extras" style={dropdownItemStyle}>
                  Explore
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item as={LinkContainer} to="/accessories" style={dropdownItemStyle}>
                <NavLink to="/accessories" style={dropdownItemStyle}>
                  Merchandise
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </NavLink>
          <NavLink to="/about" style={aStyle}>
            About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;







import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import logo2 from '../images/logo2.png';
import logo from '../images/logo.png';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navigator = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  const handleH1Click = () => {
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

  const headerStyle = {
    backgroundColor: scrolling ? 'rgba(23, 34, 58, 0.5)' : '#17223A',
    backdropFilter: scrolling ? 'blur(10px)' : 'none',
    boxShadow: scrolling ? '0 0 25px 0 black' : 'none',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    transition: 'background-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px', // Adjust padding as needed
  };

  const imgContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const imgStyle = {
    height: isMobileView ? '42px' : '60px',
    marginRight: '10px',
  };

  const h1Style = {
    color: '#bcc4d6',
    fontSize: isMobileView ? '90%' : '150%',
    cursor: 'pointer',
    display: 'inline-block',
  };

  const buttonContainerStyle = {
    marginLeft: 'auto',
    paddingRight: '10px', // Adjust padding as needed
  };

  const aStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const dropdownStyle = {
    padding: '0px',
    color: 'white',
  };

  const dropdownItemStyle = {
    color: '#17223A',
  };

  const activeLinkStyle = {
    backgroundColor: 'rgba(172, 30, 30, 0.1)',
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

  return (
    <AppBar position="static" style={headerStyle}>
      <Toolbar>
        <img src={logo2} alt="Logo 2" style={imgStyle} />
        <img src={logo} alt="Fessa Logo" style={imgStyle} />
        <Link to="/" onClick={handleH1Click} style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="div" style={h1Style}>
            Faculty Of Education
          </Typography>
        </Link>
        {isMobileView ? (
          <>
            <IconButton color="inherit" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
              <List>
                <ListItem button component={Link} to="/#home-header" onClick={handleDrawerClose}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/resources" onClick={handleDrawerClose}>
                  <ListItemText primary="Resources" />
                </ListItem>
                <ListItem button component={Link} to="/gallery" onClick={handleDrawerClose}>
                  <ListItemText primary="Gallery" />
                </ListItem>
                <ListItem button component={Link} to="/about" onClick={handleDrawerClose}>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem
                  button
                  onClick={handleDrawerClose}
                  component={Link}
                  to="/Hall_of_Fame"
                >
                  <ListItemText primary="Hall of Fame" />
                </ListItem>
                <ListItem
                  button
                  onClick={handleDrawerClose}
                  component={Link}
                  to="/your_way_around"
                >
                  <ListItemText primary="Explore" />
                </ListItem>
                <ListItem
                  button
                  onClick={handleDrawerClose}
                  component={Link}
                  to="/accessories"
                >
                  <ListItemText primary="Merchandise" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <div style={{ marginLeft: 'auto' }}>
            <Button color="inherit" style={aStyle} component={Link} to="/#home-header">
              Home
            </Button>
            <Button color="inherit" style={aStyle} component={Link} to="/resources">
              Resources
            </Button>
            <Button color="inherit" style={aStyle} component={Link} to="/gallery">
              Gallery
            </Button>
            <Button
              color="inherit"
              style={aStyle}
              onClick={handleDrawerOpen}
              activeStyle={activeLinkStyle}
            >
              Extras
            </Button>
            <Button color="inherit" style={aStyle} component={Link} to="/about">
              About
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigator;

