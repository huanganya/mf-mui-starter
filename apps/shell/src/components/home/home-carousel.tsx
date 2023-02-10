import { IndicatorCarousel } from '@mf-mui-starter/app-shared/lib';
import { Paper, Button, Typography } from '@mui/material';

export const HomeCarousel = () => {
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
    {
      name: 'Random Name #3',
      description: 'This is what you want?!',
    },
  ];
  return (
    <IndicatorCarousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </IndicatorCarousel>
  );
};

function Item(props: { item: { name: string; description: string } }) {
  return (
    <Paper
      sx={{
        textAlign: 'center',
        backgroundColor: '#fafaff',
        borderRadius: '5px',
      }}
    >
      <Typography variant="subheader">{props.item.name}</Typography>
      <Typography>{props.item.description}</Typography>
      <Typography>{props.item.description}</Typography>
      <Typography>{props.item.description}</Typography>
      <Typography>{props.item.description}</Typography>
      <Typography>{props.item.description}</Typography>
      <Typography>{props.item.description}</Typography>
      <Typography>{props.item.description}</Typography>
      <Typography>{props.item.description}</Typography>
      <Typography>{props.item.description}</Typography>
      <Typography>{props.item.description}</Typography>
      <Typography>{props.item.description}</Typography>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
