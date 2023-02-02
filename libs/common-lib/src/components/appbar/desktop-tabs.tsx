import * as React from 'react';
import Box from '@mui/material/Box';
import { Tab, Tabs } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { AnchoredPopover } from '../others/anchored-popover';
import { LinkTab } from '../others/link-tab';

export interface PageTabProp {
  title: string;
  link?: string;
  renderComponent?: () => React.ReactElement;
}
export const DesktopTabs = ({ pageTabs }: { pageTabs: PageTabProp[] }) => {
  const [value, setValue] = React.useState<number>(0);
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & Element) | null
  >(null);
  const handleTabOpen = (event: React.SyntheticEvent, newValue: number) => {
    setAnchorEl(event.currentTarget);
    setValue(newValue);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderTab = (
    tab: {
      renderComponent?: () => React.ReactElement;
      title: string;
      link?: string;
    },
    index: number
  ) => {
    if (tab.renderComponent) {
      return (
        <Tab
          key={index}
          value={index}
          onClick={(event) => {
            handleTabOpen(event, index);
          }}
          onMouseOver={(event) => handleTabOpen(event, index)}
          label={tab.title}
          icon={<ArrowDropDown />}
          iconPosition="end"
        />
      );
    }
    return (
      <LinkTab
        key={index}
        href={tab.link}
        label={tab.title}
        onMouseOver={() => setValue(index)}
      />
    );
  };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <Tabs
        value={value}
        onChange={(event, index) => {
          handleTabOpen(event, index);
        }}
      >
        {pageTabs.map(renderTab)}
      </Tabs>
      {anchorEl && pageTabs[value]?.renderComponent && (
        <AnchoredPopover anchorEl={anchorEl} handleClose={handleClose}>
          {pageTabs[value].renderComponent?.() ?? <></>}
        </AnchoredPopover>
      )}
    </Box>
  );
};
