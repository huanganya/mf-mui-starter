import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Box, Container } from '@mui/system';
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
//todo: fix the hideOnScroll for TopAppbar for the pages with no StickyTabs
root.render(
  <AppProvider>
    <BrowserRouter>
      <React.Suspense fallback={null}>
        <Box className={styles.app}>
          <TopAppbar />
          <Box className={styles.container} id="app-box">
            <App />
          </Box>
          <BottomFooter />
        </Box>
      </React.Suspense>
    </BrowserRouter>
  </AppProvider>
);
