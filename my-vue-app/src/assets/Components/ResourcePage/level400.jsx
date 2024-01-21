import Course from "./course";

const coursesData = [
  { code: 'EDU 451',category:'firstsem', title: 'STS: EXTENDING TEACHING (INTERNSHIP)', Link:'' },
  { code: 'LLSJ 453',category:'firstsem', title: 'PORTFOLIO DEVELOPMENT', Link:'' },
  { code: 'EDU 455',category:'firstsem', title: 'ACTION RESEARCH PROJECT ', Link:'' },
  { code: '',category:'LicensureExams', title: 'LICENSURE EXAMINATION PAST QUESTIONS', },
  // Add more courses as needed
];
const Level400 = () => {
  const firstSemesterCourses = coursesData.filter(course => course.category === 'firstsem');
  const secondSemesterCourses = coursesData.filter(course => course.category === 'secondsem');
  const LicensureExams = coursesData.filter(course => course.category === 'LicensureExams');

  return (
    <div style={{ paddingTop: '90px', background: 'rgb(17, 50, 91)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>First Semester</h2>
      <Course courses={firstSemesterCourses} semester="First Semester" />
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Second Semester</h2>
      <Course courses={secondSemesterCourses} semester="Second Semester" />
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Licensure Exams</h2>
      <Course courses={LicensureExams} semester="Licensure Exams" />
    </div>
  );
};


export default Level400;
