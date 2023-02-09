import { AlignItemProp } from '@mf-mui-starter/common-lib';
import RuleOutlined from '@mui/icons-material/RuleOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { NavigateFunction } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InboxIcon from '@mui/icons-material/InboxOutlined';
import { LogoutOutlined } from '@mui/icons-material';
import { NavMenuItem, NavMenuItemProps } from '../uis/components/nav-menu-item';

export const getListRemote2 = (
  navigate: NavigateFunction,
  handleClose: () => void
): AlignItemProp[] => {
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
      onClick: () => {
        handleClose();
        navigate('remote/path1');
      },
      testId: 'remote2-item1',
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
      onClick: () => {
        handleClose();
        navigate('remote/path2');
      },
      testId: 'remote2-item2',
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
      onClick: () => {
        handleClose();
        navigate('remote/path1/path11');
      },
      testId: 'remote2-item3',
    },
  ];
};

const menuItemsForRemote1: NavMenuItemProps[] = [
  {
    testId: 'remote-1-menu-1',
    title: 'menu item Three',
    href: '/remote/page-three',
  },
  {
    testId: 'remote-1-menu-2',
    title: 'menu item Four',
    href: '/remote/page-four',
  },
  {
    testId: 'remote-1-menu-3',
    title: 'menu item Five',
    href: '/remote/page-five',
  },
];

export const getMenuItemsRemote1 = (handleClose: () => void) => (
  <>
    {menuItemsForRemote1.map((item) => (
      <NavMenuItem item={item} handleClose={handleClose} />
    ))}
  </>
);

const menuItemsForShortcuts: NavMenuItemProps[] = [
  {
    testId: 'shortcut-menu-1',
    title: 'Shopping Cart',
    href: '/remote/shopping-cart',
    leftIcon: <ShoppingCartIcon />,
  },
  {
    testId: 'shortcut-menu-2',
    title: 'Local ATM',
    href: '/remote/local-atm',
    leftIcon: <LocalAtmIcon />,
  },
  {
    testId: 'shortcut-menu-3',
    title: 'My Favorite Goodies',
    href: '/remote/my-bookmarks',
    leftIcon: <StarOutlineIcon />,
  },
  {
    testId: 'shortcut-menu-4',
    title: 'My Ratings',
    href: '/remote/my-ratings',
    leftIcon: <ThumbUpOffAltIcon />,
  },
];

export const getMenuItemsShortcuts = (handleClose: () => void) => (
  <>
    {menuItemsForShortcuts.map((item) => (
      <NavMenuItem item={item} handleClose={handleClose} />
    ))}
  </>
);

export const profileItemData: AlignItemProp = {
  icon: <InboxIcon />,
  primary: 'Elizabett Lim',
  secondary: 'My profile & others',
  testId: 'profile-item',
};

export const logoutItem: AlignItemProp = {
  icon: <LogoutOutlined />,
  primary: 'Logout',
  testId: 'logou-item',
};

export const getListProfile = (
  navigate: NavigateFunction,
  handleClose: () => void
): AlignItemProp[] => {
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
      onClick: () => {
        handleClose();
        navigate('remote/path1');
      },
      testId: 'profile-list-item1',
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
      onClick: () => {
        handleClose();
        navigate('remote/path2');
      },
      testId: 'profile-list-item2',
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
      onClick: () => {
        handleClose();
        navigate('remote/path1/path11');
      },
      testId: 'profile-list-item3',
    },
  ];
};
