import { TextField } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withFormik } from '@bbbtech/storybook-formik';
import { DirectionType, FormField, FormFieldProps } from './form-field';

const Story: ComponentMeta<typeof FormField> = {
  component: FormField,
  title: 'Common-FormField',
};
export default Story;

export const FormFieldWrapper = (props: FormFieldProps) => (
  <>
    <p>Wrapped with Formik</p>
    <FormField {...props} />
  </>
);
FormFieldWrapper.decorators = [withFormik];

const Template: ComponentStory<typeof FormField> = (args) => (
  <FormFieldWrapper {...args} />
);

const args = {
  label: 'User Name',
  name: 'userName',
  testId: 'user-name',
  children: <TextField></TextField>,
  required: true,
};
export const Required = Template.bind({});
Required.args = args;

export const NotRequired = Template.bind({});
NotRequired.args = { ...args, required: false };

export const PositionColumn = Template.bind({});
PositionColumn.args = { ...args, direction: DirectionType.column };
