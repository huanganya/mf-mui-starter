import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#CE3A4E',
      },
      secondary: {
        main: '#0C8188',
      },
      success: {
        main: '#177E75',
      },
      info: {
        main: '#2C6ECB',
      },
      warning: {
        main: '#E4750E',
      },
      error: {
        main: '#BA0512',
      },
      text: {
        primary: '#313841',
        disabled: '#969AA1',
      },
    },
    typography: {
      fontFamily: 'Inter',
      fontSize: 16,
      h1: {
        fontSize: 48,
        fontWeight: 700,
      },
      h2: {
        fontSize: '2.5em',
        fontWeight: 700,
      },
      h3: {
        fontSize: '2.25em',
        fontWeight: 700,
      },
      h4: {
        fontSize: '2em',
        fontWeight: 700,
        lineHeight: '48',
      },
      h5: {
        fontSize: '1.75em',
        fontWeight: 700,
      },
      title: {
        fontSize: '1.5em',
        fontWeight: 700,
      },
      subheader: {
        fontSize: '1.31em',
        fontWeight: 700,
      },
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            height: '2.5em',
          },
        },
      },
    },
  })
);

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties;
    subheader: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    subheader?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    subheader: true;
    h6: false;
  }
}
