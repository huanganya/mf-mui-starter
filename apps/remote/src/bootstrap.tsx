import {
  AppProvider,
  AuthContext,
} from '@mf-mui-starter/app-shared/app-manager';
import { useLoginEffect } from '@mf-mui-starter/common-lib';
import React from 'react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const StandAloneApp = () => {
  const { isLoggedIn } = React.useContext(AuthContext);
  return (
    <>
      {isLoggedIn && <App />}
      {!isLoggedIn && 'You need to login first'}
    </>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppProvider>
    <StrictMode>
      <StandAloneApp />
    </StrictMode>
  </AppProvider>
);
