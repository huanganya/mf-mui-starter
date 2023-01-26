import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '2.5em',
        },
      },
    },
  },
});
