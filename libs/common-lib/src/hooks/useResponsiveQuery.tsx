import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useResponsiveQuery = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  //need to confirm later:
  const isLargeDevice = lgUp;
  const isSmallDevice = smDown;
  const isMiddleDevice = smUp && lgDown;
  const isMiddleDeviceAndUp = smUp;
  return {
    smUp,
    smDown,
    mdUp,
    mdDown,
    lgUp,
    lgDown,
    isLargeDevice,
    isMiddleDeviceAndUp,
    isMiddleDevice,
    isSmallDevice,
  };
};
