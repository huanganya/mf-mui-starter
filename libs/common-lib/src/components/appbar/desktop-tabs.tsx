import * as React from 'react';
import Box from '@mui/material/Box';
import { Tab, Tabs } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { AnchoredPopover } from '../others/anchored-popover';
import { LinkTab } from '../others/link-tab';

export interface PageTabProp {
  title: string;
  link?: string;
  icon?: React.ReactElement;
  renderComponent?: (handleClose: () => void) => React.ReactElement;
  popoverFullWidth?: boolean;
  alignment?: 'left' | 'right';
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

  const renderTab = (tab: PageTabProp, index: number) => {
    if (tab.renderComponent) {
      const onClick = (event: React.SyntheticEvent): void => {
        handleTabOpen(event, index);
      };
      return (
        <Tab
          key={index}
          value={index}
          onClick={onClick}
          onMouseOver={onClick}
          label={tab.title}
          icon={tab.icon ?? <ArrowDropDown />}
          iconPosition={tab.icon ? 'top' : 'end'}
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
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
      }}
    >
      <Tabs
        value={value}
        onChange={(event, index) => {
          handleTabOpen(event, index);
        }}
      >
        {pageTabs.map(renderTab)}
      </Tabs>
      <Box>
        {anchorEl && pageTabs[value].renderComponent && (
          <AnchoredPopover
            anchorEl={anchorEl}
            handleClose={handleClose}
            popoverFullWidth={pageTabs[value].popoverFullWidth}
            alignment={pageTabs[value].alignment ?? 'left'}
          >
            {pageTabs[value].renderComponent?.(handleClose)}
          </AnchoredPopover>
        )}
      </Box>
    </Box>
  );
};
