import { render } from '@testing-library/react';
import React from 'react';
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

  //this test is outdated
  // it('should have a remote text', () => {
  //   const { getByText } = render(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   );
  //   expect(getByText(/remote/gi)).toBeTruthy();
  // });
});
