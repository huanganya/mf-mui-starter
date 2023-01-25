import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../routes/app-routes';
import { useEffect } from 'react';
import { AuthContext } from '@mf-mui-starter/app-shared/app-manager';
import { Button } from '@mui/material';

export function App() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/remote');
    } else {
      navigate('/login');
    }
  }, [isLoggedIn]);

  return (
    <React.Suspense fallback={null}>
      {isLoggedIn && (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/remote">Remote</Link>
          </li>
          <li>
            <Button onClick={() => setIsLoggedIn(false)}>Logout</Button>
          </li>
        </ul>
      )}
      {!isLoggedIn && (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
      <AppRoutes />
    </React.Suspense>
  );
}

export default App;
