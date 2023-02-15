import { CardMedia, Divider, Grid, Card } from '@mui/material';
import ProfileCardInfo from './profile-card-info';
import ProfileCardShortCuts from './profile-card-shortcuts';

export const ProfileCard = () => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia image={'/assets/images/cards/background.png'}>
        <Grid container p={'15px'} direction="column" spacing={2}>
          <ProfileCardInfo />
          <Grid item>
            <Divider variant="fullWidth" />
          </Grid>
          <ProfileCardShortCuts />
        </Grid>
      </CardMedia>
    </Card>
  );
};

export default ProfileCard;
