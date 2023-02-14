import Card from '@mui/material/Card';
import { CardMedia, Divider, Grid } from '@mui/material';
import ProfileCardInfo, { userData } from './profile-card-info';
import ProfileCardShortCuts from './profile-card-shortcuts';

export const ProfileCard = (props: { userData: userData }) => {
  const { userData } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia image={'/assets/images/cards/background.png'}>
        <Grid container p={'15px'} direction="column" spacing={2}>
          <ProfileCardInfo userData={userData} />
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
