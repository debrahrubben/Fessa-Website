
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
 Teaching and learning at various levels of educational systems across the globe has evolved. 
 This has been occasioned by the massive transformation in science and technology which has led to the explosion of knowledge.
 More critically, research in neuroscience and educational psychology has greatly influenced our understanding about human behaviour and how humans learn. 
 This understanding has resulted in the reconceptualization of what teaching and learning is. 
 Teaching is therefore not the way it used to be since the way learners learn has changed greatly. 
 This certainly requires a paradigm shift in teacher education and training.
 It is in this breath the Department of Teacher Education, which is one of the departments under the Faculty of Educational Studies in KNUST has been birthed.

 The Department of Teacher Education seeks to train teachers, educational leaders and practitioners who can function in 21st Century learning spaces, facilitating learning among learners with diverse backgrounds. 
 For the department, Education is more than just a career. It is a way of engaging with people who share our vision for changing the world. 
 We therefore strive to create favourable opportunities for our student teachers to enable them acquire the necessary professional knowledge, skills,
 values and attitudes they need to succeed in diverse learning contexts, and also helping them grow the passion, confidence and desire to be lifelong learners and educators.

 The department, being a design oriented one, has undergraduate and post graduate programmes that seek to train teachers for basic and senior high schools in Ghana.
 Our post graduate education programmes focus on equipping educational practitioners, teacher educators and educational leaders to function in Teacher Education Institutions, supervisory agencies and NGOs in Education.
 The curricula are therefore carefully designed to address the needs and demands of learners in the 21st century whiles taken cognizance of the prescriptions of the Ghana National Teachers Standards and the National Teacher Education Curriculum Framework.

 Our focus is to build and strengthen capacity in STEM education while paying attention to the promotion of gender and social inclusion strategies that make the teachers and educational professionals we train sensitive in addressing all barriers to learning in various learning contexts in order to achieve the Sustainable Development Goals.
 We have a strong, experienced and dynamic faculty with expertise in various areas of specialization who conduct cutting edge research that inform policy and practice in Ghana. 
 They are always poised to support you succeed in your chosen career and also partner both internal and external organizations in developing workable solutions to the myriad of challenges in education locally and globally.  

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