import {useState, ReactNode, MouseEvent} from "react";
import { Circle, MoreVert } from "@mui/icons-material";
import { Stack, Box, Typography, Grid, MenuItem} from "@mui/material";
import { IconMenuPopup } from '@mf-mui-starter/common-lib';
import dayjs from 'dayjs';

export interface AlertBoxItemType {
  title: string,
  content: React.ReactNode | ReactNode[],
  date: Date;
  read?: boolean;
}

export interface AlertBoxItemProps extends AlertBoxItemType {
  actionComponent?: ReactNode;
}

export const AlertBoxItem = ({
  title,
  content,
  date,
  read,
  actionComponent,
}: AlertBoxItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  
  const handleIconClick = (event: MouseEvent<HTMLElement>) => {
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
    <Grid container spacing={0} paddingX={0} columns={24}>
      {!read &&
        <Grid item xs={1} sm={1} lg={0.5} alignContent={"flex-end"}>
          <Circle sx={{ fontSize: 10 }} data-testid={"alert-box-item-circle-unread-test-id"}/>
        </Grid>
      }
      <Grid item xs={!read ? 21: 22} sm={!read ? 21: 22} lg={!read ? 22.5: 23}>
        <Stack spacing={1}>
          <Typography variant={'body18Bold'} data-testid={"alert-box-item-title-test-id"}>
            {title}
          </Typography>
          <Typography variant={'body14'} paragraph data-testid={"alert-box-item-content-test-id"}>
            {content}
          </Typography>
          {actionComponent}
          <Typography variant={'body14'} data-testid={"alert-box-item-date-test-id"}>
            {dayjs(date).format('DD MMM YYYY')}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={2} sm={2} lg={1} alignContent={"flex-end"}>
        <IconMenuPopup
          icon = {<MoreVert/>}
          buttonProps={{
            "aria-controls": openMenu ? 'menuPopUp' : undefined,
            "aria-expanded": openMenu ? 'true' : undefined,
            "aria-haspopup": "true",
            "data-testid": "alert-box-item-option-button-test-id",
            onClick: handleIconClick,
          }}
          menuProps={{
            onClose: handleMenuClose,
            anchorEl: anchorEl,
            open: openMenu,
          }}
        >
          <MenuItem
            data-testid={"alert-box-item-mark-as-read-option"}
            key={'mark-as-read'}
            disabled={read}
            onClick={() => {
              handleMenuClose();
            }}
          >
            Mark As Read
          </MenuItem>
          <MenuItem
            data-testid={"alert-box-item-delete-option"}
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