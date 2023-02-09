import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DesktopTabs } from './desktop-tabs';

const Story: ComponentMeta<typeof DesktopTabs> = {
  component: DesktopTabs,
  title: 'DesktopTabs',
};
export default Story;

const Template: ComponentStory<typeof DesktopTabs> = (args) => (
  <DesktopTabs {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
