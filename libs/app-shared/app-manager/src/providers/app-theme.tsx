import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-focused': `10px solid`,
          padding: '50px',
        },
      },
    },
  },
});
