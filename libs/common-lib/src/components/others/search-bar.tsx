import { SearchOutlined } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { IconTextField } from './icon-text-field';

interface SearchBarProps {
  variantValue?: string | undefined;
  placeholderValue?: string;
}
export const SearchBar = (props: SearchBarProps) => {
  return (
    <Grid container spacing={2} alignItems={'center'} sx={{paddingLeft: '16px'}}>
      <Grid item xs={12} sm={10}>
        <IconTextField
          variantValue={props.variantValue}
          margin="normal"
          placeholder={props.placeholderValue ? props.placeholderValue : "What are you looking for?"}
          fullWidth
          InputProps={ props.variantValue ? {} : { disableUnderline: true }}
          iconStart={<SearchOutlined />}
        />
      </Grid>
      <Grid item xs={12} sm={2} sx={{ display: 'flex' }}>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </Grid>
    </Grid>
  );
};
