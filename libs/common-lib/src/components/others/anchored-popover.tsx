import * as React from 'react';
import { ClickAwayListener, Popover } from '@mui/material';

export const AnchoredPopover = ({
  anchorEl,
  handleClickAway,
  children,
}: {
  anchorEl: EventTarget & Element;
  handleClickAway: () => void;
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
      <ClickAwayListener onClickAway={handleClickAway}>
        <div role="presentation">{children} </div>
      </ClickAwayListener>
    </Popover>
  );
};
