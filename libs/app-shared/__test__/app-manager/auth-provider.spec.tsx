import { act, render, waitFor } from '@testing-library/react';
import * as commonLib from '@mf-mui-starter/common-lib';
import React from 'react';
import {
  authContext,
  AuthContextProvider,
} from '../../src/app-manager/providers/auth-provider';

jest.mock('@mf-mui-starter/app-shared');
const sharedUI = require('@mf-mui-starter/app-shared');

describe('AuthContextProvider', () => {
  let triggerLogout: () => void;
  const MockAuthorizedComponent = () => {
    const { logout } = React.useContext(authContext);
    triggerLogout = logout;
    return <div>Test Logged in</div>;
  };
  const TestComponent = () => {
    return (
      <AuthContextProvider>
        <MockAuthorizedComponent />
      </AuthContextProvider>
    );
  };
  let triggerLoginSubmit: () => void;
  sharedUI.LoginForm = ({ onSubmit }: any) => {
    triggerLoginSubmit = onSubmit;
    return <>LOGIN FORM</>;
  };
  it('should render successfully', () => {
    const { baseElement } = render(<TestComponent />);

    expect(baseElement).toBeTruthy();
  });

  it('should render with login form if isLoggedIn === false', async () => {
    jest
      .spyOn(commonLib, 'useLoginEffect')
      .mockReturnValueOnce({ isLoggedIn: false, setIsLoggedIn: jest.fn() });

    const { getByText, queryByText } = render(<TestComponent />);

    expect(getByText('LOGIN FORM')).toBeTruthy();
    await waitFor(() => {
      expect(queryByText('Test Logged in')).toBeFalsy();
    });
  });

  it('should render child component if isLoggedIn === true', async () => {
    jest
      .spyOn(commonLib, 'useLoginEffect')
      .mockReturnValueOnce({ isLoggedIn: true, setIsLoggedIn: jest.fn() });

    const { getByText, queryByText } = render(<TestComponent />);

    expect(getByText('Test Logged in')).toBeTruthy();
    await waitFor(() => {
      expect(queryByText('LOGIN FORM')).toBeFalsy();
    });
  });

  it('should render child component if submit login form', async () => {
    const { getByText } = render(<TestComponent />);
    expect(getByText('LOGIN FORM')).toBeTruthy();

    act(() => triggerLoginSubmit());

    await waitFor(() => {
      expect(getByText('Test Logged in')).toBeTruthy();
    });
  });

  it('should render Login Form if logout is called', async () => {
    const { getByText } = render(<TestComponent />);
    act(() => triggerLoginSubmit());
    await waitFor(() => {
      expect(getByText('Test Logged in')).toBeTruthy();
    });

    act(() => triggerLogout());

    await waitFor(() => {
      expect(getByText('LOGIN FORM')).toBeTruthy();
    });
  });
});
