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
        <Typography variant="h5">It is the remote2 App </Typography>
        <Typography variant="h5">
          <Link onClick={() => navigate('/remote2/page-three')}>
            Sticky tab bar under main tabbar for changing contents
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
