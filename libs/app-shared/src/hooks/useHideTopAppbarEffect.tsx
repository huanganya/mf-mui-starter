import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
//todo: move this to constants folder
const pathsToEnableHideOnScroll = ['page-three', 'path1'];

export const useHideTopAppbarEffect = () => {
  const [enableHideOnScroll, setEnableHideOnScroll] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname.split('/').pop();
    setEnableHideOnScroll(false);
    pathsToEnableHideOnScroll.every((p) => {
      if (path && p.indexOf(path) !== -1) {
        setEnableHideOnScroll(true);
        return false;
      }
      return true;
    });
  }, [location]);
  return { enableHideOnScroll };
};
