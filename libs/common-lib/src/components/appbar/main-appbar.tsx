import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MobileTabAppBar } from '../responsive/appbar';
import { DesktopTabs } from './desktop-tabs';
import { MainMenu } from './main-menu';

export const MainAppBar = ({
  pages,
  settings,
  renderLogo,
}: {
  pages: string[];
  settings: string[];
  renderLogo?: () => React.ReactElement;
}) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          {renderLogo?.()}
          <MobileTabAppBar pages={pages} />
          <DesktopTabs pages={pages} />
          <MainMenu settings={settings} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
