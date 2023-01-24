import { createContext, useState } from 'react';
type AppProviderProps = { children?: React.ReactNode };

interface GlobalDataContext {}
export const GlobalDataContext = createContext<Record<string, any>>({});

export const AppProvider = ({
  children,
}: AppProviderProps): React.ReactElement => {
  const [counter, setCounter] = useState(1);

  return (
    <GlobalDataContext.Provider value={{ counter, setCounter }}>
      {children}
    </GlobalDataContext.Provider>
  );
};
