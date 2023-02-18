import { Box } from '@mui/material';
import { AppRoutes } from '../routes/app-routes';
import styles from './app.module.scss';

export function App() {
  return (
    <Box className={styles.container}>
      <AppRoutes />
    </Box>
  );
}

export default App;
