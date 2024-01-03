
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

      <p>  Currently, Faculty of Educational Studies (KNUST) offers a 4-year B.Ed. degree in:
B.Ed. JHS Education

B.Ed JHS Education Options:
1. Math & Science
2. Math & ICT
3. ICT & Science
4. Social Studies & History 
5. Visual Arts
6. Geography
7. Agricultural Science</p>
<br />

Note:The JHS option provides applicants with the opportunity to specialize in a particular subject area to enable them to teach at the JHS level after graduation. The subjects include Integrated Science, Mathematics, ICT,  Visual Arts, Social Studies, Geography, Agricultural Science and History. 

<br />
<p>*ADMISSION/ENTRY REQUIREMENTS*

In order to gain admission to read the following  B.Ed JHS Education programme in KNUST:
a.Mathematics
b.Science
c.I.C.T.
d.Agricultural Science
e.Visual Art
f.History
g.Geography
h. Social Studies </p>
<br />
You must have the following requirements:
<br />
<p>A. WASSCE/SSSCE APPLICANTS
Entry Requirements

Core Subjects: Credit passes in English Language, Mathematics, and Integrated Science.

Elective Subjects:Credit passes in any THREE (3) subjects from the following programmes: 
i.Science, General Agriculture, and I.C.T. (for a-d)
ii.Visual Art (fore)
iii.General Arts including History or Geography, as may be applied (for f and g)

B. ‘A’ LEVEL APPLICANTS
Entry Requirements

•‘O’ Level or equivalent: Credit passes in FIVE(5) subjects including English Language 
and Mathematics, and

•‘A’ Level or equivalent: Credit passes in THREE(3) subjects from the following programmes:
i.Science, General Agriculture, and I.C.T. (for a-d)
ii.Visual Art (for e)
iii.General Arts including History or Geography, as may be applied (for f and g).</p>
<br />

*ONLINE APPLICATION PROCEDURE*
<br />
<p>
  <a href="https://apps.knust.edu.gh/admissions/" style={{textDecoration:'none',}}>Click here</a>


</p>
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