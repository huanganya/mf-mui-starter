import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from './app';

const Story: ComponentMeta<typeof App> = {
  component: App,
  title: 'Shell-App',
};
export default Story;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Primary = Template.bind({});
Primary.args = {};
