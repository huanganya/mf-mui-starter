import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notifications } from './notification-banner';

const Story: ComponentMeta<typeof Notifications> = {
  component: Notifications,
  title: 'Shell-Notifications',
};
export default Story;

const Template: ComponentStory<typeof Notifications> = (args) => (
  <Notifications />
);

export const Primary = Template.bind({});
Primary.args = {};
