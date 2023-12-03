import Bernice from '../images/HallofFameImages/Bernice Afi Agbanyo.jpg'
import Kerker from '../images/HallofFameImages/Christian Kerker.jpg'
import Asare from '../images/HallofFameImages/Dennis Asare.jpg'
import Osei from '../images/HallofFameImages/Frimpong Eric Osei.jpg'
import Ampah from '../images/HallofFameImages/Jeremiah Ampah.jpg'
import Mintah from '../images/HallofFameImages/Kenseng Mintah vice.jpg'
import Bonsu from '../images/HallofFameImages/Kwame Bonsu.jpg'
import Umar from '../images/HallofFameImages/Mohammed Umar Nadra.jpg'
import Nartey from '../images/HallofFameImages/Naomi Nartey Mateykie.jpg'
import Shadrack from '../images/HallofFameImages/Shadrack.jpg'
import Rubben from '../images/HallofFameImages/Rubben.jpg'
import Grace from '../images/HallofFameImages/Grace Abena Bossman.jpg'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const HallOfFamePage = () => {
  const Item = styled(Paper)({
    backgroundColor: 'transparent',  // Set the background color directly
    padding: '5px',
    textAlign: 'center',
    color: 'white',
    minWidth: '160px',
    maxWidth: '310px',
    width: '100%',
    fontSize: '10px',
  });

  const cardData = [
    {
      id: 1,
      imageSrc: Asare,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Dennis Asare',
      role: 'President',
    },
    {
      id: 2,
      imageSrc: Ampah,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Jeremiah Ampah',
      role: 'Vice President',
    },
    {
      id: 3,
      imageSrc: Nartey,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Naomi Nartey Mateykie',
      role: 'General Secretary',
    },
    {
      id: 4,
      imageSrc: Osei,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Frimpong Eric Osei',
      role: 'Financial Secretary',
    },
    {
      id: 5,
      imageSrc: Umar,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Mohammed Umar Nadra',
      role: 'Organising Secretary',
    },
    {
      id: 6,
      imageSrc: Bernice,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Bernice Afi Agbanyo',
      role: 'Wocom',
    },
    {
      id: 7,
      imageSrc: Kerker,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Christian Kerker',
      role: 'Ex President 2023',
    },
    {
      id: 8,
      imageSrc: Mintah,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Kenseng Mintah',
      role: 'Ex Vice President 2023',
    },
    {
      id: 9,
      imageSrc: Bonsu,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Kwame Bonsu',
      role: 'Ex President 2022',
    },
    {
      id: 10,
      imageSrc: Grace,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Grace Abena Bossman',
      role: 'General Secretary 2022',
    },
    {
      id: 11,
      imageSrc: Rubben,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Rubben Debrah',
      role: 'Fessa Web Developer',
    },
    {
      id: 12,
      imageSrc: Shadrack,
      quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
      name: 'Duah Shadrack Amponsah',
      role: 'Fessa Web Developer',
    },

    // Add more card data as needed
  ];

  return (
    <Box sx={{ flexGrow: 1, backgroundImage: 'url("https://images.unsplash.com/photo-1651437524278-b37b83a6e6d3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', paddingTop:'70px' }}>
      <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cardData.map((card) => (
          <Grid xs={2} sm={4} md={4} key={card.id}>
            <Item>
              <div style={{ position: 'relative', borderBottom: '2px solid #34495e', zIndex: '1' }}>
                <img
                  src={card.imageSrc}
                  alt={`sample${card.id}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <p
                  style={{
                    fontWeight: '400',
                    margin: '0',
                    padding: '0 15px',
                    lineHeight: '1.4em',
                    position: 'absolute',
                    top: '50%',
                    width: '100%',
                    color: '#ffffff',
                    transform: 'translateY(-50%)',
                    opacity: '0',
                    fontStyle: 'italic',
                  }}
                >
                  {card.quote}
                </p>
              </div>
              <figcaption style={{ backgroundColor: 'rgb(17, 50, 91)', padding: '01px' }}>
                <h3
                  style={{
                    margin: '0 0 5px',
                    textTransform: 'uppercase',
                    fontWeight: '400',
                    textAlign: 'center',
                    marginTop: '10px',
                    marginBottom: '10px',
                    color: 'white',
                    fontSize: 'small',
                  }}
                >
                  {card.name}
                  <span style={{ fontWeight: '700', }}> {card.role}</span>
                </h3>
                <p style={{ marginTop: '5px', color: 'white' }}>{card.quote}</p>
              </figcaption>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HallOfFamePage;
