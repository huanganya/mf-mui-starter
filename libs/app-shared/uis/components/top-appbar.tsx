import { MenuItem, Typography } from '@mui/material';
import { MainAppBar } from '@mf-mui-starter/common-lib';
import AdbIcon from '@mui/icons-material/Adb';

export const TopAppbar = () => {
  const pageTabs = [
    { title: 'Home', link: '/home' },
    {
      title: 'Remote 1',
      renderComponent: () => (
        <>
          <MenuItem onClick={() => {}}>Three</MenuItem>
          <MenuItem onClick={() => {}}>Four</MenuItem>
          <MenuItem onClick={() => {}}>Five</MenuItem>
        </>
      ),
    },
    {
      title: 'Remote 2',
      renderComponent: () => (
        <>
          <MenuItem onClick={() => {}}>One</MenuItem>
          <MenuItem onClick={() => {}}>Two</MenuItem>
          <MenuItem onClick={() => {}}>Six</MenuItem>
        </>
      ),
    },
    {
      title: 'Remote 3',
      renderComponent: () => (
        <Typography pr={'10px'} pl={'10px'}>
          <p>For some message</p>
          <p>Can add interactive content here</p>
        </Typography>
      ),
    },
  ];
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
      pageTabs={pageTabs}
      settings={['Profile', 'Account', 'Dashboard', 'Logout']}
    />
  );
};

export default TopAppbar;
