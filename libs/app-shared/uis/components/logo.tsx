import AdbIcon from '@mui/icons-material/Adb';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DesktopBox } from '@mf-mui-starter/common-lib';

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <DesktopBox>
      <>
        <AdbIcon sx={{ mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          onClick={() => {
            navigate('/');
          }}
          sx={{
            mr: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
      </>
    </DesktopBox>
  );
};
