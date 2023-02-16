import { Paper } from '@mui/material';

export const StickyPaper = ({
  top,
  children,
}: {
  top?: string;
  children: React.ReactElement;
}) => {
  return (
    <Paper sx={{ position: 'sticky', top: top ?? '80px', zIndex: 'modal' }}>
      {children}
    </Paper>
  );
};
