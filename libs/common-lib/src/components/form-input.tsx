import { Grid, InputLabel, TextField } from '@mui/material';
import { FieldValidator, useField } from 'formik';
import { FC, HTMLInputTypeAttribute, ReactElement } from 'react';
import { DirectionType, FormField } from './form-field';

export interface FormInputProps {
  label: string;
  name: string;
  testId: string;
  placeholder?: string;
  direction?: DirectionType;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  validate?: FieldValidator;
  type: HTMLInputTypeAttribute;
}
export const FormInput: FC<FormInputProps> = ({
  label,
  name,
  testId,
  type,
  placeholder,
  onChange,
  required = false,
}) => {
  const [field, meta] = useField({ name });
  console.log(field, meta, meta.error);
  return (
    <FormField
      label={label}
      name={name}
      testId={testId}
      direction={DirectionType.column}
      required={required}
    >
      <TextField
        {...field}
        placeholder={placeholder}
        fullWidth
        data-testid={`text-field-${testId}`}
        name={name}
        variant="outlined"
        onChange={(event): void => {
          field.onChange(event);
          onChange?.(event);
        }}
        type={type}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
        required
      />
    </FormField>
  );
};
