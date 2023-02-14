import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MobileTabAppBar } from '../responsive/appbar';
import { DesktopTabs, DesktopTabProp } from './desktop-tabs';
import { DesktopButton, DesktopButtonProp } from './desktop-button';
import { Box } from '@mui/system';

export const MainAppBar = ({
  pageTabs,
  rightPageTabs,
  logo,
  profileItem,
  logoutItem,
}: {
  pageTabs: DesktopTabProp[];
  rightPageTabs?: DesktopTabProp[];
  logo?: React.ReactElement;
  profileItem: DesktopButtonProp;
  logoutItem: DesktopButtonProp;
}) => {
  return (
    <>
      <AppBar sx={{ zIndex: 1110 }}>
        <Toolbar
          disableGutters={true}
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            {logo}
            <MobileTabAppBar pageTabs={pageTabs} />
            <DesktopTabs pageTabs={pageTabs} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'row',
            }}
          >
            {rightPageTabs && <DesktopTabs pageTabs={rightPageTabs} />}
            <DesktopButton
              item={profileItem}
              index={1}
              sx={{ minWidth: '240px' }}
            />
            <DesktopButton
              item={logoutItem}
              index={2}
              sx={{ minWidth: '100px' }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
