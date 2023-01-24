import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@mf-mui-starter/app-shared/app-manager';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </AppProvider>
);
