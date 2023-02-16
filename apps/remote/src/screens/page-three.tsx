import { Box, Grid, Paper, Typography } from '@mui/material';
import {
  MainContainer,
  RainbowCard,
  StickyPaper,
  StickyTabs,
} from '@mf-mui-starter/common-lib';

export function PageThree() {
  const getHeaderComponent = () => (
    <>
      <Typography variant="h6">Page with sticky tab bar</Typography>
      <Typography variant="body14">
        This page will demostrate how to make the sticky tab bar111
      </Typography>
    </>
  );
  const getStickTabs = () => (
    <StickyTabs
      sx={{ background: `url('/assets/images/background/bg1.jpg')` }}
      tabs={[
        { title: 'Overview', anchorId: 'overview' },
        { title: 'Applications', anchorId: 'applications' },
        { title: 'Schedule', anchorId: 'schedule' },
      ]}
      scrollOffSet={90}
    />
  );
  const getFooterComponent = () => (
    <Box
      sx={{ backgroundColor: '#eeeeee', textAlign: 'center', padding: '30px' }}
    >
      <Typography variant="h6">This is the footer component</Typography>
      <Typography variant="body14">
        This page has demostrated how to make the sticky tab bar111
      </Typography>
    </Box>
  );

  return (
    <MainContainer
      background={`url('/assets/images/background/bg1.jpg')`}
      pageId={'page-three'}
      headerComponent={getHeaderComponent()}
      stickTabs={getStickTabs()}
      footerComponent={getFooterComponent()}
    >
      <Grid container spacing={3}>
        <Grid
          item
          container
          direction="column"
          id="container"
          spacing={3}
          mt={3}
          xs={12}
          sm={8}
        >
          <Grid item>
            <Typography variant="h5" id="overview">
              Overview
            </Typography>
          </Grid>
          {[...Array(20).keys()].map(() => (
            <Grid item>
              <Typography variant="body14">
                Overview: This page will demostrate how to make the sticky tab
                bar; This page will demostrate how to make the sticky tab
                bar;This page will demostrate how to make the sticky tab bar
              </Typography>
            </Grid>
          ))}
          <Grid item>
            <Typography variant="h5" id="applications">
              Applications
            </Typography>
          </Grid>
          {[...Array(20).keys()].map(() => (
            <Grid item>
              <Typography variant="body14">
                Applications: This page will demostrate how to make the sticky
                tab bar; This page will demostrate how to make the sticky tab
                bar;This page will demostrate how to make the sticky tab bar
              </Typography>
            </Grid>
          ))}
          <Grid item>
            <Typography variant="h5" id="schedule">
              Schedule
            </Typography>
          </Grid>
          {[...Array(20).keys()].map(() => (
            <Grid item>
              <Typography variant="body14">
                Schedule: This page will demostrate how to make the sticky tab
                bar; This page will demostrate how to make the sticky tab
                bar;This page will demostrate how to make the sticky tab bar
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item mt={3} xs={12} sm={4}>
          <StickyPaper>
            <RainbowCard>
              <Grid container direction={'column'} alignItems={'center'}>
                <Typography variant="h6">This is the header</Typography>{' '}
                {[...Array(20).keys()].map(() => (
                  <Grid item>
                    <Typography variant="body14">
                      This is the sticky side bar
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </RainbowCard>
          </StickyPaper>
        </Grid>
      </Grid>
    </MainContainer>
  );
}

export default PageThree;
