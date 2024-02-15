
import  { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.png';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';
import { Skeleton } from 'antd';
import { Suspense } from 'react';


const TimelineItem = ({ className, date, imageSrc, iconStyle, title, subtitle, content, icon, morecontent, Weblink, }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Suspense fallback={<Skeleton.Image active  paragraph={{ rows: 4,}} />}>
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
     
      <div style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', width: 'auto', height:'250px' }} />
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
        <CardContent>
      {morecontent}
      </CardContent>
      </Collapse>
    </VerticalTimelineElement>
    </Suspense>
  );
};

const NewsTimeline = () => {
  const newsData = [
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>12th February</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "FESSA WEBSITE on your doorstep",
      subtitle: "FESSA Adminstration",
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1707727838/tinyimages/photo_2024-02-12_08-44-52_m0bybr.webp',
      content: "Attention students, we are glad to announce to you that, from Monday, 12th of February 2024, the FESSA WEBSITE Quick Response (QR) scan code will be pasted in all the lecture rooms in the faculty area, and on the notice board at CCB and KSB for easy access. Thank you",
      morecontent: 'FESSA IS GREAT  👍💯',
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>6th February</div>,
      icon: <img src={logo2} alt="knust logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "MATRICULATION CEREMONY",
      subtitle: "KNUST Adminstration",
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1707211506/tinyimages/photo_2024-02-06_09-18-29new_hr3thv.webp',
      content: "The University will be holding a Matriculation Ceremony for all freshers Virtually (Online). After the ceremony students have up to 5:00pm to login to the *Matriculation Oath Submission Portal.*Below is the link for the Matriculation Oath:matriculation.knust.edu.gh",
      Weblink:'https://matriculation.knust.edu.gh',
      morecontent: '🗓️ *Tuesday, 6th Feb. 2024* 🕘 *9:00am* *_Via YouTube: https://bit.ly/YouTubeTekTv',
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>1st February</div>,
      icon: <img src={logo2} alt="knust logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "Available Scholarships",
      subtitle: "KNUST Adminstration",
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1706818373/tinyimages/photo_2024-02-01_12-06-16newnew_qpqmsn.webp',
      content: "First 3 Scholarships, are still open",
Weblink:'https://www.knust.edu.gh/',
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>28th January</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "FESSA EGM",
      subtitle: "FESSA adminstration",
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1706469904/tinyimages/photo_2024-01-28_11-05-121_iu0wox.jpg',
      content: "All Executives, both elected and appointees should kindly take notice, and obey in accordance.",
      morecontent: 'Lecture Room 2, Faculty of Education Area. 4:00pm prompt on Friday, 2nd February 2024',
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>20th December</div>,
      icon: <img src={logo2} alt="Knust logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "Arrival of Continuing Students",
      subtitle: "KNUST adminstration",
      imageSrc: 'https://pbs.twimg.com/media/FmdHwJRX0AMXEtz?format=jpg&name=4096x4096',
      content: "Continuing students are expected to arrive on campus on Saturday, January 13, 2024",
      morecontent: 'Learners are expected to report early in order to carry out any necessary activity.... ',
      Weblink:'https://twitter.com/KNUSTNotice/status/1731158737241387207',
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>20th December</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height:'auto', objectFit: 'cover' }} />,
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
       <div>
      <hr style={{ height: '14px', border: 'none', backgroundColor: 'white' }} />
      <h3 style={{textAlign:'center', color:'white'}}>News</h3>
      <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', width: '30%', maxWidth: '240px', height: '1px', marginRight: '5%', backgroundColor: '#ccc' }}></div>
        <img src="https://res.cloudinary.com/dgpxvazru/image/upload/v1707219355/tinyimages/education_2_fyq1ra.png" alt="News Icon" style={{ display: 'inline-block', margin: '0', width: 'auto', height: '40px' }} />
        <div style={{ display: 'inline-block', width: '30%', maxWidth: '240px', height: '1px', marginLeft: '5%', backgroundColor: '#ccc' }}></div>
      </div>
      <br />
      <VerticalTimeline >
        {newsData.map((newsItem, index) => (
          <TimelineItem key={index} {...newsItem} />
        ))}
      </VerticalTimeline>
    </div>
    <hr  style={{ height: '14px', border: 'none', backgroundColor: 'white' }}/>
    </div>
  );
};

export default NewsTimeline;

