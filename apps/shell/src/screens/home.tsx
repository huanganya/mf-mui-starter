import { GlobalDataContext } from '@mf-mui-starter/app-shared';
import { Card, Grid, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeCalendar } from '../components/home/home-calendar';
import { HomeCarousel } from '../components/home/home-carousel';
import { LeftCardBottom } from '../components/home/left-card-bottom';
import { LeftCardTop } from '../components/home/left-card-top';

export const Home = ({ title }: { title: string }) => {
  const { counter, setCounter } = useContext(GlobalDataContext);
  const navigate = useNavigate();
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Card>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            It is the Host App: Top Item{' '}
          </Typography>
        </Card>
      </Grid>
      <Grid item container spacing={3}>
        <Grid item container direction="column" md={4} spacing={3}>
          <Grid item>
            <LeftCardTop />
          </Grid>
          <Grid item>
            <LeftCardBottom />
          </Grid>
        </Grid>
        <Grid item container direction="column" md={8} spacing={3}>
          <Grid item>
            <HomeCarousel />
          </Grid>
          <Grid item>
            <HomeCalendar />
          </Grid>
          <Grid item>
            <Typography variant="subheader">
              Main content
              <p>
                It will hold the dashboard of the main app.
                <Link onClick={() => navigate('/remote/path2')}>
                  Click here to a remote's path
                </Link>
              </p>
            </Typography>
            <button onClick={() => setCounter(counter + 1)}>
              counter {counter}
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
