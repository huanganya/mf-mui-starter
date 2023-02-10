import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NxWelcome } from './nx-welcome';

const Story: ComponentMeta<typeof NxWelcome> = {
  component: NxWelcome,
  title: 'NxWelcome',
};
export default Story;

const Template: ComponentStory<typeof NxWelcome> = (args) => (
  <NxWelcome {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
