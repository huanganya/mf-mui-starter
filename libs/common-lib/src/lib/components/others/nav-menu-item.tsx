import { Box, MenuItem, SxProps, Theme, Typography } from '@mui/material';
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
  sx,
}: {
  item: NavMenuItemProps;
  handleClose: () => void;
  sx?: SxProps<Theme>;
}) => {
  const navigate = useNavigate();
  const extraSx = item.leftIcon ? { ml: 1 } : {};
  return (
    <MenuItem
      data-testid={item.testId}
      onClick={() => {
        handleClose();
        navigate(item.href);
      }}
    >
      <Box sx={sx}>{item.leftIcon}</Box>
      <Typography sx={[extraSx, ...(Array.isArray(sx) ? sx : [sx])]}>
        {item.title}
      </Typography>
    </MenuItem>
  );
};
