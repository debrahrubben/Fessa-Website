import Course from "./course";

const coursesData = [
  { code: '', title: '' },
  { code: '', title: '' },
  { code: '', title: '' },
  { code: '', title: '' },
  { code: '', title: '' },
  { code: '', title: '' },
  { code: '', title: '' },
  { code: '', title: '' },
  { code: '', title: '' },
  { code: '', title: '' },
  // Add more courses as needed
];

const Level300 = () => (
  <div>
    <h1>My Courses</h1>
    <Course courses={coursesData} />
  </div>
);

export default Level300;