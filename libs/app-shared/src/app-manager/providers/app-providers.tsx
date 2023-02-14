import { createContext, useState } from 'react';
import { AppThemeProvider } from '@mf-mui-starter/common-lib';
import { AuthContextProvider } from './auth-provider';

type AppProviderProps = { children?: React.ReactNode };

interface GlobalDataContext {}
export const GlobalDataContext = createContext<Record<string, any>>({});

export const AppProvider = ({
  children,
}: AppProviderProps): React.ReactElement => {
  const [counter, setCounter] = useState(1);
  return (
    <AppThemeProvider>
      <AuthContextProvider>
        <GlobalDataContext.Provider value={{ counter, setCounter }}>
          {children}
        </GlobalDataContext.Provider>
      </AuthContextProvider>
    </AppThemeProvider>
  );
};
