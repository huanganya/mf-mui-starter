import { Badge, Box, Typography } from '@mui/material';
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
import React from 'react';
import { Logo } from './logo';
import { AlertBox } from './alert-box';
import { authContext } from '../../app-manager';

export const TopAppbar = () => {
  const navigate = useNavigate();
  const { logout } = React.useContext(authContext);
  const pageTabs = [
    { title: 'Home', link: '/' },
    {
      title: 'Remote 1',
      renderComponent: (handleClose: () => void) =>
        getMenuItemsRemote1(handleClose),
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
        getMenuItemsShortcuts(handleClose),
      alignment: 'right' as 'left' | 'right',
    },
    {
      title: 'Alerts',
      icon: (
        <Badge color="primary" variant="dot">
          <NotificationsNoneIcon />
        </Badge>
      ),
      renderComponent: (handleClose: () => void) => (
        <AlertBox handleClose={handleClose} />
      ),
      alignment: 'right' as 'left' | 'right',
    },
  ];

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
        logo={<Logo />}
        pageTabs={pageTabs}
        rightPageTabs={rightPageTabs}
        profileItem={profileItem}
        logoutItem={{
          ...logoutItem,
          onClick: () => {
            console.log('logout clicked');
            logout();
          },
        }}
      />
    </>
  );
};

export default TopAppbar;
