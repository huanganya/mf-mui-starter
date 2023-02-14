import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { AlignItemProp, AvatarListItem } from '@mf-mui-starter/common-lib';
import {
  FavoriteBorder,
  LocalAtm,
  QuestionAnswer,
  ShoppingCart,
} from '@mui/icons-material';

export const ProfileCardShortCuts = () => {
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
      icon: <LocalAtm />,
      primary: 'G-FAST',

      onClick: () => {
        console.log('button2');
      },
      testId: 'profile-list-item2',
    },
    {
      icon: <FavoriteBorder />,
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
    <Grid item container direction="column">
      <Grid item>
        <Typography variant={'body16Bold'} id="tableTitle">
          Shortcuts
        </Typography>
      </Grid>
      <Grid item>
        {items.map((item, index) => (
          <AvatarListItem
            item={item}
            index={index}
            sx={{ borderRadius: '5px' }}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default ProfileCardShortCuts;
