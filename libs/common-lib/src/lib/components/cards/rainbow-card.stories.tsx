import { Typography } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RainbowCard } from './rainbow-card';

const Story: ComponentMeta<typeof RainbowCard> = {
  component: RainbowCard,
  title: 'Common-Cards-RainbowCard',
};
export default Story;

const Template: ComponentStory<typeof RainbowCard> = (args) => (
  <RainbowCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  maxWidth: 300,
  children: <Typography>Content of the rainbow card</Typography>,
};
