import React from "react";
import { Circle, MoreVert } from "@mui/icons-material";
import { Stack, Box, Typography, Grid, MenuItem } from "@mui/material";
import { IconMenuPopup } from '@mf-mui-starter/common-lib';
import dayjs from 'dayjs';

export interface AlertBoxItemType {
  title: string,
  content: string,
  date: Date;
  read?: boolean;
}

export interface AlertBoxItemProps extends AlertBoxItemType {
}

export const AlertBoxItem = ({
  title,
  content,
  date,
  read,
}: AlertBoxItemProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  
  const handleIconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
  <Box 
    sx={{
      backgroundColor: !read ? '#c4f1ff' : undefined,
      borderRadius: 2,
      p: '5px',
    }}
  >
    <Grid container spacing={0} paddingX={0}>
      {!read &&
        <Grid item xs={0.5}>
          <Circle sx={{ fontSize: 10 }} data-testid={"alert-box-circle-unread-test-id"}/>
        </Grid>
      }
      <Grid item xs={!read ? 10.5 : 11}>
        <Stack spacing={1}>
          <Typography variant={'body18Bold'} data-testid={"alert-box-title-test-id"}>
            {title}
          </Typography>
          <Typography variant={'body14'} paragraph data-testid={"alert-box-content-test-id"}>
            {content}
          </Typography>
          <Typography variant={'body14'} data-testid={"alert-box-date-test-id"}>
            {dayjs(date).format('DD MMM YYYY')}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={1}>
        <IconMenuPopup
          icon = {<MoreVert/>}
          buttonProps={{
            "aria-controls": openMenu ? 'menuPopUp' : undefined,
            "aria-expanded": openMenu ? 'true' : undefined,
            "aria-haspopup": "true",
            "data-testid":"alert-box-option-button-test-id",
            onClick: handleIconClick,
          }}
          menuProps={{
            onClose: handleMenuClose,
            anchorEl: anchorEl,
            open: openMenu,
          }}
        >
          <MenuItem
            data-test-id={"alert-box-mark-as-read-option"}
            key={'mark-as-read'}
            disabled={read}
            onClick={() => {
              handleMenuClose();
            }}
          >
            Mark As Read
          </MenuItem>
          <MenuItem
            data-test-id={"alert-box-delete-option"}
            key={'delete'}
            onClick={() => {
              handleMenuClose();
            }}
          >
            Delete
          </MenuItem>
        </IconMenuPopup>
      </Grid>
    </Grid>
  </Box>
  );
}