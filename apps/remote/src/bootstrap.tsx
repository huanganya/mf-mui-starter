import { AppProvider } from '@mf-mui-starter/app-shared/app-manager';
import { TopAppbar } from '@mf-mui-starter/app-shared/uis';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <TopAppbar />
        <App />
      </BrowserRouter>
    </AppProvider>
  </StrictMode>
);
