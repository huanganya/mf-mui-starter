import Typography from '@mui/material/Typography';
import { Avatar, Button, Grid } from '@mui/material';
import { theme } from '@mf-mui-starter/common-lib';

export interface userData {
  userPicture: string;
  userNRIC: string;
  userName: string;
}

export const ProfileCardInfo = (props: { userData: userData }) => {
  const { userData } = props;

  return (
    <Grid item container spacing={2}>
      <Grid item xs={'auto'}>
        {userData.userPicture && (
          <Avatar
            alt={userData.userName}
            src={userData.userPicture}
            sx={{
              width: '50px',
              height: '50px',
            }}
          />
        )}
      </Grid>
      <Grid item container xs={9} direction="column" spacing={1}>
        <Grid item>
          <Typography variant="body14" color={theme.palette.bodyText.light}>
            Welcome Back
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subheader">{userData.userName}</Typography>
        </Grid>
        <Grid item container>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                console.log('View e-ID Card Clicked');
              }}
            >
              View e-ID Card
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                console.log('My Profile Clicked');
              }}
            >
              My Profile
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileCardInfo;
