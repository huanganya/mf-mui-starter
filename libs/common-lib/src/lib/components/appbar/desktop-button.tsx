import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { AnchoredPopover } from '../others/anchored-popover';
import { AlignItemProp, AvatarListItem } from '../list/avatar-list-item';
import { Box, SxProps, Theme, useTheme } from '@mui/material';
import { DesktopBox } from '../responsive/desktop-box';

export interface DesktopButtonProp extends AlignItemProp {
  renderComponent?: (handleClose: () => void) => React.ReactElement;
}
export const DesktopButton = ({
  item,
  index,
  sx,
}: {
  item: DesktopButtonProp;
  index: number;
  sx?: SxProps<Theme>;
}) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & Element) | null
  >(null);

  const shouldRenderExpand = item.renderComponent;

  const handleClick = (event: {
    currentTarget: React.SetStateAction<(EventTarget & Element) | null>;
  }) => {
    shouldRenderExpand && setAnchorEl(event.currentTarget);
    item.onClick?.();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <DesktopBox>
      <>
        <ListItemButton
          onClick={handleClick}
          sx={{
            ...sx,
            color: theme.palette.text.primary,
            padding: '4px',
            borderLeft: 1,
            borderColor: '#dddddd',
          }}
        >
          <AvatarListItem
            sx={{ padding: '4px', textAlign: 'center' }}
            item={item}
            index={index}
          />
          {shouldRenderExpand && (anchorEl ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        {shouldRenderExpand && anchorEl && (
          <AnchoredPopover
            anchorEl={anchorEl}
            handleClose={handleClose}
            popoverFullWidth={false}
            alignment={'right'}
          >
            {item.renderComponent?.(handleClose)}
          </AnchoredPopover>
        )}
      </>
    </DesktopBox>
  );
};
