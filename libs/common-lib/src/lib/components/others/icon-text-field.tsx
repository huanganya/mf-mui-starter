import { TextField, InputAdornment, TextFieldProps } from '@mui/material';

type IconTextFieldProps = {
  iconStart?: React.ReactElement;
  iconEnd?: React.ReactElement;
} & TextFieldProps;

export const IconTextField = ({
  iconStart,
  iconEnd,
  ...props
}: IconTextFieldProps) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...props.InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null,
      }}
    />
  );
};
