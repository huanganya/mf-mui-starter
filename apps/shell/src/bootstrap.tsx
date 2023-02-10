import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@mf-mui-starter/app-shared/app-manager';
import { TopAppbar, BottomFooter } from '@mf-mui-starter/app-shared/lib';
import { Box, Container } from '@mui/system';
import App from './app/app';
import styles from './bootstrap.module.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppProvider>
    <BrowserRouter>
      <React.Suspense fallback={null}>
        <Box className={styles.app}>
          <Box>
            <TopAppbar />
            <Container className={styles.container}>
              <App />
            </Container>
          </Box>
          <BottomFooter />
        </Box>
      </React.Suspense>
    </BrowserRouter>
  </AppProvider>
);
