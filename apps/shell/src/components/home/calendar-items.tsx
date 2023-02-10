import { theme } from '@mf-mui-starter/common-lib';
import { Grid, Chip, Link, Typography, Card, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const LeftStrip = () => {
  return (
    <Box
      sx={{
        width: '6px',
        height: '100%',
        backgroundColor: theme.palette.primary.main,
        position: 'relative',
        left: '0px',
        top: '0px',
      }}
    />
  );
};
export const CalendarItems = () => {
  const navigate = useNavigate();
  const cards = [
    {
      link: 'event/abc',
      chip: 'abc ceremony',
      name: 'Outdoor celebration with school children',
      date: 'Thursday Feb 8, 2023',
      time: '3.30PM - 4.30PM',
      image: '1.jpeg',
      isHighlight: true,
    },
    {
      link: 'event/abcde',
      chip: 'hike to mountains',
      name: 'Hello World! Hello World! Hello World!',
      date: 'Thursday Feb 8, 2023',
      time: '3.30PM - 4.30PM',
      image: '2.jpeg',
      isHighlight: false,
    },
    {
      link: 'event/abcfg',
      chip: 'gathering',
      name: 'This is what you want?! ',
      date: 'Thursday Feb 8, 2023',
      time: '3.30PM - 4.30PM',
      image: '3.jpeg',
      isHighlight: false,
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <Card sx={{ my: '12px', borderRadius: '5px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  background: `url('/assets/images/cards/${card.image}')`,
                  height: '100%',
                  width: '100%',
                }}
              >
                {card.isHighlight && <LeftStrip />}
              </Box>
            </Grid>
            <Grid
              item
              container
              direction={'column'}
              xs={12}
              md={8}
              mb="12px"
              spacing={2}
            >
              <Grid item>
                <Typography>
                  <Chip sx={{ color: '#aabbff' }} label={card.chip} />
                </Typography>
              </Grid>
              <Grid item>
                <Link onClick={() => navigate(card.link)} color="#aabbff">
                  <Typography variant="title" sx={{ textDecoration: 'none' }}>
                    {card.name}
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Typography>{card.date}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body14Medium">{card.time}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      ))}
    </>
  );
};
