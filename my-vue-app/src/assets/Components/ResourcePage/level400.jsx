import Course from "./course";

const coursesData = [
  { code: 'EDU 451', title: 'STS: EXTENDING TEACHING (INTERNSHIP)' },
  { code: 'LLSJ 453', title: 'PORTFOLIO DEVELOPMENT' },
  { code: 'EDU 455', title: 'ACTION RESEARCH PROJECT ' },
  // Add more courses as needed
];

const Level400 = () => (
  <div>
    <h1>My Courses</h1>
    <Course courses={coursesData} />
  </div>
);

export default Level400;