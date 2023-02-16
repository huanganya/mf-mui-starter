import { Badge, Box, Typography } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DesktopBox } from '../responsive/desktop-box';
import { MainAppBar } from './main-appbar';
import AdbIcon from '@mui/icons-material/Adb';
import { AlignItemsList } from '../list/align-itemslist';
import { RuleOutlined, SearchOutlined } from '@mui/icons-material';
import { SearchBar } from '../others/search-bar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { LogoutOutlined } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/InboxOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Story: ComponentMeta<typeof MainAppBar> = {
  component: MainAppBar,
  title: 'Common-Appbar-MainAppBar',
};
export default Story;

const Template: ComponentStory<typeof MainAppBar> = (args) => (
  <MainAppBar {...args} />
);

const Logo = () => (
  <DesktopBox>
    <>
      <AdbIcon sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={() => {
          console.log('clicked Logo');
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
const pageTabs = [
  { title: 'Home', link: '/' },
  {
    title: 'Remote 2',
    renderComponent: (handleClose: () => void) => (
      <AlignItemsList
        maxWidth={360}
        items={[
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
            },
            testId: 'remote2-item1',
          },
        ]}
      />
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
    title: 'Alerts',
    icon: (
      <Badge color="primary" variant="dot">
        <NotificationsNoneIcon />
      </Badge>
    ),
    renderComponent: (handleClose: () => void) => (
      <Box
        sx={{ display: 'flex', alignItems: 'center' }}
        onClick={() => {
          handleClose();
        }}
      >
        <Typography>View All Alert</Typography>
        <ArrowForwardIcon />
      </Box>
    ),
    alignment: 'right' as 'left' | 'right',
  },
];

export const Primary = Template.bind({});
Primary.args = {
  logo: <Logo />,
  pageTabs: pageTabs,
  rightPageTabs: rightPageTabs,
  profileItem: {
    icon: <InboxIcon />,
    primary: 'Elizabett Lim',
    secondary: 'My profile & others',
    testId: 'profile-item',
    renderComponent: (handleClose: () => void) => (
      <Box paddingLeft={'20px'} paddingRight={'20px'}>
        <Typography>View My Profike</Typography>
      </Box>
    ),
  },
  logoutItem: {
    icon: <LogoutOutlined />,
    primary: 'Logout',
    testId: 'logou-item',

    onClick: () => {
      console.log('logout clicked');
    },
  },
};
