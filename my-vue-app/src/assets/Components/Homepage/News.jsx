import { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';
import { Skeleton } from 'antd';
import { Suspense } from 'react';
import * as contentful from 'contentful'; // Import the Contentful library

// Create the Contentful client here with space ID and access token
const client = contentful.createClient({
  space: 'sh47g2wjl5b7', // Replace with your actual space ID
  accessToken: '7FOOzS3QXoKpahm-axIEK0W4pAZ5whpoMrJjOHcaqJE', // Replace with your actual access token
});

const TimelineItem = ({ className, date, imageSrc, iconStyle, title, subtitle, content, icon, morecontent, Weblink }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Suspense fallback={<Skeleton.Image active paragraph={{ rows: 4 }} />}>
      <VerticalTimelineElement
        className={className}
        date={date}
        iconStyle={iconStyle}
        icon={icon}
      >
        <div>
          <a href={Weblink} style={{ textDecoration: 'none', color: 'black' }}>
            <h4 className="vertical-timeline-element-title">{title}</h4>
            <i className="vertical-timeline-element-subtitle">{subtitle}</i>

            <div style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', width: 'auto', height: '250px' }} />
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
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const entries = await client.getEntries({
          content_type: 'article', // Your Contentful content type
        });
        const formattedData = entries.items.map((item) => ({
          date: <div style={{ color: 'rgb(188, 196, 214)' }}>{item.fields.date}</div>,
          icon: <img src={item.fields.icon.fields.file.url} alt="news logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
          title: item.fields.title,
          subtitle: item.fields.subtitle,
          imageSrc: item.fields.image.fields.file.url,
          content: item.fields.content,
          morecontent: item.fields.morecontent,
          Weblink: item.fields.link,
        }));
        setNewsData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div style={{ background: '#17223A' }}>
      <div>
        <hr style={{ height: '14px', border: 'none', backgroundColor: 'white' }} />
        <h3 style={{ textAlign: 'center', color: 'white' }}>News</h3>
        <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', width: '30%', maxWidth: '240px', height: '1px', marginRight: '5%', backgroundColor: '#ccc' }}></div>
          <img src="https://res.cloudinary.com/dgpxvazru/image/upload/v1707219355/tinyimages/education_2_fyq1ra.png" alt="News Icon" style={{ display: 'inline-block', margin: '0', width: 'auto', height: '40px' }} />
          <div style={{ display: 'inline-block', width: '30%', maxWidth: '240px', height: '1px', marginLeft: '5%', backgroundColor: '#ccc' }}></div>
        </div>
        <br />
        <VerticalTimeline>
          {loading ? (
            <Skeleton active />
          ) : (
            newsData.map((newsItem, index) => (
              <TimelineItem key={index} {...newsItem} />
            ))
          )}
        </VerticalTimeline>
      </div>
      <hr style={{ height: '14px', border: 'none', backgroundColor: 'white' }} />
    </div>
  );
};

export default NewsTimeline;
