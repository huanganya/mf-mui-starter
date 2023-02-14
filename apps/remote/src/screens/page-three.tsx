import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { StickyTabs } from '@mf-mui-starter/common-lib';

export function PageThree() {
  return (
    <>
      <Box>
        <Box
          id="back-to-top-anchor"
          sx={{
            background: `url('/assets/images/background/bg1.jpg')`,
          }}
        >
          <Container>
            <Typography variant="h6">Page with sticky tab bar</Typography>
            <Typography variant="body14">
              This page will demostrate how to make the sticky tab bar111
            </Typography>
          </Container>
        </Box>
        <StickyTabs
          sx={{ background: `url('/assets/images/background/bg1.jpg')` }}
          tabs={[
            { title: 'Overview', anchorId: 'overview' },
            { title: 'Applications', anchorId: 'applications' },
            { title: 'Schedule', anchorId: 'schedule' },
          ]}
          scrollOffSet={90}
        />
        <Container id="remote-top-container">
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
                    Overview: This page will demostrate how to make the sticky
                    tab bar; This page will demostrate how to make the sticky
                    tab bar;This page will demostrate how to make the sticky tab
                    bar
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
                    Applications: This page will demostrate how to make the
                    sticky tab bar; This page will demostrate how to make the
                    sticky tab bar;This page will demostrate how to make the
                    sticky tab bar
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
                    Schedule: This page will demostrate how to make the sticky
                    tab bar; This page will demostrate how to make the sticky
                    tab bar;This page will demostrate how to make the sticky tab
                    bar
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Grid item mt={3} xs={12} sm={4}>
              <Paper sx={{ position: 'sticky', top: 80, zIndex: 'modal' }}>
                <Typography>This is the sticky side bar</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default PageThree;
