import { Card, Box } from '@mui/material';

export const RainbowCard = ({
  maxWidth,
  children,
}: {
  maxWidth?: number;
  children?: React.ReactNode;
}) => {
  return (
    <Card sx={{ maxWidth: maxWidth ?? '350px' }}>
      <Box
        style={{
          width: '100%',
          height: '7px',
          background: 'linear-gradient(270deg, #6622bb 0%, #cc3333 100%)',
          borderRadius: '7px 7px 0px 0px',
        }}
      />
      <Box sx={{ padding: '15px' }}>{children}</Box>
    </Card>
  );
};
