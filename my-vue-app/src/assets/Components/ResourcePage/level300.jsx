import Course from "./course";

const coursesData = [
  { code: 'EDU J 353',category:'firstsem', title: 'INQUIRY AND ACTION RESEARCH IN JHS', Link:'https://drive.google.com/drive/folders/1_D0dFe7qZ-Mt7DugPBUbSsic0tTU3ctk?usp=drive_link' },
  { code: 'ICT J',category:'firstsem', title: 'ICT SPECIALIZATION' , Link:'https://drive.google.com/drive/folders/1SgpgNkbkbEtmjMuGeCKx18Vw9kUCQ2b-?usp=drive_link'},
  { code: 'LIS J 353', category:'firstsem', title: 'ENGLISH CURRICULUM FOR JHS' , Link:'https://drive.google.com/drive/folders/1_xtWVdzLE3yNPtmuUBN6CmM2z0d56hPo?usp=drive_link'},
  { code: 'MATH J',category:'firstsem', title: 'MATHEMATICS SPECIALIZATION' , Link:'https://drive.google.com/drive/folders/1SKmz3hgN4omhtO6O5ta1Ro-8SyxqQIXn?usp=drive_link'},
  { code: 'SCI J 353',category:'firstsem', title: 'SCIENCE SPECIALIZATION', Link:'https://drive.google.com/drive/folders/1SdTfOTMkKBkU7SNFQw8di1EwSZURcTgb?usp=drive_link' },
  { code: '',category:'sts', title: 'STS: EMBEDDING TEACHING', Link:'https://drive.google.com/drive/folders/1CZzJtw43zJs5h38q3-HAUhV77sUp7MpN?usp=drive_link' },
  // Add more courses as needed
];

const Level300 = () => {
  const firstSemesterCourses = coursesData.filter(course => course.category === 'firstsem');
  const sts = coursesData.filter(course => course.category === 'sts');

  return (
    <div style={{ paddingTop: '90px', background: 'rgb(17, 50, 91)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>First Semester</h2>
      <Course courses={firstSemesterCourses} semester="First Semester" />
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>STS</h2>
      <Course courses={sts} semester="sts" />
    </div>
  );
};


export default Level300;
