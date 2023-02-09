import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  List,
} from '@mui/material';
import {
  AlignItemProp,
  AvatarListItem,
} from '../../../../../libs/common-lib/src/lib/components/others/avatar-list-item';
import {
  FavoriteBorder,
  LocalAtm,
  QuestionAnswer,
  ShoppingCart,
} from '@mui/icons-material';

export interface userData {
  userPicture: string;
  userNRIC: string;
  userName: string;
}

export const ProfileCard = (props: { userData: userData }) => {
  const { userData } = props;
  const items: AlignItemProp[] = [
    {
      icon: <ShoppingCart />,

      primary: 'GEMS',
      onClick: () => {
        window.open(
          'https://www.grassrootsconnect.pa.gov.sg/gems/gemsadminpanel/Default.aspx',
          '_blank',
          'noopener,noreferrer'
        );
      },
      testId: 'profile-list-item1',
    },
    {
      icon: <LocalAtm/>,
      primary: 'G-FAST',

      onClick: () => {
        console.log('button2');
      },
      testId: 'profile-list-item2',
    },
    {
      icon: <FavoriteBorder  />,
      primary: 'My Favorite Reading Materials',

      onClick: () => {
        console.log('button3');
      },
      testId: 'profile-list-item3',
    },
    {
      icon: <QuestionAnswer />,
      primary: 'Submit Feedback',

      onClick: () => {
        console.log('button4');
      },
      testId: 'profile-list-item4',
    },
  ];

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia image={'/assets/images/cards/background.png'}>
        {/* <CardContent> */}
        <Grid container item xs={12}>
          <Grid
            item
            xs={3}
            sx={{ display: 'flex', alignItems: 'right!important' }}
          >
            {userData.userPicture && (
              <Avatar
                alt={userData.userName}
                src={userData.userPicture}
                sx={{
                  width: '50px',
                  height: '50px',
                  marginTop: '15px',
                  marginRight: '10px',
                  marginLeft:"10px"
                }}
              />
            )}
          </Grid>
          <Grid item xs={9}>
            <div
              className="label-style"
              style={{
                fontSize: '15px',
                display: 'flex',
                alignSelf: 'left',
                color: '#7D838B',
                marginBottom: '10px',
                marginTop: '20px',
                // marginLeft: '10px',
              }}
            >
              Welcome Back
            </div>
            <div
              style={{
                textAlign: 'left',
                marginBottom: '20px',
                // marginLeft: '10px',
              }}
            >
              {userData.userName}
            </div>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                <Button
                  style={{
                    display: 'flex',
                    alignSelf: 'left',
                    color: 'black',
                    marginBottom: '10px',
                    border: '1px solid #D1D3D6',
                    fontSize: '11px',
                  }}
                  onClick={() => {
                    console.log('View e-ID Card Clicked');
                  }}
                >
                  View e-ID Card
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  style={{
                    display: 'flex',
                    alignSelf: 'left',
                    color: 'black',
                    marginBottom: '10px',
                    border: '1px solid #D1D3D6',
                    fontSize: '11px',
                  }}
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
        {/* </CardContent> */}
        <Grid
          item
          xs={12}
          className="dividerView"
          sx={{
            marginRight: '15px',
            marginLeft: '15px',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <Divider variant="fullWidth" />
        </Grid>
        <Box>
          <Grid item xs={7} sx={{ display: 'flex', alignItems: 'left' }}>
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: 24,
                marginLeft: '20px',
              }}
              id="tableTitle"
              component="div"
            >
              Shortcuts
            </Typography>
          </Grid>
        </Box>
        <Grid container item>
          <List
            sx={{
              width: '100%',
              // bgcolor: 'background.paper',
              padding: '10px',
            }}
          >
            {items.map((item, index) => (
              <AvatarListItem
                item={item}
                index={index}
                sx={{ borderRadius: '5px' }}
              />
            ))}
          </List>
        </Grid>
      </CardMedia>
    </Card>
  );
};

export default ProfileCard;
