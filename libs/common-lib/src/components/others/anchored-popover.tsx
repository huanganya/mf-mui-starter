import * as React from 'react';
import { Popover } from '@mui/material';

export const AnchoredPopover = ({
  anchorEl,
  handleClose,
  children,
}: {
  anchorEl: EventTarget & Element;
  handleClose: () => void;
  children: React.ReactElement;
}) => {
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
      onClick={handleClose}
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
