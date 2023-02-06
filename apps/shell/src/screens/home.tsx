import { GlobalDataContext } from '@mf-mui-starter/app-shared/app-manager';
import { Container, Grid, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = ({ title }: { title: string }) => {
  const { counter, setCounter } = useContext(GlobalDataContext);
  const navigate = useNavigate();
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h5">It is the Host App </Typography>
      </Grid>
      <Grid item container>
        <Grid item container direction="column" md={4}>
          <Typography variant="subheader">
            <p>
              It will hold the dashboard of the main app.
              <Link onClick={() => navigate('/remote/path2')}>
                Click here to a remote's path
              </Link>
            </p>
          </Typography>
          <button onClick={() => setCounter(counter + 1)}>
            counter {counter}
          </button>{' '}
        </Grid>
        <Grid item container direction="column" md={8}>
          Main content
        </Grid>
      </Grid>
    </Grid>
  );
};
