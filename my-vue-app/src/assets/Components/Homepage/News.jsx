import  { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.png';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';

const TimelineItem = ({ className, date, imageSrc, iconStyle, title, subtitle, content, icon, morecontent, Weblink, }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <VerticalTimelineElement 
      className={className}
      date={date}
      
      iconStyle={iconStyle}
      icon={icon}
      
    >
      <div>
      <a href={Weblink} style={{ textDecoration: 'none', color: 'black' }}>
      <h4 className="vertical-timeline-element-title">{title}</h4>
      <i className="vertical-timeline-element-subtitle" >{subtitle}</i>
      <div style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', width: '100%', height: '200px' }} />
      </a>
     <p>{content}</p>
     
     </div>
      <div>
      <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      {morecontent}
      </Collapse>
    </VerticalTimelineElement>
  );
};

const NewsTimeline = () => {
  const newsData = [
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>20th December</div>,
      icon: <img src={logo2} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "Arrival of Continuing Students",
      subtitle: "KNUST adminstration",
      imageSrc: 'https://pbs.twimg.com/media/FmdHwJRX0AMXEtz?format=jpg&name=4096x4096',
      content: "Continuing students are expected to arrive on campus on Saturday, January 13, 2024",
      morecontent: 'Learners are expected to report early in order to carry out any necessary activity.... ',
      Weblink:'https://twitter.com/KNUSTNotice/status/1731158737241387207',
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>20th December</div>,
      icon: <img src={logo2} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "Biometric Registration",
      subtitle: "KNUST Adminstration",
      imageSrc: 'https://media.licdn.com/dms/image/C4E22AQGJEAfAT5Av7Q/feedshare-shrink_800/0/1627113100712?e=2147483647&v=beta&t=N5oDb76IPjmWErwvwCLR5iDV-7T__6WrGCZHEdOrueM',
      content: "Biometric Registration for continuing students and Lectures begins on Monday, January 15, 2024 to Monday, February 5, 2024.",
      morecontent: 'Students are expected to register in time else they wont be enrolled for the Academic Semester. Teaching also begins on Monday January 15',
      Weblink:'https://x.com/VOICE_of_KNUST/status/1659865185543233537?s=20',
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>20th December</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "Mr. President, congratulations🥳. ",
      subtitle: "FESSA News Hub",
      imageSrc: 'https://pbs.twimg.com/media/F9cb84dWoAEUuib?format=jpg&name=900x900',
      content: "May your good works continue forever. FESSA is proud of you.",
      morecontent: '',
      Weblink:'https://x.com/FessaKnust/status/1717873279233360274?s=20',
    },
    // Add more news items as needed
  ];

  return (
    <div style={{ background: '#17223A' }}>
      <VerticalTimeline >
        {newsData.map((newsItem, index) => (
          <TimelineItem key={index} {...newsItem} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default NewsTimeline;
