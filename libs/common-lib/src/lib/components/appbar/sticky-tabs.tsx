import { AppBar, Container, SxProps, Theme, Toolbar } from '@mui/material';
import { useScrollEffect } from '../../../hooks/useScrollEffect';
import { DesktopTabs } from './desktop-tabs';

interface StickyAppbarProps {
  tabs: { title: string; anchorId?: string; onClick?: () => void }[];
  scrollOffSet?: number;
  sx?: SxProps<Theme>;
}

export const StickyTabs = ({ tabs, scrollOffSet, sx }: StickyAppbarProps) => {
  const { handleScrollTo } = useScrollEffect(scrollOffSet ?? 0);

  const pageTabs = tabs.map((item) => ({
    title: item.title,
    onClick: () => {
      item.anchorId && handleScrollTo(item.anchorId);
      item.onClick?.();
    },
  }));
  return (
    <>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{
          position: 'sticky',
          ...sx,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            borderbottom: 1,
          }}
        >
          <Container>
            <DesktopTabs pageTabs={pageTabs} />
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
