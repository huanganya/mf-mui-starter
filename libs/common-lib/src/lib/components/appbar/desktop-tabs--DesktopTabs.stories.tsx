import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlignItemsList } from '../list/align-itemslist';
import { DesktopTabs } from './desktop-tabs';
import { NavMenuItem } from '../nav/nav-menu-item';
import { Box, Typography } from '@mui/material';
import RuleOutlined from '@mui/icons-material/RuleOutlined';

const Story: ComponentMeta<typeof DesktopTabs> = {
  component: DesktopTabs,
  title: 'Common-Appbar-DesktopTabs',
};
export default Story;

const Template: ComponentStory<typeof DesktopTabs> = (args) => (
  <DesktopTabs {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  pageTabs: [
    { title: 'Home', link: '/' },
    {
      title: 'Remote 1',
      renderComponent: (handleClose: () => void) => (
        <>
          <NavMenuItem
            item={{
              testId: 'remote-1-menu-1',
              title: 'menu item Three',
              href: '/remote/page-three',
            }}
            handleClose={handleClose}
          />
        </>
      ),
    },
    {
      title: 'Remote 2',
      renderComponent: (handleClose: () => void) => (
        <AlignItemsList
          maxWidth={360}
          items={[
            {
              icon: (
                <RuleOutlined
                  sx={{
                    backgroundColor: '#F8ECEE',
                    color: '#BE4651',
                    padding: '10px',
                    borderRadius: '5px',
                  }}
                />
              ),
              primary: 'Brunch this weekend?',
              secondary: "— I'll be in your neighborhood doing errands this…",
              onClick: () => {
                handleClose();
              },
              testId: 'remote2-item1',
            },
          ]}
        />
      ),
    },
    {
      title: 'Remote 3',
      renderComponent: (handleClose: () => void) => (
        <Box padding={'10px'} onClick={handleClose}>
          <Typography>For some message</Typography>
          <Typography>Can add interactive content here</Typography>
        </Box>
      ),
    },
  ],
};
