import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { AnchoredPopover } from '../others/anchored-popover';
import { AlignItemProp, AvatarListItem } from '../others/avatar-list-item';
import { useTheme } from '@mui/material';

export interface DesktopButtonProp extends AlignItemProp {
  renderComponent?: (handleClose: () => void) => React.ReactElement;
}
export const DesktopButton = ({
  item,
  index,
}: {
  item: DesktopButtonProp;
  index: number;
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
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{ color: theme.palette.text.primary }}
      >
        <AvatarListItem item={item} index={index} />
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
  );
};
