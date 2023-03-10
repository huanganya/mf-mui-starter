import { useScrollTrigger, Box, Fade } from '@mui/material';
interface Props {
  window?: () => Window;
  enable?: boolean;
  children: React.ReactElement;
}

export const HideOnScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  if (props.enable) {
    return (
      <Fade appear={false} timeout={1000} in={!trigger}>
        <Box>{children}</Box>
      </Fade>
    );
  }
  return <Box>{children}</Box>;
};
