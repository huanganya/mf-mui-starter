import { MenuItem, Typography } from '@mui/material';
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
      onclick: () => navigate('/path1'),
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
      onclick: () => navigate('/path2'),
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
      onclick: () => navigate('/path3'),
    },
  ];
};

export const TopAppbar = () => {
  const navigate = useNavigate();

  const pageTabs = [
    { title: 'Home', link: '/home' },
    {
      title: 'Remote 1',
      renderComponent: () => (
        <>
          <MenuItem
            onClick={() => {
              navigate('/page-three');
            }}
          >
            menu item Three
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate('/page-four');
            }}
          >
            menu item Four
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate('/page-five');
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
