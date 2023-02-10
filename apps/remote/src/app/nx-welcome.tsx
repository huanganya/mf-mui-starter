import { GlobalDataContext } from '@mf-mui-starter/app-shared';
import { useContext } from 'react';

export function NxWelcome({ title }: { title: string }) {
  const { counter, setCounter } = useContext(GlobalDataContext);
  return (
    <p>
      remote {title}
      <button onClick={() => setCounter(counter - 1)}>counter {counter}</button>
    </p>
  );
}

export default NxWelcome;
