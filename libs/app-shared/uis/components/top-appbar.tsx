import { Typography } from '@mui/material';
import { MainAppBar } from '@mf-mui-starter/common-lib';
import AdbIcon from '@mui/icons-material/Adb';

export const TopAppbar = () => {
  const renderLogo = () => {
    return (
      <>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
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
    );
  };
  return (
    <MainAppBar
      renderLogo={renderLogo}
      pages={['Home', 'Remote']}
      settings={['Profile', 'Account', 'Dashboard', 'Logout']}
    />
  );
};

export default TopAppbar;
