import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormField } from './form-field';

const Story: ComponentMeta<typeof FormField> = {
  component: FormField,
  title: 'FormField',
};
export default Story;

const Template: ComponentStory<typeof FormField> = (args) => (
  <FormField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
