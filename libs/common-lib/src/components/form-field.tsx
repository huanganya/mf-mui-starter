import { Grid, InputLabel } from '@mui/material';
import { FC, ReactElement } from 'react';
export enum DirectionType {
  row = 'row',
  column = 'column',
}
export interface FormFieldProps {
  label: string;
  name: string;
  testId: string;
  children: ReactElement;
  direction?: DirectionType;
  required?: boolean;
}
export const FormField: FC<FormFieldProps> = ({
  label,
  name,
  testId,
  children,
  direction = DirectionType.row,
  required = false,
}) => {
  return (
    <Grid item spacing={1} container direction={direction}>
      <Grid item xs={4}>
        <InputLabel shrink htmlFor={name} data-testid={`label-${testId}`}>
          {label} {required && '*'}
        </InputLabel>
      </Grid>
      <Grid item xs={8}>
        {children}
      </Grid>
    </Grid>
  );
};
