import { AppThemeProvider, theme } from '../src';

export const decorators = [
  (Story) => (
    <AppThemeProvider theme={theme}>
      <Story />
    </AppThemeProvider>
  ),
];
