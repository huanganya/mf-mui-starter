import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../screens/home';
const Remote = React.lazy(() => import('remote/Module'));
const Remote2 = React.lazy(() => import('remote2/Module'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home title="shell" />} />
      <Route path="/remote/*" element={<Remote />} />
      <Route path="/remote2/*" element={<Remote2 />} />
   </Routes>
  );
};
