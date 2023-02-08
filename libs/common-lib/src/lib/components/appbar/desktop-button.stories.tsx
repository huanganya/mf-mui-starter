import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DesktopButton } from './desktop-button';

const Story: ComponentMeta<typeof DesktopButton> = {
  component: DesktopButton,
  title: 'DesktopButton',
};
export default Story;

const Template: ComponentStory<typeof DesktopButton> = (args) => {
  return <DesktopButton {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  primary: 'Elizabett Lim',
  secondary: 'My profile & others',
  testId: 'profile-item',
  renderComponent: <p>Test</p>,
};
