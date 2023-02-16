import { Box, Container } from '@mui/material';

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
    <Box>
      <Box
        sx={{
          background,
        }}
      >
        <Container
          id={'head-container'}
          data-testId={`head-container-${pageId}`}
          sx={{ paddingTop: '20px' }}
        >
          {headerComponent}
        </Container>
      </Box>
      {stickTabs}
      <Container id={`content-container-${pageId}`}>{children}</Container>
      <Box>{footerComponent}</Box>
    </Box>
  );
};
