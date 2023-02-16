import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarListItem } from './avatar-list-item';
import InboxIcon from '@mui/icons-material/InboxOutlined';

const Story: ComponentMeta<typeof AvatarListItem> = {
  component: AvatarListItem,
  title: 'Common-List-AvatarListItem',
};
export default Story;

const Template: ComponentStory<typeof AvatarListItem> = (args) => (
  <AvatarListItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  item: {
    icon: <InboxIcon />,
    primary: 'Elizabett Lim',
    secondary: 'My profile & others',
    testId: 'profile-item',
  },
  index: 1,
};
