import { Route, Routes } from 'react-router-dom';
import { Redirector } from './redirector';
import TrainingCourses from '../screens/training-courses';
import Home from '../screens/home';
import SearchForCourse from '../screens/search-for-courses';
import BuildingRelationships from '../screens/building-relationships';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home title="remote2 Home" />} />
      <Route path="path1" element={<TrainingCourses />} />
      <Route path="path2" element={<SearchForCourse />} />
      <Route path="searchForCourses" element={<SearchForCourse />} />
      <Route path="path3" element={<Home title="remote2 3" />} />
      <Route path="path1/path11" element={<BuildingRelationships />} />
      <Route path="remote2/*" element={<Redirector />} />
    </Routes>
  );
};
