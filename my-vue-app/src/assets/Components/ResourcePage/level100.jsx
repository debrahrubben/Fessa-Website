import Course from "./course";

const coursesData = [
  { code: 'ENGL 157', title: 'COMMUNICATION SKILLS' },
  { code: 'EDU 153', title: 'FOUNDATIONS OF EDUCATION IN GHANA' },
  { code: 'EDU 153', title: 'INCLUSIVE SCHOOL-BASED INQUIRY' },
  { code: 'EDU 155', title: 'STS BEGINNING TEACHING' },
  { code: 'GST 151', title: 'FOUNDATIONS OF SOCIAL STUDIES AND TVET' },
  { code: 'ISC 151', title: 'INTRODUCTION TO INTEGRATED SCIENCE I' },
  { code: 'LLS 151', title: 'INTRODUCTION TO LANGUAGE AND LITERACY' },
  { code: 'MATH 157', title: 'INTRODUCTION TO LEARNING, TEACHING, AND APPLYING NUMBERS AND ALGEBRA' },
  // Add more courses as needed
];

const Level100 = () => (
  <div>
    <h1>My Courses</h1>
    <Course courses={coursesData} />
  </div>
);

export default Level100;
