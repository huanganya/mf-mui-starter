import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Tab, Tabs } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { AnchoredPopover } from '../others/anchored-popover';

export const DesktopTabs = ({ pages }: { pages: string[] }) => {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & Element) | null
  >(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setAnchorEl(event.currentTarget);
    setValue(newValue);
  };
  const handleMenuItemClick = (item: any) => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <Tabs value={value} onChange={handleChange}>
        {pages.map((page, index) => (
          <Tab
            value={index}
            label={page}
            icon={<ArrowDropDown />}
            iconPosition="end"
          />
        ))}
      </Tabs>
      {anchorEl && (
        <AnchoredPopover anchorEl={anchorEl}>
          <>
            <MenuItem onClick={() => handleMenuItemClick('Three')}>
              Three
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Four')}>
              Four
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Five')}>
              Five
            </MenuItem>
          </>
        </AnchoredPopover>
      )}
    </Box>
  );
};
