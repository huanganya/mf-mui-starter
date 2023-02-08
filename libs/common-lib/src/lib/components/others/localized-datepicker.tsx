import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BaseDatePickerProps } from '@mui/x-date-pickers/DatePicker/shared';

export const LocalizedDatePicker = <TInputDate, TDate = TInputDate>(
  props: BaseDatePickerProps<TInputDate, TDate>
) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker {...props} />
    </LocalizationProvider>
  );
};
