import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

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
      allVariants: {
        fontFamily: 'InterRegular',
        fontSize: 16,
        textTransform: 'none',
      },
      button: {
        fontFamily: 'InterSemiBold',
        fontSize: 16,
      },
      h1: {
        fontFamily: 'InterBold',
        fontSize: 48,
        fontWeight: 700,
      },
      h2: {
        fontFamily: 'InterBold',
        fontSize: '2.5em',
        fontWeight: 700,
      },
      h3: {
        fontFamily: 'InterBold',
        fontSize: '2.25em',
      },
      h4: {
        fontFamily: 'InterBold',
        fontSize: '2em',
      },
      h5: {
        fontFamily: 'InterBold',
        fontSize: '1.75em',
        fontWeight: 700,
      },
      title: {
        fontFamily: 'InterBold',
        fontSize: '1.5em',
        fontWeight: 700,
      },
      subheader: {
        fontFamily: 'InterBold',
        fontSize: '1.31em',
        fontWeight: 700,
      },
      body18Bold: {
        fontFamily: 'InterBold',
        fontSize: '1.125em',
        fontWeight: 700,
      },
      body18SemiBold: {
        fontFamily: 'InterSemiBold',
        fontSize: '1.125em',
      },
      body18: {
        fontFamily: 'InterRegular',
        fontSize: '1.125em',
      },
      body16Bold: {
        fontFamily: 'InterBold',
        fontSize: '1em',
        fontWeight: 700,
      },
      body16SemiBold: {
        fontFamily: 'InterSemiBold',
        fontSize: '1em',
      },
      body16: {
        fontFamily: 'InterRegular',
        fontSize: '1em',
      },
      body14Bold: {
        fontFamily: 'InterBold',
        fontSize: '0.875em',
        fontWeight: 700,
      },
      body14SemiBold: {
        fontFamily: 'InterSemiBold',
        fontSize: '0.875em',
        fontWeight: 600,
      },
      body14Medium: {
        fontFamily: 'InterRegular',
        fontSize: '0.875em',
      },
      body14: {
        fontFamily: 'InterRegular',
        fontSize: '0.875em',
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

type AppThemeProviderProp = { children?: React.ReactElement };

export const AppThemeProvider = ({ children }: AppThemeProviderProp) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties;
    subheader: React.CSSProperties;
    body18Bold: React.CSSProperties;
    body18SemiBold: React.CSSProperties;
    body18: React.CSSProperties;
    body16Bold: React.CSSProperties;
    body16SemiBold: React.CSSProperties;
    body16: React.CSSProperties;
    body14Bold: React.CSSProperties;
    body14SemiBold: React.CSSProperties;
    body14Medium: React.CSSProperties;
    body14: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    subheader?: React.CSSProperties;
    body18Bold?: React.CSSProperties;
    body18SemiBold?: React.CSSProperties;
    body18?: React.CSSProperties;
    body16Bold?: React.CSSProperties;
    body16SemiBold?: React.CSSProperties;
    body16?: React.CSSProperties;
    body14Bold?: React.CSSProperties;
    body14SemiBold?: React.CSSProperties;
    body14Medium?: React.CSSProperties;
    body14?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    subheader: true;
    body18Bold: true;
    body18SemiBold: true;
    body18: true;
    body16Bold: true;
    body16SemiBold: true;
    body16: true;
    body14Bold: true;
    body14SemiBold: true;
    body14Medium: true;
    body14: true;
    h6: false;
  }
}
