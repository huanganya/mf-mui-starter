import { useState, useCallback, useEffect } from 'react';

export const useLoginEffect = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //todo: can do some api process
  // setInterval(() => {
  //   setIsLoggedIn(!isLoggedIn);
  // }, 600000);

  return { isLoggedIn, setIsLoggedIn };
};
