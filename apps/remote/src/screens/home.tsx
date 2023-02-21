import { GlobalDataContext } from '@mf-mui-starter/app-shared';
import { MainContainer } from '@mf-mui-starter/common-lib';
import { Box, Button, Container, Typography, Link } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  const { counter, setCounter } = useContext(GlobalDataContext);
  const getHeaderComponent = () => <Typography variant="h6">Remote</Typography>;
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
        <Typography variant="h3">Remote {title}</Typography>
        <Button onClick={() => setCounter(counter - 1)}>
          counter {counter}
        </Button>
        <Container>
          <Typography variant="h5">It is the Remote App </Typography>
          <Link onClick={() => navigate('/')}>
            Click here to root(either remote's root or host's root, depends on
            where it's rendered)
          </Link>
          <Typography variant="h5">
            <Link onClick={() => navigate('/remote/page-three')}>
              Sticky tab bar under main tabbar for scrolling contents
            </Link>{' '}
          </Typography>
        </Container>
      </Container>
    </MainContainer>
  );
};

export default Home;
