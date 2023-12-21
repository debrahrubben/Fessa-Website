import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import avatarSrc from '../../images/logo.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import logo2 from '../../images/logo2.png';


const TimelineItem = ({icon, className, date, iconStyle, title, subheader, imageSrc, altText, content, morecontent }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const localAvatarSrc = avatarSrc;

  return (
    <VerticalTimelineElement
    className={className}
    date={date}
    iconStyle={iconStyle}
    icon={icon}
  >
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: 'rgb(188, 196, 214)' }}>
      <CardHeader
        avatar={
          // Use the Avatar component with the logo image
          <Avatar alt="avatar" src={localAvatarSrc} />
        }

        title={title}
        subheader={subheader}
      />
      <CardMedia
        component="img"
        height="140"
        image={imageSrc}
        alt={altText}
      />
      <CardContent >
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {morecontent}
        </CardContent>
      </Collapse>
    </Card>
    </VerticalTimelineElement>
  );
};

const News = () => {
  const newsData = [
    {
      date: "2011 - present",
      icon: <img src={logo2} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      imageSrc: 'https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg',
      altText: 'mixed vegetable salad in a mason jar.',
      title: 'This is the first news',
      subheader: 'September 1, 2023',
      content: 'Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer\'s market.',
    morecontent: 'dkjcsjfv jkvnjnvkd'
    },
    {
      date: "2011 - present",
      icon: <img src={logo2} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      imageSrc: 'https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg',
      altText: 'mixed vegetable salad in a mason jar.',
      title: 'This is the first news',
      subheader: 'September 1, 2023',
      content: 'Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer\'s market.',
    morecontent: 'dkjcsjfv jkvnjnvkd'
    },
    {
      date: "2011 - present",
      icon: <img src={logo2} alt="fessa logo" style={{ width: '100%', height: 'fit', objectFit: 'cover' }} />,
      imageSrc: 'https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg',
      altText: 'mixed vegetable salad in a mason jar.',
      title: 'This is the first news',
      subheader: 'September 1, 2023',
      content: 'Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer\'s market.',
    morecontent: 'dkjcsjfv jkvnjnvkd'
    },
  ];

  return (
    <div style={{ margin: '0 auto', background: 'rgb(17, 50, 91)', padding: '20px' }} id="news-section">
      <h3 style={{ color: 'white', paddingLeft: '40px' }}>News</h3>
      <VerticalTimeline>
      <Grid container spacing={2}>
        {newsData.map((newsItem, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
             <TimelineItem key={index} {...newsItem} />
          </Grid>
        ))}
      </Grid>
      </VerticalTimeline>
    </div>
  );
};

export default News;
