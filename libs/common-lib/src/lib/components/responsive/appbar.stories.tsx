import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MobileTabAppBar } from './appbar';

const Story: ComponentMeta<typeof MobileTabAppBar> = {
  component: MobileTabAppBar,
  title: 'Common-MobileTabAppBar',
};
export default Story;

const Template: ComponentStory<typeof MobileTabAppBar> = (args) => (
  <MobileTabAppBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
