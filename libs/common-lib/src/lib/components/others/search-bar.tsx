import { SearchOutlined } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { IconTextField } from './icon-text-field';

export const SearchBar = () => {
  return (
    <Grid container spacing={2} alignItems={'center'}>
      <Grid item xs>
        <IconTextField
          variant="standard"
          margin="normal"
          placeholder="What are you looking for?"
          fullWidth
          InputProps={{ disableUnderline: true }}
          iconStart={<SearchOutlined />}
        />
      </Grid>
      <Grid item xs="auto">
        <Button variant="contained" type="submit">
          Search
        </Button>
      </Grid>
    </Grid>
  );
};
