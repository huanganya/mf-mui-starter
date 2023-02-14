import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarListItem } from './avatar-list-item';

const Story: ComponentMeta<typeof AvatarListItem> = {
  component: AvatarListItem,
  title: 'Common-AvatarListItem',
};
export default Story;

const Template: ComponentStory<typeof AvatarListItem> = (args) => (
  <AvatarListItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
