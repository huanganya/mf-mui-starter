import React from "react";
import { Box, IconButton, IconButtonProps, Menu, MenuProps } from "@mui/material";

export interface IconMenuPopupProps {
    icon: React.ReactElement;
    buttonProps: IconButtonProps & {"data-testid": string};
    menuProps: MenuProps;
    children: React.ReactNode[];
}

export const IconMenuPopup = ({
    icon,
    buttonProps,
    menuProps,
    children,
} : IconMenuPopupProps) => {
  return (
    <Box>
      <IconButton
        {...buttonProps}
      >
        {icon}
      </IconButton>
      <Menu
        {...menuProps}
      >
        {children}
      </Menu>
    </Box>
  );
}