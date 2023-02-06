import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../screens/home';
const Remote = React.lazy(() => import('remote/Module'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home title="shell" />} />
      <Route path="/remote/*" element={<Remote />} />
    </Routes>
  );
};
