
import localLogo from '../images/logo.png';

const AboutPage = () => {

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={localLogo} alt="Company Logo" style={styles.logo} />
      </div>
      <div style={styles.infoContainer}>
        <h1 style={{ color: 'grey' }}> ABOUT US</h1>
        <p style={styles.introText}>
        <h4>Faculty of Educational Studies (KNUST)</h4>
        <br />

<p>Currently, Faculty of Educational Studies (KNUST) offers a 4-year B.Ed. degree in:</p>

<h5>B.Ed. JHS Education</h5>

<p><strong>B.Ed JHS Education Options:</strong></p>
<ol>
    <li>Math & Science</li>
    <li>Math & ICT</li>
    <li>ICT & Science</li>
    <li>Social Studies & History</li>
    <li>Visual Arts</li>
    <li>Geography</li>
    <li>Agricultural Science</li>
</ol>

<p><strong>Note:</strong> The JHS option provides applicants with the opportunity to specialize in a particular
    subject area to enable them to teach at the JHS level after graduation. The subjects include Integrated Science,
    Mathematics, ICT, Visual Arts, Social Studies, Geography, Agricultural Science, and History.</p>
    <br />

<h4>ADMISSION/ENTRY REQUIREMENTS</h4>

<p>In order to gain admission to read the following B.Ed JHS Education programme in KNUST:</p>
<ul>
    <li>Mathematics</li>
    <li>Science</li>
    <li>I.C.T.</li>
    <li>Agricultural Science</li>
    <li>Visual Art</li>
    <li>History</li>
    <li>Geography</li>
    <li>Social Studies</li>
</ul>

<p><strong>You must have the following requirements:</strong></p>

<h5>A. WASSCE/SSSCE APPLICANTS</h5>
<p><strong>Entry Requirements</strong></p>
<p><strong>Core Subjects:</strong> Credit passes in English Language, Mathematics, and Integrated Science.</p>
<p><strong>Elective Subjects:</strong> Credit passes in any THREE (3) subjects from the following programmes:
</p>
<ul>
    <li>i. Science, General Agriculture, and I.C.T. (for a-d)</li>
    <li>ii. Visual Art (for e)</li>
    <li>iii. General Arts including History or Geography, as may be applied (for f and g)</li>
</ul>

<h6>B. ‘A’ LEVEL APPLICANTS</h6>
<p><strong>Entry Requirements</strong></p>
<p><strong>‘O’ Level or equivalent:</strong> Credit passes in FIVE(5) subjects including English Language and
    Mathematics, and</p>
<p><strong>‘A’ Level or equivalent:</strong> Credit passes in THREE(3) subjects from the following programmes:</p>
<ul>
    <li>i. Science, General Agriculture, and I.C.T. (for a-d)</li>
    <li>ii. Visual Art (for e)</li>
    <li>iii. General Arts including History or Geography, as may be applied (for f and g).</li>
</ul>
<br />
<h5>ONLINE APPLICATION PROCEDURE</h5>
<p>Click <a href="https://apps.knust.edu.gh/admissions/">here</a> for the online application procedure.</p>
        </p>
        <a href="https://fes.knust.edu.gh/">
        <button style={styles.readMoreButton} >Read More
        </button></a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'rgb(17, 50, 91)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '103px',
    color: 'white',
    
  },
  logoContainer: {
    marginBottom: '20px',
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
  infoContainer: {
    maxWidth: '600px',
    padding: '0 15px', // Add padding to improve spacing on smaller screens
  },
  introText: {
    marginBottom: '20px',
  },
  moreText: {
    marginBottom: '10px',
  },
  readMoreButton: {
    background: '#17223A',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom:'10px',
    
  },
};

export default AboutPage;