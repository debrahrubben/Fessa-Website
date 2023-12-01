
import localLogo from '../images/logo.png';
import { useState } from 'react';

const AboutPage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

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
        {showMore ? (
          <>
            <h3 style={styles.moreText}>
            FACULTY OF EDUCATIONAL STUDIES POSTGRADUATE COURSES

            </h3>
            <p style={styles.moreText}>
            1. Department of Educational Innovations in Science and Technology<br></br>
i. MA. art education (regular/weekend/sandwich)
Candidates must have a BA, BFA or B.Ed (minimum of Second Class
(Lower Division)) degree in any Visual Arts discipline. Candidates must
have at least 60% in Research Methodology and Thesis Writing at the
undergraduate level. At least one-year teaching or school administration
experience would be an advantage.<br></br>

ii. MPhil. Art Education (Regular/Weekend)
Candidates must have a BA, BFA or B.Ed (minimum of Second Class
(Lower Division)) degree in any Visual Arts discipline. Candidates must
have at least 60% in Research Methodology and Thesis Writing at the
undergraduate level. Candidates must submit a research proposal on an
appropriate topic that is relevant to teaching, learning, and administration of
the Arts, Vocational or General Education. Candidates must pass an
entrance examination and interview with a minimum of 65%.<br></br>

iii. MPhil. Art Education (Top-Up)
Candidates must have a MA, MFA, MComm from a recognised university.
Candidates must submit a research proposal on an appropriate topic that is
relevant to teaching, learning, and administration of the Arts, Vocational or
General Education. Candidates must pass an entrance examination and
interview with a minimum of 65%.<br></br>

iv. Master of Education (M.Ed.) - General Education
(Regular/Sandwich)
Candidates must have a BSc, BA, BFA or B.Ed. (minimum of Second Class
(Lower Division)) degree in an appropriate field of study from a recognised
university. Candidates must have a minimum of 60% in Research
Methodology and Thesis writing at the undergraduate level. Candidates with
at least one year classroom teaching or school administration experience
would be at an advantage. A candidate who does not satisfy the requirement
stated above but is otherwise adjudged suitable by the Department Board,
shall, where practicable, be interviewed and in addition may be required to
take an entrance examination.<br></br>

v. MSc. Educational Innovation and Leadership Science
(Regular/Sandwich)
Candidates must have a BA, BFA or B.Ed. (minimum of Second Class
(Lower Division)) degree in any discipline. Candidates must have a
minimum of 60% in Research Methodology and Thesis writing at the
undergraduate level. Candidates must have at least one year classroom
teaching or school administration experience.<br></br>

vi. MPhil. Educational Innovation and Leadership Science
(Regular/Weekend)
Candidates must have an MA in Education, M.Ed., MSc or a B.Ed.
(minimum of Second Class (Lower Division) in any discipline. Candidates
must have a minimum of 60% in Research in Methodology and Thesis
writing at the postgraduate or undergraduate level. Candidates must submit
research proposal on an appropriate topic that is relevant to teaching,
learning and administration or General Education and a Statement of
Purpose of about 500 to 700 words. Candidates must have at least one-year
classroom teaching or school administration experience.<br></br>
vii. PhD. Art Education (Regular/Weekend)
Candidates must have an MPhil in Fine Art, Art Education, or any Visual
Arts discipline from a recognized university. Candidates must show
evidence of a research scholarship: Thesis, Project Report, Journal article or
other acceptable publication. Candidates must also submit a comprehensive
research proposal on an appropriate topic in any Visual Arts discipline or
Arts Administration. Candidates must pass an entrance examination and
interview with a minimum of 70%.<br></br>

2. Department of Teacher Education
i. MPhil. Educational Planning and Administration
(Regular/Weekend – 2 years)
Candidates must have a Bachelor’s degree with a CGPA of 3.0 or CWA of
60 or above in any Education discipline or related field. Candidates with a
good Bachelor’s degree in a non-education related area but has PGD in
Education or Diploma in Education OR Candidates with MEd/MSc/MA in
Educational Administration or any related area (without research) from a
recognized university with a CGPA of above 2.5 and have taken and passed
a course in Research Methods may enrol on the programme. In addition,
candidates will be required to attend a selection interview.<br></br>
ii. MPhil. Educational Planning and Administration Top-Up
(Weekend - 1 year)
Online for the first semester and Weekend face-to-face the for second
semester. Candidates with M.Ed./MSc/MA in educational administration or
any related area (with/without thesis) from a recognized university with a
CGPA of above 2.5 and have taken and passed a course in research methods
at the master's level may apply to join in 2nd year for a top-up for the Master
of Philosophy degree in Planning and Administration. In addition,
candidates will be required to attend a selection interview.<br></br>

iii. EDD. Educational Planning and Administration (Regular)
Candidates must have Bachelor’s degree with a CGPA of 3.0 or CWA of 60
or above in any Education discipline or related field. Candidates must have
a professional education certificate (Masters in Higher Education Pedagogy,
Postgraduate Diploma in Education, Diploma in Education). Candidate with
relevant professional experience in educational administration, management
and leadership not less than three (3) years. In addition, candidates will be
required to attend and pass a selection interview.<br></br>
iv. MPhil. Mathematics Education (Regular/Weekend - 2 years)
Candidates must have a Bachelor’s degree with CGPA of 3.0 or CWA of 60
or better in Mathematics Education or any related discipline. Candidates
with a Bachelor’s degree with CGPA of 3.0 or CWA of 60 or better in
Mathematics or any related discipline and has a MEd in Education, PGD in
Education or Diploma in Education may enrol on the programme.
Candidates with MEd/MSc/MA in Mathematics Education or any related
area (without research) from a recognized university with a CGPA of above
2.5 or CWA of 60 may enrol on the programme. In addition, candidates will
be required to attend a selection interview.<br></br>

v. MPhil. Mathematics Education Top-Up (Weekend - 1 year)
Online for the first semester and Weekend face-to-face the for second
semester. Candidates with M.Ed. in Mathematics Education (with/without
thesis) from a recognized university with a GPA of above 2.5 and have taken
and passed a course in research methods at the master's level may apply to
join in 2nd year for a top-up for the Master of Philosophy degree in
Mathematics Education.
Candidates with either MSc in Mathematics. MSc in Statistics or any related
area (with/without thesis) from a recognized university with a CGPA of
above 2.5 and have taken and passed a course in research methods at the
master's level and possesses a professional education certificate (e.g.,
Masters in Higher Education Pedagogy, Postgraduate Diploma in
Education, Diploma in Education) may apply to join in 2nd year for a topup for the Master of Philosophy degree in Mathematics Education. In
addition, candidates will be required to attend a selection interview.<br></br>

vi. MPhil. Language Education and Literacy
Candidates must have Bachelor’s degree with CGPA of 3.0 or CWA of 60
or better in any Language Education related discipline from a recognised
university. Candidates with Bachelor’s degree with CGPA of 3.0 or CWA
of 60 or better in any Language related discipline from a recognised
university and has a MEd in Education, PGD in education or Diploma in
Education may enrol on the programme. Candidates with MEd/MSc/MA in
Language Education or any related area (without research) from a
recognized university with a CGPA of above 2.5 or CWA of 60 may enrol
on the programme. In addition, candidates will be required to attend a
selection interview.<br></br>

vii. MPhil. Language Education and Literacy (Top-Up)
Online for the first semester and Weekend face-to-face the for second
semester. Candidates with M.Ed. in Language and Literacy Education
(with/without thesis) from a recognized university with a GPA of above 2.5
and have taken and passed a course in research methods at the master's level
may apply to join in 2nd year for a top-up for the Master of Philosophy
degree in Language and Literacy Education.
Candidates with MA in Akan, English language, French, Spanish, Russian,
Swahili, Arabic, Ewe, Ga, Hausa or any related area from a recognized
university with a CGPA of above 2.5 (with/ without thesis) and have taken
and passed a course in research methods at the master's level and possesses
a professional education certificate (eg Masters in Higher Education
Pedagogy, Postgraduate Diploma in Education, Diploma in Education) may
apply to join in 2nd year for a top-up for the Master of Philosophy degree in
Language and Literacy Education. In addition, candidates will be required
to attend a selection interview.<br></br>

viii. MPhil. ICT Education (Regular/Weekend – 2 years)
Candidates must have Bachelor’s degree with CGPA of 3.0 or CWA of 60
or better in any ICT in Education related discipline from a recognised
university. Candidates with Bachelor’s degree with CGPA of 3.0 or CWA
of 60 or better in any ICT related discipline from a recognised university
and has an MED in Education, PGD in education or Diploma in Education

may enrol on the programme. Candidates with MEd/MSc in any ICT related
discipline without research from a recognized university with a CGPA of
above 2.5 or CWA of 60 and has a MEd in Education, PGD in education or
Diploma in Education may enrol on the programme. In addition, candidates
will be required to attend a selection interview.

ix. MPhil. ICT Education Top-Up (Weekend – 1 year)
Online for the first semester and Weekend face-to-face the for second
semester. Candidates with M.Ed. in ICT Education (with/without thesis)
from a recognized university with a CGPA of above 2.5 and have taken and
passed a course in research methods at the master's level may apply to join
in 2nd year for a top-up for the Master of Philosophy degree in ICT
Education.
Candidates with either MSc. (Computer Science), MSc. (Information
Technology) or MSc. (ICT) or any related area (with/without thesis from a
recognized university with a CGPA of above 2.5 and have taken and passed
a course in research methods at the master's level and also possess a
professional education certificate (eg Masters in Higher Education
Pedagogy, Postgraduate Diploma in Education, Diploma in Education) may
apply to join in 2nd year for a top-up for the Master of Philosophy degree in
ICT Education. In addition, candidates will be required to attend a selection
interview.<br></br>
x. MPhil. Science Education (Regular/Weekend – 2 years)
Candidates with BEd. Science Education, BEd. Biology Education, BEd.
Physics Education or BEd. Chemistry Education with CGPA of 3.0 or CWA
of 60 or better from a recognised university may enrol on the programme.
Candidates with BSc. Physics, Chemistry or Biology with CGPA of 3.0 or
CWA of 60 or better from a recognised university and has a MEd in
Education, PGD in Education or Diploma in Education may enrol on the
programme. In addition, candidates will be required to attend a selection
interview.<br></br>
xi. MPhil. Science Education Top-Up (Weekend – 1 year)
Online for the first semester and Weekend face-to-face the for second
semester. Candidates with M.Ed. in Science Education (with/without thesis)
from a recognized university with a GPA of above 2.5 and have taken and
passed a course in research methods at the master's level may apply to join
in 2nd year for a top-up for the Master of Philosophy degree in Science
Education.
Candidates with M.Ed. in Science Education (with/without thesis) from a
recognized university with a GPA of above 2.5 and have taken and passed
a course in research methods at the master's level may apply to join in 2nd
year for a top-up for the Master of Philosophy degree in Science Education.
In addition, candidates will be required to attend a selection interview.<br></br>
xii. PhD. Science Education (Regular)<br></br>
xiii. PhD. ICT Education (Regular)<br></br>
xiv. PhD. Mathematics Education (Regular)<br></br>
xv. PhD. Language and Literacy Education (Regular)<br></br>
xvi. PhD. Educational Planning and Administration (Regular)
Candidates with MPhil in Educational Planning, Management, Leadership
or Administration or any related area from a recognised university and with
a CGPA of 3.0 or CWA of 60 or higher. Candidates must have a professional
education certificate (Masters in Higher Education Pedagogy, Postgraduate
Diploma in Education, Diploma in Education).
SANDWICH PROGRAMMES (TO BE RUN ONLINE AND FACETO-FACE DURING GES VACATION)<br></br>
i. MEd. Higher Education Pedagogy (Online)
Candidates with a non-education bachelor’s degree from an accredited
institution with a CGPA of 2.5 or a CWA of 50.0 which is second-class
lower or better. Candidate MUST be a lecturer, tutor, or instructor in a
tertiary institution. In addition, candidates will be required to attend a
selection interview.<br></br>
ii. Post Graduate Diploma in Education (Online)
Candidates with a with a good bachelor’s degree with a CGPA of 2.5 or a
CWA of 50.0 which is second class lower or better. Candidates should be a
teacher or have an intention of being a professional teacher at any level of
Ghana’s education system.<br></br>

iii. Post Graduate Diploma in Education (KNUST STUDENTS ONLY)
The programme is designed for KNUST continuing students interested in
becoming professional teachers after graduating. Candidates must have
gained admission into undergraduate programmes in KNUST and must have
completed one (1) year with a CWA of 50 or better.<br></br>
iv. MEd. Educational Planning and Administration (Online)
Candidates must have a Bachelor’s degree with a CGPA of 2.5 or CWA of
55 and above in any education discipline or related field or a good
Bachelor’s degree in a non-education related area but has a MEd in
Education, PGD in Education or Diploma in Education. In addition,
candidates will be required to attend a selection interview.<br></br>
v. MEd. Mathematics Education (Online)
Candidates must have a Bachelor’s degree in Mathematics Education or any
related discipline or a good Bachelor’s degree in Mathematics, Statistics or
Actuarial Science or any related discipline and has a MEd in Education,
PGD in Education or Diploma in Education. In addition, candidates will be
required to attend a selection interview.<br></br>
vi. MEd. ICT Education (Online)
Candidates must have a Bachelor’s degree in any ICT Education related
discipline from a recognised university OR Candidates with a good
Bachelor’s degree in any ICT-related discipline from a recognised
university and has an MEd in Education, PGD in Education or Diploma in
Education. In addition, candidates will be required to attend a selection
interview.<br></br>
vii. MEd. Science Education (Online)
Candidates must have a BEd. Science Education, BEd. Biology Education,
BEd. Physics Education or BEd. Chemistry Education from a recognised
university. Candidates with BSc. Physics, Chemistry or Biology with CGPA
of 3.0 or CWA of 60 or better from a recognised university and has a MEd
in Education, PGD in Education or Diploma in Education may enrol on the
programme. In addition, candidates will be required to attend and pass a
selection interview.<br></br>
viii. MEd. Language Education and Literacy (Online)
Candidates must have a Bachelor’s degree in any Language Education
related discipline from a recognised university. Candidates with a good
Bachelor’s degree in any Language related discipline from a recognised
university and has a MEd in Education, PGD in Education or Diploma in
Education may enrol on the programme. In addition, candidates will be
required to attend a selection interview.<br></br>
            </p>
          </>
        ) : null}
        <button style={styles.readMoreButton} onClick={toggleReadMore}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
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
    paddingTop: '135px',
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
  },
};

export default AboutPage;