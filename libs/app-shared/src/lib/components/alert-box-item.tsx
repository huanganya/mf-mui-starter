import {useState, ReactNode, MouseEvent} from "react";
import { Circle, MoreVert } from "@mui/icons-material";
import { Stack, Box, Typography, Grid, MenuItem, Button, ButtonProps } from "@mui/material";
import { IconMenuPopup } from '@mf-mui-starter/common-lib';
import dayjs from 'dayjs';

export interface AlertBoxItemType {
  title: string,
  content: React.ReactNode | ReactNode[],
  date: Date;
  read?: boolean;
}

export type AlertBoxItemActionButtonProps = {
  "data-testid"?: string, 
  content: string,
  url: string,
} & Omit<ButtonProps, "onClick">;

export interface AlertBoxItemProps extends AlertBoxItemType {
  actionButtonProps?: AlertBoxItemActionButtonProps;
}

export const AlertBoxItem = ({
  title,
  content,
  date,
  read,
  actionButtonProps,
}: AlertBoxItemProps) => {
  const {"data-testid": dataTestId, content: buttonContent , url, ...buttonProps} = actionButtonProps ?? {};
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
    <Grid container spacing={0} paddingX={0}>
      {!read &&
        <Grid item xs={0.5} md={0.2} alignContent={"flex-end"}>
          <Circle sx={{ fontSize: 10 }} data-testid={"alert-box-item-circle-unread-test-id"}/>
        </Grid>
      }
      <Grid item xs={!read ? 10.5: 11} md={!read ? 11.3 : 11.5}>
        <Stack spacing={1}>
          <Typography variant={'body18Bold'} data-testid={"alert-box-item-title-test-id"}>
            {title}
          </Typography>
          <Typography variant={'body14'} paragraph data-testid={"alert-box-item-content-test-id"}>
            {content}
          </Typography>
          {actionButtonProps &&
            <Button
              {...buttonProps}
              data-testid={"alert-box-action-button-id"}
              onClick={() => {window.open(url, "_blank")}}
              children={buttonContent}
            />
          }
          <Typography variant={'body14'} data-testid={"alert-box-item-date-test-id"}>
            {dayjs(date).format('DD MMM YYYY')}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={1} md={0.5} alignContent={"flex-end"}>
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
            data-test-id={"alert-box-item-mark-as-read-option"}
            key={'mark-as-read'}
            disabled={read}
            onClick={() => {
              handleMenuClose();
            }}
          >
            Mark As Read
          </MenuItem>
          <MenuItem
            data-test-id={"alert-box-item-delete-option"}
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