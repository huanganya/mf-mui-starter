import { Box, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import {
  MainAppBar,
  AlignItemsList,
  SearchBar,
  DesktopButtonProp,
} from '@mf-mui-starter/common-lib';
import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@mui/icons-material';
import LinkIcon from '@mui/icons-material/Link';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {
  getListRemote2,
  getMenuItemsRemote1,
  getMenuItemsShortcuts,
  getListProfile,
  profileItemData,
  logoutItem,
} from '../../constants/top-appbar-items';

export const TopAppbar = () => {
  const navigate = useNavigate();

  const pageTabs = [
    { title: 'Home', link: '/' },
    {
      title: 'Remote 1',
      renderComponent: (handleClose: () => void) =>
        getMenuItemsRemote1(navigate, handleClose),
    },
    {
      title: 'Remote 2',
      renderComponent: (handleClose: () => void) => (
        <AlignItemsList
          maxWidth={360}
          items={getListRemote2(navigate, handleClose)}
        />
      ),
    },
    {
      title: 'Remote 3',
      renderComponent: (handleClose: () => void) => (
        <Box padding={'10px'} onClick={handleClose}>
          <Typography>For some message</Typography>
          <Typography>Can add interactive content here</Typography>
        </Box>
      ),
    },
  ];

  const rightPageTabs = [
    {
      title: 'Search',
      icon: <SearchOutlined />,
      popoverFullWidth: true,
      renderComponent: (handleClose: () => void) => (
        <Box paddingLeft={'20px'} paddingRight={'20px'}>
          <SearchBar />
        </Box>
      ),
    },
    {
      title: 'Shortcuts',
      icon: <LinkIcon />,
      renderComponent: (handleClose: () => void) =>
        getMenuItemsShortcuts(navigate, handleClose),
      alignment: 'right' as 'left' | 'right',
    },
    {
      title: 'Alerts',
      icon: <NotificationsNoneIcon />,
      renderComponent: (handleClose: () => void) => (
        <Box padding={'10px'} onClick={handleClose}>
          <Typography>For some message</Typography>
          <Typography>Can add interactive content here</Typography>
        </Box>
      ),
      alignment: 'right' as 'left' | 'right',
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

  const profileItem: DesktopButtonProp = {
    ...profileItemData,
    renderComponent: (handleClose: () => void) => (
      <AlignItemsList
        maxWidth={360}
        items={getListProfile(navigate, handleClose)}
      />
    ),
  };

  return (
    <>
      <MainAppBar
        renderLogo={renderLogo}
        pageTabs={pageTabs}
        rightPageTabs={rightPageTabs}
        profileItem={profileItem}
        logoutItem={logoutItem}
      />
    </>
  );
};

export default TopAppbar;
