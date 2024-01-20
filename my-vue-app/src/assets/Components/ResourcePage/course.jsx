
import { styled } from '@mui/material/styles';

const Card = styled('div')(({ theme }) => ({
  width: 280,
  height: 150,
  borderRadius: 15,
  boxShadow: theme.shadows[5],
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  flexDirection: 'column',
  background: 'linear-gradient(to right, rgba(20, 30, 48), rgba(36, 59, 85))',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
}));

const TimeText = styled('p')(({ theme }) => ({
  fontSize: 50,
  marginTop: 0,
  marginLeft: 15,
  fontWeight: 600,
  fontFamily: 'Gill Sans',
  color: theme.palette.primary.contrastText,
}));

const TimeSubText = styled('span')(({ theme }) => ({
  fontSize: 15,
  marginLeft: 5,
  color: theme.palette.primary.contrastText,
}));

const DayText = styled('p')(({ theme }) => ({
  fontSize: 18,
  marginTop: 0,
  marginLeft: 15,
  fontWeight: 500,
  fontFamily: 'Gill Sans',
  color: theme.palette.primary.contrastText,
}));

const Moon = styled('svg')(({ theme }) => ({
  fontSize: 20,
  position: 'absolute',
  right: 15,
  top: 15,
  transition: 'all 0.3s ease-in-out',
}));

const Course = () => {
  return (
    <div style={{paddingTop:'90px',}}>
    <Card>
      <TimeText>
        <span>11:11</span>
        <TimeSubText>PM</TimeSubText>
      </TimeText>
      <DayText>Wednesday, June 15th</DayText>
      <Moon />
    </Card>
    </div>
  );
};

export default Course;