import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { SxProps, Theme } from '@mui/material';

export interface AlignItemProp {
  testId: string;
  icon: React.ReactElement;
  primary: string;
  secondary?: string;
  onClick?: () => void;
}
export const AvatarListItem = ({
  item,
  index,
  sx,
}: {
  item: AlignItemProp;
  index: number;
  sx?: SxProps<Theme>;
}) => {
  return (
    <ListItem
      alignItems="flex-start"
      sx={sx}
      onClick={item.onClick}
      key={index}
      data-testid={`list-item-${item.testId}`}
    >
      <ListItemAvatar data-testid={`list-item-avatar-${item.testId}`}>
        {item.icon}
      </ListItemAvatar>
      <ListItemText
        data-testid={`list-item-text-${item.testId}`}
        primary={item.primary}
        secondary={item.secondary}
      />
    </ListItem>
  );
};
