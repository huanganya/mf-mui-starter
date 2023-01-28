import { useLoginEffect } from '@mf-mui-starter/common-lib';
import { createContext } from 'react';
import { LoginForm } from '@mf-mui-starter/app-shared/uis';

export const AuthContext = createContext<Record<string, any>>({});

export interface AuthContextProps {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const authContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

type AuthContextProviderProp = { children?: React.ReactElement };

export const AuthContextProvider = ({ children }: AuthContextProviderProp) => {
  const { isLoggedIn, setIsLoggedIn } = useLoginEffect();

  const login = (): void => {
    setIsLoggedIn(true);
  };
  const logout = (): void => {
    setIsLoggedIn(false);
  };

  return (
    <authContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {!isLoggedIn && <LoginForm onSubmit={() => setIsLoggedIn(true)} />}
      {isLoggedIn && children}
    </authContext.Provider>
  );
};
