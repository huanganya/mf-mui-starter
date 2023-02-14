import { ComponentStory, ComponentMeta } from '@storybook/react';
import { renderTab } from './desktop-tabs';

const Story: ComponentMeta<typeof renderTab> = {
  component: renderTab,
  title: 'Common-renderTab',
};
export default Story;

const Template: ComponentStory<typeof renderTab> = (args) => (
  <renderTab {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
