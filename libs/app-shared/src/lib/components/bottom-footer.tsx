import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export const BottomFooter = () => {
  return (
    <Box sx={{ color: 'white', backgroundColor: 'black', width: '100%' }}>
      <Typography>
        Footer Bar line 1
        <br />
        Footer Bar line 2
        <br />
        Footer Bar line 3
        <br />
      </Typography>
    </Box>
  );
};
