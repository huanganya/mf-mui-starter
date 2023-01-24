import { AppProvider } from '@mf-mui-starter/app-shared/app-manager';
import { useLoginEffect } from '@mf-mui-starter/common-lib';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const StandAloneApp = () => {
  const { isLoggedIn } = useLoginEffect();
  return (
    <>
      {!isLoggedIn && <App />}
      {isLoggedIn && 'You already logged in'}
    </>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <StandAloneApp />
  </StrictMode>
);
