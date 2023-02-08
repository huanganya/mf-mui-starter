import { Typography } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import { AppThemeProvider } from '../../app-manager';
import { palette } from '../../constants/theme';

describe('AppThemeProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AppThemeProvider>
        <div>Test</div>
      </AppThemeProvider>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should render with the right Typography theme', () => {
    const { getByText } = render(
      <AppThemeProvider>
        <>
          <Typography variant="body16Bold">Test body16Bold</Typography>
          <Typography variant="body18Bold">Test body18Bold</Typography>
        </>
      </AppThemeProvider>
    );

    const span1 = getByText('Test body16Bold');
    expect(span1.className).toContain('MuiTypography-body16Bold');
    const span2 = getByText('Test body18Bold');
    expect(span2.className).toContain('MuiTypography-body18Bold');
  });

  //todo: add more tests for color, button and overrided component check
});
