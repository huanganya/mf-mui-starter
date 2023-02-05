import { Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../routes/app-routes';
import style from './app.module.scss';

export function App() {
  const navigate = useNavigate();
  return (
    <div className={style.app}>
      <Typography variant="h5">It is the Remote App </Typography>
      <Link onClick={() => navigate('/')}>
        Click here to root(either remote's root or host's root, depends on where
        it's rendered)
      </Link>
      <AppRoutes />
    </div>
  );
}

export default App;
