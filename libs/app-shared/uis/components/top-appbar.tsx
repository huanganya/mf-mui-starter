import { Box, MenuItem, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import {
  MainAppBar,
  AlignItemsList,
  AlignItemProp,
} from '@mf-mui-starter/common-lib';
import RuleOutlined from '@mui/icons-material/RuleOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const getListItems1 = (navigate: NavigateFunction): AlignItemProp[] => {
  return [
    {
      icon: (
        <RuleOutlined
          sx={{
            backgroundColor: '#F8ECEE',
            color: '#BE4651',
            padding: '10px',
            borderRadius: '5px',
          }}
        />
      ),
      primary: 'Brunch this weekend?',
      secondary: "— I'll be in your neighborhood doing errands this…",
      onclick: () => navigate('remote/path1'),
    },
    {
      icon: (
        <ThumbUpOutlinedIcon
          sx={{
            backgroundColor: '#F4E9DF',
            color: '#D67A30',
            padding: '10px',
            borderRadius: '5px',
          }}
        />
      ),
      primary: 'Summer BBQ',
      secondary: "— Wish I could come, but I'm out of town this…",
      onclick: () => navigate('remote/path2'),
    },
    {
      icon: (
        <MenuBookOutlinedIcon
          sx={{
            backgroundColor: '#EBF1F9',
            color: '#3C6F60',
            padding: '10px',
            borderRadius: '5px',
          }}
        />
      ),
      primary: 'Oui Oui',
      secondary: ' — Do you have Paris recommendations? Have you ever…',
      onclick: () => navigate('remote/path1/path11'),
    },
  ];
};

export const TopAppbar = () => {
  const navigate = useNavigate();

  const pageTabs = [
    { title: 'Home', link: '/' },
    {
      title: 'Remote 1',
      renderComponent: () => (
        <>
          <MenuItem
            data-testid="remote-1-menu-1"
            onClick={() => {
              navigate('/remote/page-three');
            }}
          >
            menu item Three
          </MenuItem>
          <MenuItem
            data-testid="remote-1-menu-2"
            onClick={() => {
              navigate('/remote/page-four');
            }}
          >
            menu item Four
          </MenuItem>
          <MenuItem
            data-testid="remote-1-menu-3"
            onClick={() => {
              navigate('/remote/page-five');
            }}
          >
            menu item Five
          </MenuItem>
        </>
      ),
    },
    {
      title: 'Remote 2',
      renderComponent: () => (
        <AlignItemsList maxWidth={360} items={getListItems1(navigate)} />
      ),
    },
    {
      title: 'Remote 3',
      renderComponent: () => (
        <Box padding={'10px'}>
          <Typography>For some message</Typography>
          <Typography>Can add interactive content here</Typography>
        </Box>
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
