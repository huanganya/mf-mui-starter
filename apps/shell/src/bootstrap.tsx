import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/system';
import App from './app/app';
import styles from './bootstrap.module.scss';
import {
  AppProvider,
  TopAppbar,
  BottomFooter,
} from '@mf-mui-starter/app-shared';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppProvider>
    <BrowserRouter>
      <React.Suspense fallback={null}>
        <Box className={styles.app}>
          <Box className={styles.container} id="app-box">
            <TopAppbar />
            <App />
          </Box>
          <BottomFooter />
        </Box>
      </React.Suspense>
    </BrowserRouter>
  </AppProvider>
);
