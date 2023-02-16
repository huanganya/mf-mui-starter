import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DesktopButton } from './desktop-button';
import InboxIcon from '@mui/icons-material/InboxOutlined';

const Story: ComponentMeta<typeof DesktopButton> = {
  component: DesktopButton,
  title: 'Common-Appbar-DesktopButton',
};
export default Story;

const Template: ComponentStory<typeof DesktopButton> = (args) => {
  return <DesktopButton {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  item: {
    icon: <InboxIcon />,
    primary: 'Elizabett Lim',
    secondary: 'My profile & others',
    testId: 'profile-item',
    renderComponent: () => <p>Test</p>,
  },
  index: 1,
  sx: { minWidth: '240px' },
};
