import { Grid, InputLabel, Typography, useTheme } from '@mui/material';
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
  const theme = useTheme();

  return (
    <Grid item spacing={1} container direction={direction}>
      <Grid item xs={4}>
        <InputLabel shrink htmlFor={name} data-testid={`label-${testId}`}>
          <Typography variant="body18Bold">
            {label}{' '}
            <Typography display="inline" color={theme.palette.primary.main}>
              {required && '*'}
            </Typography>
          </Typography>
        </InputLabel>
      </Grid>
      <Grid item xs={8}>
        {children}
      </Grid>
    </Grid>
  );
};
