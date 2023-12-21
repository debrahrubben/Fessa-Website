import  { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.png';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';

const TimelineItem = ({ className, date, imageSrc, iconStyle, title, subtitle, content, icon, morecontent }) => {
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
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h5 className="vertical-timeline-element-subtitle" >{subtitle}</h5>
      <div style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', width: '100%', height: '200px' }} />
      <p>{content}</p>
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
        <CardContent>
          {morecontent}
        </CardContent>
      </Collapse>
    </VerticalTimelineElement>
  );
};

const NewsTimeline = () => {
  const newsData = [
    {
      date: <div style={{color:'white'}}>2011 - present</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "News Title",
      subtitle: "author",
      imageSrc: 'https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg',
      content: "This is where the actual news go. Strategy, Social Media",
      morecontent: 'dkjcsjfv jkvnjnvkd'
    },
    {
      date: <div style={{color:'white'}}>2011 - present</div>,
      icon: <img src={logo2} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "News Title",
      subtitle: "author",
      imageSrc: 'https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg',
      content: "This is where the actual news go. Strategy, Social Media",
      morecontent: 'dkjcsjfv jkvnjnvkd'
    },
    {
      date: <div style={{color:'white'}}>2011 - present</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "News Title",
      subtitle: "author",
      imageSrc: 'https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg',
      content: "This is where the actual news go. Strategy, Social Media",
      morecontent: 'dkjcsjfv jkvnjnvkd'
    },
    // Add more news items as needed
  ];

  return (
    <div style={{ background: '#17223A' }}>
      <VerticalTimeline>
        {newsData.map((newsItem, index) => (
          <TimelineItem key={index} {...newsItem} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default NewsTimeline;
