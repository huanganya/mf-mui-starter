import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavMenuItem } from './nav-menu-item';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { theme } from '../../../theme/theme-provider';

const Story: ComponentMeta<typeof NavMenuItem> = {
  component: NavMenuItem,
  title: 'Common-Nav-NavMenuItem',
};
export default Story;

const Template: ComponentStory<typeof NavMenuItem> = (args) => (
  <NavMenuItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  item: {
    leftIcon: <ShoppingCartIcon />,
    testId: 'remote-1-menu-1',
    title: 'menu item Three',
    href: '/remote/page-three',
  },
  handleClose: () => {
    console.log('handleClose');
  },
};

export const PassWithSx = Template.bind({});
PassWithSx.args = {
  item: {
    leftIcon: <ShoppingCartIcon />,
    testId: 'remote-1-menu-1',
    title: 'menu item Three',
    href: '/remote/page-three',
  },
  handleClose: () => {
    console.log('handleClose');
  },
  sx: { color: theme.palette.secondary.main, fontWeight: 'Bold' },
};
