import { AppThemeProvider, theme } from '@mf-mui-starter/common-lib';
import { MemoryRouter } from 'react-router';

export const decorators = [
  (Story) => (
    <AppThemeProvider theme={theme}>
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    </AppThemeProvider>
  ),
];
export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
