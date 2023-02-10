import { GlobalDataContext } from '@mf-mui-starter/app-shared';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
export function NxWelcome({ title }: { title: string }) {
  const { counter, setCounter } = useContext(GlobalDataContext);
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h5">It is the Host App </Typography>
      <Typography variant="subheader">
        <p>
          It will hold the dashboard of the main app.
          <Link onClick={() => navigate('/remote/path2')}>
            Click here to a remote's path
          </Link>
        </p>
      </Typography>
      <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>{' '}
    </>
  );
}

export default NxWelcome;
