import { render } from '@testing-library/react';
import App from '../src/app/app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a remote text', () => {
    const { getByText } = render(<App />);
    expect(getByText(/remote/gi)).toBeTruthy();
  });
});
