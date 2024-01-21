import Course from "./course";

const coursesData = [
  { code: 'ENGL 157', title: 'COMMUNICATION SKILLS', Link:'https://drive.google.com/drive/folders/1Dfg3jK4QGJ4rXZBIkMZX10U5PYSPax1Q?usp=drive_link', category:'firstsem' },
  { code: 'EDU 153', title: 'FOUNDATIONS OF EDUCATION IN GHANA', Link:'https://drive.google.com/drive/folders/1E20cydljxKmc8l5t9B97OkbeRJ4Fi0GR?usp=drive_link', category:'firstsem' },
  { code: 'EDU 153', title: 'INCLUSIVE SCHOOL-BASED INQUIRY', Link:'https://drive.google.com/drive/folders/1BWMcBtU0LjjVLPrA-BdBDOWRGGlCTG9E?usp=drive_link', category:'firstsem' },
  { code: 'GST 151', title: 'FOUNDATIONS OF SOCIAL STUDIES AND TVET', Link:'https://drive.google.com/drive/folders/1CCB7Yez4B20ITVO21nLJ9dHkEHYigrt7?usp=drive_link', category:'firstsem' },
  { code: 'ISC 151', title: 'INTRODUCTION TO INTEGRATED SCIENCE I', Link:'https://drive.google.com/drive/folders/1BbXi4D5UsS2CkdcOLDJoVprXmLtUxMkf?usp=drive_link', category:'firstsem' },
  { code: 'LLS 151', title: 'INTRODUCTION TO LANGUAGE AND LITERACY', Link:'https://drive.google.com/drive/folders/1CMyHvtQ3ryS_hFt3NyDX0Eb9Wq7v1mFA?usp=drive_link' , category:'firstsem'},
  { code: 'MATH 157', title: 'INTRO. TO LEARNING, TEACHING & APPLYING ALGEBRA', Link:'https://drive.google.com/drive/folders/1CCwc0Uhm1bEJfeGy7LAQvxHzKv0XeEfR?usp=drive_link' , category:'firstsem'},
  { code: '', title: 'COMMUNICATION SKILLS (II)' , Link:'', category:'secondsem'},
  { code: '', title: 'INTERGRATED SCIENCE (II)' , category:'secondsem', Link:'https://drive.google.com/drive/folders/1FoMMh36gDP4U9ShJBypi_I8AGrGg6Kd1?usp=drive_link',},
  { code: '', title: 'INTRO. TO ICT' , category:'secondsem', Link:'https://drive.google.com/drive/folders/1Fn2XrD6rXc-4azzge0nyRm02EgXxgUcA?usp=drive_link',},
  { code: '', title: 'LEARNING TEACHING AND APPLYING GEOMETRY &HANDLING DATA' , category:'secondsem', Link:'https://drive.google.com/drive/folders/1H3WuDx_NGIcaKQXrooT_E0rUj8f2F9EI?usp=drive_link',},
  { code: '', title: 'PHYSICAL EDUCATION, MUSIC & DANCE' , category:'secondsem', Link:'https://drive.google.com/drive/folders/1HMtQT9i2O2nIJbAa_7QbI60KPBA3MqBL?usp=drive_link',},
  { code: '', title: 'PSYCHOLOGY OF HUMAN GROWTH AND LEARNING' , category:'secondsem', Link:'https://drive.google.com/drive/folders/1HHhWe0Db0fyMiyNlY-Jm_uPwtFoXNMiZ?usp=drive_link',},
  // Add more courses as needed
];

const Level100 = () => {
  const firstSemesterCourses = coursesData.filter(course => course.category === 'firstsem');
  const secondSemesterCourses = coursesData.filter(course => course.category === 'secondsem');

  return (
    <div style={{ paddingTop: '90px', background: 'rgb(17, 50, 91)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>First Semester</h2>
      <Course courses={firstSemesterCourses} semester="First Semester" />
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Second Semester</h2>
      <Course courses={secondSemesterCourses} semester="Second Semester" />
    </div>
  );
};


export default Level100;
