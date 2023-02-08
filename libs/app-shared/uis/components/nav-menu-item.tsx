import { MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface NavMenuItemProps {
  testId: string;
  title: string;
  href: string;
  leftIcon?: React.ReactElement;
}

export const NavMenuItem = ({
  item,
  handleClose,
}: {
  item: NavMenuItemProps;
  handleClose: () => void;
}) => {
  const navigate = useNavigate();
  return (
    <MenuItem
      data-testid={item.testId}
      onClick={() => {
        handleClose();
        navigate(item.testId);
      }}
    >
      {item.leftIcon}
      <Typography sx={item.leftIcon ? { ml: 1 } : undefined}>
        {item.title}
      </Typography>
    </MenuItem>
  );
};
