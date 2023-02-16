import { Box } from '@mui/material';
import { theme } from '../../../theme/theme-provider';

export const LeftStrip = ({
  width,
  color,
}: {
  width?: string;
  color?: string;
}) => {
  return (
    <Box
      sx={{
        width: width ? width : '7px',
        height: '100%',
        backgroundColor: color ?? theme.palette.primary.main,
        position: 'relative',
        left: '0px',
        top: '0px',
      }}
    />
  );
};
