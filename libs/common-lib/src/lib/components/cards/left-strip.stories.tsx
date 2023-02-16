import { Badge, Box, Card, Typography } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LeftStrip } from './left-strip';

const Story: ComponentMeta<typeof LeftStrip> = {
  component: LeftStrip,
  title: 'Common-Cards-LeftStrip',
};
export default Story;

const Template: ComponentStory<typeof LeftStrip> = (args) => (
  <Card
    sx={{
      backgroundColor: `#eeeeee`,
      height: '120px',
      width: '240px',
      borderRadius: '10px',
    }}
  >
    <LeftStrip {...args} />
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {
  width: '10px',
};
