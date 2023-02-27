import { TextField, InputAdornment, TextFieldProps } from '@mui/material';

type IconTextFieldProps = {
  iconStart?: React.ReactElement;
  iconEnd?: React.ReactElement;
  variantValue?: string;
} & TextFieldProps;

export const IconTextField = ({
  iconStart,
  iconEnd,
  variantValue,
  ...props
}: IconTextFieldProps) => {
  if (variantValue){
    return (
      <TextField
        {...props}
        variant={"outlined"}
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
  }else{
    return (
      <TextField
        {...props}
        variant={"standard"}
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
  }
  
};
