import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlertBox } from './alert-box';

const Story: ComponentMeta<typeof AlertBox> = {
  component: AlertBox,
  title: 'AppShared-AlertBox',
};
export default Story;

const Template: ComponentStory<typeof AlertBox> = (args) => {
  return <AlertBox {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  handleClose: () => {
    console.log('clicked');
  },
};
