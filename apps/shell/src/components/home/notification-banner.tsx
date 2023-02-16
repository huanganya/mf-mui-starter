import { useState } from 'react';
import {
  Typography,
  CardHeader,
  CardContent,
  Card,
  useTheme,
  Grid,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import {
  LoopPagination
} from '@mf-mui-starter/common-lib';

export const Notifications = () => {
  const theme = useTheme();
  const CardContentNoPadding = styled(CardContent)(`
      paddingTop: "4px";
      &:last-child {
        padding-bottom: 16px;
      }
    `);
  const [isClosed, setIsClosed] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleCloseNotificationBanner = () => {
    setIsClosed(true);
  };

  const notificationCard = [
    {
      link: '',
      hasLink: false,
      linkText: '',
      primaryText: 'Example: ABC Survey has been launched!',
      secondaryText: 'Please complete ABC Survey by DDMMYYYY.',
      icon: (
        <InfoIcon
          sx={{
            color: '#2C6ECB',
            paddingLeft: '10px',
            borderRadius: '5px',
          }}
        />
      ),
    },
    {
      link: '',
      hasLink: false,
      linkText: '',
      primaryText: 'Example: XZY Survey has been launched!',
      secondaryText: 'Please complete XZY Survey by DDMMYYYY.',
      icon: '',
    },
    {
      link: '',
      hasLink: false,
      linkText: '',
      primaryText: 'hello',
      secondaryText: 'byebye',
      icon: '',
    },
  ];
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: '#fcf4f4', //'#F4F8FC',
        border: '1px solid #cb2c2c',//'1px solid #2C6ECB',
        borderRadius: '6px',
        paddingTop: '16px',
        display: isClosed ? 'none' : 'block',
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={0.5} md={0.5}>
          {notificationCard[currentPageIndex].icon}
        </Grid>
        <Grid item xs={11.5} md={11.5}>
          <CardHeader
            action={
              <Grid
                container
                direction="row"
                justifyContent="space-between"
              >
                <Grid item>
                  <LoopPagination
                    totalPage={notificationCard.length}
                    onPageChange={setCurrentPageIndex}
                  />
                </Grid>
                <Grid item>
                  <IconButton onClick={handleCloseNotificationBanner} size="small">
                    <CancelIcon style={{ color: '#313841' }} />
                  </IconButton>
                </Grid>
              </Grid>
            }
            subheader={
              <Typography variant="body18Semi" color={theme.palette.text.primary}>
                {notificationCard[currentPageIndex].primaryText}
              </Typography>
            }
            sx={{ paddingBottom: '0', paddingTop: '0' }}
          />
          <CardContentNoPadding>
            <Typography variant="body16">
              {notificationCard[currentPageIndex].secondaryText}
            </Typography>
          </CardContentNoPadding>

        </Grid>
      </Grid>
    </Card>
  );
};
