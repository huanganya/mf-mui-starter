import { Box, Container } from '@mui/material';
import { RouterBreadCrumbs } from '../breadcrumbs/router-breadcrumbs';

export const MainContainer = ({
  background,
  pageId,
  headerComponent,
  stickTabs,
  children,
  footerComponent,
}: {
  background?: string;
  pageId: string;
  headerComponent: React.ReactElement;
  stickTabs?: React.ReactElement;
  children: React.ReactElement;
  footerComponent?: React.ReactElement;
}) => {
  return (
    <Box sx={{ height: '100%' }} data-testid="main-container">
      <Box
        sx={{
          background,
        }}
      >
        <Container
          data-testid={`breadcrumbs-${pageId}`}
          sx={{ paddingTop: '20px' }}
        >
          <RouterBreadCrumbs />
        </Container>
        <Container data-testid={`head-${pageId}`} sx={{ paddingTop: '40px' }}>
          {headerComponent}
        </Container>
      </Box>
      {stickTabs}
      <Container data-testid={`content-${pageId}`}>{children}</Container>
      <Box data-testid={`footer-${pageId}`}>{footerComponent}</Box>
    </Box>
  );
};
