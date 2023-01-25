import { createContext, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './app-theme';
import { useLoginEffect } from '@mf-mui-starter/common-lib';

type AppProviderProps = { children?: React.ReactNode };

interface GlobalDataContext {}
export const GlobalDataContext = createContext<Record<string, any>>({});
interface AuthContext {}
export const AuthContext = createContext<Record<string, any>>({});

export const AppProvider = ({
  children,
}: AppProviderProps): React.ReactElement => {
  const [counter, setCounter] = useState(1);
  const { isLoggedIn, setIsLoggedIn } = useLoginEffect();
  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <GlobalDataContext.Provider value={{ counter, setCounter }}>
          {children}
        </GlobalDataContext.Provider>
      </AuthContext.Provider>
    </ThemeProvider>
  );
};
