import { useState } from 'react';
import {
  Typography,
  CardHeader,
  CardContent,
  Card,
  useTheme,
  Grid,
  Link,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import { LoopPagination } from '@mf-mui-starter/common-lib';

export const Notifications = () => {
  const theme = useTheme();
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
      primaryText: 'Example: The latest item ABC has been arrived!',
      secondaryText: (
        <>
          Please complete registration form by DDMMYYYY.{' '}
          <Link href={'/'}>Interested? Click here...</Link>
        </>
      ),
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
      primaryText: 'Example: The latest item XYZ has been arrived',
      secondaryText: (
        <>
          Please complete XZY payment by DDMMYYYY.{' '}
          <Link href={'/'}>Click here to pay</Link>
        </>
      ),
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
      primaryText: 'Hello',
      secondaryText: <>byebye</>,
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
  ];

  const actionContent = () => {
    return (
      <Grid container direction="row" justifyContent="space-between">
        <Grid item>
          <LoopPagination
            totalPage={notificationCard.length}
            onPageChange={setCurrentPageIndex}
          />
        </Grid>
        <Grid item>
          <IconButton
            onClick={handleCloseNotificationBanner}
            size="small"
          >
            <CancelIcon style={{ color: '#313841' }} />
          </IconButton>
        </Grid>
      </Grid>
    );
  };

  const cardHeader = () => {
    return (
      <CardHeader
        sx={{ paddingLeft: '0', paddingBottom: '0', paddingTop: '0' }}
        action={actionContent()}
        subheader={
          <Typography
            variant="body18Semi"
            color={theme.palette.text.primary}
          >
            {notificationCard[currentPageIndex].primaryText}
          </Typography>
        }
      />
    );
  };

  const cardContent = () => {
    return (
      <CardContent
        sx={{
          paddingLeft: '0',
          paddingTop: '4px',
          '&:last-child': { paddingBottom: '16px' },
        }}
      >
        <Typography variant="body16">
          {notificationCard[currentPageIndex].secondaryText}
        </Typography>
      </CardContent>
    );
  };

  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: '#fcf4f4', //'#F4F8FC',
        border: '1px solid #cb2c2c', //'1px solid #2C6ECB',
        borderRadius: '6px',
        paddingTop: '16px',
        display: isClosed ? 'none' : 'block',
      }}
    >
      <Grid container spacing={1} wrap="nowrap">
        <Grid item xs={'auto'}>
          {notificationCard[currentPageIndex].icon}
        </Grid>
        <Grid item xs={12}>
          <>
            {cardHeader()}
            {cardContent()}
          </>
        </Grid>
      </Grid>
    </Card>
  );
};
