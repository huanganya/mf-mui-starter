import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/app/app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have link to home and remote', async () => {
    const { getByText, findAllByRole } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const anchorElement = await findAllByRole('link');

    expect(getByText('Remote')).toBeTruthy();
    expect(getByText('Logout')).toBeTruthy();
    expect(anchorElement[0].getAttribute('href')).toEqual('/');
    expect(anchorElement[1].getAttribute('href')).toEqual('/remote');
  });
});
