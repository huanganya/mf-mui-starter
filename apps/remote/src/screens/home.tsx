import { GlobalDataContext } from '@mf-mui-starter/app-shared';
import { useContext } from 'react';

export function Home({ title }: { title: string }) {
  const { counter, setCounter } = useContext(GlobalDataContext);
  return (
    <p>
      Remote {title}
      <button onClick={() => setCounter(counter - 1)}>counter {counter}</button>
    </p>
  );
}

export default Home;
