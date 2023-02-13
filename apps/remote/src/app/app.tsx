import { Box, Container, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../routes/app-routes';
import styles from './app.module.scss';

export function App() {
  const navigate = useNavigate();
  return (
    <Box className={styles.container}>
      <AppRoutes />
      <Container>
        <Typography variant="h5">It is the Remote App </Typography>
        <Link onClick={() => navigate('/')}>
          Click here to root(either remote's root or host's root, depends on
          where it's rendered)
        </Link>
        <Typography variant="h5">
          <Link onClick={() => navigate('/remote/page-three')}>
            Sticky tab bar under main tabbar for scrolling contents
          </Link>{' '}
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
