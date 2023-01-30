import { MenuItem } from '@mui/material';
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
          <DesktopTabs
            pageTabs={[
              { title: 'Home', link: '/home' },
              {
                title: 'Remote 1',
                renderComponent: () => (
                  <>
                    <MenuItem onClick={() => {}}>Three</MenuItem>
                    <MenuItem onClick={() => {}}>Four</MenuItem>
                    <MenuItem onClick={() => {}}>Five</MenuItem>
                  </>
                ),
              },
              {
                title: 'Remote 2',
                renderComponent: () => (
                  <>
                    <MenuItem onClick={() => {}}>One</MenuItem>
                    <MenuItem onClick={() => {}}>Two</MenuItem>
                    <MenuItem onClick={() => {}}>Six</MenuItem>
                  </>
                ),
              },
            ]}
          />
          <MainMenu settings={settings} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
