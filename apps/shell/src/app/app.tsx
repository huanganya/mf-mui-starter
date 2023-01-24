import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginEffect } from '@mf-mui-starter/common-lib';
import { AppRoutes } from '../routes/app-routes';
import { useEffect } from 'react';

export function App() {
  const { isLoggedIn } = useLoginEffect();
  const navigate = useNavigate();
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
