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

export interface AlertBoxItemProps {
    item: AlertBoxItemType,
    onClickMenuItem: () => void,
}

export const AlertBoxItem = ({
    item,
    onClickMenuItem
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
      backgroundColor: !item.read ? '#c4f1ff' : undefined,
      borderRadius: 2,
      p: '5px',
    }}
  >
    <Grid container spacing={0}>
      {!item.read &&
        <Grid xs={0.5}>
          <Circle sx={{ fontSize: 10 }}/>
        </Grid>
      }
      <Grid xs={!item.read ? 10.5 : 11}>
        <Stack spacing={1}>
          <Typography variant={'body18Bold'}>
            {item.title}
          </Typography>
          <Typography variant={'body14'} paragraph>
            {item.content}
          </Typography>
          <Typography variant={'body14'}>
            {dayjs(item.date).format('DD MMM YYYY')}
          </Typography>
        </Stack>
      </Grid>
      <Grid xs={1}>
        <IconMenuPopup
          icon = {<MoreVert/>}
          buttonProps={{
            "aria-controls": openMenu ? 'menuPopUp' : undefined,
            "aria-expanded": openMenu ? 'true' : undefined,
            "aria-haspopup": "true",
            onClick: handleIconClick,
          }}
          menuProps={{
            onClose: handleMenuClose,
            anchorEl: anchorEl,
            open: openMenu,
          }}
        >
          <MenuItem
            key={'mark-as-read'}
            disabled={item.read}
            onClick={() => {
              onClickMenuItem();
              handleMenuClose();
            }}
          >
            Mark As Read
          </MenuItem>
          <MenuItem
            key={'delete'}
            onClick={() => {
              onClickMenuItem();
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