import { AppThemeProvider } from '@mf-mui-starter/common-lib';
import { MemoryRouter } from 'react-router';

export const decorators = [
  (Story) => (
    <AppThemeProvider>
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    </AppThemeProvider>
  ),
];
