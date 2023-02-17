import { Box, Container, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../routes/app-routes';
import styles from './app.module.scss';

export function App() {
  const navigate = useNavigate();
  return (
    <Box className={styles.container}>
      <AppRoutes />
    </Box>
  );
}

export default App;
