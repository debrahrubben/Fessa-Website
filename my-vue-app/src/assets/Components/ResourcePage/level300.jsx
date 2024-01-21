import Course from "./course";

const coursesData = [
  { code: 'EDU J 353', title: 'INQUIRY AND ACTION RESEARCH IN JHS' },
  { code: 'HIS J 351', title: 'CURRICULUM AND ASSESSMENT IN HISTORY' },
  { code: 'HIST 353', title: 'ECONOMICS HISTORY OF GHANA AND PRE-COLONIAL TO THE COLONIAL PERIOD' },
  { code: 'ICT J 353', title: 'DATABASE SYSTEM AND SOFTWARE DEVELOPMENT' },
  { code: 'ICT J 353', title: 'WEB AND APPLICATION DEVELOPMENT' },
  { code: 'LIS J 353', title: 'ENGLISH CURRICULUM FOR JHS' },
  { code: 'MATH J 351', title: 'TEACHING AND ASSESSING (INTERMEDIATE)' },
  { code: 'MATH J 353', title: 'LEARNING, TEACHING AND APPLYING CALCULUS' },
  { code: 'SCI J 351', title: 'ENERGY AND FORCES FIELDS' },
  { code: 'SCI J 353', title: 'PREPARING TO TEACH SCIENCE' },
  { code: 'SSJ 351', title: 'ENVIRONMENTAL AND SOCIAL ISSUES IN CONTEMPORARY GHANA' },
  { code: 'SSJ 353', title: 'CONFLICT MANAGEMENT AND PEACE BUILDING' },
  { code: 'VAJ 357', title: 'INTRODUCTION TO LEATHER WORKS' },
  { code: 'VAJ 367', title: 'INTRODUCTION TO TEXTILES' },
  { code: 'VAJ 369', title: 'METHODS OF TEACHING VISUAL' },
  { code: 'VAJ 371', title: 'PROFESSIONAL ETHICS AND VISUAL ARTS PRACTITIONER' },
  // Add more courses as needed
];

const Level300 = () => (
  <div>
    <h1>My Courses</h1>
    <Course courses={coursesData} />
  </div>
);

export default Level300;