import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MobileTabAppBar } from '../responsive/appbar';
import { DesktopTabs, PageTabProp } from './desktop-tabs';
import { MainMenu } from './main-menu';

export const MainAppBar = ({
  pageTabs,
  settings,
  rightPageTabs,
  renderLogo,
}: {
  pageTabs: PageTabProp[];
  rightPageTabs?: PageTabProp[];
  settings: string[];
  renderLogo?: () => React.ReactElement;
}) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          {renderLogo?.()}
          <MobileTabAppBar pageTabs={pageTabs} />
          <DesktopTabs pageTabs={pageTabs} />
          {rightPageTabs && <DesktopTabs pageTabs={rightPageTabs} />}
          <MainMenu settings={settings} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
