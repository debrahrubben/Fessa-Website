import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Link } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const cardData = [
  {
    title: 'Wesley College of Education',
    visitUrl: 'https://www.wesco.edu.gh/',
    image: 'https://www.wesco.edu.gh/wp-content/uploads/2020/08/bg2.jpg',
    alt: 'Image for Card 1',
  },
  {
    title: 'E. P. College of Education',
    visitUrl: 'https://epcoebimbilla.edu.gh/',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfYf61rwgntiB4ytmHpgtUW7E4e7WN7_Q0Q&usqp=CAU', category: 'Affiliated Colleges', Name: 'E. P. College of Education', Position: 'Bimbilla' , linkToSite:'https://epcoebimbilla.edu.gh/',
    alt: 'Image for Card 2',
    
  },
  {
    title: 'Tamale College of Education',
    visitUrl: 'https://tace.edu.gh/',
    image: 'https://th.bing.com/th/id/OIP.HOtMobuVq68H2duBJ1lM7gHaDU?rs=1&pid=ImgDetMain',
    alt: 'Image for Card 3',
  },
  {
    title: 'St Joseph College of Education',
    visitUrl: 'https://www.joscobechem.edu.gh/',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNnQYfC1szYVyuUi5lCdFWRuRwNHGj4JAKBOyW3=s1600-w400',
    alt: 'Image for Card 4',
    
  },
  {
    title: 'Akrokerri College of Education',
    description: 'Akrokerri College of Education is a teacher education college in Akrokerri (Adansi West District, Ashanti Region, Ghana). The college is located in Ashanti / Brong Ahafo zone. It is one of the about 46 public colleges of education in Ghana. The college participated in the DFID-funded T-TEL programme. It was accredited to tertiary institution in 2007 and was affiliated to Kwame Nkrumah University of Science and Technology (KNUST) in 2019.',
    image: 'https://i0.wp.com/ictcatalogue.com/wp-content/uploads/2022/02/Akrokerri-College-of-Education-Admission-Online.png?fit=640%2C460&ssl=1',
    alt: 'Image for Card 5',
  },
];

export default function Affiliate() {
  return (
    <Grid container spacing={3} style={{ paddingTop: '90px', backgroundColor:'rgb(17, 50, 91)', paddingBottom:'30px',}}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index} style={{ display: 'flex', justifyContent: 'center', position: 'relative',  }}>
          <Link href={card.visitUrl} target="_blank" rel="noopener noreferrer"  style={{ textDecoration: 'none', color: 'rgb(188, 196, 214)' }}>
          <Card sx={{ maxWidth: 345 }} style={{backgroundColor:'#17223A',color:'white'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="rgb(188, 196, 214)">
                  {card.description}
                </Typography>
                
                <LanguageIcon /> {/* Globe icon */}
                
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}