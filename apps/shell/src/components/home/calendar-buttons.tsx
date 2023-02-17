import React from 'react';
import { Grid, Button, TextField, TextFieldProps } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizedDatePicker } from '@mf-mui-starter/common-lib';

export const CalendarButtons = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));

  return (
    <Grid container justifyContent={'space-between'}>
      <Grid item>
        <Button data-testid={'today-button'}>Today</Button>
        <LocalizedDatePicker
          views={['year', 'month']}
          minDate={dayjs(new Date())}
          value={value}
          onChange={(newValue: React.SetStateAction<dayjs.Dayjs | null>) => {
            setValue(newValue);
          }}
          renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
            <TextField {...params} helperText={null} />
          )}
        />
      </Grid>
      <Grid item>
        <Button>download</Button>
      </Grid>
    </Grid>
  );
};
