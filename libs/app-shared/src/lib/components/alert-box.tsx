import { Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ToggleButtons, ToggleButtonsProp } from '@mf-mui-starter/common-lib';
import { useNavigate } from 'react-router';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { AlertBoxItem } from './alert-box-item';
import { AlertBoxData, AlertBoxOptions } from '../../constants/alert-box-items';

export const AlertBox = ({ handleClose }: { handleClose: () => void }) => {
  const [value, setValue] = useState(AlertBoxOptions[0].value);

  const selectedData = AlertBoxData[value] ?? [];
  const processedOptions: ToggleButtonsProp[] = AlertBoxOptions.map(opt => {
    const badgeNum = (AlertBoxData[opt.value] ?? []).filter(el => !el.read).length;
    return {
      ...opt,
      badge: badgeNum !== 0 ? badgeNum : undefined,
    } 
  })
  
  const navigate = useNavigate();
  
  return (
    <Box sx={{ width:'480px' , padding: '15px' }}>
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
            options={processedOptions}
            onClick={(value: string) => {
              setValue(value);
            }}
          />
        </Grid>
        <Grid item>
          <Stack  
            spacing={1}
            divider={<Divider flexItem />}
          >
            {selectedData.map((item) => {
              return (
                <AlertBoxItem
                  {...item}
                  actionComponent={
                    value !== "announcements" 
                    ? (
                      <Button
                        variant={"contained"}
                        color={"primary"}
                        size={"small"}
                        sx={{
                          minWidth: "100px",
                          maxWidth: "120px"
                        }}
                        onClick={() => {}}
                      >
                        Go to this page
                      </Button>
                    ) : undefined
                  }
                />
              ); 
            })}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
