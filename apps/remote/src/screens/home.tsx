import { GlobalDataContext } from '@mf-mui-starter/app-shared';
import { Container } from '@mui/material';
import { useContext } from 'react';

export function Home({ title }: { title: string }) {
  const { counter, setCounter } = useContext(GlobalDataContext);
  return (
    <Container>
      Remote {title}
      <button onClick={() => setCounter(counter - 1)}>counter {counter}</button>
    </Container>
  );
}

export default Home;
