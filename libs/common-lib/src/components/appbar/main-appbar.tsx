import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import { MobileTabAppBar } from '../responsive/appbar';
import { MainTabs } from './main-tabs';
import { MainMenu } from './main-menu';

export const MainAppBar = ({
  pages,
  settings,
}: {
  pages: string[];
  settings: string[];
}) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters>
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
          <MobileTabAppBar pages={pages} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MainTabs pages={pages} />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <MainMenu settings={settings} />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
