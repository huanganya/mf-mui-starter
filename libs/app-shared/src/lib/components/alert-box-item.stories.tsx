import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlertBoxItem } from './alert-box-item';

const Story: ComponentMeta<typeof AlertBoxItem> = {
  component: AlertBoxItem,
  title: 'AppShared-AlertBoxItem',
};
export default Story;

const Template: ComponentStory<typeof AlertBoxItem> = (args) => {
  return <AlertBoxItem {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: "hello",
  content: "hello content",
  date: new Date(),
  read: false,
};