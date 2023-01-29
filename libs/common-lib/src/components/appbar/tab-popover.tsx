import * as React from 'react';
import { Popover } from '@mui/material';

export const TabPopover = ({
  anchorEl,
  children,
}: {
  anchorEl: EventTarget & Element;
  children: React.ReactElement;
}) => {
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={() => {}}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: -5,
        horizontal: 'left',
      }}
    >
      {children}
    </Popover>
  );
};
