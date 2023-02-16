import { useState } from "react";
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
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";
import { LoopPagination } from "./loop-pagination";

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
            backgroundColor: '#F4E9DF',
            color: '#D67A30',
            padding: '10px',
            borderRadius: '5px',
          }}
        />
      )
    },
    {
      link: '',
      hasLink: false,
      linkText: '',
      primaryText: 'Example: XZY Survey has been launched!',
      secondaryText: 'Please complete XZY Survey by DDMMYYYY.',
      icon: ''
    },
    {
      link: '',
      hasLink: false,
      linkText: '',
      primaryText: 'hello',
      secondaryText: 'byebye',
      icon: ''
    }
  ]
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: '#F4F8FC',
        border: '1px solid #2C6ECB',
        borderRadius: '6px',
        display: isClosed ? "none" : "block"
      }}
    >
      <CardHeader
        action={
          <Grid item xs={12} sm={12} md={12} key={1}>
            <Stack direction="row" spacing={1}>
              <LoopPagination
                totalPage={notificationCard.length}
                setCurrentPageIndex={setCurrentPageIndex}
              />
              <IconButton
                onClick={handleCloseNotificationBanner}
                size='small'
              >
                <CancelIcon style={{ color: "#313841" }} />
              </IconButton>
            </Stack>
          </Grid>
        }
        subheader={
          <Typography variant="body18Semi" color={theme.palette.text.primary}>
            {notificationCard[currentPageIndex].primaryText}
          </Typography>
        }
        sx={{ paddingBottom: "0", paddingTop: "0" }}
      />
      <CardContentNoPadding>
        <Typography variant="body16">{notificationCard[currentPageIndex].secondaryText}</Typography>
      </CardContentNoPadding>
    </Card>
  );
};

