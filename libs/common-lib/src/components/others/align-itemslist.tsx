import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export interface AlignItemProp {
  icon: React.ReactElement;
  primary: string;
  secondary: string;
  onclick?: () => void;
}
export const AlignItemsList = ({
  maxWidth,
  items,
}: {
  maxWidth: number;
  items: AlignItemProp[];
}) => {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: maxWidth,
        bgcolor: 'background.paper',
        padding: '10px',
      }}
    >
      {items.map((item, index) => (
        <ListItem
          alignItems="flex-start"
          sx={{ borderRadius: '5px' }}
          onClick={item.onclick}
          key={index}
        >
          <ListItemAvatar>{item.icon}</ListItemAvatar>
          <ListItemText primary={item.primary} secondary={item.secondary} />
        </ListItem>
      ))}
    </List>
  );
};
