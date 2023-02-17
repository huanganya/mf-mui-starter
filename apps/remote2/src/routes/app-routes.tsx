import { Route, Routes } from 'react-router-dom';
import { Redirector } from './redirector';
import Path1 from '../screens/path1';
import Home from '../screens/home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home title="remote2 Home" />} />
      <Route path="path1" element={<Path1 />} />
      <Route path="path2" element={<Home title="remote2 2" />} />
      <Route path="path3" element={<Home title="remote2 3" />} />
      <Route path="path1/path11" element={<Home title="remote2 1 1" />} />
      <Route path="remote2/*" element={<Redirector />} />
    </Routes>
  );
};
