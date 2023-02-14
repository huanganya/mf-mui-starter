import { AppThemeProvider, theme } from '../src';
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
