import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withFormik } from '@bbbtech/storybook-formik';
import { DirectionType } from './form-field';
import { FormInput, FormInputProps } from './form-input';

const Story: ComponentMeta<typeof FormInput> = {
  component: FormInput,
  decorators: [withFormik],
  title: 'FormInput',
};
export default Story;

const params = {
  label: 'Email',
  name: 'email',
  testId: 'email',
  placeholder: 'Please input email',
  direction: DirectionType.column,
  required: true,
  type: 'email',
};

const formInputParams = {
  formik: {
    initialValues: params,
    validationSchema: null,
  },
};

const Template: ComponentStory<typeof FormInput> = (args) => (
  <FormInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = params;
Primary.parameters = formInputParams;
