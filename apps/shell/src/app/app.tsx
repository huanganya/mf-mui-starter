import * as React from 'react';
import { AppRoutes } from '../routes/app-routes';
import { TopAppbar } from '@mf-mui-starter/app-shared/uis';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <AppRoutes />
      <TopAppbar />
    </React.Suspense>
  );
}

export default App;
