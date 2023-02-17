import { Box, Grid, Typography } from '@mui/material';
import {
  MainContainer,
  RainbowCard,
  StickyPaper,
  StickyTabs,
} from '@mf-mui-starter/common-lib';
import { useState } from 'react';

enum SectionType {
  ContentSectionA = 'Content Section A',
  ContentSectionB = 'Content Section B',
  ContentSectionC = 'Content Section C',
}

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const Path1 = () => {
  const [section, setSection] = useState<SectionType>(
    SectionType.ContentSectionA
  );

  const getHeaderComponent = () => (
    <>
      <Typography variant="h6">Page with sticky tab bar</Typography>
      <Typography variant="body14">
        This page will demostrate how to make the sticky tab and change the
        content based on selected tab
      </Typography>
    </>
  );
  const getStickTabs = () => (
    <StickyTabs
      sx={{ background: `url('/assets/images/background/bg1.jpg')` }}
      tabs={[
        {
          title: 'Content Section A',
          onClick: () => setSection(SectionType.ContentSectionA),
        },
        {
          title: 'Content Section B',
          onClick: () => setSection(SectionType.ContentSectionB),
        },
        {
          title: 'Content Section C',
          onClick: () => setSection(SectionType.ContentSectionC),
        },
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
          {section === SectionType.ContentSectionA && (
            <>
              <Grid item>
                <Typography variant="h5" id="ContentSectionA">
                  ContentSectionA
                </Typography>
              </Grid>
              {array10.map(() => (
                <Grid item>
                  <Typography variant="body14">
                    ContentSectionA: This page will demostrate how to make the
                    sticky tab bar; This page will demostrate how to make the
                    sticky tab bar;This page will demostrate how to make the
                    sticky tab bar
                  </Typography>
                </Grid>
              ))}
            </>
          )}
          {section === SectionType.ContentSectionB && (
            <>
              <Grid item>
                <Typography variant="h5" id="ContentSectionB">
                  ContentSectionB
                </Typography>
              </Grid>
              {array10.map(() => (
                <Grid item>
                  <Typography variant="body14">
                    ContentSectionB: This page will demostrate how to make the
                    sticky tab bar; This page will demostrate how to make the
                    sticky tab bar;This page will demostrate how to make the
                    sticky tab bar
                  </Typography>
                </Grid>
              ))}
            </>
          )}
          {section === SectionType.ContentSectionC && (
            <>
              <Grid item>
                <Typography variant="h5" id="ContentSectionC">
                  ContentSectionC
                </Typography>
              </Grid>
              {array10.map(() => (
                <Grid item>
                  <Typography variant="body14">
                    ContentSectionC: This page will demostrate how to make the
                    sticky tab bar; This page will demostrate how to make the
                    sticky tab bar;This page will demostrate how to make the
                    sticky tab bar
                  </Typography>
                </Grid>
              ))}
            </>
          )}
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
};

export default Path1;
