import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from './login-page';

const Story: ComponentMeta<typeof LoginForm> = {
  component: LoginForm,
  title: 'AppShared-LoginForm',
};
export default Story;

const Template: ComponentStory<typeof LoginForm> = (args) => {
  return <LoginForm {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
