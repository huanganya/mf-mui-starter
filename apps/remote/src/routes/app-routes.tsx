import { Route, Routes } from 'react-router-dom';
import { Redirector } from './redirector';
import PageThree from '../screens/page-three';
import Home from '../screens/home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home title="remote Home" />} />
      <Route path="path1" element={<Home title="remote 1" />} />
      <Route path="path2" element={<Home title="remote 2" />} />
      <Route path="path3" element={<Home title="remote 3" />} />
      <Route path="page-three" element={<PageThree />} />
      <Route path="page-four" element={<Home title="remote page-four" />} />
      <Route path="page-five" element={<Home title="remote page-five" />} />
      <Route path="path1/path11" element={<Home title="remote 1 1" />} />
      <Route path="remote/*" element={<Redirector />} />
    </Routes>
  );
};
