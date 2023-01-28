import { GlobalDataContext } from '@mf-mui-starter/app-shared/app-manager';
import { useContext } from 'react';

export function NxWelcome() {
  const { counter, setCounter } = useContext(GlobalDataContext);
  return (
    <>
      remote{' '}
      <button onClick={() => setCounter(counter - 1)}>counter {counter}</button>
    </>
  );
}

export default NxWelcome;
