import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Redirector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.replace(/\/*.*?\//, '/');

  useEffect(() => {
    if (path) {
      navigate(`${path}`);
    }
  }, []);

  return <></>;
};
