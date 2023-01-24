import { useState, useCallback, useEffect } from 'react';

export const useLoginEffect = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  //simulate the login status
  setInterval(() => {
    setIsLoggedIn(!isLoggedIn);
  }, 60000);

  return { isLoggedIn };
};
