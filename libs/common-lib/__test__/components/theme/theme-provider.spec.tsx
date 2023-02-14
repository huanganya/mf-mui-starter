import { Typography } from '@mui/material';
import { render } from '@testing-library/react';
import { AppThemeProvider, palette } from '../../../src/';

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

  it('should render with the correct color', () => {
    const { getByText } = render(
      <AppThemeProvider>
        <>
          <Typography display="inline" color={palette.primary.main}>
            Test Primary Palette
          </Typography>
          <Typography display="inline" color={palette.secondary.main}>
            Test Secondary Palette
          </Typography>
          <Typography display="inline" color={palette.success.main}>
            Test Success Palette
          </Typography>
          <Typography display="inline" color={palette.info.main}>
            Test Info Palette
          </Typography>
          <Typography display="inline" color={palette.warning.main}>
            Test Warning Palette
          </Typography>
          <Typography display="inline" color={palette.error.main}>
            Test Error Palette
          </Typography>
          <Typography display="inline" color={palette.text.primary}>
            Test Text Palette
          </Typography>
          <Typography display="inline" color={palette.text.disabled}>
            Test Text Disabled Palette
          </Typography>
        </>
      </AppThemeProvider>
    );

    const palette1 = getByText('Test Primary Palette');
    expect(getComputedStyle(palette1).color).toBe('rgb(206, 58, 78)');
    const palette2 = getByText('Test Secondary Palette');
    expect(getComputedStyle(palette2).color).toBe('rgb(12, 129, 136)');
    const palette3 = getByText('Test Success Palette');
    expect(getComputedStyle(palette3).color).toBe('rgb(23, 126, 117)');
    const palette4 = getByText('Test Info Palette');
    expect(getComputedStyle(palette4).color).toBe('rgb(44, 110, 203)');
    const palette5 = getByText('Test Warning Palette');
    expect(getComputedStyle(palette5).color).toBe('rgb(228, 117, 14)');
    const palette6 = getByText('Test Error Palette');
    expect(getComputedStyle(palette6).color).toBe('rgb(186, 5, 18)');
    const palette7 = getByText('Test Text Palette');
    expect(getComputedStyle(palette7).color).toBe('rgb(49, 56, 65)');
    const palette8 = getByText('Test Text Disabled Palette');
    expect(getComputedStyle(palette8).color).toBe('rgb(150, 154, 161)');
  });

  //todo: add more tests for color, button and overrided component check
});
