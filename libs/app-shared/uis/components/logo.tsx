import AdbIcon from '@mui/icons-material/Adb';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
    </Box>
  );
};
