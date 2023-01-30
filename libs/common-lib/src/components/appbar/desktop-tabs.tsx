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
  const [value, setValue] = React.useState<PageTabProp>(pageTabs[0]);
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & Element) | null
  >(null);

  const handleChange = (event: React.SyntheticEvent, newValue: PageTabProp) => {
    setAnchorEl(event.currentTarget);
    setValue(newValue);
  };

  const handleTabClick = (
    event: React.SyntheticEvent,
    newValue: PageTabProp
  ) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
      setValue(newValue);
    } else {
      setAnchorEl(null);
    }
  };
  const handleClickAway = () => {
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
          value={tab}
          onClick={(event) => {
            handleTabClick(event, tab);
          }}
          label={tab.title}
          icon={<ArrowDropDown />}
          iconPosition="end"
        />
      );
    }
    return <LinkTab key={index} href={tab.link} label={tab.title} />;
  };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <Tabs value={value} onChange={handleChange}>
        {pageTabs.map(renderTab)}
      </Tabs>
      {anchorEl && value?.renderComponent && (
        <AnchoredPopover anchorEl={anchorEl} handleClickAway={handleClickAway}>
          {value.renderComponent()}
        </AnchoredPopover>
      )}
    </Box>
  );
};
