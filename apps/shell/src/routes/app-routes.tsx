import * as React from 'react';
import NxWelcome from '../app/nx-welcome';
import { Route, Routes } from 'react-router-dom';
const Auth = React.lazy(() => import('auth/Module'));
const Remote = React.lazy(() => import('remote/Module'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NxWelcome title="shell" />} />
      <Route path="/remote" element={<Remote />} />
      <Route path="/login" element={<Auth />} />
    </Routes>
  );
};
