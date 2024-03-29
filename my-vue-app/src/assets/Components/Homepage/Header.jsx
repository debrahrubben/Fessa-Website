import './HomePage.css'

const Header = () => {
  // Define the background color
  const backgroundColor = 'rgb(17, 50, 91)';

  // Inline styles for the header with a background color
  const headerStyle = {
    backgroundColor: backgroundColor,
    color: 'white',  // Text color to be visible against the background
    paddingTop: '84px',  // Adjusted padding to leave space at the top
  // No padding at the bottom
  };

  // Styles for the text container with glassmorphism effect
  const textContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white background
    borderRadius: '10px', // Optional: Add border-radius for a rounded look
    padding: '20px 20px 0px 20px',
  };

  return (
    <header id="home-header" className="header" style={headerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-container text-center" style={textContainerStyle}>
              <h4 style={{ background: 'rgba(255, 255, 255, 0.2)', borderRadius: '10px', padding: '10px', color: '#17223A', }}>
                Faculty Of Educational Studies Students Association Portal</h4>
              <p className="p-large" >
              &quot;The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.&quot;- Martin Luther King Jr.
              </p>
            </div> {/* end of text-container */}
          </div> {/* end of col */}
        </div> {/* end of row */}
      </div> {/* end of container */}
    </header>
  );
};

export default Header;
