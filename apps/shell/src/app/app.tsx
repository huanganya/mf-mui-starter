import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../routes/app-routes';
import { Button } from '@mui/material';
import { authContext } from '@mf-mui-starter/app-shared/app-manager';

export function App() {
  const { logout } = React.useContext(authContext);
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote">Remote</Link>
        </li>
        <li>
          <Button onClick={logout}>Logout</Button>
        </li>
      </ul>
      <AppRoutes />
    </React.Suspense>
  );
}

export default App;
