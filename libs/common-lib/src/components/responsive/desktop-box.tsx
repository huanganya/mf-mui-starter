import * as React from 'react';
import Box from '@mui/material/Box';

export const DesktopBox = ({ children }: { children: React.ReactElement }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
      }}
    >
      {children}
    </Box>
  );
};
