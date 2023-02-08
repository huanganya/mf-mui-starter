import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormInput } from './form-input';

const Story: ComponentMeta<typeof FormInput> = {
  component: FormInput,
  title: 'FormInput',
};
export default Story;

const Template: ComponentStory<typeof FormInput> = (args) => (
  <FormInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
