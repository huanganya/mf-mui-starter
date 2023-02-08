import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainAppBar } from './main-appbar';

const Story: ComponentMeta<typeof MainAppBar> = {
  component: MainAppBar,
  title: 'MainAppBar',
};
export default Story;

const Template: ComponentStory<typeof MainAppBar> = (args) => (
  <MainAppBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
