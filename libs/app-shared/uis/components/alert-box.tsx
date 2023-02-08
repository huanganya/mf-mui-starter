import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ToggleButtons, ToggleButtonsProp } from '@mf-mui-starter/common-lib';
import { useNavigate } from 'react-router';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

export const AlertBox = ({ handleClose }: { handleClose: () => void }) => {
  const options: ToggleButtonsProp[] = [
    { value: 'public', label: 'Public Alerts', badge: 2 },
    { value: 'private', label: 'Private Reminders' },
  ];
  const navigate = useNavigate();
  const [value, setValue] = useState(options[0].value);
  return (
    <Box sx={{ minWidth: '480px', padding: '15px' }}>
      <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent={'space-between'}>
          <Typography variant="subheader">Alerts</Typography>
          <Box
            sx={{ display: 'flex', alignItems: 'center' }}
            onClick={() => {
              navigate('/alerts');
              handleClose();
            }}
          >
            <Typography>View All</Typography>
            <ArrowForwardIcon />
          </Box>
        </Grid>
        <Grid item>
          <ToggleButtons
            options={options}
            onClick={(value: string) => {
              setValue(value);
            }}
          />
        </Grid>
        <Grid item>
          <Typography>This is the content of {value}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
