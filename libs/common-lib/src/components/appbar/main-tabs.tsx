import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Tab, Tabs } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { TabPopover } from './tab-popover';

export const MainTabs = ({ pages }: { pages: string[] }) => {
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
    <>
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
        <TabPopover anchorEl={anchorEl}>
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
        </TabPopover>
      )}
    </>
  );
};
