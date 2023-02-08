import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconTextField } from './icon-text-field';

const Story: ComponentMeta<typeof IconTextField> = {
  component: IconTextField,
  title: 'IconTextField',
};
export default Story;

const Template: ComponentStory<typeof IconTextField> = (args) => (
  <IconTextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
