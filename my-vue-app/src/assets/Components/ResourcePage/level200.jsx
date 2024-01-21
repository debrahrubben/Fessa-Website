import Course from "./course";

const coursesData = [
  { code: 'EDU J 253', category:'firstsem', title: 'DIFFERENTIATED PLANNING AND MULTIMEDIA DEVELOPMENT FOR JHS', Link:'https://drive.google.com/drive/folders/1LTfp-LMMFAfCMRL3mhEYEL0qt7e0vk4j?usp=drive_link' },
  { code: 'HIS J 251', category:'firstsem',title: 'INTRODUCTION TO THE STUDY OF HISTORY', Link:'' },
  { code: 'HIS J 252', category:'firstsem', title: 'POLITICAL HISTORY OF GHANA-CHIEFTAINCY AND BRITISH COLONIAL RULE', Link:'' },
  { code: 'ICT J 251', category:'firstsem', title: 'EDUCATIONAL AND INSTRUCTIONAL TECHNOLOGY', Link:'https://drive.google.com/drive/folders/1MHmL4j1A-iWknJxrCG0_Yk1ekPFCiCJY?usp=drive_link' },
  { code: 'ICT J 259', category:'firstsem', title: 'MULTIMEDIA AND AUTHORING SYSTEM', Link:'https://drive.google.com/drive/folders/1NktG8sHAoLJmXKDJqS4PiUPx-LptKNhG?usp=drive_link' },
  { code: 'LLS J 251', category:'firstsem', title: 'TEACHING, SPEAKING, AND LISTENING FOR JHS TEACHERS', Link:'https://drive.google.com/drive/folders/1KQGFPcNN_zw9LTXNCBzt1MW24grBKlUq?usp=drive_link' },
  { code: 'MATH J 251', category:'firstsem', title: 'THEORIES IN THE LEARNING OF MATHEMATICS (JHS)' , Link:'https://drive.google.com/drive/folders/1PWqbIE4yUAk39dhIvwfBQve0KyZ3tRUr?usp=drive_link' },
  { code: 'MATH J 253', category:'firstsem',title: 'LEARNING, TEACHING AND APPLYING FURTHER ALGEBRA', Link:'https://drive.google.com/drive/folders/1PdiaXG-OXCjo4zvfYIjpTOj6N-ZNcj6T?usp=drive_link' },
  { code: 'SCI J 255', category:'firstsem',title: 'ENVIRONMENTAL BIOLOGY' , Link:'https://drive.google.com/drive/folders/1bIxVaXC5_g2n56xCFlmKlWewZS2VDplk?usp=drive_link'},
  { code: 'SCI J 257', category:'firstsem',title: 'PARTICULATE NATURE OF CHEMISTRY', Link:'https://drive.google.com/drive/folders/1auvzYrqBDhrIcLXUghWZoy-kRE10AhK5?usp=drive_link' },
  { code: 'SOJ', category:'firstsem',title: 'INTRODUCTION OF THE STUDY OF SOCIAL STUDIES', Link:'https://drive.google.com/drive/folders/1-2P4z8dtPJoXZ6bljtHh9QDYfmRiWahd?usp=drive_link' },
  { code: 'SOJ', category:'firstsem',title: 'POPULATION AND ECONOMIC DEVELOPMENT IN GHANA', Link:'https://drive.google.com/drive/folders/1-5XmF1oSjbltT_JNZkp7Hf5kSzxZ7Dqb?usp=drive_link' },
  { code: 'VAJ', category:'firstsem',title: 'VISUAL ARTS SPECIALIZATION' , Link:'https://drive.google.com/drive/folders/1-1gxG-_ppQMHxURWNpOEQFzcyi25OeNy?usp=drive_link'},
  { code: '', category:'secondsem', title: 'Psychological basis & Assessment', Link:'https://drive.google.com/drive/folders/1WCOx6JCo-Sb_ii46GaIZuPzqkark663K?usp=drive_link' },
  { code: '', category:'secondsem',title: 'Teaching reading & writing' , Link:'https://drive.google.com/drive/folders/1X-OBh7-ZE-yB3un8aPOnsEChTv9AMOV6?usp=drive_link'},
  { code: '', category:'secondsem', title: 'MATHEMATICS SPECIALIZATION', Link:'https://drive.google.com/drive/folders/1P7MEi80ScN6SEYzMYsZMWcEDpjQUG2GX?usp=drive_link' },
  { code: '', category:'secondsem', title: 'SCIENCE SPECIALIZATION', Link:'https://drive.google.com/drive/folders/1PAiZog30QPJB92mKkrWb56QxCt4Sy4SM?usp=drive_link' },
  { code: '', category:'secondsem', title: 'ICT SPECIALIZATION', Link:'https://drive.google.com/drive/folders/1PFN-NPqUscvNFAcmQ5GD8cedHA6TDcH9?usp=drive_link' },
  { code: '', category:'secondsem', title: 'SOCIAL STUDIES AND HISTORY SPECIALIZATION', Link:'https://drive.google.com/drive/folders/1-23YVlxEmSol2PdjWVNbnavbk4vBiDHr?usp=drive_link' },
  { code: '', category:'secondsem', title: 'VISUAL ARTS SPECIALIZATION', Link:'https://drive.google.com/drive/folders/1-6YrOJatcN-ZpAYhKV-BKUt-ujiWP5Me?usp=drive_link' },
  // Add more courses as needed
];

const Level200 = () => {
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


export default Level200;
