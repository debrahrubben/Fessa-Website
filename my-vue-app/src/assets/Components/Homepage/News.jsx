import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import logo from '../../images/logo.png'; // Import your logo
import logo2 from '../../images/logo2.png';

const TimelineItem = ({ className, date, imageSrc, iconStyle, title, subtitle, content, icon }) => (
  <VerticalTimelineElement
    className={className}
    date={date}
    iconStyle={iconStyle}
    icon={icon}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h5 className="vertical-timeline-element-subtitle">{subtitle}</h5>
    <div style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', width: '100%', height: '200px' }} />
    <p>{content}</p>
  </VerticalTimelineElement>
);

export default function News() {
  const logoStyle = {
    width: '100%', // Set the desired width
    height: 'fit', // Set the desired height
    objectFit: 'cover', // Preserve aspect ratio and cover the space
  };

  return (
    <div  style={{background: '#17223A',}}>
    <VerticalTimeline>
      {/* Work Experience */}
      <TimelineItem
        className="vertical-timeline-element--work"
        date="2011 - present"
        icon={<img src={logo} alt="fessa logo" style={logoStyle} />}
        title="News Title"
        subtitle="author"
        imageSrc='https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg'
        content=" this is where the actual news go. Strategy, Social Media"
      />

      {/* Add more work experience items here using TimelineItem */}
      
      {/* Education */}
      <TimelineItem
        className="vertical-timeline-element--education"
        date="April 2013"
        icon={<img src={logo2} alt="knust logo" style={logoStyle} />}
        title="News Title"
        subtitle="author"
        imageSrc='https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg'
        content=" this is where the actual news go. Strategy, Social Media"
      />

      {/* Add more education items here using TimelineItem */}

      {/* Additional Item */}
      <TimelineItem
        className="vertical-timeline-element--education"
        date="April 2013"
        icon={<img src={logo} alt="fessa Logo" style={logoStyle} />}
        title="News Title"
        subtitle="author"
        imageSrc='https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg'
        content=" this is where the actual news go. Strategy, Social Media"
      />

      {/* Add more items as needed using TimelineItem */}
    </VerticalTimeline>
    </div>
  );
}
