import { AppBar, Toolbar } from '@mui/material';
import { useScrollEffect } from '../../../hooks/useScrollEffect';
import { DesktopTabs } from './desktop-tabs';

interface StickyAppbarProps {
  tabs: { title: string; anchorId: string }[];
  scrollOffSet: number;
}

export const StickyTabs = ({ tabs, scrollOffSet }: StickyAppbarProps) => {
  const { handleScrollTo } = useScrollEffect(scrollOffSet);

  const pageTabs = tabs.map((item) => ({
    title: item.title,
    onClick: () => handleScrollTo(item.anchorId),
  }));
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <DesktopTabs pageTabs={pageTabs} />
      </Toolbar>
    </AppBar>
  );
};
