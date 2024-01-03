
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const cardData = [
  {
    title: 'Card 1',
    description: 'Description for Card 1',
    image: '/static/images/cards/contemplative-reptile.jpg',
    alt: 'Image for Card 1',
  },
  {
    title: 'Card 2',
    description: 'Description for Card 2',
    image: '/static/images/cards/contemplative-reptile.jpg',
    alt: 'Image for Card 2',
  },
  {
    title: 'Card 3',
    description: 'Description for Card 3',
    image: '/static/images/cards/contemplative-reptile.jpg',
    alt: 'Image for Card 3',
  },
  {
    title: 'Card 4',
    description: 'Description for Card 4',
    image: '/static/images/cards/contemplative-reptile.jpg',
    alt: 'Image for Card 4',
  },
  {
    title: 'Card 5',
    description: 'Description for Card 5',
    image: '/static/images/cards/contemplative-reptile.jpg',
    alt: 'Image for Card 5',
  },
];

export default function Affiliate() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
