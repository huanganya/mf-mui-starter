import { useState, useCallback, useEffect } from 'react';

export const useLoginEffect = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //simulate the login status
  setInterval(() => {
    setIsLoggedIn(!isLoggedIn);
  }, 600000);

  return { isLoggedIn, setIsLoggedIn };
};
