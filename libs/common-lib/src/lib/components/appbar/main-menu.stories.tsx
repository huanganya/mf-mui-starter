import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainMenu } from './main-menu';

const Story: ComponentMeta<typeof MainMenu> = {
  component: MainMenu,
  title: 'MainMenu',
};
export default Story;

const Template: ComponentStory<typeof MainMenu> = (args) => (
  <MainMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
