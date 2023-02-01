import NxWelcome from '../app/nx-welcome';
import { Route, Routes } from 'react-router-dom';
import { Redirector } from './redirector';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NxWelcome title="remote Home" />} />
      <Route path="path1" element={<NxWelcome title="remote 1" />} />
      <Route path="path2" element={<NxWelcome title="remote 2" />} />
      <Route path="path3" element={<NxWelcome title="remote 3" />} />
      <Route
        path="page-three"
        element={<NxWelcome title="remote page-three" />}
      />
      <Route
        path="page-four"
        element={<NxWelcome title="remote page-four" />}
      />
      <Route
        path="page-five"
        element={<NxWelcome title="remote page-five" />}
      />
      <Route path="path1/path11" element={<NxWelcome title="remote 1 1" />} />
      <Route path="remote/*" element={<Redirector />} />
    </Routes>
  );
};
