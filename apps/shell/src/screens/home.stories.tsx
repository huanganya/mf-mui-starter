import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Home } from './home';

const Story: ComponentMeta<typeof Home> = {
  component: Home,
  title: 'Shell-Home',
};
export default Story;

const Template: ComponentStory<typeof Home> = (args) => <Home />;

export const Primary = Template.bind({});
Primary.args = {};
