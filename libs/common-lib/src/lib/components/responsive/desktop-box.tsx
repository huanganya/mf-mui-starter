import * as React from 'react';
import Box from '@mui/material/Box';

export const DesktopBox = ({ children }: { children: React.ReactElement }) => {
  return (
    <Box
      sx={{
        display: { xs: 'none', sm: 'flex' },
      }}
      id="desktop-box"
    >
      {children}
    </Box>
  );
};
