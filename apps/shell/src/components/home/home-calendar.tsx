import { Typography, Grid } from '@mui/material';
import { CalendarButtons } from './calendar-buttons';
import { CalendarItems } from './calendar-items';

export const HomeCalendar = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="title">My Calendar</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body14Medium">
          The events happening in the town. The events happening in the town.
        </Typography>
      </Grid>
      <Grid item>
        <CalendarButtons />
      </Grid>
      <Grid item>
        <CalendarItems />
      </Grid>
    </Grid>
  );
};
