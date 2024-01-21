import Course from "./course";

const coursesData = [
  { code: 'EDU J 253', title: 'DIFFERENTIATED PLANNING AND MULTIMEDIA DEVELOPMENT FOR JHS' },
  { code: 'HIS J 251', title: 'INTRODUCTION TO THE STUDY OF HISTORY' },
  { code: 'HIS J 252', title: 'POLITICAL HISTORY OF GHANA-CHIEFTAINCY AND BRITISH COLONIAL RULE' },
  { code: 'ICT J 251', title: 'EDUCATIONAL AND INSTRUCTIONAL TECHNOLOGY' },
  { code: 'ICT J 259', title: 'MULTIMEDIA AND AUTHORING SYSTEM' },
  { code: 'LLS J 251', title: 'TEACHING, SPEAKING, AND LISTENING FOR JHS TEACHERS' },
  { code: 'MATH J 251', title: 'THEORIES IN THE LEARNING OF MATHEMATICS (JHS)' },
  { code: 'MATH J 253', title: 'LEARNING, TEACHING AND APPLYING FURTHER ALGEBRA' },
  { code: 'SCI J 255', title: 'ENVIRONMENTAL BIOLOGY' },
  { code: 'SCI J 257', title: 'PARTICULATE NATURE OF CHEMISTRY' },
  { code: 'SOJ', title: 'INTRODUCTION OF THE STUDY OF SOCIAL STUDIES' },
  { code: 'SOJ', title: 'POPULATION AND ECONOMIC DEVELOPMENT IN GHANA' },
  { code: 'VAJ 251', title: 'CONCEPTS AND FOUNDATIONAL SKILLS IN DRAWING' },
  { code: 'VAJ 251', title: 'HISTORY AND PHILOSOPHICAL FOUNDATIONAL OF VISUAL ARTS' },
  { code: 'VAJ 253', title: 'INTRODUCTION TO 3-DIMENSIONAL ART' },
  { code: 'VAJ 255', title: 'INTRODUCTION TO 2-DIMENSIONAL ART' },
  // Add more courses as needed
];

const Level200 = () => (
  <div>
    <h1>My Courses</h1>
    <Course courses={coursesData} />
  </div>
);

export default Level200;