import { GlobalDataContext } from '@mf-mui-starter/app-shared';
import { MainContainer } from '@mf-mui-starter/common-lib';
import { Box, Button, Container, Typography, Link } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  const { counter, setCounter } = useContext(GlobalDataContext);
  const getHeaderComponent = () => (
    <Typography variant="h6">Remote2222222</Typography>
  );
  const getFooterComponent = () => (
    <Box
      sx={{
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        display: 'flex',
        padding: '20px',
      }}
    >
      <Typography>Footer</Typography>
    </Box>
  );
  return (
    <MainContainer
      background={`url('/assets/images/background/bg1.jpg')`}
      pageId={'page-three'}
      headerComponent={getHeaderComponent()}
      footerComponent={getFooterComponent()}
    >
      <Container>
        <Typography variant="h3">Remote22222 {title}</Typography>
        <Button onClick={() => setCounter(counter - 1)}>
          counter {counter}
        </Button>
        <Container>
          <Link onClick={() => navigate('/')}>
            Click here to root(either remote22222's root or host's root, depends
            on where it's rendered)
          </Link>
          <Typography variant="h5">
            <Link onClick={() => navigate('/remote2/path1')}>
              Sticky tab bar under main tabbar to render different content
            </Link>{' '}
          </Typography>
        </Container>
      </Container>
    </MainContainer>
  );
};

export default Home;
