import * as React from 'react';
import { Popover, SxProps, Theme } from '@mui/material';

export const AnchoredPopover = ({
  anchorEl,
  handleClose,
  children,
  popoverFullWidth,
  alignment,
  sx,
}: {
  anchorEl: EventTarget & Element;
  handleClose: () => void;
  children?: React.ReactElement;
  popoverFullWidth?: boolean;
  alignment: 'left' | 'right';
  sx?: SxProps<Theme>;
}) => {
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: alignment,
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: alignment,
      }}
      PaperProps={{
        style: {
          marginTop: popoverFullWidth ? '1px' : '3px',
          borderColor: '#fefefe',
          width: popoverFullWidth ? '100%' : undefined,
        },
      }}
      sx={sx}
    >
      {children}
    </Popover>
  );
};
