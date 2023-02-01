import * as React from 'react';
import NxWelcome from '../app/nx-welcome';
import { Route, Routes } from 'react-router-dom';
const Remote = React.lazy(() => import('remote/Module'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NxWelcome title="shell" />} />
      <Route path="/remote/*" element={<Remote />} />
    </Routes>
  );
};
