import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MobileTabAppBar } from '../responsive/appbar';
import { DesktopTabs, PageTabProp } from './desktop-tabs';
import { DesktopButton, DesktopButtonProp } from './desktop-button';

export const MainAppBar = ({
  pageTabs,
  rightPageTabs,
  renderLogo,
  profileItem,
  logoutItem,
}: {
  pageTabs: PageTabProp[];
  rightPageTabs?: PageTabProp[];
  renderLogo?: () => React.ReactElement;
  profileItem: DesktopButtonProp;
  logoutItem: DesktopButtonProp;
}) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          {renderLogo?.()}
          <MobileTabAppBar pageTabs={pageTabs} />
          <DesktopTabs pageTabs={pageTabs} />
          {rightPageTabs && <DesktopTabs pageTabs={rightPageTabs} />}
          <DesktopButton item={profileItem} index={1} />
          <DesktopButton item={logoutItem} index={2} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
