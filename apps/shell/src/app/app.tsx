import * as React from 'react';
import { AppRoutes } from '../routes/app-routes';
import { TopAppbar } from '@mf-mui-starter/app-shared/uis';
import style from './app.module.scss';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div className={style.app}>
        <TopAppbar />
        <AppRoutes />
      </div>
    </React.Suspense>
  );
}

export default App;
