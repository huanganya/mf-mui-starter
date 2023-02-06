import * as React from 'react';
import { AppRoutes } from '../routes/app-routes';
import { TopAppbar } from '@mf-mui-starter/app-shared/uis';
import style from './app.module.scss';
import { Box, Container } from '@mui/material';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Box className={style.app}>
        <TopAppbar />
        <Container>
          <AppRoutes />
        </Container>
      </Box>
    </React.Suspense>
  );
}

export default App;
