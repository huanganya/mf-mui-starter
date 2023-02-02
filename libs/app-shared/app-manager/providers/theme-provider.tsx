import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { palette, typography, components } from '../../constants/theme';

export const theme = createTheme({
  palette,
  typography,
  components,
});

type AppThemeProviderProp = { children?: React.ReactElement };

export const AppThemeProvider = ({ children }: AppThemeProviderProp) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
