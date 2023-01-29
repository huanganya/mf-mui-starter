import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../routes/app-routes';
import { Button } from '@mui/material';
import { authContext } from '@mf-mui-starter/app-shared/app-manager';
import { MainAppBar } from '@mf-mui-starter/common-lib';

export function App() {
  const { logout } = React.useContext(authContext);
  return (
    <React.Suspense fallback={null}>
      <MainAppBar
        pages={['Remote', 'Home']}
        settings={['Profile', 'Account', 'Dashboard', 'Logout']}
      />
      <AppRoutes />
    </React.Suspense>
  );
}

export default App;
