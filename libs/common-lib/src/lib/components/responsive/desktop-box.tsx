import * as React from 'react';
import Box from '@mui/material/Box';
import { useResponsiveQuery } from '../../../hooks/useResponsiveQuery';

export const DesktopBox = ({ children }: { children: React.ReactElement }) => {
  const { isMiddleDeviceAndUp } = useResponsiveQuery();

  return (
    <Box
      sx={{
        display: isMiddleDeviceAndUp ? 'flex' : 'none',
      }}
      id="desktop-box"
    >
      {children}
    </Box>
  );
};
