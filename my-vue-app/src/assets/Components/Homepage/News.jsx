
import  { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from '../../images/logo.webp';
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
      date: <div style={{color:'rgb(188, 196, 214)'}}>22nd August</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "SCSC T-shirt",
      subtitle: "FESSA Adminstration",
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1725927787/tinyimages/photo_2024-09-10_00-16-50_pl6lac.webp',
      content: "The Social and Community Service Club (SCSC) has officially launched its T-shirt which will be in used beginning from next academic year.",
      
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>22nd August</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "FESSA CLOTHE 2024",
      subtitle: "FESSA Adminstration",
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1725927787/tinyimages/photo_2024-09-10_00-16-58_xsseb4.webp',
      content: "Embrace the new FESSA Clothe",
      
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>22nd August</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "GILDED GLAMOUR DINNER AND AWARDS NIGHT 🏅",
      subtitle: "FESSA Adminstration",
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1724352206/tinyimages/photo_2024-08-22_18-25-05_elj2lj.webp',
      content: "Ready For De  Most Popular  Dinner & Awards Night In KNUST",
      morecontent: 'The venue will be transformed into a fairytale setting, with sparkling decorations and elegant attire. The music will be enchanting, the food will be exquisite, and the company will be divine. Everyone will come together to dance, laugh, and make unforgettable memories. It will be a night of joy, love, and celebration, a true masterpiece of merriment!.',
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>7th July</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "GILDED GLAMOUR DINNER AND AWARDS NIGHT 🏅",
      subtitle: "FESSA Adminstration",
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1720028748/tinyimages/WhatsApp_Image_2024-06-26_at_5.43.55_PM_unmmgf.webp',
      content: "GILDED GLAMOUR will be a majestic celebration, a night to remember!",
      morecontent: 'The venue will be transformed into a fairytale setting, with sparkling decorations and elegant attire. The music will be enchanting, the food will be exquisite, and the company will be divine. Everyone will come together to dance, laugh, and make unforgettable memories. It will be a night of joy, love, and celebration, a true masterpiece of merriment!.',
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>7th July</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "FESSA Week Celebration",
      subtitle: "FESSA Adminstration",
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1720028748/tinyimages/WhatsApp_Image_2024-07-01_at_9.00.37_AM_w4qjrk.webp',
      content: "The most exciting week of the semester is coming again",
      morecontent: 'There will be a lot of activities and fun, educative and opportunities.Anticipate the 3rd FESSA Week Celebrations.',
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>7th July</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: " Anticipate Movie Night",
      subtitle: "FESSA Adminstration",
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1720028748/tinyimages/WhatsApp_Image_2024-07-01_at_7.00.56_PM_hjm5lw.webp',
      content: "A night of love, a night of joy, a night of socializing, and many more.",
      morecontent: 'fessaweekcelebration',
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>12th June</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "Good day people of FESSA",
      subtitle: "FESSA Adminstration",
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1718225613/tinyimages/photo_2024-06-12_20-49-42_eacnmk.webp',
      content: "It is with a good pleasure to introduce the newly elected FESSA Executives for the next academic year.",
      morecontent: 'Congratulations to you all.🥳🥳🥳🥳🥳🥳🥳🥳🥳',
    },
    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>12th June</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "Leadership Mentor of the Year",
      subtitle: "FESSA administration",
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1718225859/tinyimages/photo_2024-06-12_20-53-35_cssqfs.webp',
      content: "Congratulations, your achievements within the 2023/2024 academic year has earned you recognition in the ongoing Ghana Student Leaders' Awards 2024.",
      morecontent: 'Good day people of FESSA, thank you all for your support. I will need your support on the day of voting 🙏🏼🙏🏼.',
    },

    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>15th May</div>,
      icon: <img src={logo2} alt="Knust logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "KNUST SRC Weekend School",
      subtitle: "KNUST Adminstration",
      Weblink:'https://forms.gle/A8pdtmmPrBWYpG8g7',
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1715811032/tinyimages/photo_2024-05-15_22-03-22_gpk4fx.webp',
      content: "Registration is absolutely free tap on this news card to register. The KNUST SRC Weekend School is here!Enroll in any of the courses available and earn a recognized certificate.",
      morecontent: 'Get interactive with the SRC through these social media accounts 🎯● facebook.com/knust_src ● twitter.com/knust_src ● instagram.com/knust_src ©️ KNUST SRC - 23/24*🔰```YVONNE-NANA KWABENA LED ADMINISTRATION ```',
    },

    {
      date: <div style={{color:'rgb(188, 196, 214)'}}>22nd February</div>,
      icon: <img src={logo} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      title: "Hangout and Socialization",
      subtitle: "FESSA Adminstration",
      imageSrc: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1708612734/tinyimages/photo_2024-02-22_14-35-00new_nlcbeu.webp',
      content: "Good day seniors, my name is Fresher, please we want to have fun and also socialize with you on Friday, the 1st of March 2024 at 6:00 pm at Publishing Hall. A lot of excitement to release midsem stress. Come and let us have fun.",
      morecontent: 'Signed(Entertainment Head) Prince Osei',
    },
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

