import List from '@mui/material/List';
import { AlignItemProp, AvatarListItem } from './avatar-list-item';

export const AlignItemsList = ({
  maxWidth,
  items,
}: {
  maxWidth?: number;
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
        <AvatarListItem
          key={index}
          item={item}
          index={index}
          sx={{ borderRadius: '5px' }}
        />
      ))}
    </List>
  );
};
